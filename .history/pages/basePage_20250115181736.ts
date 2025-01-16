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
        try{
            const element = this.getLocator(locator);
            await element.click();
        } catch (error) {
            throw new Error(`No se pudo hacer CLICK en el elemento con locator: ${locator}. Error: ${error}`);
        }
    }

    //escribir en elemento
    async fillLocator(locator:string,param:string){
        try{
            const element = this.getLocator(locator);
            await element.fill(param);
        } catch (error) {
            throw new Error(`No se pudo ESCRIBIR en el elemento con locator: ${locator}. Error: ${error}`);
        }
    }

    async enter(locator:string) {
        try{
            await this.page.locator(locator).press('Enter');
        } catch (error) {
            throw new Error(`No se pudo hacer ENTER en el elemento con locator: ${locator}. Error: ${error}`);
        }
    }

    async selectOpt(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
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