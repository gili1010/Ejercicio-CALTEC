import { BrowserContext, Page, expect } from "@playwright/test";

export class BasePage {
    public readonly page: Page; 
    public readonly context: BrowserContext;

    constructor(page:Page, context: BrowserContext) {
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
        try{
            const element = this.getLocator(locator);
            await element.click();
        } catch (error) {
            throw new Error(`Error al hacer click en el elemento ${locator}: ${error.message}`);
        }
    }

    //escribir en elemento
    async fillLocator(locator:string,param:string){
        try{
            const element = this.getLocator(locator);
            await element.fill(param);
        } catch (error) {
            throw new Error(`Error al llenar el elemento ${locator} con ${param}: ${error.message}`);
        }
    }

    async enter(locator:string) {
        try{
            const element = this.getLocator(locator);
            await element.press('Enter');
        } catch (error) {
            throw new Error(`Error al presionar Enter en el elemento ${locator}: ${error.message}`);
        }
    }

    async expectVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

     // Validar texto en un elemento
    async expectText(locator: string, expectedText: string) {
        await expect(this.getLocator(locator)).toHaveText(expectedText);
    }    
}