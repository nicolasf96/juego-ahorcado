import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright-core';

let  browser;

let  page;

Given("abrir la página del login del ahorcado", async function() {

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3000/');

});


When("ingreso mi usuario {string}", async function(user) {
    const usuario = user;
    await page.getByRole('textbox').fill(usuario);
    await page.screenshot({ path: 'fotos/login/ingresoscreenshot.png' });
    setTimeout(() => {
        
    }, 1500);
     
});

When("hago click en el boton comenzar", async function() {
    const boton= await page.getByRole('button');
    await boton.click();
     
});

Then("observo el mensaje de bienvenida", async function() {
    await page.screenshot({ path: 'fotos/login/bienvenidascreenshot.png' });
    await browser.close();
});
