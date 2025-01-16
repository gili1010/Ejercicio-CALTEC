import { test, expect, BrowserContext } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';


test.describe('Mercadolibre Ejercicio 2', () => {

  let meli: MeliPage;
  let base: BasePage;
  let context: BrowserContext;

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

    await expect(page.locator('h1')).toContainText('Accesorios para Celulares');
    await expect(page.locator("//span[contains(text(),'Celulares y Teléfonos')]")).toContainText('Celulares y Teléfonos');

  });

});