import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByRole('button', { name: 'Más tarde' }).click();
  await page.locator("//a[@class='nav-menu-categories-link']").hover();
  await page.getByRole('button', { name: 'Categorías' }).click();
  //await page.getByRole('button', { name: 'Categorías' }).click();
  await page.getByRole('link', { name: 'Construcción' }).click();
  await page.getByRole('link', { name: 'Ver más 🛁 Seleccionados para' }).click();
  await page.getByLabel('Grifería para Baño, 69579').click();
  await expect(page.locator('h1')).toContainText('Grifería para Baño');
  await expect(page.getByText('68.649 resultados')).toBeVisible();
});