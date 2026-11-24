// import {test,expect, Locator} from "@playwright/test";
// test("To test radio button actions",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     let radiobtn:Locator=page.locator("#female");
//     await expect(radiobtn).toBeVisible();// can I see it
//     await expect(radiobtn).toBeEnabled();//Can I use it?
//     await radiobtn.check();
//     await expect(radiobtn).toBeChecked();//is it selected? if it is true then it will pas the testcase, else it will fail.
//    await page.locator("#sunday").check();
//    await page.waitForTimeout(5000);

//    //check all the checkbox
// const days: string[] = ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
// const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
// for(let ch of checkboxes)
// {
//     console.log(await ch.textContent());
//     await ch.check()
//     await expect(ch).toBeEnabled();

// }

// for(let chh of checkboxes.slice(-3))
// {
//     chh.uncheck();
//     await expect(chh).not.toBeChecked();
// }

// for(let ch of checkboxes)
// {
//     if(await ch.isChecked())
//     {
//         ch.uncheck();
//         await expect(ch).not.toBeChecked();

//     }
//     else
//     {
//         await ch.check();
//         await expect(ch).toBeChecked();
//     }
// }
//     await page.waitForTimeout(5000);

// })



import {test,expect, Locator} from "@playwright/test"
test("Verify the single select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/"); 
    await page.waitForTimeout(5000);
    await page.locator("#country").selectOption({index:3});
    await page.locator('#country').selectOption({value:'usa'});
    await page.locator('#country').selectOption({label:'United States'})
    await page.locator('#country').selectOption('India');
    await page.waitForTimeout(10000);

    let number:string[]=await page.locator('#country option').allTextContents();
    console.log(number);
    expect(number.length).toBe(10);

    //to check option present in the dropdown
    let optionpresent:string[]=(await page.locator('#country option').allInnerTexts()).map(text=>text.trim())
    console.log(optionpresent);
    expect(optionpresent).toContain('India');
})

test.only("Verify multiselect dropdown",async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
//    await page.locator('  

   //sort the
   const orgoption:string[]=(await page.locator('#colors option').allTextContents()).map(text=>text.trim());
    const orglist:string[]=[...orgoption];
    let duplist:string[]=[...orgoption].sort();
    console.log(orglist);
    console.log(duplist);
    expect(duplist).toEqual(orglist);

})