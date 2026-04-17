/** @jest-environment node */

import { POST } from "@/app/api/contact/route";

function createRequest(body: Record<string, string>) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    });
  });
});
