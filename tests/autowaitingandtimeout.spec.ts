import {test,expect} from '@playwright/test';
test('Autowaiting and forcing',async({page})=>{
    test.setTimeout(500000);//50 secs
    await page.goto('https://demowebshop.tricentis.com/');

    //Assertions-- Auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

    //Actions -- Auto wait works
    await page.locator('#small-searchterms').fill("Laptop",{force:true});
    await page.locator('input[value="Search"]').click({force:true});
    
})