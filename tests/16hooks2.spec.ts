/*
open app --beforeAll()
login --beforeEach()
   find product
logout --afterEach()
login 
   add product to cart
logout--afterAll()

*/

import {test,expect,Page} from  '@playwright/test'

let page:Page;
test.beforeAll("open page",async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
})
test.afterAll('logout of page',async()=>{
    await page.close();
})
test.beforeEach("login",async()=>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill("test@123");
    await page.locator('button[onclick="logIn()"]').click();
    await page.waitForTimeout(2000);
})
test.afterEach('login',async()=>{
    await page.locator('#logout2').click();

})

test.describe("grouping",async()=>{
test('find the products',async()=>{
    const product=page.locator("#tbodyid .hrefch");
   const counts=await product.count();
   console.log('Number of product',counts);
   await expect(product).toHaveCount(9);
});

test('Add to cart',async()=>
{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    
    //handle alret before clcik
    page.once('dialog',async(dialog)=>{
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })

    await page.locator('[onclick="addToCart(1)"]').click();
})
})