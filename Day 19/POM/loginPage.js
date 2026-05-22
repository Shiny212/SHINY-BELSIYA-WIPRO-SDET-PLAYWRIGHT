export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passInput = page.locator('#password');
        this.btn = page.locator('#loginBtn');
        this.response = page.locator('#msg');
    }

    async navigate() {
        await this.page.goto('http://localhost:3000/login');
    }

    async fillForm(username, password) {
        await this.usernameInput.fill(username);
        await this.passInput.fill(password);
    }

    async submit() {
        await this.btn.click();
    }

    async getLoginResponse() {
        return this.response;
    }
}