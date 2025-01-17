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

    protected getLocator(locator: string) {
        return this.page.locator(locator);
    }

    //hacer click
    async clickElement(locator: string, timeout: number = 5000) {
            const element = this.getLocator(locator);
            await element.waitFor({ state: 'visible', timeout})
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
        console.log(`Validando que ${locator} contenga el texto: ${expectedText}`);
        await expect(this.getLocator(locator)).toHaveText(expectedText);
    }    
}