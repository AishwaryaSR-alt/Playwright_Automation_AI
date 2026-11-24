import {test,expect,Locator} from "@playwright/test"
test("Multiselect dropdown ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //select option from the dropdown(4 ways)
   // page.locator("#colors").selectOption(['Red','Green','Blue']);//by visible text

    //select by attribute value
   // await page.locator('#colors').selectOption(['red','green','white']);
      

    //select by label
   // await page.locator('#colors').selectOption([{label:'Red'},{label:'Yellow'}]);
   
   //select by index
   await page.locator('#colors').selectOption([{index:0},{index:3}]);
   await page.waitForTimeout(3000);

   //2 count number of element in the dropdown
   const num:Locator= page.locator('#colors>option');
   await expect(num).toHaveCount(7);

   //3) check option is present in dropdown
    const op:string[]=(await num.allTextContents()).map(text=>text.trim());
    console.log(op);

    expect(op).toContain('Green');
    //4) printing options from the dropdown

    for(const option of op)
    {
        console.log(option);
    }
})