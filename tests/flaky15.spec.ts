import{test,expect} from '@playwright/test'
test.only('flaky test runs',async({page,context})=>

{  
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({ timeout: 10000 });
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

})