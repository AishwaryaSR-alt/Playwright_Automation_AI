import{test,expect} from "@playwright/test";
test("Verify the title of page",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   let titlee:string= await page.title();
   console.log(titlee);
     expect(page).toHaveTitle("Automation Testing Practice");
})