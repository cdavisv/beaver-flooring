/** @jest-environment node */

import { POST } from "@/app/api/contact/route";
import { resetRateLimitStore } from "@/lib/contact/rate-limit";

beforeEach(() => {
  resetRateLimitStore();
});

function createRequest(
  body: Record<string, string>,
  headers: Record<string, string> = {},
) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  it("rejects incomplete submissions", async () => {
    const response = await POST(
      createRequest({
        name: "Alex",
        phone: "",
        email: "alex@example.com",
        location: "Beaverton",
        serviceType: "Emergency plumbing",
        message: "",
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      message: expect.stringContaining("phone, message"),
    });
  });

  it("accepts valid urgent submissions", async () => {
    const response = await POST(
      createRequest({
        name: "Alex",
        phone: "503-555-0100",
        email: "alex@example.com",
        location: "Beaverton",
        serviceType: "Emergency plumbing",
        message: "Burst pipe near water heater",
        priority: "urgent",
      }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      message: expect.stringContaining("urgent request"),
      submissionId: expect.any(String),
    });
  });

  it("returns 429 when the rate limit is exceeded", async () => {
    process.env.CONTACT_RATE_LIMIT_MAX = "1";

    const first = await POST(
      createRequest(
        {
          name: "Alex",
          phone: "503-555-0100",
          email: "alex@example.com",
          location: "Beaverton",
          serviceType: "Emergency plumbing",
          message: "Burst pipe near water heater",
          priority: "urgent",
        },
        { "x-forwarded-for": "198.51.100.9" },
      ),
    );

    const second = await POST(
      createRequest(
        {
          name: "Alex",
          phone: "503-555-0100",
          email: "alex@example.com",
          location: "Beaverton",
          serviceType: "Emergency plumbing",
          message: "Burst pipe near water heater",
          priority: "urgent",
        },
        { "x-forwarded-for": "198.51.100.9" },
      ),
    );

    expect(first.status).toBe(200);
    expect(second.status).toBe(429);
    await expect(second.json()).resolves.toMatchObject({
      message: expect.stringContaining("Too many requests"),
    });
  });

  it("rejects invalid JSON payloads", async () => {
    const response = await POST(
      new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "{",
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      message: "Invalid JSON payload.",
    });
  });
});
