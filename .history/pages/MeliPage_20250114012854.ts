import { BasePage } from "./basePage";
import { meliLocators } from "./locators/meli";
import { Locator, Page } from "@playwright/test";

export class MeliPage extends BasePage {

    private readonly masTarde: Locator;
    private readonly categorias: Locator;
    private readonly categoriasclick: Locator;
    private readonly construccion: Locator;
    private readonly verMas: Locator;
    private readonly griferiaParaBano: Locator;
    private readonly totalResultados: Locator;


        constructor(page: Page){
            super(page);
            this.masTarde = page.locator(meliLocators.masTarde);
            this.categorias = page.locator(meliLocators.categorias);
            this.categoriasclick = page.locator(meliLocators.categoriasclick);
            this.construccion = page.locator(meliLocators.construccion);
            this.verMas = page.locator(meliLocators.verMas);
            this.griferiaParaBano = page.locator(meliLocators.griferiaParaBano);
            this.totalResultados = page.locator(meliLocators.totalResultados);
        }

        async selectDestiny(){
            await this.clickElement(meliLocators.masTarde);
            //await page.locator("//a[@class='nav-menu-categories-link']").hover();
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.construccion);
            await this.clickElement(meliLocators.verMas);
            await this.clickElement(meliLocators.griferiaParaBano);
        }

}