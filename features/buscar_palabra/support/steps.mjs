import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright-core';

let  browser;

let  page;

Given('abro la página de Google', async () => {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.google.com.ar');
  });
When('busco la palabra {string}', async (query) => {
    await page.fill('input[name="q"]', 'playwright');
    await page.click('input[type="submit"]');
  });
Then('veo resultados relevantes para la búsqueda {string}', async (title) => {
    console.log(await page.title());
    await browser.close();
  });
