import {test,expect,Locator} from "@playwright/test"
test("Read data from all the table pages",async({page})=>{
    
     await page.goto("https://datatables.net/");
     let hasmorepage=true;
            let i=1;

     while(hasmorepage)
     {
       const rows:Locator[] = await page.locator("#example tbody tr").all();
          for(let row of rows)
              {
                const rowlog : string[]= await row.allInnerTexts();
              // console.log(await row.allInnerTexts());
                 console.log(rowlog.join('\t'));
              }
                 
             const nextButton:Locator= page.locator("[aria-label='Next']:has-text('›')");
            const isDisabled :any=await nextButton.getAttribute('class');//dt-paging-button disabled next
            
            if(isDisabled.includes('disabled'))
            {
              hasmorepage=false;
            }
            else{
              
              
              i++;
              console.log(i,"th row element are ************************************************************");
              await nextButton.click();
            }
     }
    })
       
    // filter the rows and check the rows count 
     test("verify the number of rows according to the page",async({page})=>
    {
        await page.goto("https://datatables.net/");
       const dropdown:Locator= page.locator("#dt-length-0");
         await dropdown.selectOption({label:'25'});
         //approach 1
         const rows:Locator[]=await  page.locator("#example tbody tr").all();
         expect(rows.length).toBe(25);

         //approach 2

         const rows2=page.locator('#example tbody tr');
         await expect(rows2).toHaveCount(25);

    })

    //searching the data in the table

     test.only("Search for specific data in table",async({page})=>
    {
        await page.goto("https://datatables.net/");
       const dropdown:Locator= page.locator("[type='search']");
       await dropdown.fill('Angelica Ramos');
      const rows:Locator[]=await  page.locator("#example tbody tr").all();
      if(rows.length>=1)
      {
        let matchFound=false;
        for(let row of rows)
        {
          const text=await row.innerText();
        if(text.includes('Angelica Ramos'))
        {
          console.log("element found");
          matchFound=true;
          break;
        }
      }
      }
      else{
        console.log("No matching element found");
      }

    })



