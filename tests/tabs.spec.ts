import{expect,test,chromium} from "@playwright/test";
test("handle the tabs",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const parentPage=await context.newPage();
   await parentPage.goto("https://testautomationpractice.blogspot.com/");
  const [childpage]= await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()])

//    context.waitForEvent('page')// pending ,fulfilled,rejected
//     parentPage.locator("button:has-text('New Tab')").click();//opens new tab/new page

//Approach 1: switchbetween pages and get titles
const pages=context.pages();//returns an array
console.log("Number of pages created",pages.length);

console.log("Title of te pages created", await pages[0].title());
console.log("Title of te pages created",await  pages[1].title());

//Approach 2
console.log("Title of te pages created", await parentPage.title());
console.log("Title of te pages created",await  childpage.title());

})
