// @ts-check
import { test, expect } from '@playwright/test';

test.describe('JioMart Tests', () => {

  // Use saved login session
  test.use({
    storageState: 'auth.json'
  });


  test.skip('Search for fruits', async ({ page }) => {

    await page.goto(
      'https://www.jiomart.com/sections/low-price-mumbai'
    );


    // Remove location popup if present
    await page.locator(
      '.AllowLocation__overlay'
    ).evaluate(
      el => el.remove()
    ).catch(() => {});


    const input = page.locator(
      'input.SearchInput__searchInput'
    );


    await input.fill(
      'fruits'
    );


    await input.press(
      'Enter'
    );


    await expect(

      page.getByText(
        'fruits'
      ).first()

    ).toBeVisible();

  });



  test('Profile validation', async ({ page }) => {

    await page.goto(
      'https://www.jiomart.com/profile'
    );


    const profileName = page.getByTestId(
      "JDSText-text"
    ).nth(0);


    console.log(

      "Profile Name:",

      await profileName.textContent()

    );


    await expect(
      profileName
    ).toBeVisible();


  });


});