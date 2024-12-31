import test, { chromium, firefox, webkit } from "@playwright/test";

test(`01_Login to SalesForce application using chromium`,async()=>{

    const browser = await chromium.launch({headless:false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");

    // Get the page Title
    const pageTitle = await page.title();

    // Get the URL
    const pageURL=await page.url();

    //Print the page title and URL in the console
    console.log(`Page title is "${pageTitle}" and the page url is "${pageURL}"`);

});

test(`Launch to salesforce application using firefox`, async()=>{

    const browser=await firefox.launch({headless:false});
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://login.salesforce.com/");
    console.log("Get the browser type :"+await browser.browserType().name());
})

test(`Launch to salesforce application using webtoolkit`, async()=>{

    const browser=await webkit.launch({headless:false});
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://login.salesforce.com/");
    console.log("Get the browser type :"+await browser.browserType().name());
})