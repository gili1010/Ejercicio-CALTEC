import { test, expect } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import { meliLocators } from "../pages/locators/meliLocators.ts";

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
    console.log('Total de resultados: ', searchResultText);
  });

  test('Accesorios para Celulares', async () => {
    const page = meli.getPage();
    await meli.selectCelulares();

    await expect(page.locator(meliLocators.ValidarModuloCelulares)).toContainText('Accesorios para Celulares');
    const modulo = page.locator(meliLocators.ValidarModuloCelulares);
    const ModCelulares = await modulo.textContent();
    console.log('Categoria:', ModCelulares);
    //Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.totalResultados);
    await expect(searchResultLocator).toBeVisible();
    //Mostrar el total de resultados por consola y reporte
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total de resultados: ', searchResultText);
  });

  test('Ofertas del dia', async () => {
    const page = meli.getPage();
    await meli.selectOfertaDelDia();

    await expect(page.locator(meliLocators.ValidarModuloOfertasDelDia)).toContainText('Oferta del día');
    const modulo = page.locator(meliLocators.ValidarModuloOfertasDelDia);
    const ModOfertas = await modulo.textContent();
    console.log('Categoria:', ModOfertas);
    //validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.ValidarTotalResultado);
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total de resultados: ', searchResultText);
  });

  test('Capsulas', async () => {
    const page = meli.getPage();
    await meli.selectCapsulas();

    await expect(page.locator(meliLocators.ValidarModuloSupermercado)).toContainText('Supermercado');
    const modulo = page.locator(meliLocators.ValidarModuloSupermercado);
    const ModSupermercado = await modulo.textContent();
    console.log('Categoria:', ModSupermercado);
    //Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.totalResultados);
    await expect(searchResultLocator).toBeVisible();
    //Mostrar el total de resultados por consola y reporte
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total de resultados: ', searchResultText);
  });

});