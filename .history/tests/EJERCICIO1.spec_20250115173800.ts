import { test, expect } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';

test.describe('Mercadolibre', () => {

  test('Grifería para Baño', async ({  }) => {
    const page = meli.getPage();
    await meli.selectGriferia();

    await expect(page.locator('h1')).toContainText('Grifería para Baño');
    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Accesorios para Celulares', async () => {
    const page = meli.getPage();
    await meli.selectCelulares();

    await expect(page.locator('h1')).toContainText('Accesorios para Celulares');
    await expect(page.locator("//span[contains(text(),'Celulares y Teléfonos')]")).toContainText('Celulares y Teléfonos');

  });

  test('Ofertas del dia', async () => {
    const page = meli.getPage();
    await meli.selectOfertaDelDia();

    await expect(page.locator("//span[contains(text(),'Oferta del día')]")).toContainText('Oferta del día');
    //validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//p[@class='results-quantity']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Capsulas', async () => {
    const page = meli.getPage();
    await meli.selectCapsulas();

    await expect(page.locator("//h1[contains(text(),'Supermercado')]")).toContainText('Supermercado');
    //Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

});