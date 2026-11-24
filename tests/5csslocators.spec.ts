import {test, expect,Locator} from "@playwright/test"
test("Verify css loactor",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
  // const searchbox:Locator= page.locator("#small-searchterms");
  // await searchbox.fill("T-shirt");
  //1) tag#id
 // await page.locator("#small-searchterms").fill("T-shirt");

  //2) tag.class
 //await page.locator(".search-box-text").fill("Tops");

 //3) tag[attribute=value]
 //await page.locator("[value=Search]").fill("shirt");
 await page.waitForTimeout(5000);

 //4) tag.class[attribute=value]
 await page.locator("input.search-box-text[name='q']").fill("pant");

 //Short cuts
 //starts-with can also be used like ^
 await page.locator("[id^=small]").fill("aishu");
 await page.waitForTimeout(5000);

 //2)end-with $ symbole
 await page.locator("[id$=terms]").fill('bhavya');
 await page.waitForTimeout(5000);

 //3)contains * symbole
 await page.locator("[id*=term]").fill("Mac");
 await page.waitForTimeout(5000);

 //:not 
 page.locator(".search-box-text:not(.button-1)").fill("Cheese");
 await page.waitForTimeout(5000);

 await page.locator(":not(.search-box-text)[value='Search']").click();
  await page.waitForTimeout(2000);


})