import { test, BrowserContext, Browser,Page } from '@playwright/test';
import { MeliPage } from '../MeliPage';
import { invokeBrowser } from '../../Browser/browserManager';

let meli: MeliPage;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeEach(async () => {
  browser = await invokeBrowser();
  context = await browser.newContext();
  page = await context.newPage();
  meli = new MeliPage(page, context);
});

test.afterEach(async () => {
  if (context) {
    await context.close();
  }
  await page.close();
  await browser.close();
});

export { meli, page };