import { expect,test } from '@playwright/test';

class LoginPage {

    constructor(page) {

        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.logoutButton1 = page.getByRole('button', { name: 'Logout' });
        this.logoutButton2=page.getByRole('button', { name: 'Log out' });
        this.userName = page.locator('#userName-value');
    }

    async login(username, password) {

        await this.loginButton.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLogin(user) {

        await this.userName.waitFor();
        await expect(this.userName).toContainText(user);
        await expect(this.logoutButton1).toBeVisible();
    }

    async logout() {
        await this.logoutButton2.click();
    }
};
export default LoginPage;
