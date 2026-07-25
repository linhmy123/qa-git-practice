import {test as setup, expect} from '@playwright/test';
import {loginUsers} from '../data/login.data';

const authFile = 'playwright/.auth/user.json';

setup('Login và Lưu session', async ({page}) => {
    console.log('Khởi tạo session và Login');

    await page.goto (process.env.BASE_URL!);
    await page.locator('[data-test="username"]').fill(loginUsers.standard.username);
    await page.locator('[data-test="password"]').fill(loginUsers.standard.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(`${process.env.BASE_URL}/inventory.html`);

    await page.context().storageState({path: authFile});

    console.log('Session đã lưu vào file user.json');
});