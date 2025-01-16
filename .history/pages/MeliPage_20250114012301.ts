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
            await this.selectOpt(BookingsLocators.fromPort,"Paris");
            await this.selectOpt(BookingsLocators.toPort,"Buenos Aires");
            await this.clickOn(BookingsLocators.submitButton);
            await this.clickOn(BookingsLocators.flightOption);
        }

        async fillPersonalInfo(){
            await this.fillField(BookingsLocators.inputName,"Andrew Jones");
            await this.fillField(BookingsLocators.address,"123 Street");
            await this.fillField(BookingsLocators.city,"Any");
            await this.fillField(BookingsLocators.state,"State");
            await this.fillField(BookingsLocators.zipCode,"12345");
            await this.selectOpt(BookingsLocators.creditCard,'amex');
            await this.fillField(BookingsLocators.creditCardNumber,"1234567891234567");
            await this.fillField(BookingsLocators.nameOnCard,"John Smith");
            await this.clickOn(BookingsLocators.submitButton)
        }

        async confirmationBooking(){
            await this.expectVisible(BookingsLocators.finalMessage);
        }
}