import { test, expect } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';

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

});