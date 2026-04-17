import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  serviceType?: string;
  callbackTime?: string;
  message?: string;
  priority?: string;
};

const requiredFields: (keyof ContactPayload)[] = [
  "name",
  "phone",
  "email",
  "location",
  "serviceType",
  "message",
];

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const missingFields = requiredFields.filter((field) => !body[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        message: `Please complete the required fields: ${missingFields.join(", ")}.`,
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      body.priority === "urgent"
        ? "Your urgent request was submitted. If the issue is active, please call us now so we can start triage immediately."
        : "Your request was submitted. We will follow up with the next step and expected timing.",
  });
}
