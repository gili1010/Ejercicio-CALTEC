import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByRole('button', { name: 'Más tarde' }).click();
  await page.locator("//a[@class='nav-menu-categories-link']").hover();
  await page.getByRole('button', { name: 'Categorías' }).click();
  //await page.getByRole('button', { name: 'Categorías' }).click();
  await page.getByRole('link', { name: 'Construcción' }).click();
  await page.getByRole('link', { name: 'Ver más 🛁 Seleccionados para' }).click();
  await page.locator("//span[text()='Grifería para Baño']").click();
  await expect(page.locator('h1')).toContainText('Grifería para Baño');
  await expect(page.locator("//div[@class='ui-search-search-result']")).toBeVisible();
  const searchResult = page.locator("//div[@class='ui-search-search-result']").textContent;
  console.log('Contenido del elemento visible:', searchResult);
});