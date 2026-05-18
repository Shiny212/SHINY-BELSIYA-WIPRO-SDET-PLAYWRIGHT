const { test, expect }
= require('@playwright/test');

test.describe(
'Annotations and Timeouts',

() => {

test.skip(
'Skip this test because feature is not ready',

async ({ page }) => {

await page.goto(
'https://example.com');

});

test(
'Mark as expected failure',

async ({ page }) => {

test.fail();

await page.goto(
'https://example.com');

await expect(
page.locator('h1'))

.toHaveText('Wrong Text');

});

test.fixme(
'Fix this flaky test later',

async ({ page }) => {

await page.goto(
'https://example.com');

});

test(
'Slow test with custom timeout',

async ({ page }) => {

test.slow();

test.setTimeout(10000);

await page.goto(
'https://playwright.dev/');

await expect(page)
.toHaveTitle(/Playwright/);

});

test(
'Using test.step for reporting',

async ({ page }) => {

await test.step(
'Navigate to website',

async () => {

await page.goto(
'https://example.com');

});

await test.step(
'Verify heading',

async () => {

await expect(
page.locator('h1'))

.toHaveText(
'Example Domain');

});

});

});