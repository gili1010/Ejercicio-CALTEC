import { test, BrowserContext } from '@playwright/test';
import { MeliPage } from '../MeliPage';
import { BasePage } from '../basePage';
import { invokeBrowser } from '../../Browser/browserManager';

let meli: MeliPage;
let base: BasePage;
let context: BrowserContext;

test.beforeEach(async () => {
  const invokedBrowser = await invokeBrowser();
  context = await invokedBrowser.newContext();
  const page = await context.newPage();

  
  meli = new MeliPage(page);
  base = new BasePage(page);
  await base.gotoPage("/");

    // Espera a que la página se cargue completamente
    await page.waitForLoadState('load');
});

test.afterEach(async () => {
  if (context) {
    await context.close();
  }
});

// Exporta la variable page al final del archivo
export { meli, base };