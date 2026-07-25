import{Page,Locator} from '@playwright/test';

export class CheckoutInformationPage{
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator
    readonly postalCode: Locator;
    readonly continue: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');
    }

    async fillInformation(firstname: string, lastname: string, postalcode: string){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode);
        await this.continue.click();
    }
}    