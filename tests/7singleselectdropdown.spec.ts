import {test,expect,Locator} from "@playwright/test"
test("Single select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //1)select option from the dropdown
/*  await page.locator('#country').selectOption('India');
  await page.locator('#country').selectOption({value:'uk'});
 await page.locator('#country').selectOption({label:'United Kingdom'});
  await page.locator('#country').selectOption({index:3});

//2)count the numeber of options in dropdown
 const count:Locator=page.locator('#country option');
 expect(count).toHaveCount(10);
*/
    //3) check the option present in the dropdown
  const dropdown: Locator=page.locator('#country');
  const drop:string[]=(await dropdown.allTextContents()).map(text=>text.trim());
  console.log(drop);
    await page.waitForTimeout(3000);

//4)printing options from the dropdown
for(const option of drop)
{
   //const op: string= option.replace(/\s/g, "");
    console.log(option);
}

})