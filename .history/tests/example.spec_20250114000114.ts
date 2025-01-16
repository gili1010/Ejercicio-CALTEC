import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByLabel('Categorías').click();
  await page.getByRole('link', { name: 'Construcción' }).click();
  await page.getByRole('link', { name: 'Ver más 🛁 Seleccionados para' }).click();
  await page.getByRole('link', { name: 'Mostrar más' }).first().click();
  await page.getByRole('link', { name: 'Accesorios para Sanitarios' }).click();
  await page.getByRole('button', { name: 'Más tarde' }).click();
  await page.getByLabel('Grifería para Baño, 69282').click();
  await page.getByRole('button', { name: 'Más tarde' }).click();
  await page.getByRole('button', { name: 'Más tarde' }).click();
  await page.getByRole('button', { name: 'Confirmar código postal' }).click();
  await page.getByLabel('Elegí dónde recibir tus').locator('iframe').contentFrame().getByTestId('zip-code-textfield').click();
  await page.getByLabel('Elegí dónde recibir tus').locator('iframe').contentFrame().getByTestId('zip-code-textfield').fill('5186');
  await page.getByLabel('Elegí dónde recibir tus').locator('iframe').contentFrame().getByTestId('button-use-zipcode').click();
  await expect(page.locator('h1')).toContainText('Grifería para Baño');
  await expect(page.getByText('68.649 resultados')).toBeVisible();
});
