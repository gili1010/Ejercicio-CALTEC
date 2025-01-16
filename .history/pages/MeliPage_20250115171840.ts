import { BasePage } from "./basePage";
import { meliLocators } from "./locators/meliLocators";
import { Page } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export class MeliPage extends BasePage {


        constructor(page: Page){
            super(page);
        }

          // Método para obtener la instancia de la página
            getPage(): Page {
                return this.page;
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
            await this.clickElement(meliLocators.Ofertas);
            await this.clickElement(meliLocators.OfertasDelDia);
        }

        async selectCapsulas(){
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.Supermercado);
            await this.clickElement(meliLocators.Capsulas);
        }

        async selectVehiculos(){
            const filtros = {
                precioMinimo: process.env.npm_config_PRECIOMIN || process.env.PRECIOMIN || '0', // Valor por defecto 0
                precioMaximo: process.env.npm_config_PRECIOMAX || process.env.PRECIOMAX || '3000000', // Valor por defecto 5000000
              };
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.Vehiculos);
            await this.clickElement(meliLocators.AutosUsados);
                 // Aplicar filtro de precio mínimo
            await this.clickElement(meliLocators.PrecioDesde);
            await this.fillLocator(meliLocators.PrecioDesde,filtros.precioMinimo);

            // Aplicar filtro de precio máximo
            await this.clickElement(meliLocators.PrecioHasta);
            await this.fillLocator(meliLocators.PrecioHasta,filtros.precioMaximo);
            await this.enter(meliLocators.PrecioHasta);

                   // Formatear los valores de precio con separadores de miles
            const precioMinimoFormateado = await this.formatNumberWithDots(filtros.precioMinimo);
            const precioMaximoFormateado = await this.formatNumberWithDots(filtros.precioMaximo);
            console.log(precioMinimoFormateado);
            console.log(precioMaximoFormateado);

            // Retornar los valores formateados para usarlos en el test
            return {
                precioMinimoFormateado,
                precioMaximoFormateado
            };
        }

        async selectCompraInternacional(){
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.CompraInternacional);
            await this.clickElement(meliLocators.VerMasCI);
        }

        async formatNumberWithDots(value: string): Promise<string> {
            return parseInt(value, 10).toLocaleString('es-AR'); // Formato de Argentina
        }

}