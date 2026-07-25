import {test, expect} from '@playwright/test';
import {ProductPage} from '../pages/product.page';
import {YourcartPage} from '../pages/yourcart.page'
import {CheckoutInformationPage} from '../pages/checkoutinformation.page';
import {OverviewPage} from '../pages/overview.page';
import {userInformation} from '../data/checkout.data';

test ('TC01: Thanh toán thành công',
    async ({page}) => {
        const productPage = new ProductPage(page);
        const yourcartPage = new YourcartPage(page);
        const checkoutInformationPage = new CheckoutInformationPage(page);
        const overviewPage = new OverviewPage(page);

        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        await productPage.addBackpackToCart();
        await productPage.goToCartLink();

        await yourcartPage.clickCheckout();
        
        await checkoutInformationPage.fillInformation(
            userInformation.firstName,
            userInformation.lastName,
            userInformation.postalCode
        );

        await overviewPage.clickFinish();
    }
);