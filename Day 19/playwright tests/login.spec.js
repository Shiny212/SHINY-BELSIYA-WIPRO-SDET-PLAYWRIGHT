import { test, expect } from "@playwright/test";
import { LoginPage } from "../POM/loginPage";

test.describe('Login tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Login with valid credentials', async () => {
        await loginPage.fillForm('admin123', 'admin123');
        await loginPage.submit();

        const response = await loginPage.getLoginResponse();
        await expect(response).toHaveText('Login successful');
    });

    test('Login with invalid credentials', async () => {
        await loginPage.fillForm('admin123', 'wrongpassword');
        await loginPage.submit();

        const response = await loginPage.getLoginResponse();
        await expect(response).toHaveText('Invalid credentials');
    });
});