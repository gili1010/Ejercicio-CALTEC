import { test, expect } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import { meliLocators } from "../pages/locators/meliLocators.ts";
import { Context } from 'vm';

test.describe('Mercadolibre', () => {

  test('Grifería para Baño', async ({  }) => {

    const page = meli.getPage();
    await meli.irAPage();
    await meli.selectGriferia();

    await expect(page.locator(meliLocators.ValidarModuloGriferia)).toContainText('Grifería para Baño');
    const modulo = page.locator(meliLocators.ValidarModuloGriferia);
    const ModGriferia = await modulo.textContent();
    console.log('Categoria:', ModGriferia);
    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.totalResultados);
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total de resultados: ', searchResultText);
  });

  test('Accesorios para Celulares', async () => {
    const page = meli.getPage();
    await meli.irAPage();
    await meli.selectCelulares();

    await expect(page.locator(meliLocators.ValidarModuloAccesoriosCelulares)).toContainText('Accesorios para Celulares');
    const modulo = page.locator(meliLocators.ValidarModuloAccesoriosCelulares);
    const ModCelulares = await modulo.textContent();
    console.log('Categoria:', ModCelulares);
    await expect(page.locator(meliLocators.ValidarModuloCelulares)).toContainText('Celulares y Teléfonos');

  });

  test('Ofertas del dia', async () => {
    const page = meli.getPage();
    await meli.irAPage();
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
    await meli.irAPage();
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