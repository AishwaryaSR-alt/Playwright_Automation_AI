import{test,expect,Locator} from "@playwright/test"
 test("Action method verification",async({page})=>{
    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    const radiobtn: Locator=page.locator('#saving');
    const pensionbtn:Locator=page.locator('#pension');
    await pensionbtn.check();
    expect(radiobtn).not.toBeChecked();

    await page.waitForTimeout(3000);

 })

 test.only("Checkbox verification or different scenarios",async({page})=>{
     await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    //1.Select 1st checkbox
    const checkboxforPassport: Locator=page.locator('#passport');
    await checkboxforPassport.click();
    await expect(checkboxforPassport).toBeChecked();
  
    //2.capture all the checkbox and print the count 
    const checkboxes:string[] =['Passport','Student ID','Voter Card','Driving License'];
    const boxes:Locator[]=checkboxes.map(checkbox=>page.locator("[value='checkbox']"));    
     expect(boxes).toHaveLength(4);

     //select all the checkbox
     for(const checkbox of boxes)
     {
        await checkbox.check()
       await expect(checkbox).toBeChecked();
     }
     await page.waitForTimeout(3000);
   
 })