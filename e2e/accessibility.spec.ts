import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/contact"]) {
  test(`has no critical accessibility violations on ${path}`, async ({
    page,
  }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page })
      .exclude("iframe")
      .disableRules(["color-contrast"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
