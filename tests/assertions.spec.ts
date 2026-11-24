import{test, expect} from "@playwright/test"

test('Playwright Assertions Demo',async({page})=>{

     await page.goto('https://demowebshop.tricentis.com/');
    //1.Auto-retrying asseration(automatically retries until it passes or times out)
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

    //Auto-retry: waits for the element to be visible and have the expected text
    await expect(page.locator('text=Welcome to our store')).toBeVisible();
    await expect(page.locator('//strong[normalize-space()="Featured products"]')).toHaveText("Featured products");

    //2.Non-retry asseration (executes immediately no retry)
    const title=await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy();

    const Welcometext=await page.locator('text=Welcome to our store').textContent();
    expect(Welcometext).toContain('Welcome');

    //3.Negating matcher
 //   await expect(page.locator("text=Welcome to our store")).not.toBeVisible();
  //  expect(Welcometext).not.toContain('Welcome');

    await page.waitForTimeout(5000);



})