//this code only work either for past or future
import {test,expect,Locator} from "@playwright/test"
 test("JQuery datepicker",async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
const datepicker:Locator=page.locator("#datepicker");
expect(datepicker).toBeVisible();

//using fill method
datepicker.fill("05/01/2026");
await page.waitForTimeout(3000);

//select the target date
const month="June";
const year="2023";
const date="23";

while(true)
{
     const currentmonth=await page.locator(".ui-datepicker-month").textContent();
     const currentyear=await page.locator(".ui-datepicker-year").textContent();
     if(currentmonth===month && currentyear==year)
     {
       //const datepic:Locator[]=await page.locator(".ui-datepicker-calendar tbody td").all();
       break;

     }
     //future
   // await page.locator(".ui-datepicker-next ").click();
    //past
    await page.locator(".ui-datepicker-prev").click();
}
       const datepic:Locator[]=await page.locator(".ui-datepicker-calendar tbody td").all();
        for(let dt of datepic)
        {
            const datetext=await dt.innerText();
            if(datetext===date)
            {
                   await dt.click();
            }
        }

 await page.waitForTimeout(3000);
})