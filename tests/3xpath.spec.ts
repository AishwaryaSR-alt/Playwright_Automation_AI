import {test,expect,Locator} from "@playwright/test"
test("Verify the different xpath",async({page})=>{
   await page.goto("http://demowebshop.tricentis.com/");
    //1) Absolute xpath
    const absoluteloc:Locator=page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a/img[1]");
     await expect(absoluteloc).toBeVisible();
    //2)Realtive xpath
    const Relativexpath:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(Relativexpath).toBeVisible();
    //3)contain
   // const products:Locator=page.locator("//div/a[contains(@href,'computer')]");
    // const productcount:number=await products.count();
    // console.log("product count is:",productcount);
    // expect(productcount).toBeGreaterThan(0);
    // console.log("first computer", await products.first().textContent());
    // console.log("Last computer", await products.last().textContent());
    // console.log("Nth computer", await products.nth(2).textContent());

  //3)contains
    const products:Locator= page.locator("//h2/a[contains(@href,'computer')]")
   expect(products).toHaveCount(4);
   console.log(await products.first().textContent());
   console.log(await products.nth(1).textContent())

   let p:string[]=await products.allTextContents();
    for (let pro of p)
   {
        console.log(pro);
   }

   //4)start-with()
   const element:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");

   //5)text()
   const register:Locator=page.locator("//a[text()='Register']");
   await expect(register).toBeVisible();
   console.log(await register.textContent());

   //6)last()
   const colnm_last:Locator=page.locator("//div[@class='column follow-us']//li[last()]");

   //7)Position()

const position:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(position).toBeVisible();
console.log("position of the element",await position.textContent());




})

