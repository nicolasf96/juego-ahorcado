import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright-core';

let  browser;

let  page;

Given("abro la página del ahorcado", async function() {

    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3000/');

});


When("ingreso la letra {string}", async function(letter) {
    const letra = letter;
    const boton = await page.getByTitle(letra);
    await boton.click();
});

Then("observo los resultados relevantes al ganar", async function() {
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
});