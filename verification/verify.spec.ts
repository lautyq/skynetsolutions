import { test, expect } from '@playwright/test';

test('verify desktop', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForSelector('main', { timeout: 5000 });
  await page.screenshot({ path: 'verification/verification.png', fullPage: true });
});
