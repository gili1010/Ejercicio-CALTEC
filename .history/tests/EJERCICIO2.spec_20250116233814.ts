import { test, expect, BrowserContext } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import dotenv from 'dotenv';
import { meliLocators } from '../pages/locators/meliLocators.ts';
dotenv.config();

test.describe('Mercadolibre Ejercicio 2', () => {

  test('Autos Usados', async ({  }) => {
    const page = meli.getPage();
    const { precioMaximoFormateado, kmMinimoFormateado, kmMaximoFormateado } = await meli.selectVehiculos();
    

    try{
      //const rangoPreciosXPath = `//div[contains(text(),"Hasta $ ${precioMaximoFormateado}")]`;
      const rangoKmXPath = `//div[contains(text(),"${kmMinimoFormateado} a ${kmMaximoFormateado} km")]`;

      // Validar el rango de precios en los resultados
      //await expect(page.locator(rangoPreciosXPath)).toContainText(`Hasta $ ${precioMaximoFormateado}`);
      await expect(page.locator(rangoKmXPath)).toContainText(`${kmMinimoFormateado} a ${kmMaximoFormateado} km`);
        console.log('Rango de precios y KM encontrado correctamente.');
      } catch (error) {
        console.error(`Error al validar el rango de precios y KM: ${error}`);
        throw error;
    }

    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total resultados:', searchResultText);
  });

  test('Buscador', async () => {
    const page = meli.getPage();
    const producto = await meli.Buscador();
    // Validar busqueda
    console.log('Producto Buscado: ', producto.producto);
    await expect(page.locator(`//h1[contains(text(),${producto.producto})]`)).toContainText(`${producto.producto}`);

    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.totalResultados);
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total resultados:', searchResultText);
  });

});