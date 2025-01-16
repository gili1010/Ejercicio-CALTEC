import { BasePage } from "./basePage";
import { meliLocators } from "./locators/meliLocators";
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
    private readonly ofertas: Locator;
    private readonly OfertasDelDia: Locator;

    private readonly Vehiculos: Locator;
    private readonly AutosUsados: Locator;
    private readonly CompraInternacional: Locator;
    private readonly VerMasCI: Locator;


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
            this.ofertas = page.locator(meliLocators.Ofertas);
            this.OfertasDelDia = page.locator(meliLocators.OfertasDelDia);
            this.totalResultados = page.locator(meliLocators.totalResultados);

            this.Vehiculos = page.locator(meliLocators.Vehiculos);
            this.AutosUsados = page.locator(meliLocators.AutosUsados);
            this.CompraInternacional = page.locator(meliLocators.CompraInternacional);
            this.VerMasCI = page.locator(meliLocators.VerMasCI);
        }

        const filtros = {
            precioMinimo: process.env.npm_config_PRECIOMIN || process.env.PRECIOMIN || '0', // Valor por defecto 0
            precioMaximo: process.env.npm_config_PRECIOMAX || process.env.PRECIOMAX || '3000000', // Valor por defecto 5000000
          };

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
            await this.clickElement(meliLocators.masTarde);
            await this.clickElement(meliLocators.categorias);
            await this.clickElement(meliLocators.Vehiculos);
            await this.clickElement(meliLocators.AutosUsados);
                 // Aplicar filtro de precio mínimo
            await this.clickElement(meliLocators.PrecioDesde);
            await this.fillLocator(meliLocators.PrecioDesde,filtros.precioMinimo);
            // Aplicar filtro de precio máximo
            await this.clickElement(meliLocators.PrecioHasta);
            await this.fillLocator(meliLocators.PrecioDesde,filtros.precioMaximo);
            await this.enter(meliLocators.PrecioDesde);
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