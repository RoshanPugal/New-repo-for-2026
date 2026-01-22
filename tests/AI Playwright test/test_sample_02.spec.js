import{expect, page,test}from '@playwright/test'
import { on } from 'node:cluster'
import { only } from 'node:test'


test('verify the login credential',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.fill('//input[@id="username"]','student')
    await page.fill('//input[@id="password"]','Password123')
    await page.getByRole('button',{name:'Submit'}).click()
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')
    const msg=await page.locator('//h1[@class="post-title"]')
    if(await msg.isVisible()){
        let text = await msg.innerText()
        console.log(text);
        
    }else{
        console.log('the credential is wrong');
        
    }
})
test('verify the error msg',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.fill('//input[@name="username"]','student')
    await page.fill('//input[@name="password"]','password153')
    await page.getByRole('button',{name:'Submit'}).click()
    const msg1 = await page.locator('//div[@id="error"]')
    if(await msg1.isVisible()){
        let text1=await msg1.innerText()
        console.log(text1);
        
    }else{
        console.log('the credetial is some error');
        
    }
    expect(msg1).toHaveText('Your password is invalid!')
})

test('clear the existing text and reenter',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.fill('//input[@name="username"]','student')
    const username = await page.locator('//input[@name="password"]')
    await username.fill('wronguser')
    await username.fill('')
    await username.fill('student')
    const password =await page.locator('//input[@name="password"]')
    await password.fill('wrongpassword')
    await password.fill('')
    await password.fill('Password123')
    await page.getByRole('button',{name:'Submit'}).click()
    await page.screenshot({path:'tests/playwright test'+Date.now()+'smaple.png',fullPage:true})
    })
test('verify the dropdown method',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const optionloc = await page.locator('//select[@id="dropdown"]')

    await optionloc.selectOption({value:'1'})
    const opt1 =await  optionloc.inputValue()
    console.log(opt1);

    await optionloc.selectOption({label:'Option 2'})
    const opt2 = await optionloc.inputValue()
    console.log(opt2);
})    

test.only('verify the navigation',async({page})=>{
    await page.goto('https://www.google.com/')
    await page.fill('//textarea[@aria-label="Search"]','how to')
    await page.keyboard.down('ArrowDown')
    await page.keyboard.press('Enter')
    const title =await page.title()
    console.log(title);
    await page.goBack()
    const title1 = await page.title()
    console.log(title1);
    await page.goForward()
    const title2 = await page.title()
    console.log(title2);
    
    
})
