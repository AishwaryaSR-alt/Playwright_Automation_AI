import {test,expect,Locator} from "@playwright/test"
test("Verify sorted dropdown ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   //const dropdown:string[]=( await page.locator('#colors>option').allTextContents()).map(text=>text.trim());// not sorted list
   const dropdown:string[]=( await page.locator('#animals>option').allTextContents()).map(text=>text.trim());// sorted list 

   const originalList=[...dropdown];
   const sortedList=[...originalList].sort();
   console.log("original list is:",originalList);
   console.log("sorted list is:",sortedList);

   expect(originalList).toEqual(sortedList);
   
   
   


    





})