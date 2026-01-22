import {test,expect} from '@playwright/test'

test('verfify the title & verify the element',async({page})=>{
    await page.goto('https://example.com')
    await expect(page).toHaveTitle('Example Domain')
    const title = await page.title()
     expect (title).toBe("Example Domain")
     expect(title).toContain('Example Domain')
    console.log(title);
    const element =page.locator("//h1[text()='Example Domain']")
    if(await element.isVisible()){
        let text = await element.innerText()
        console.log(text);
        
    }else{
        console.log('text is not visible');
        
    }
})

test.only("verify the elemet is appear",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await page.getByRole('button',{name:'Add Element'}).click()
    const box = await page.getByRole('button',{name:'Delete'})
    if(box.isVisible()){
        let print = await box.innerText()
        console.log(print);
        
    }else{
        console.log('the button is not function')        
    }
})