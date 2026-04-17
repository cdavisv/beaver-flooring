import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const criticalRoutes = [
  "/",
  "/about",
  "/about/team",
  "/services",
  "/services/emergency-plumbing",
  "/faq",
  "/contact",
  "/testimonials-case-studies",
];

for (const path of criticalRoutes) {
  test(`has no critical accessibility violations on ${path}`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(page.getByRole("main")).toBeVisible();

    const results = await new AxeBuilder({ page })
      .exclude("iframe")
      .disableRules(["color-contrast"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
