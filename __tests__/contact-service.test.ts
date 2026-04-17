/** @jest-environment node */

import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { resetRateLimitStore } from "@/lib/contact/rate-limit";
import { submitContactRequest } from "@/lib/contact/service";

const validPayload = {
  name: "Alex Carter",
  phone: "503-555-0100",
  email: "alex@example.com",
  location: "Beaverton",
  serviceType: "Emergency plumbing",
  message: "Burst pipe near water heater in the garage.",
  priority: "urgent",
};

describe("submitContactRequest", () => {
  let tempDir: string;
  let archivePath: string;

  beforeEach(async () => {
    resetRateLimitStore();
    tempDir = await mkdtemp(path.join(os.tmpdir(), "beaver-flooring-tests-"));
    archivePath = path.join(tempDir, "contact-submissions.jsonl");
    process.env.CONTACT_ARCHIVE_PATH = archivePath;
    delete process.env.CONTACT_WEBHOOK_URL;
    delete process.env.CONTACT_WEBHOOK_TOKEN;
    process.env.CONTACT_RATE_LIMIT_MAX = "5";
    process.env.CONTACT_RATE_LIMIT_WINDOW_MS = "900000";
  });

  afterEach(async () => {
    delete process.env.CONTACT_ARCHIVE_PATH;
    delete process.env.CONTACT_WEBHOOK_URL;
    delete process.env.CONTACT_WEBHOOK_TOKEN;
    delete process.env.CONTACT_RATE_LIMIT_MAX;
    delete process.env.CONTACT_RATE_LIMIT_WINDOW_MS;
    await rm(tempDir, { recursive: true, force: true });
  });

  it("archives valid submissions", async () => {
    const result = await submitContactRequest({
      payload: validPayload,
      sourceIp: "203.0.113.10",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) {
      throw new Error("expected success");
    }

    const archive = await readFile(archivePath, "utf8");
    expect(archive).toContain('"serviceType":"Emergency plumbing"');
    expect(result.submission.priority).toBe("urgent");
  });

  it("rejects invalid email addresses", async () => {
    const result = await submitContactRequest({
      payload: {
        ...validPayload,
        email: "invalid-email",
      },
      sourceIp: "203.0.113.10",
    });

    expect(result).toMatchObject({
      ok: false,
      status: 400,
      message: "Please enter a valid email address.",
    });
  });

  it("rejects submissions that fill the honeypot field", async () => {
    const result = await submitContactRequest({
      payload: {
        ...validPayload,
        company: "Spam Lead Co",
      },
      sourceIp: "203.0.113.10",
    });

    expect(result).toMatchObject({
      ok: false,
      status: 400,
      message: "We could not validate this submission. Please call instead.",
    });
  });

  it("rate limits repeated requests from the same source", async () => {
    process.env.CONTACT_RATE_LIMIT_MAX = "1";

    const first = await submitContactRequest({
      payload: validPayload,
      sourceIp: "203.0.113.10",
    });
    const second = await submitContactRequest({
      payload: validPayload,
      sourceIp: "203.0.113.10",
    });

    expect(first.ok).toBe(true);
    expect(second).toMatchObject({
      ok: false,
      status: 429,
    });
  });

  it("forwards submissions to an optional webhook", async () => {
    process.env.CONTACT_WEBHOOK_URL = "https://example.com/contact-webhook";
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockResolvedValue(new Response(null, { status: 202 }));

    const result = await submitContactRequest({
      payload: validPayload,
      sourceIp: "203.0.113.10",
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.com/contact-webhook",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
      }),
    );

    fetchMock.mockRestore();
  });

  it("returns 502 when webhook delivery fails after archiving", async () => {
    process.env.CONTACT_WEBHOOK_URL = "https://example.com/contact-webhook";
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockResolvedValue(new Response(null, { status: 500 }));

    const result = await submitContactRequest({
      payload: validPayload,
      sourceIp: "203.0.113.10",
    });

    expect(result).toMatchObject({
      ok: false,
      status: 502,
    });

    const archive = await readFile(archivePath, "utf8");
    expect(archive).toContain('"email":"alex@example.com"');

    fetchMock.mockRestore();
  });
});
