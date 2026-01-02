
import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 13 Pro'] });

test('capture mobile screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Wait for all loading and fade-in animations to complete.
  await page.waitForTimeout(3500);
  await page.screenshot({ path: 'verification/verification-mobile.png', fullPage: true });
});
