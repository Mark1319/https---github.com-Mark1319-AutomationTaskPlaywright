import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import BookStorePage from '../pages/BookStorePage.js';

import LoginData from '../testData/LoginData.json' with { type: 'json' };
test('UI Test', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const store = new BookStorePage(page);
    await home.open();
    await home.openBookStore();
    await login.login(LoginData.username,LoginData.password);
    await login.verifyLogin('Mark');
    await store.searchBook('Learning JavaScript Design Patterns');
    await store.saveBookDetails();
    await login.logout();
});