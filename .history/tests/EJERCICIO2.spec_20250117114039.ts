import { test, expect, BrowserContext } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import dotenv from 'dotenv';
import { meliLocators } from '../pages/locators/meliLocators.ts';
dotenv.config();

test.describe('Mercadolibre Ejercicio 2', () => {

  test('Buscador', async () => {
    try{
        await meli.irAPage();
        const producto = await meli.Buscador();
        // Validar busqueda
        console.log('Producto Buscado: ', producto.producto);
        await meli.validarTexto(`//h1[contains(text(),${producto.producto})]`,`${producto.producto}`);
        // Validar que el resultado de búsqueda es visible
        await meli.validarExistencia(meliLocators.totalResultados);
        // Obtener y mostrar el contenido del elemento en la consola
        const searchResultText=await meli.obtenerTexto(meliLocators.totalResultados);
        console.log('Total resultados:', searchResultText);
    } catch (error) {
        console.error(`Error en el test 'Buscador': ${error.message}`);
        throw error;
      }
  });

  
  test('Autos Usados', async ({  }) => {
    try{
        await meli.irAPage();
        const { precioMaximoFormateado, kmMinimoFormateado, kmMaximoFormateado } = await meli.selectVehiculos();
          const rangoPreciosXPath = `//div[contains(text(),"Hasta $ ${precioMaximoFormateado}")]`;
          const rangoKmXPath = `//div[contains(text(),"${kmMinimoFormateado} a ${kmMaximoFormateado} km")]`;

          // Validar el rango de precios y KM en los resultados
          await meli.validarTexto(rangoPreciosXPath,`Hasta $ ${precioMaximoFormateado}`);
          await meli.validarTexto(rangoKmXPath,`${kmMinimoFormateado} a ${kmMaximoFormateado} km`);
          console.log('Rango de precios y KM encontrado correctamente.');

        // Validar que el resultado de búsqueda es visible
        const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
        await expect(searchResultLocator).toBeVisible();
        // Obtener y mostrar el contenido del elemento en la consola
        const searchResultText = await searchResultLocator.textContent();
        console.log('Total resultados:', searchResultText);
    } catch (error) {
        console.error(`Error en el test 'Autos Usados': ${error.message}`);
        throw error;
      }
  });

});