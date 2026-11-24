import {test,expect,Locator} from "@playwright/test"
test("Verify the differe action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textbox: Locator=page.locator('#name');
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    const maxLength:string | null =await textbox.getAttribute("maxlength");
    expect(maxLength).toBe('15');

    await textbox.fill("Aishwarya");

   // console.log("input value of the first name:",await textbox.inputValue());

   const enteredValue: string=await textbox.inputValue();
   console.log("input value of the first name:",enteredValue);
   expect(enteredValue).toBe("Aishwarya");

})

//Radio button action
test("Radio button Actions",async({page})=>{
    
await page.goto("https://testautomationpractice.blogspot.com/");
 const radiobut: Locator=page.locator("input#male");
 await expect(radiobut).toBeVisible();
 await expect(radiobut).toBeEnabled();
 expect(await radiobut.isChecked()).toBe(false);

 await radiobut.click();
 //expect(radiobut.isChecked()).toBe(true);
 await expect(radiobut).toBeChecked();//Perferable
 await page.waitForTimeout(3000);
})


//CheckBox 
test.only("CheckBox Action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1.Select specific checkBox using getLabel and assert
  /*  const sundayCheckBox: Locator= page.getByLabel('Sunday');
    await sundayCheckBox.click();
    expect(sundayCheckBox).toBeChecked();

    await page.waitForTimeout(3000);
*/
    //2. Select all the checkBox 
    const days:string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const checkboxes:Locator[]= days.map(index=>page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

  /*  //3.Select all checkBox and assert each is checked
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
       
    }
*/
   /*  await page.waitForTimeout(3000);
    // 4. uncheck last three checkbox and assert
    for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(3000);
    //5. Toggle checkBoxes: if checked, uncheck; if uncheck,check. Assert state flipped
    for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);
*/
    //6.Randomly select the checkbox- select checkbox by index(1,3,6) and assert
   const index: number[]=[1,3,6];
   for(const i of index)
   {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
   }
   await page.waitForTimeout(3000);
 //7. Select the checkbox based on label
 const weekname:string="Friday";
 for(const label of days)
 {
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label)
        checkbox.check();
        await expect(checkbox).toBeChecked();
    }
 }



})






