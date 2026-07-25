import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import {loginUsers} from '../data/login.data';

test.use ({storageState: {cookies: [], origins:[]}});

test.describe('Kiểm tra chức năng Login', () => {

test('TC01: Login thành công',
    async ({page}) =>{
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            loginUsers.standard.username,
            loginUsers.standard.password
        );
        await expect(page).toHaveURL(`${process.env.BASE_URL}/inventory.html`);
    
    });    
});