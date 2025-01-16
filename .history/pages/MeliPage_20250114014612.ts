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
    private readonly tecnologia: Locator;
    private readonly AccesorioCelulares: Locator;


        constructor(page: Page){
            super(page);
            this.masTarde = page.locator(meliLocators.masTarde);
            this.categorias = page.locator(meliLocators.categorias);
            this.categoriasclick = page.locator(meliLocators.categoriasclick);
            this.construccion = page.locator(meliLocators.construccion);
            this.tecnologia = page.locator(meliLocators.tecnologia);
            this.verMas = page.locator(meliLocators.verMas);
            this.griferiaParaBano = page.locator(meliLocators.griferiaParaBano);
            this.AccesorioCelulares = page.locator(meliLocators.AccesorioCelulares);
            this.totalResultados = page.locator(meliLocators.totalResultados);
        }

        async selectGriferia(){
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.construccion);
            await this.clickElement(meliLocators.verMas);
            await this.clickElement(meliLocators.griferiaParaBano);
        }

        async selectCelulares(){
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.tecnologia);
            await this.clickElement(meliLocators.AccesorioCelulares);
        }

        async selectOfertaDelDia(){
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.tecnologia);
            await this.clickElement(meliLocators.AccesorioCelulares);
        }

}