import { Page, expect } from "@playwright/test";
import { Context } from "node:vm";

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
    async clickElement(locator: string) {
        await this.page.click(locator);
    }

    //escribir en elemento
        async fillLocator(locator,param){
            await this.page.locator(locator).fill(param);
        }

    async selectOpt(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    async expectVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }
}