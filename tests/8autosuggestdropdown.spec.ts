import{test,expect,Locator} from "@playwright/test"
test("Verify autosuggest dropdown",async({page})=>{
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_6o3s351fev_e&adgrpid=150668181581&hvpone=&hvptwo=&hvadid=809058944351&hvpos=&hvnetw=g&hvrand=8282657950892620962&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198856&hvtargid=kwd-300061672064&hydadcr=5621_2499480&gad_source=1");
    await page.locator("#twotabsearchtextbox").fill("smart");
    await page.waitForTimeout(3000);
    const dropdown: Locator=page.locator("div>[role='row']");
   const count= await dropdown.count();
   // console.log(count);
  /*  for(let i=0;i<count;i++)
    {
       const option: string | null=await dropdown.nth(i).textContent();
       console.log("element contains:",option);
    }
       */

    //select only one element from the auto suggest
    for(let i=0;i<count;i++)
    {
        const text:string=await dropdown.nth(i).innerText();
        if(text=='smart tv 32')
        {
           await dropdown.nth(i).click();
           break;
          
        }
    }
})