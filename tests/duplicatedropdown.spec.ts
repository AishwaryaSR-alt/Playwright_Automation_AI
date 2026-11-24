import {test,expect,Locator} from "@playwright/test"
test("Verify sorted dropdown ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   //const dropdown:string[]=( await page.locator('#colors>option').allTextContents()).map(text=>text.trim());// having duplicate list
   const dropdown:string[]=( await page.locator('#animals>option').allTextContents()).map(text=>text.trim());// not having duplicate list 
    const myset=new Set<string>();
    const duplicates:string[]=[];
    for(const text of dropdown)
    {
        if(myset.has(text))
        {
            duplicates.push(text);
        }
        else{
            myset.add(text);
        }
    }
    console.log("duplicate element are",duplicates);
    if(duplicates.length>0)
    {
        console.log("duplicate option is preset",duplicates);
    }
    else{
        console.log("not found");
    }
   


    





})