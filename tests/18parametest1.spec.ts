import {test,expect} from "@playwright/test"

//Data passed 
const item:string[]=['laptop','Gift card','smartphone','Monitor'];
/*
//Using for of loop
for(const inSearch of item){
test(`Verify the items ${inSearch}`,async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
   await page.locator("#small-searchterms").fill(inSearch);
   await page.locator("[type='submit']").click();
   await expect(page.locator('h2 a').nth(0)).toContainText(inSearch,{ignoreCase:true});
})
}
*/
/*
//usig for each loop
item.forEach((inSearch)=>{
test(`Verify the items ${inSearch}`,async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
   await page.locator("#small-searchterms").fill(inSearch);
   await page.locator("[type='submit']").click();
   await expect(page.locator('h2 a').nth(0)).toContainText(inSearch,{ignoreCase:true});
})
})
*/

//using describe
test.describe("searching item",async()=>{
    item.forEach((inSearch)=>{
test(`Verify the items ${inSearch}`,async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
   await page.locator("#small-searchterms").fill(inSearch);
   await page.locator("[type='submit']").click();
   await expect(page.locator('h2 a').nth(0)).toContainText(inSearch,{ignoreCase:true});
})
})
})