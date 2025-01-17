import { test, expect, BrowserContext } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import dotenv from 'dotenv';
import { meliLocators } from '../pages/locators/meliLocators.ts';
dotenv.config();

test.describe('Mercadolibre Ejercicio 2', () => {

  test('Autos Usados', async ({  }) => {
    const page = meli.getPage();
    const { precioMinimoFormateado, precioMaximoFormateado, kmMinimoFormateado, kmMaximoFormateado } = await meli.selectVehiculos();
    

    try{
      const rangoPreciosXPath = `//div[contains(text(),"$${precioMinimoFormateado} a $${precioMaximoFormateado}")]`;
      const rangoKmXPath = `//div[contains(text(),"${kmMinimoFormateado} a ${kmMaximoFormateado} km")]`;

      // Validar el rango de precios en los resultados
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

  test('Compras Internacionales', async () => {
    const page = meli.getPage();
    const { precioMinimoFormateado, precioMaximoFormateado } = await meli.selectCompraInternacional();
    const rangoPreciosXPath = `//div[contains(text(),"$${precioMinimoFormateado} a $${precioMaximoFormateado}")]`;

    // Validar el rango de precios en los resultados
    await expect(page.locator(rangoPreciosXPath)).toContainText(`$${precioMinimoFormateado} a $${precioMaximoFormateado}`);

    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator(meliLocators.totalResultados);
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Total resultados:', searchResultText);

    await expect(page.locator("//p[contains(text(),'Compra internacional')]")).toContainText('Compra internacional');
  });

});