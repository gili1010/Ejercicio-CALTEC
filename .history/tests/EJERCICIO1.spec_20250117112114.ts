import { test, expect } from '@playwright/test';
import { meli } from '../pages/Hooks/hooks.ts';
import { meliLocators } from "../pages/locators/meliLocators.ts";

test.describe('Mercadolibre', () => {

  test('Grifería para Baño', async ({  }) => {
      try{
        await meli.irAPage();
        await meli.selectGriferia();

        await meli.validarTexto(meliLocators.ValidarModuloGriferia,'Grifería para Baño');
        //obtener categoria y mostrarlo por consola
        const ModGriferia=await meli.obtenerTexto(meliLocators.ValidarModuloGriferia);
        console.log('Categoria:', ModGriferia);
        // Validar que el resultado de búsqueda es visible
        await meli.validarExistencia(meliLocators.totalResultados);
        const searchResultText=await meli.obtenerTexto(meliLocators.totalResultados);
        // Obtener y mostrar el contenido del elemento en la consola
        console.log('Total de resultados: ', searchResultText);
    } catch (error) {
        console.error(`Error en el test 'Grifería para Baño': ${error.message}`);
        throw error;
    }
  });

  test('Accesorios para Celulares', async () => {
    try{
        const page = meli.getPage();
        await meli.irAPage();
        await meli.selectCelulares();

        await expect(page.locator(meliLocators.ValidarModuloAccesoriosCelulares)).toContainText('Accesorios para Celulares');
        const modulo = page.locator(meliLocators.ValidarModuloAccesoriosCelulares);
        const ModCelulares = await modulo.textContent();
        console.log('Categoria:', ModCelulares);
        await expect(page.locator(meliLocators.ValidarModuloCelulares)).toContainText('Celulares y Teléfonos');
    } catch (error) {
        console.error(`Error en el test 'Accesorios para Celulares': ${error.message}`);
        throw error;
    }
  });

  test('Ofertas del dia', async () => {
    try{
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
    } catch (error) {
        console.error(`Error en el test 'Ofertas del dia': ${error.message}`);
        throw error;
      }
  });

  test('Capsulas', async () => {
    try{
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
    } catch (error) {
        console.error(`Error en el test 'Capsulas': ${error.message}`);
        throw error;
      }
  });

});