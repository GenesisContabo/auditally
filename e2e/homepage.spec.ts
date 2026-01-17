import { test, expect } from "@playwright/test";

test("homepage shows hero, nav links, and footer brand", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Stop Playing Catch-Up/i }),
  ).toBeVisible();

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Features" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Pricing" })).toBeVisible();
  await expect(header.getByRole("link", { name: "About" })).toBeVisible();

  const footer = page.getByRole("contentinfo");
  await expect(footer).toContainText("AuditAlly");
});
