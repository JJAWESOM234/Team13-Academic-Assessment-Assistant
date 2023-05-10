const puppeteer = require("puppeteer")

var oJSONModelExpected = {
    college: "University of Nebraska at Omaha",
    program: "Computer Science",
    academicYear: "2023",
    lastAccReview: "2021",
    deptSchool: "IS&T",
    degreeLevel: "Masters",
    personPreparingReport: "John Smith",
    accreditationBody: "BODY",
}

function fnInitialTestingDemo(callback) {
    ;(async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto("http://localhost:3000/")
        await page.click(".MuiTab-root:nth-child(1)")

        await page.type("#/properties/head/properties/college-input", oJSONModelExpected.college)
        await page.type("#/properties/head/properties/program-input", oJSONModelExpected.program)
        await page.type(
            "#/properties/head/properties/academicYear-input",
            oJSONModelExpected.academicYear
        )
        await page.type(
            "#/properties/head/properties/dateRange-input",
            oJSONModelExpected.lastAccReview
        )
        await page.type(
            "#/properties/head/properties/deptSchool-input",
            oJSONModelExpected.deptSchool
        )
        await page.type(
            "#/properties/head/properties/degreeLevel-input",
            oJSONModelExpected.degreeLevel
        )
        await page.type(
            "#/properties/head/properties/preparer-input",
            oJSONModelExpected.personPreparingReport
        )
       

        await page.click("#submitForm")

        await page.focus("#returnJSON")
        var jsonReturnActual = await page.$eval(
            "#returnJSON",
            (el) => el.textContent
        )
        // console.log(jsonReturnActual.trim())
        await page.screenshot({ path: "example.png" })
        await page.pdf({ path: "example.pdf", format: "A4" })
        await browser.close()

        callback(jsonReturnActual)
    })()
}

QUnit.module("fnInitialTestingDemo", (hooks) => {
    QUnit.test("Initial Portion of the form", (assert) => {
        const done = assert.async()
        fnInitialTestingDemo((res) => {
            assert.true(fnCompareJSONModels(res))
            done()
        })
    })
})

function fnCompareJSONModels(sJSONActual) {
    // console.log("\n\n\n\n\n")
    console.log(sJSONActual)
    console.log("\n\n\n\n\n")
    console.log(oJSONModelExpected)

    var oJSONActual = JSON.parse(sJSONActual)
    
    
    console.log("\n\n\n\n\n")
    console.log(oJSONActual)
    
    var bSameModel = true
    
    // We are only testing these segments of the form for now
    var aTestingSet = [
        "college",
        "program",
        "academicYear",
        "lastAccReview",
        "deptSchool",
        "degreeLevel",
        "personPreparingReport",
        "accreditationBody",
    ]

    for (let [key1, valueActual] of Object.entries(oJSONActual)) {
        for (let [key2, valueExp] of Object.entries(oJSONModelExpected)) {
            if (aTestingSet.includes(key1) && key1 === key2) {
                if (valueActual !== valueExp) {
                    bSameModel = false
                }
            }
        }
    }
    return bSameModel
}
