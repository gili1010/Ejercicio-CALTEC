import { Page, expect } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page;
    }

    //ir a la web
    async gotoPage(url: string) {
        await this.page.goto(url);
    }

    //hacer click
    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    //escribir en elemento
        async fillLocator(locator,param){
            await this.page.locator(locator).fill(param);
        }
    

    async fillField(selector: string, value: string) {
        await this.page.locator(selector).fill(value);
    }

    async selectOpt(selector: string, value: string) {
        await this.page.locator(selector).selectOption(value);
    }

    async expectVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }
}