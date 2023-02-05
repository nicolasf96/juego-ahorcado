
import { Given, When, Then } from "@cucumber/cucumber";
import { Builder, By, Key, until } from "selenium-webdriver";


Given("abro la página de Google", async function() {
  this.driver = await new Builder().forBrowser("chrome").build();
  await this.driver.get("https://www.google.com/");
});

When("busco la palabra Voxed", async function(searchTerm) {
  const searchBox = await this.driver.findElement(By.name("q"));
  await searchBox.sendKeys(searchTerm, Key.RETURN);
});

Then("veo resultados relevantes para la búsqueda Voxed", async function(searchTerm) {
  await this.driver.wait(until.titleContains(searchTerm));
});