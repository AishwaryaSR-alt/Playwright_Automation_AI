import{test,expect,Locator} from "@playwright/test"

async function selectdate(targetdate:string,targetmonth:string,targetyear:string,calender:Locator)
{
        const monthselection=await calender.locator("[data-handler='selectMonth']").selectOption({label:targetmonth});
       const yearselection= await calender.locator("[class='ui-datepicker-year']").selectOption({label:targetyear});
       const datepick:Locator[]= await calender.locator(".ui-datepicker-calendar td").all();
           for(let dt of datepick)
           {
              const dates=await dt.innerText();
             if(dates===targetdate)
             {
                await dt.click();
                break;
             }
           }
        }






test("Verify the booking confirmation",async({page})=>{
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    await page.locator("[value='549']").click();
    await page.locator("[name='travname']").fill("Aish");
    await page.locator("[name='travlastname']").fill("rathod");
    await page.locator("#dob").click();
    await selectdate("23","Jan","2023",page.locator("#ui-datepicker-div"));
  
     const rd:Locator=page.locator("#sex_2");
     await rd.check();
     await expect(rd).toBeChecked();
    await page.locator("#fromcity").fill("Bangalore");
    await page.locator("#tocity").fill("mmhalli");
    await page.locator("#departon").click();
    await selectdate("2","Jul","2026",page.locator("#ui-datepicker-div"));

    await page.locator("[type='radio'][value='3']").click();
    await page.locator("#billing_email").fill("aish@gmail.com");

    await page.locator("[aria-label='Country']").click();
    await page.locator(".select2-search__field").fill("finland");
    await page.locator("[role='option']").click();
    await page.locator("#billing_address_1").fill("Blr");
    await page.locator("#billing_postcode").fill("123456789");
    await page.locator("#billing_city").fill("blrr");
    await page.locator("#billing_phone").fill("987654321");
    await page.locator("#place_order").click();




   await page.waitForTimeout(5000);

})