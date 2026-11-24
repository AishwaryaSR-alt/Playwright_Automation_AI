import{test,expect,Locator} from "@playwright/test"
test("Confirm the booking date",async({page})=>{
    await page.goto("https://www.booking.com/");
    const closeBtn = page.locator('[aria-label*="Dismiss"]');

if (await closeBtn.isVisible()) {
    await closeBtn.click();
}
    await page.locator("[data-testid='searchbox-dates-container']").click();
    //Select the checkin date
    let checkinyear:string="2026";
    let checkinmonth:string="June";
    let checkindate :string="23";

    while(true)
    {
        const selection:string=await page.locator("[class='e7addce19e af236b7586']").nth(0).innerText();
        await page.waitForTimeout(3000);
        const month=selection.split(" ")[0];
        const year=selection.split(" ")[1];
        if(checkinmonth===month && checkinyear===year)
        {
            break;
        }
        else
        {
            await page.locator("[aria-label='Next month']").click();
        }

    }
    const alldateoffirst=await page.locator("table tbody").nth(0).locator("td").all();
    let checkindatebe=false;
    for(let dt of alldateoffirst)
    {
     const date:string=await dt.innerText();

        if(date==checkindate)
        {
             await dt.click();
             checkindatebe=true;
             break;
        }
    }
  //assertion to confirm check in date is confirmed
  expect(checkindatebe).toBeTruthy();
   
})