import { test, expect, BrowserContext } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Mercadolibre Ejercicio 2', () => {

  // Obtener los filtros de las variables de entorno
  const filtros = {
    precioMinimo: process.env.npm_config_PRECIOMIN || process.env.PRECIOMIN || '0', // Valor por defecto 0
    precioMaximo: process.env.npm_config_PRECIOMAX || process.env.PRECIOMAX || '3000000', // Valor por defecto 5000000
  };

  test('Autos Usados', async ({  }) => {
    const page = meli.getPage();
    const { precioMinimoFormateado, precioMaximoFormateado } = await meli.selectVehiculos();

    const rangoPreciosXPath = `//div[contains(text(),"$${precioMinimoFormateado} a $${precioMaximoFormateado}")]`;

    // Validar el rango de precios en los resultados
    await expect(page.locator(rangoPreciosXPath)).toContainText(`$${precioMinimoFormateado} a $${precioMaximoFormateado}`);

    // Validar que el resultado de búsqueda es visible
    const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
    await expect(searchResultLocator).toBeVisible();
    // Obtener y mostrar el contenido del elemento en la consola
    const searchResultText = await searchResultLocator.textContent();
    console.log('Contenido del elemento visible:', searchResultText);
  });

  test('Compras Internacionales', async () => {
    const page = meli.getPage();
    await meli.selectCompraInternacional();

    await expect(page.locator("//p[contains(text(),'Compra internacional')]")).toContainText('Compra internacional');
  });

});