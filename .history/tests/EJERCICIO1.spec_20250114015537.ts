import { test, expect } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';
import { chromium } from 'playwright'; 

let browser;

test.beforeAll(async () => {
    // Crea el navegador antes de todas las pruebas
    browser = await chromium.launch({ headless: false, slowMo:500 });
});

test.afterAll(async () => {
    // Cierra el navegador después de todas las pruebas
    await browser.close();
});

test.describe('Mercadolibre', () => {

  test('Grifería para Baño', async ({ page }) => {
    const meli = new MeliPage(page);
    const base = new BasePage(page);
    await base.gotoPage("https://www.mercadolibre.com.ar/");

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
    const meli = new MeliPage(page);
    const base = new BasePage(page);
    await base.gotoPage("https://www.mercadolibre.com.ar/");

    await meli.selectCelulares();

    await expect(page.locator('h1')).toContainText('Accesorios para Celulares');
    await expect(page.locator("//span[contains(text(),'Celulares y Teléfonos')]")).toContainText('Celulares y Teléfonos');

  });

  test('Ofertas del dia', async ({ page }) => {
    const meli = new MeliPage(page);
    const base = new BasePage(page);
    await base.gotoPage("https://www.mercadolibre.com.ar/");

    await meli.selectOfertaDelDia();

    await expect(page.locator("//span[contains(text(),'Oferta del día')]")).toContainText('Oferta del día');
    //idar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//p[@class='results-quantity']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

});