import { Page, expect } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page;
    }

    //ir a la web
    async gotoPage(url: string) {
        console.log(`Navegando a la URL: ${url}`);
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

    async selectOpt(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    async expectVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async enter(locator:string) {
        await this.page.locator(locator).press('Enter');
    }

     // Validar texto en un elemento
     async expectText(locator: string, expectedText: string) {
        console.log(`Validando que ${locator} contenga el texto: ${expectedText}`);
        await expect(this.getLocator(locator)).toHaveText(expectedText);
    }

    
      
}