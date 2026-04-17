import { mkdir, appendFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { consumeRateLimit } from "@/lib/contact/rate-limit";
import type {
  ContactPriority,
  ContactServiceResult,
  ContactSubmission,
  ContactSubmissionInput,
} from "@/lib/contact/types";

const REQUIRED_FIELDS = [
  "name",
  "phone",
  "email",
  "location",
  "serviceType",
  "message",
] satisfies (keyof ContactSubmissionInput)[];

const PHONE_PATTERN = /^[0-9+().\-\s]{10,25}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getArchivePath() {
  return (
    process.env.CONTACT_ARCHIVE_PATH ||
    path.join(os.tmpdir(), "beaver-flooring-contact-submissions.jsonl")
  );
}

function getRateLimitMax() {
  return Number.parseInt(process.env.CONTACT_RATE_LIMIT_MAX ?? "5", 10);
}

function getRateLimitWindowMs() {
  return Number.parseInt(
    process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? String(15 * 60 * 1000),
    10,
  );
}

function clean(value?: string) {
  return value?.trim() ?? "";
}

function normalizePriority(priority?: string): ContactPriority {
  return priority === "urgent" ? "urgent" : "standard";
}

function createSubmissionId() {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getResponseMessage(priority: ContactPriority) {
  return priority === "urgent"
    ? "Your urgent request was submitted. If the issue is active, please call us now so we can start triage immediately."
    : "Your request was submitted. We will follow up with the next step and expected timing.";
}

function validatePayload(input: ContactSubmissionInput) {
  const missingFields = REQUIRED_FIELDS.filter((field) => !clean(input[field]));

  if (missingFields.length > 0) {
    return {
      ok: false as const,
      status: 400 as const,
      message: `Please complete the required fields: ${missingFields.join(", ")}.`,
    };
  }

  const email = clean(input.email);
  if (!EMAIL_PATTERN.test(email)) {
    return {
      ok: false as const,
      status: 400 as const,
      message: "Please enter a valid email address.",
    };
  }

  const phone = clean(input.phone);
  if (!PHONE_PATTERN.test(phone)) {
    return {
      ok: false as const,
      status: 400 as const,
      message: "Please enter a valid phone number.",
    };
  }

  const message = clean(input.message);
  if (message.length < 10) {
    return {
      ok: false as const,
      status: 400 as const,
      message: "Please include a few more details so the team can triage your request.",
    };
  }

  if (clean(input.company)) {
    return {
      ok: false as const,
      status: 400 as const,
      message: "We could not validate this submission. Please call instead.",
    };
  }

  return {
    ok: true as const,
    value: {
      name: clean(input.name),
      phone,
      email,
      location: clean(input.location),
      serviceType: clean(input.serviceType),
      callbackTime: clean(input.callbackTime) || null,
      message,
      priority: normalizePriority(input.priority),
    },
  };
}

async function archiveSubmission(submission: ContactSubmission) {
  const archivePath = getArchivePath();
  await mkdir(path.dirname(archivePath), { recursive: true });
  await appendFile(archivePath, `${JSON.stringify(submission)}\n`, "utf8");
}

async function deliverWebhook(submission: ContactSubmission) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_TOKEN
        ? {
            Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`,
          }
        : {}),
    },
    body: JSON.stringify({
      type: "contact_submission",
      submission,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }
}

export async function submitContactRequest(args: {
  payload: ContactSubmissionInput;
  sourceIp: string;
}) : Promise<ContactServiceResult> {
  const validation = validatePayload(args.payload);
  if (!validation.ok) {
    return validation;
  }

  if (
    !consumeRateLimit(
      args.sourceIp,
      Math.max(getRateLimitMax(), 1),
      Math.max(getRateLimitWindowMs(), 1000),
    )
  ) {
    return {
      ok: false,
      status: 429,
      message:
        "Too many requests from this location. Please wait a few minutes or call the office directly.",
    };
  }

  const submission: ContactSubmission = {
    id: createSubmissionId(),
    submittedAt: new Date().toISOString(),
    sourceIp: args.sourceIp,
    ...validation.value,
  };

  try {
    await archiveSubmission(submission);
  } catch {
    return {
      ok: false,
      status: 500,
      message:
        "We could not save your request at this time. Please call the office directly.",
    };
  }

  try {
    await deliverWebhook(submission);
  } catch {
    return {
      ok: false,
      status: 502,
      message:
        "Your request was saved, but the notification handoff did not complete. Please call the office if the issue is urgent.",
    };
  }

  return {
    ok: true,
    status: 200,
    submission,
    message: getResponseMessage(submission.priority),
  };
}
