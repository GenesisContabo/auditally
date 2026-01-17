import { test, expect } from "@playwright/test";

test("pricing page shows tiers and prices", async ({ page }) => {
  await page.goto("/pricing");

  const pricingSection = page.locator("section#pricing");
  const tiers = ["Starter", "Professional", "Business"];
  for (const tier of tiers) {
    await expect(pricingSection.getByText(tier, { exact: true })).toBeVisible();
  }

  await expect(pricingSection.getByText("$99")).toBeVisible();
  await expect(pricingSection.getByText("$249")).toBeVisible();
  await expect(pricingSection.getByText("$499")).toBeVisible();
});
