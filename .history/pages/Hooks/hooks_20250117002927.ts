import { test, BrowserContext } from '@playwright/test';
import { MeliPage } from '../MeliPage';
import { BasePage } from '../basePage';
import { invokeBrowser } from '../../Browser/browserManager';

let meli: MeliPage;
let base: BasePage;
let context: BrowserContext;
let browser;

test.beforeAll(async () => {
  browser = await invokeBrowser();
  context = await browser.newContext();
  const page = await context.newPage();

  
  meli = new MeliPage(page);
  base = new BasePage(page);
  await base.gotoPage("/");

});

test.afterAll(async () => {
  if (context) {
    console.log('Cerrando el contexto');
    await context.close();
  }
  if (browser) {
    console.log('Cerrando el navegador');
    await browser.close();
  }
});

// Exporta la variable page al final del archivo
export { meli, base };