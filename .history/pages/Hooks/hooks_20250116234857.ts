import { test, BrowserContext } from '@playwright/test';
import { MeliPage } from '../MeliPage';
import { BasePage } from '../basePage';
import { invokeBrowser } from '../../Browser/browserManager';

let meli: MeliPage;
let base: BasePage;
let context: BrowserContext;

test.beforeEach(async ({ browser }) => {
  browser = await invokeBrowser();
  context = await browser.newContext();
  const page = await context.newPage();
  meli = new MeliPage(page);
  base = new BasePage(page);
  await base.gotoPage("https://www.mercadolibre.com.ar/");
});

test.afterEach(async () => {
  await context.close();
});

// Exporta la variable page al final del archivo
export { meli, base };