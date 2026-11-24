import{test,expect} from "@playwright/test"

const logintestData:string[][]=[
    ["practice","SuperSecretPassword!","valid"],
    ["invaliduser","test4567","invalid"],
    ["validuser@gmail","testxys","invalid"],
    ["","","invalid"],
]
for(const [username,password,validity] of logintestData)
{
    test.describe('login data driver test',async()=>{
     test(`login to the page ${username} and ${password}`,async({page})=>{
        await page.goto('https://practice.expandtesting.com/login?utm_source=chatgpt.com');
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#submit-login').click();

        if(validity.toLowerCase()==='valid'){
           const logoutlink= page.locator('a[href="/logout"]');
           await expect(logoutlink).toBeVisible({timeout:5000});

        }
        else
        {
             expect(page.locator("//b[contains(normalize-space(), 'invalid')]"));
            
        }



})
})
}