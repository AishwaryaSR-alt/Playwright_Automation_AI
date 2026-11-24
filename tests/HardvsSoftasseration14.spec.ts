import {test,expect} from "@playwright/test"
test('soft and hard asseration',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    //Hard asserations
    /*
    await expect(page).toHaveTitle('Demo Web shop2');// failed
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

   const logo= page.locator('img[alt="Tricentis Demo Web Shop"]');
   await expect(logo).toBeVisible();
   */
  //Soft asseration
   await expect.soft(page).toHaveTitle('Demo Web shop2');// failed
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

   const logo= page.locator('img[alt="Tricentis Demo Web Shop"]');
   await expect.soft(logo).toBeVisible();
   await page.waitForTimeout(5000);

})