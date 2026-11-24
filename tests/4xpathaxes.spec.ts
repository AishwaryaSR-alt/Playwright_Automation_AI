import {test,expect,Locator} from "@playwright/test"
test("Xpath axes demo",async({page})=>{
 await page.goto("https://www.w3schools.com/html/html_tables.asp");
 //1. self axis -select <td> element that contain "Germany"
    const elementvalue: Locator=page.locator("//td[normalize-space()='Alfreds Futterkiste']/self::td");  
    await expect(elementvalue).toHaveText("Alfreds Futterkiste");

//2.parent axis - get parent tr of the gemany cell
     const element:Locator= page.locator("//td[normalize-space()='Alfreds Futterkiste']/parent::tr");
     await expect(element).toContainText("Germany");

//3.child axis - get all <tr> children of the second <tr> in the table
   
const secondrow: Locator= page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(secondrow).toHaveCount(3);
 
//4. ancestor - to get ancestor for germany cell
 const ancestorelem :Locator=page.locator("//td[text()='Germany']/ancestor::table");
 await expect(ancestorelem).toHaveAttribute('id','customers');

//5. decendent - get all <td> element under the table
  const decendentelem:Locator=page.locator("//table[@id='customers']/descendant::td");
  await expect(decendentelem).toHaveCount(18);

//6. following - get the <td> that comes after germany 
const following: Locator=page.locator("//td[text()='Germany']/following::td[2]");
await expect(following).toHaveText("Francisco Chang");

//8 preceding element - get all <td> just before "Germany "
const precedingcell:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(precedingcell).toHaveText("Maria Anders");

//9 preceding-sibling - get <td> to the left of"Germany"
const precedingsibcell:Locator=page.locator("//td[text()='Germany']/preceding-sibling::td");
await expect(precedingsibcell).toHaveCount(2);

await expect(precedingsibcell.nth(0)).toHaveText("Alfreds Futterkiste")
await expect(precedingsibcell.nth(1)).toHaveText("Maria Anders")

await page.waitForTimeout(5000);


})
