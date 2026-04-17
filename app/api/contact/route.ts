import { NextResponse } from "next/server";

import { submitContactRequest } from "@/lib/contact/service";
import type { ContactSubmissionInput } from "@/lib/contact/types";

export const runtime = "nodejs";

function getSourceIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  let body: ContactSubmissionInput;

  try {
    body = (await request.json()) as ContactSubmissionInput;
  } catch {
    return NextResponse.json(
      {
        message: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  const result = await submitContactRequest({
    payload: body,
    sourceIp: getSourceIp(request),
  });

  return NextResponse.json(
    {
      message: result.message,
      ...(result.ok ? { submissionId: result.submission.id } : {}),
    },
    { status: result.status },
  );
}
