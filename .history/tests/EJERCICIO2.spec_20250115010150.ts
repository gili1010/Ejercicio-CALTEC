import { test, expect, BrowserContext } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';
import dotenv from 'dotenv';
dotenv.config();


test.describe('Mercadolibre Ejercicio 2', () => {

  let meli: MeliPage;
  let base: BasePage;
  let context: BrowserContext;

  // Obtener los filtros de las variables de entorno
  const filtros = {
    precioMinimo: process.env.npm_config_PRECIOMIN || process.env.PRECIOMIN || '0', // Valor por defecto 0
    precioMaximo: process.env.npm_config_PRECIOMAX || process.env.PRECIOMAX || '3000000', // Valor por defecto 5000000
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
     await page.locator(`//input[@id=':Rliaelee:']`).fill(filtros.precioMinimo);
     // Aplicar filtro de precio máximo
     await page.locator(`//input[@id=':Rpiaelee:']`).fill(filtros.precioMaximo);
     await page.locator(`//input[@id=':Rpiaelee:']`).click();
     //await page.locator("//button[@data-testid='submit-price']").click;
     await page.keyboard.press('Enter');

       // Formatear los valores de precio con separadores de miles
    const precioMinimoFormateado = await meli.formatNumberWithDots(filtros.precioMinimo);
    const precioMaximoFormateado = await meli.formatNumberWithDots(filtros.precioMaximo);

    // Construir XPath dinámicamente
    const rangoPreciosXPath = `//div[contains(text(),"$${precioMinimoFormateado} a $${precioMaximoFormateado}")]`;

    // Validar el rango de precios en los resultados
    await expect(page.locator(rangoPreciosXPath)).toContainText(`$${precioMaximoFormateado} a $${precioMaximoFormateado}`);
    console.log(precioMinimoFormateado);
    console.log(precioMaximoFormateado);

    // Validar que el resultado de búsqueda es visible
    //const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    //await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    //const searchResultText = await searchResultLocator.textContent();
    //console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Compras Internacionales', async () => {
    const page = meli.getPage();
    await meli.selectCompraInternacional();

    await expect(page.locator("//p[contains(text(),'Compra internacional')]")).toContainText('Compra internacional');

  });

});