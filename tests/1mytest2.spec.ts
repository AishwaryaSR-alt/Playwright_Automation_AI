import {test,expect} from "@playwright/test";

test("Verify URL of the page",async({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL(/testautomationpractice/);

})