import {test,expect,Page} from "@playwright/test";
test("autheticated popup",async({browser})=>{
    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const page= await context.newPage();

    //Approach 1: drirectly pass login along the url
    //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    //await expect(page.locator("div[class='example'] p")).toBeVisible();

    //Approach 2:Pass the login along the browser context
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await expect(page.locator("div[class='example'] p")).toBeVisible();
    await page.waitForTimeout(5000);
})