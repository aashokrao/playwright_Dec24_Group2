//https://dev216290.service-now.com/login.do

import test, { expect } from "@playwright/test";

test(`01_Service Now`, async({page})=>{
    //Navigate to service now application
    await page.goto("https://dev216290.service-now.com/navpage.do")
    //Enter user name, password and click login
    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("Haswanth@13")
    await page.locator("#sysverb_login").click()

    await page.waitForLoadState("domcontentloaded")

    await page.getByLabel("All",{exact : true}).click()
    await page.getByPlaceholder("Filter").fill("Service Catalog")
    expect(page.getByText("Service Catalog",{exact:true}).nth(0)).toBeVisible()
    await page.getByText("Service Catalog",{exact:true}).nth(0).click()
    const insideFrame = page.frameLocator("#gsft_main")
    await insideFrame.getByText("Mobiles",{exact:true}).first().click()

    await insideFrame.getByText("Apple iPhone 13",{exact:true}).click() 

    await insideFrame.locator("//label[text()='No']").check()
    await insideFrame.locator("//select").first().selectOption("500MB [add $1.00]")
    const dropdown = insideFrame.locator("(//select)[1]/option")
    const optionsCount = await dropdown.count()
    console.log("Number of items count in the dropdown -->"+optionsCount)
    for(let i=0;i<optionsCount;i++){
        console.log(await dropdown.nth(i).innerText())
    }

    await insideFrame.locator("//label[text()='Starlight']").check()
    await expect(insideFrame.locator("//label[text()='Starlight']")).toBeChecked()

    await insideFrame.locator("//label[text()='256 GB [add $100.00]']").check()
    await expect(insideFrame.locator("//label[text()='256 GB [add $100.00]']")).toBeChecked()


    await insideFrame.locator("#oi_order_now_button").click()
    console.log("Status message : "+await insideFrame.locator(".notification span").nth(1).innerText())
    expect(await insideFrame.locator(".notification span").nth(1).innerText()).toBe("Thank you, your request has been submitted")

    console.log("Url of the page is:"+await page.title())
    console.log("Url of the page is:"+page.url())
    await page.waitForTimeout(3000)
})
