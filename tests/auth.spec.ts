import { test, expect } from "@playwright/test";

test.describe("Authentication Flows (E2E)", () => {
  test("should load the landing page and navigate to login", async ({ page }) => {
    // Navigate to local app server
    await page.goto("/");

    // Verify Title
    await expect(page).toHaveTitle(/Autonique/);

    // Verify presence of Logo
    const logo = page.locator("text=Autonique");
    await expect(logo).toBeVisible();
  });

  test("should successfully login with credentials", async ({ page }) => {
    // Navigate straight to login
    await page.goto("/login");

    // Fill credentials
    await page.fill('input[type="email"]', "reyes@autonique.com");
    await page.fill('input[type="password"]', "password123");

    // Click submit
    await page.click('button[type="submit"]');

    // Toast and redirect checks (since we mock, wait for route transition to /dashboard)
    await page.waitForURL("**/dashboard");
    expect(page.url()).toContain("/dashboard");

    // Check dashboard text greeting
    const greeting = page.locator("text=Good Morning");
    await expect(greeting).toBeVisible();
  });
});
