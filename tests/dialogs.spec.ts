//alret(),confirm(),prompt() dialogs/JSalerts
//1) BY default, dialogs are autodismissed by playwright, so you don't have to handle them.
//2)However, you can register a dialog handler before the action that triggers the dialog to either 
//dialog.accept() or dialog.dismiss() it.


import {expect,test} from "@playwright/test";
test("verify the different dialogs",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   //Register a dialog handler
   page.on('dialog',(dialog)=>{
    console.log("dialog type",dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain("alert");
    console.log("dialog text:",dialog.message());//returns message from dialog
    expect(dialog.message()).toContain("I am an alert ");
    dialog.accept();
   })


  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);
 
})

test("verify the confirmation dialogs",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   //Register a dialog handler
   page.on('dialog',(dialog)=>{
    console.log("dialog type",dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain("confirm");
    console.log("dialog text:",dialog.message());//returns message from dialog
    expect(dialog.message()).toContain("Press");
    dialog.dismiss();
   })


  await page.locator("#confirmBtn").click();
  const text:string=await page.locator("#demo").innerText();
  expect(page.locator('#demo')).toHaveText("You pressed Cancel!")
  await page.waitForTimeout(5000); 

})

test.only("verify the prompt dialogs",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   //Register a dialog handler
   page.on('dialog',(dialog)=>{
    console.log("dialog type",dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain("prompt");
    console.log("dialog text:",dialog.message());//returns message from dialog
    expect(dialog.message()).toContain("Please");

    expect(dialog.defaultValue()).toContain("Harry Potter");// Checks default value
    dialog.accept("aish");
    
   })


  await page.locator("#promptBtn").click();
  const text:string=await page.locator("#demo").innerText();
  console.log("Output text",text);
  await expect(page.locator('#demo')).toHaveText("Hello aish! How are you today?")
  await page.waitForTimeout(5000); 

})