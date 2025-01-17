import { Page, expect } from "@playwright/test";
import { Context } from "vm";

export class BasePage {
    public readonly page: Page; 
    public readonly context: Context;

    constructor(page:Page, context: Context) {
        this.page = page;
        this.context = context;
    }

    //ir a la web
    async gotoPage(url: string) {
        await this.page.goto(url);
    }

    protected getLocator(locator: string) {
        return this.page.locator(locator);
    }

    //hacer click
    async clickElement(locator: string) {
            const element = this.getLocator(locator);
            await element.click();
    }

    //escribir en elemento
    async fillLocator(locator:string,param:string){
            const element = this.getLocator(locator);
            await element.fill(param);
    }

    async enter(locator:string) {
            const element = this.getLocator(locator);
            await element.press('Enter');
    }

    async expectVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

     // Validar texto en un elemento
    async expectText(locator: string, expectedText: string) {
        await expect(this.getLocator(locator)).toHaveText(expectedText);
    }    
}