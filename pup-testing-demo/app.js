const puppeteer = require("puppeteer")

;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("file:///E:/Capstone/PersonalTesting/index.html")
    await page.click("#nonAccGradButton")
    await page.type("#jsonform-1-elt-college", "University of Nebraska at Omaha")
    await page.screenshot({ path: "example.png" })
    await page.pdf({ path: "example.pdf", format: "A4" })
    await browser.close()
})()