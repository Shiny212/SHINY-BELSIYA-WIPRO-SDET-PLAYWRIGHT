// @ts-check
import { test, expect } from '@playwright/test';

test.skip('ok', ({page}) => {

})

test('test1', async ({page}) => {

  test.setTimeout(10);

  test.step('check if 2 is eq to 3', () => {

    test.fail();

    expect(2).toBe(3);

  })

  test.step('check if 2 is eq to 2', () => {

    expect(2).toBe(2);

  })

  test.step('check if 5 is eq to 5', () => {

    expect(5).toBe(5);

  })

})

test.fixme('test', async ({ page }) => {

  await page.goto('https://www.amazon.com/');

  await page.getByRole('searchbox',
  { name: 'Search Amazon' }).click();

  await page.goto(
'https://www.amazon.com/s?k=gaming');

  await page.getByRole('button',
  { name: 'Submit' }).first().click();

});