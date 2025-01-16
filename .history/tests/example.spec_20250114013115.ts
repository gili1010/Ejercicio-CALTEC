import { test, expect } from '@playwright/test';
import { MeliPage } from '../pages/MeliPage';
import { BasePage } from '../pages/basePage';

test.describe('Demo Guru', () => {

  test('test', async ({ page }) => {
    const meli = new MeliPage(page);
    const base = new BasePage(page);
    await base.gotoPage("https://www.mercadolibre.com.ar/");

    await meli.selectDestiny();

    await expect(page.locator('h1')).toContainText('Grifería para Baño');
    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

});