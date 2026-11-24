import { test,Locator,expect } from "@playwright/test";
test("Check the flight booking ",async({page})=>{
    await page.goto("https://blazedemo.com/");
    page.locator("[name='fromPort']").selectOption('Boston');
    page.locator("[name='toPort']").selectOption('London');
    await page.locator("[type='submit']").click();
    const pricelist:any=await page.locator(".table tbody tr td").allInnerTexts();
    let pri: string[] = [];
    for(const value of pricelist)
    {
        

          const pri:string[]=await page.locator('.table tbody tr td:nth-child(7)').allInnerTexts();
        
       
    }
     console.log(pri);
    //console.log(value);
    /*
    for(const price of pricelist)
    {
        const pz:string[]=await price.allInnerTexts();
        
           console.log(pz)
           // console.log(pz.join('\t'));

    }
    await page.waitForTimeout(3000);
    */
})

