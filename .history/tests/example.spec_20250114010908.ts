import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.locator("//span[contains(text(),'Más tarde')]").click();
  await page.locator("//a[@class='nav-menu-categories-link']").hover();
  await page.locator("//a[text()='Categorías']").click();
  await page.locator("//li//a[text()='Construcción']").click();
  //await page.getByRole('link', { name: 'Ver más 🛁 Seleccionados para' }).click();
  await page.locator("//span[contains(text(),'🛁 Seleccionados para tu baño 🚿')]/..").click();
  await page.locator("//span[text()='Grifería para Baño']").click();
  await expect(page.locator('h1')).toContainText('Grifería para Baño');
  // Validar que el resultado de búsqueda es visible
  const searchResultLocator = page.locator("//div[@class='ui-search-search-result']");
  await expect(searchResultLocator).toBeVisible();

    // Obtener y mostrar el contenido del elemento en la consola
  const searchResultText = await searchResultLocator.textContent();
  console.log('Contenido del elemento visible:', searchResultText);
});