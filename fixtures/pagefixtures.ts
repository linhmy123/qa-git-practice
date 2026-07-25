import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckoutInformationPage } from '../pages/checkoutinformation.page';
import { OverviewPage } from '../pages/overview.page';
import { ProductPage } from '../pages/product.page';
import { YourcartPage } from '../pages/yourcart.page';

type MyPages = {
    loginPage: LoginPage;
    checkoutInformationPage: CheckoutInformationPage;
    overviewPage: OverviewPage;
    productPage: ProductPage;
    yourcartPage: YourcartPage;
};

export const test = base.extend<MyPages>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    checkoutInformationPage: async({page}, use) =>{
        await use(new CheckoutInformationPage(page))
    },

    overviewPage: async({page}, use) =>{
        await use(new OverviewPage(page))
    },
    
    productPage: async({page}, use) =>{
        await use(new ProductPage(page))
    },

    yourcartPage: async({page}, use) =>{
        await use(new YourcartPage(page))
    },
});