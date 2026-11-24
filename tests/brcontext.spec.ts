import{expect,test,chromium,Page} from "@playwright/test";
test("Browser context demo",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
   const page1=await context.newPage();
   const page2=await context.newPage();
   console.log("length of the page",context.pages().length)
   //await page.goto("https://testautomationpractice.blogspot.com/");
   await page1.goto("https://www.selenium.dev/");
   expect(page1).toHaveTitle("Selenium");
   await page2.goto("https://playwright.dev/");
   expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
   await page1.waitForTimeout(5000);
      await page2.waitForTimeout(5000);
})