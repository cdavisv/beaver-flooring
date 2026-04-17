import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

const archivePath = ".tmp/contact-e2e.jsonl";

test("submits an urgent contact request end-to-end", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Name *").fill("Alex Carter");
  await page.getByLabel("Phone *").fill("503-555-0100");
  await page.getByLabel("Email *").fill("alex@example.com");
  await page.getByLabel("Location *").fill("Beaverton");
  await page.getByLabel("Service type *").fill("Emergency plumbing");
  await page
    .getByLabel("Message *")
    .fill("Burst pipe near the water heater and water is spreading.");

  await page.getByRole("button", { name: "Submit request" }).click();

  await expect(
    page.getByText("Your urgent request was submitted.", { exact: false }),
  ).toBeVisible();

  const archive = await readFile(archivePath, "utf8");
  expect(archive).toContain('"priority":"urgent"');
  expect(archive).toContain('"serviceType":"Emergency plumbing"');
});

test("keeps the emergency contact path visible on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact");

  await expect(
    page.getByRole("link", { name: "Call emergency line" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("form", { name: "Urgent contact request form" }),
  ).toBeVisible();
});
