import{Page,Locator} from '@playwright/test';

export class YourcartPage{
    readonly page: Page;
    readonly checkout: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkout = page.locator('[data-test="checkout"]');
    }
    async clickCheckout(){
        await this.checkout.click();
    }
}    