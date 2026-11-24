import {test,expect,Locator} from "@playwright/test";
test("Verify playwrite locators",async({page})=>{
     await page.goto("https://demo.nopcommerce.com/");
     //const logo:Locator=page.getByAltText("nopCommerce demo store")
     //await expect(logo).toBeVisible();

     //2 locate page.getByText();
      expect(page.getByText("Welcome to our store")).toBeVisible;
      //3 loacte by page.getByRole()
     await page.getByRole("link",{name:'Register'}).click();
     await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();

     //4Loacte element page.getByLabel
     await page.getByLabel('First name:').fill("Aihsu");

     //5 locate element page page.getByPlaceholder
     await page.getByPlaceholder('Search store').fill("Mac");
})