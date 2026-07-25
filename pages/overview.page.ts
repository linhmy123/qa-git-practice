import{Page,Locator} from '@playwright/test';

export class OverviewPage{
    readonly page: Page;
    readonly finish: Locator;

    constructor (page: Page){
        this.page = page;
        this.finish = page.locator('[data-test="finish"]');
    }

    async clickFinish(){
        await this.finish.click();
    }
}    