import {test,expect,Locator} from "@playwright/test"
test("Verify the static table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options:Locator=page.locator("[name='BookTable']");
    await expect(options).toBeVisible();
    //count the number of rows
   const row:Locator= page.locator("table[name='BookTable'] tbody tr");//7
   //const totalrow=await row.count();
   console.log("total row count",await row.count());

   //count the number of column
   const col:Locator=row.locator("th");
   const totalcol:number=await col.count();
   console.log("total column count",totalcol);

   await expect(col).toHaveCount(4);

   //3)Read all the element fro row 2nd
   const secoundrow:Locator=row.nth(2).locator("td");
  const second:string[]=await secoundrow.allInnerTexts();
  console.log(second);
  await expect(secoundrow).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);
  for(const seconds of second)
  {
    console.log(seconds);
  }

  //4)Read all the element from the table expect header

//  const allelement:Locator= row.locator("td");
//  const elements:string[]=await allelement.allTextContents();
//  console.log(elements);
//  for(const ele of elements)
//  {
//     console.log(ele);
//  }

   console.log("printin the element in the table...")
  const allrowdata:Locator[]=await row.all()
  for(let rows of allrowdata.slice(1))
  {
    const cols=await rows.locator('td').allInnerTexts();
    console.log(cols.join('\t'));
  }

  //5)print book name where author is mukesh
  for(let rows of allrowdata.slice(1))
  {
    const cells :any=await rows.locator('td').allInnerTexts();
    const author=cells[1];
    const book=cells[0];
    if(author=='Mukesh')
    {
        console.log(author,book);
        
    }
  }

  //calculate the total price
  let totalPrice=0
   for(let rows of allrowdata.slice(1))
  {
    const cells :any=await rows.locator('td').allInnerTexts();
    const price=cells[3];
    totalPrice=totalPrice+parseInt(price);
  }
   console.log(totalPrice);
 })