import { Context } from "vm";
import { BasePage } from "./basePage";
import { meliLocators } from "./locators/meliLocators";
import { Page, BrowserContext } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export class MeliPage extends BasePage {

        constructor(page: Page, context: any){
            super(page,context);
        }

            //ir a la web
    async irAPage(): Promise<void> {
        await this.gotoPage("https://www.mercadolibre.com.ar/");
    }

        // Método para obtener la instancia de la página
        getPage(): Page {
            return this.page;
        }
            // Método para obtener el contexto
         getContext(): Context {
        return this.context;
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
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.Vehiculos);
            await this.clickElement(meliLocators.AutosUsados);
            const { precioMinimoFormateado, precioMaximoFormateado } = await this.filtroPrecio();
            const { kmMinimoFormateado, kmMaximoFormateado } = await this.filtroKm();
            return {
                precioMinimoFormateado,
                precioMaximoFormateado,
                kmMinimoFormateado,
                kmMaximoFormateado
            };      
        }

        async filtroPrecio(){
            const filtros = {
                precioMinimo: process.env.npm_config_PRECIOMIN || process.env.PRECIOMIN || '0', // Valor por defecto
                precioMaximo: process.env.npm_config_PRECIOMAX || process.env.PRECIOMAX || '3000000', // Valor por defecto
              };
                 // Aplicar filtro de precio mínimo
                 await this.clickElement(meliLocators.PrecioDesde);
                 //await this.fillLocator(meliLocators.PrecioDesde,filtros.precioMinimo);
     
                 // Aplicar filtro de precio máximo
                 await this.clickElement(meliLocators.PrecioHasta);
                 await this.fillLocator(meliLocators.PrecioHasta,filtros.precioMaximo);
                 await this.enter(meliLocators.PrecioHasta);
                 //await this.clickElement(meliLocators.AplicarPrecio);
     
                        // Formatear los valores de precio con separadores de miles
                 const precioMinimoFormateado = await this.formatNumberWithDots(filtros.precioMinimo);
                 const precioMaximoFormateado = await this.formatNumberWithDots(filtros.precioMaximo);
                 console.log(`Parametro Precio Minimo: ${precioMinimoFormateado}`);
                 console.log(`Parametro Precio Maximo: ${precioMaximoFormateado}`);
     
                 // Retornar los valores formateados para usarlos en el test
                 return {
                     precioMinimoFormateado,
                     precioMaximoFormateado
                 };
        }

        async filtroKm(){
            const filtros = {
                KmMinimo: process.env.npm_config_KMMIN || '1', // Valor por defecto
                KmMaximo: process.env.npm_config_KMMAX || '300000', // Valor por defecto
              };
                 // Aplicar filtro de precio mínimo
                 await this.clickElement(meliLocators.KmDesde);
                 await this.fillLocator(meliLocators.KmDesde,filtros.KmMinimo);
     
                 // Aplicar filtro de precio máximo
                 await this.clickElement(meliLocators.KmHasta);
                 await this.fillLocator(meliLocators.KmHasta,filtros.KmMaximo);
                 await this.enter(meliLocators.KmHasta);
     
                        // Formatear los valores de precio con separadores de miles
                 const kmMinimoFormateado = await this.formatNumberWithDots(filtros.KmMinimo);
                 const kmMaximoFormateado = await this.formatNumberWithDots(filtros.KmMaximo);
                 console.log(`Parametro KM Minimo: ${kmMinimoFormateado}`);
                 console.log(`Parametro KM Maximo: ${kmMaximoFormateado}`);
     
                 // Retornar los valores formateados para usarlos en el test
                 return {
                    kmMinimoFormateado,
                    kmMaximoFormateado
                 };
        }

        async Buscador(){
            try{
                const producto:string = process.env.npm_config_PRODUCTO || 'PS5'; 
                await this.clickElement(meliLocators.masTarde);
                await this.clickElement(meliLocators.Buscador);
                await this.fillLocator(meliLocators.Buscador, producto);
                await this.enter(meliLocators.Buscador);
                return {producto};
            } catch (error) {
                throw new Error(`Error al realizar la búsqueda. Detalles: ${error.message}`);
            }
        }

        async formatNumberWithDots(value: string): Promise<string> {
            return parseInt(value, 10).toLocaleString('es-AR'); // Formato de Argentina
        }

}