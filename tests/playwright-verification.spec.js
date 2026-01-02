
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  page.on('console', msg => console.log(msg.text()));
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'tests/verification.png' });
});
