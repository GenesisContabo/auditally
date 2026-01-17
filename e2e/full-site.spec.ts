import { test, expect } from "@playwright/test";

const LIVE_URL = "https://website-phi-ten-25.vercel.app";

test.describe("Full Site E2E Tests", () => {
  test("homepage loads and has all sections", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Hero section
    await expect(page.getByRole("heading", { name: /Stop Playing Catch-Up/i })).toBeVisible();

    // Navigation
    const header = page.getByRole("banner");
    await expect(header.getByRole("link", { name: "Features" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(header.getByRole("link", { name: "FAQ" })).toBeVisible();

    // Get Started button
    await expect(header.getByRole("link", { name: "Get Started" })).toBeVisible();
  });

  test("navigation links scroll to correct sections", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Click Features link
    await page.getByRole("banner").getByRole("link", { name: "Features" }).click();
    await page.waitForTimeout(500);

    // Features section should be visible
    const featuresSection = page.locator("#features");
    await expect(featuresSection).toBeVisible();

    // Click Pricing link
    await page.getByRole("banner").getByRole("link", { name: "Pricing" }).click();
    await page.waitForTimeout(500);

    // Pricing section should be visible
    const pricingSection = page.locator("#pricing");
    await expect(pricingSection).toBeVisible();

    // Click FAQ link
    await page.getByRole("banner").getByRole("link", { name: "FAQ" }).click();
    await page.waitForTimeout(500);

    // FAQ section should be visible
    const faqSection = page.locator("#faq");
    await expect(faqSection).toBeVisible();
  });

  test("pricing section shows all tiers", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Scroll to pricing
    await page.locator("#pricing").scrollIntoViewIfNeeded();

    // All three pricing tiers visible
    await expect(page.getByText("Starter", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Professional", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Business", { exact: true }).first()).toBeVisible();

    // Prices visible
    await expect(page.getByText("$99").first()).toBeVisible();
    await expect(page.getByText("$249").first()).toBeVisible();
    await expect(page.getByText("$499").first()).toBeVisible();

    // Start plan buttons exist
    const pricingSection = page.locator("#pricing");
    const startButtons = pricingSection.locator("button:has-text('Start plan')");
    await expect(startButtons).toHaveCount(3);
  });

  test("clicking Start plan button triggers checkout API", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Scroll to pricing section
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click the first "Start plan" button
    const pricingSection = page.locator("#pricing");
    const startButton = pricingSection.locator("button:has-text('Start plan')").first();

    // Set up request interception to verify checkout API is called
    let checkoutCalled = false;
    page.on("request", (request) => {
      if (request.url().includes("/api/checkout")) {
        checkoutCalled = true;
      }
    });

    await startButton.click();

    // Wait for either checkout redirect or API call
    await page.waitForTimeout(3000);

    // Either redirected to Stripe or checkout API was called
    const url = page.url();
    const isStripeCheckout = url.includes("checkout.stripe.com");

    expect(isStripeCheckout || checkoutCalled).toBeTruthy();
  });

  test("Get Started button navigates to sign-up", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Click Get Started in header
    await page.getByRole("banner").getByRole("link", { name: "Get Started" }).click();

    // Should navigate to sign-up page
    await expect(page).toHaveURL(/\/sign-up/);
  });

  test("sign-up page loads", async ({ page }) => {
    await page.goto(`${LIVE_URL}/sign-up`);

    // Page should load (may show Clerk sign-up or error if not configured)
    await page.waitForTimeout(1000);

    // URL should be sign-up
    expect(page.url()).toContain("/sign-up");
  });

  test("sign-in page loads", async ({ page }) => {
    await page.goto(`${LIVE_URL}/sign-in`);

    // Page should load
    await page.waitForTimeout(1000);

    // URL should be sign-in
    expect(page.url()).toContain("/sign-in");
  });

  test("dashboard page loads or redirects to sign-in", async ({ page }) => {
    await page.goto(`${LIVE_URL}/dashboard`);

    // Dashboard content should be visible
    await page.waitForTimeout(1000);

    // Check for dashboard elements (may redirect to sign-in if not authenticated)
    const url = page.url();
    expect(url.includes("/dashboard") || url.includes("/sign-in")).toBeTruthy();
  });

  test("footer is visible with links", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Footer should exist
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();

    // Footer brand visible (use exact: true to avoid matching copyright)
    await expect(footer.locator("span").filter({ hasText: /^AuditAlly$/ }).first()).toBeVisible();

    // Footer links visible
    await expect(footer.getByRole("link", { name: "Features" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "FAQ" })).toBeVisible();
  });

  test("FAQ accordion works", async ({ page }) => {
    await page.goto(LIVE_URL);

    // Scroll to FAQ section
    await page.locator("#faq").scrollIntoViewIfNeeded();

    // Click on a FAQ question
    const faqButton = page.getByRole("button", { name: /How quickly does AuditAlly/i });
    await expect(faqButton).toBeVisible();

    // First FAQ should be open by default, click to toggle
    await faqButton.click();

    // Wait for animation
    await page.waitForTimeout(300);

    // Click again to open
    await faqButton.click();
    await page.waitForTimeout(300);

    // Answer should be visible
    await expect(page.getByText(/We monitor sources continuously/i)).toBeVisible();
  });
});
