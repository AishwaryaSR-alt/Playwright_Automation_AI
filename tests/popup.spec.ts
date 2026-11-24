import{test,expect} from "@playwright/test"
test("handles popup",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    await Promise.all([ page.waitForEvent('popup'),page.locator("#PopUp").click()])
    // page.waitForEvent('popup')
    // await page.locator("#PopUp").click();
    const allPopUpWindows=context.pages();
    console.log("Number of pages/winddows",allPopUpWindows.length);
    console.log(allPopUpWindows[0].url());
    console.log(allPopUpWindows[1].url());
    for(let pw of allPopUpWindows)
    {
        const title=await pw.title();
        if(title.includes("Playwright"))
        {
            await pw.locator('.getStarted_Sjon').click();
            await pw.waitForTimeout(5000);
            //Perform any other actions
            await pw.close();

        }
    }
})