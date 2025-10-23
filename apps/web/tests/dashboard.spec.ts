import { test, expect } from '@playwright/test';

test('dashboard renders charts or empty state', async ({ page }) => {
  await page.goto('/');
  let metricsLength = 0;
  try {
    const response = await fetch('http://localhost:8000/metrics');
    const metrics = await response.json();
    metricsLength = metrics.length;
  } catch (e) {
    // Assume no data if fetch fails
  }
  if (metricsLength === 0) {
    await expect(page.locator('text=No metrics available')).toBeVisible();
  } else {
    await expect(page.locator('canvas')).toHaveCount(2);
    await expect(page.locator('tbody tr')).toHaveCount(Math.min(10, metricsLength));
  }
});