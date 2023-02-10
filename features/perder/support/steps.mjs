import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright-core';

let  browser;

let  page;

Given("abrir la página del ahorcado", async function() {

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3000/ahorcado');

});


When("ingreso letra {string}", async function(letter) {
    const letra = letter;
    const boton = await page.getByTitle(letra);
    await boton.click();
});

Then("observo los resultados relevantes al perder", async function() {
    await page.screenshot({ path: 'fotos/perder/screenshot.png' });
    await browser.close();
});
