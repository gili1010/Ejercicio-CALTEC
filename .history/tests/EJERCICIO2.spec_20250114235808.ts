import { test, expect, BrowserContext } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';


test.describe('Mercadolibre Ejercicio 2', () => {

  let meli: MeliPage;
  let base: BasePage;
  let context: BrowserContext;

  // Obtener los filtros de las variables de entorno
  const filtros = {
    precioMinimo: process.env.npm_config_PRECIOMIN || '0', // Valor por defecto 0
    precioMaximo: process.env.npm_config_PRECIOMAX || '5000000', // Valor por defecto 5000000
  };

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();
    meli = new MeliPage(page);
    base = new BasePage(page);
    await base.gotoPage("https://www.mercadolibre.com.ar/");
  });

  test.afterEach(async () => {
    await context.close();
  });

  test('Autos Usados', async ({  }) => {
    const page = meli.getPage();
    await meli.selectVehiculos();

     // Aplicar filtro de precio mínimo
     await page.locator(`//input[@id=':Rliaelee:']`).fill(filtros.precioMinimo); // Cambia el selector si es necesario
     await page.keyboard.press('Enter'); // Presionar Enter para aplicar el filtro
 
     // Aplicar filtro de precio máximo
     await page.locator(`//input[@id=':Rpiaelee:']`).fill(filtros.precioMaximo); // Cambia el selector si es necesario
     await page.keyboard.press('Enter'); // Presionar Enter para aplicar el filtro

    await expect(page.locator("//h1[contains(text(),'Auto')]")).toContainText('Auto');
    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Compras Internacionales', async () => {
    const page = meli.getPage();
    await meli.selectCompraInternacional();

    await expect(page.locator("//p[contains(text(),'Compra internacional')]")).toContainText('Compra internacional');

  });

});