import {test,expect,Locator} from "@playwright/test"
test("Verify the dymanic table",async({page})=>
{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("table tbody");
    const row:Locator[]=await table.locator('tr').all();
    console.log("number of rows in a table",row.length);
    await page.waitForTimeout(3000);

    //step1: for all chrome process get the value of cpu process
    let cpu='';
  for(const rows of row)
  {
    const chrome:string=await table.locator('td').nth(0).innerText();

    if(chrome==="Chrome")
    {
        cpu= await rows.locator('td:has-text("%")').innerText();
       console.log("cpu element is",cpu);
       break;
    }
}
await page.waitForTimeout(3000);

//Step2 compare the cpu value with the yellow label
      let cpuValue:string=await page.locator("#chrome-cpu").innerText();
      if(cpuValue.includes(cpu))
      {
        console.log("the cpu value and yellow line value is same");
      }
      else{
        console.log("both are different");
      }


})