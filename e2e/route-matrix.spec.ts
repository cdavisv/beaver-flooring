import { expect, test } from "@playwright/test";

const requiredPages = [
  {
    path: "/",
    heading: /Professional plumbing help with fast emergency response/i,
  },
  {
    path: "/about",
    heading: /service-first plumbing company/i,
  },
  {
    path: "/about/team",
    heading: /Experienced service leads/i,
  },
  {
    path: "/services",
    heading:
      /Residential, commercial, drain, water heater, and emergency plumbing services/i,
  },
  {
    path: "/faq",
    heading: /Answers about estimates, timelines/i,
  },
  {
    path: "/contact",
    heading: /Reach Beaver Flooring by phone or form/i,
  },
  {
    path: "/privacy-policy",
    heading: /How Beaver Flooring handles website inquiries/i,
  },
  {
    path: "/terms-of-service",
    heading: /Website use terms and service inquiry expectations/i,
  },
  {
    path: "/testimonials-case-studies",
    heading: /Proof that combines local reviews/i,
  },
];

test.describe("route matrix", () => {
  for (const pageConfig of requiredPages) {
    test(`renders ${pageConfig.path} with a page-specific heading and CTA`, async ({
      page,
    }) => {
      await page.goto(pageConfig.path);

      await expect(page.getByRole("heading", { level: 1 })).toContainText(
        pageConfig.heading,
      );
      await expect(
        page
          .getByRole("link", { name: /call now|request estimate|contact/i })
          .first(),
      ).toBeVisible();
    });
  }

  test("supports keyboard access to the mobile menu and primary navigation", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Menu" }).focus();
    await page.keyboard.press("Enter");

    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Home" })).toBeFocused();
  });

  test("keeps internal linking active between service and guide detail pages", async ({
    page,
  }) => {
    await page.goto("/services/emergency-plumbing");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /When plumbing damage is active/i,
      }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Read the guide" }).click();

    await expect(page).toHaveURL(/\/guides\/pro-vs-diy$/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Professional Plumber vs DIY: When To Call/i,
      }),
    ).toBeVisible();
  });
});
