//This code work for both fast and future, we can have the code by using the function
import {test,expect,Locator,Page} from "@playwright/test"
 async function selectDate(targetdate:string,targetyear:string,targetmonth:string,page:Page,isFuture:boolean)
 {
    while(true)
    {
         const currentmonth=await page.locator(".ui-datepicker-month").textContent();
         const currentyear=await page.locator(".ui-datepicker-year").textContent();
           if(currentmonth===targetmonth && currentyear===targetyear)
            {
                 //const datepic:Locator[]=await page.locator(".ui-datepicker-calendar tbody td").all();
                break;

            }
     if(isFuture)
     {
     //future
    await page.locator(".ui-datepicker-next ").click();
     }
     else{
    //past
    await page.locator(".ui-datepicker-prev").click();
     }
}

       const datepic:Locator[]=await page.locator(".ui-datepicker-calendar tbody td").all();
        for(let dt of datepic)
        {
            const datetext=await dt.innerText();
            if(datetext===targetdate)
            {
                   await dt.click();
                   break;
            }
        }
 }







test("Jquery datepicker",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const datepicker:Locator=page.locator("#datepicker");
await expect(datepicker).toBeVisible();

//using fill method
datepicker.fill("05/01/2026");
await page.waitForTimeout(3000);

//past the target date
const month="June";
const year="2023";
const date="23";

/*
//future target date
const month="June";
const year="2029";
const date="23";

*/

await selectDate(date, year, month, page, false);

 await page.waitForTimeout(3000);
})