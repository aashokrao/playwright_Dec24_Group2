import test, { expect } from "@playwright/test";

test("TC01_Salesforce-Marketing-Create Lead",async({page})=>{

    await page.goto("https://testleaf-11e-dev-ed.develop.my.salesforce.com/")
    await page.locator("#username").fill("aashokrao@gmail.com") 
    await page.locator("#password").fill("Haswanth@13")
    await page.locator("#Login").click()
    await page.waitForTimeout(5000)
    //4. Step: Click on the App Launcher toggle button.
    await page.locator("//span[text()='App Launcher']").click()
    await page.waitForTimeout(5000)
    //5. Step: Click on the View All link. 
    await page.locator("//button[text()='View All']").click();
    //6. Step: Type ‘Marketing’ in the search box and click on the Marketing link
    await page.getByPlaceholder("Search apps or items...").fill("Marketing")
    //7. Step: Navigate to the Leads tab from the Marketing dashboard.
    await page.locator(".slds-app-launcher__tile-body p mark").click();
    //8. Step: Click on the New button to create a lead.
    await page.getByTitle("Leads").click()
    await page.locator("//div[text()='New']").click()
    //9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data
    //Select the salutation
    // await page.waitForTimeout(3000)
    await page.waitForSelector("[name='salutation']")
    await page.locator("[name='salutation']").click();
    await page.getByTitle("Mr.").click()
    //Enter firstName,LastName, Company and click save button
    const fname="fnName"
    await page.getByPlaceholder("First Name").fill(fname)
    await page.getByPlaceholder("Last Name").fill("lnName")
    await page.locator("[name='Company']").fill("TestLeaf")
    //10. Step: Click on the Save button.
    await page.locator("[name='SaveEdit']").click()
    await page.waitForSelector("//div[contains(@id,'toastDescription')]")
    const leadCreatedMessage=await page.locator("//div[contains(@id,'toastDescription')]").textContent()
    console.log("Lead created message is :"+leadCreatedMessage)
    expect(leadCreatedMessage).toContain("was created")
    // await page.locator("//div[contains(@id,'toastDescription')]").isDisabled()
    // await page.pause()
    // Need to verify the message
    // await page.waitForLoadState('networkidle')
    await page.waitForSelector("//button[text()='Submit for Approval']//following::button[1]")
    //11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link
    await page.locator("//button[text()='Submit for Approval']//following::button[1]").click()
    await page.locator("//span[text()='Convert']").click()
    await page.waitForTimeout(5000)
    //12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.
    const opptButton=page.locator("//span[text()=' Create New Opportunity']//following::button[1]")
    const opptButtonInnerText=await opptButton.innerText()
    await opptButton.click();
    const opptName=page.locator("//span[text()=' Create New Opportunity']//following::input[1]")
    // const existingOpportunityName=await opptName.innerText()
    console.log("Created opportunity name is :"+opptButtonInnerText)
    const newLeadName=opptButtonInnerText+"NewName1"
    await opptName.fill(newLeadName)
    //13. Step: Click on the Convert button.
    await page.locator("//button[text()='Convert']").click()
    const leadConvertedMessage=await page.locator(".panel h2").textContent()
    console.log("Lead converted message is --> "+leadConvertedMessage)
    //14. Step: Click on the Go to Leads button.
    await page.locator("//button[text()='Go to Leads']").click()
    //15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’.

    await page.waitForTimeout(3000)
    await page.locator("[name='Lead-search-input']").fill(fname)
    await page.focus("[name='Lead-search-input']")
    await page.keyboard.press('Enter')
    // await page.waitForSelector("")
    const searchMessage=await page.locator("//span[text()='No items to display.']").first().innerText()
    expect(searchMessage).toBe("No items to display.")
    //16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead
    await page.locator("a[title='Opportunities']").click()
    await page.waitForTimeout(5000)
    const searchOpprtName=await page.locator("//tbody/tr[1]/th[1]//a").innerText()
    console.log("Name in the opportunity page is "+searchOpprtName)
    // await page.pause()

})
