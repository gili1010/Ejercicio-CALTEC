import { test, expect } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';


test.describe('Mercadolibre', () => {

  let meli: MeliPage;
  let base: BasePage;
  let browser: Browser;

  test.beforeEach(async ({ page }) => {
    meli = new MeliPage(page);
    base = new BasePage(page);
    browser = testBrowser;
    await base.gotoPage("https://www.mercadolibre.com.ar/");
  });

  test.afterEach(async () => {
    await browser.close();
  });

  test('Grifería para Baño', async ({ page }) => {
    await meli.selectGriferia();

    await expect(page.locator('h1')).toContainText('Grifería para Baño');
    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Accesorios para Celulares', async ({ page }) => {
    await meli.selectCelulares();

    await expect(page.locator('h1')).toContainText('Accesorios para Celulares');
    await expect(page.locator("//span[contains(text(),'Celulares y Teléfonos')]")).toContainText('Celulares y Teléfonos');

  });

  test('Ofertas del dia', async ({ page }) => {
    await meli.selectOfertaDelDia();

    await expect(page.locator("//span[contains(text(),'Oferta del día')]")).toContainText('Oferta del día');
    //idar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//p[@class='results-quantity']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Capsulas', async ({ page }) => {
    await meli.selectCapsulas();

    await expect(page.locator("//h1[contains(text(),'Supermercado')]")).toContainText('Supermercado');
    //idar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

});