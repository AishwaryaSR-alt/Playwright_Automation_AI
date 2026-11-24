import {test,expect} from '@playwright/test'
test('screenshots demo',async({page})=>{
   
    await page.goto("https://demowebshop.tricentis.com/")
    const timestamp=Date.now();

    //Page screenshot
  // await page.screenshot({ path: 'screenshot/homepage_' + timestamp + '.png' });

   //fullpage screenshot
  // await page.screenshot({path:'screenshot/fullpage_'+timestamp+'.png',fullPage:true})

  //element screenshot
  await page.locator("[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshot/element_'+timestamp+'.png'})

  await page.locator(".product-grid").screenshot({path:'screenshot/featuredproduct_'+timestamp+'.png'})
})

test.only('screenhot from config',async({page})=>
{
   
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@13');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
})
