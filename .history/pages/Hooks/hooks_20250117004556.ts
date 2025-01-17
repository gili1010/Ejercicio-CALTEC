import { test, BrowserContext, Browser,Page } from '@playwright/test';
import { MeliPage } from '../MeliPage';
import { BasePage } from '../basePage';
import { invokeBrowser } from '../../Browser/browserManager';

let meli: MeliPage;
//let base: BasePage;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeEach(async () => {
  browser = await invokeBrowser();
  context = await browser.newContext();
  page = await context.newPage();

  
  meli = new MeliPage(page, context);
  //base = new BasePage(page, context);
  //await base.gotoPage("/");

});

test.afterEach(async () => {
  if (context) {
    console.log('Cerrando el contexto');
    await context.close();
  }
  // Cierra la página actual
  await page.close();
  await browser.close();
});

// Exporta la variable page al final del archivo
export { meli, page };