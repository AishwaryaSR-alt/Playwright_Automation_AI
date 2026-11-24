import {test,expect,Locator} from "@playwright/test"
test("Verify the hidden dropdown",async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
 await page.locator("[type='submit']").click();
  await page.getByText('PIM').click();
  await page.locator('form i').nth(2).click();
  await page.waitForTimeout(3000);
  const options:Locator= page.locator("div>[role='option']");
  const text:string[]=await options.allTextContents();
  const count:number=await options.count();
  console.log(count);
 //print all the element 
 for(const op of text)
 {
    console.log("all options present here are:",op);
 }
 //select single element
 options.nth(1).click();
await page.waitForTimeout(3000);

})