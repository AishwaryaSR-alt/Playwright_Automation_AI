import{test,expect,Locator} from "@playwright/test"
test("Comparing the methods",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const options:Locator=page.locator(".product-title");//6
    //1) inner text and textContent
   // console.log("1st element",await options.nth(1).innerText());
   console.log("1st element",await options.nth(1).textContent());
    await page.waitForTimeout(3000);

    //2) using allInnerText() and allTextContents
    const count=await options.count();
   /* for(let i=0;i<count;i++)
    {
        //Inner text extract white space 
        //const products:string=await options.nth(i).innerText();
       // console.log(products);

       //textcontent include white space hidden element
        //const products:string | null=await options.nth(i).textContent();
        //console.log(products);

        //using trim on textContent
       // const products:string | null=await options.nth(i).textContent();
       // console.log(products?.trim());
    }
*/

    //2) allInnerText() and allTextContents()
    //const productsName:string[]=await options.allInnerTexts();
    //console.log(productsName);
    

    //allTextContents()
   // const productsName:string[]=await options.allTextContents();
   // console.log(productsName);

   //using trim
  // const productsName:string[]=( await options.allTextContents()).map(text=>text.trim());
  //  console.log(productsName)

  //all()
  const products:Locator[]=await options.all();
  console.log(products);
  console.log(await products[1].innerText());
  for(const ops of products)
  {
    console.log(await ops.innerText());
  }
   for(let i in products)
   {
    console.log(await products[i].innerText())
   }


})