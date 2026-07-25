import{Page,Locator} from '@playwright/test';

export class ProductPage{
    readonly page: Page;
    readonly addToCartBackpack: Locator;
    readonly shoppingCartLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }
    async addBackpackToCart(){
        await this.addToCartBackpack.click();
    }

    async goToCartLink(){
        await this.shoppingCartLink.click();
    }
}
