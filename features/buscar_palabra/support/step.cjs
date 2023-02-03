
const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, By, Key, until } = require("selenium-webdriver");

Given("abro la página de Google", async function() {
  this.driver = await new Builder().forBrowser("chrome").build();
  await this.driver.get("https://www.google.com/");
});

When("busco la palabra {string}", async function(searchTerm) {
  const searchBox = await this.driver.findElement(By.name("q"));
  await searchBox.sendKeys(searchTerm, Key.RETURN);
});

Then("veo resultados relevantes para la búsqueda {string}", async function(searchTerm) {
  await this.driver.wait(until.titleContains(searchTerm));
});