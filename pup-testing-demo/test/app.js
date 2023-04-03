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
        await page.goto("file:///E:/Capstone/PersonalTesting/index.html")
        await page.click("#AccGradUndButton")

        await page.type("#jsonform-9-elt-college", oJSONModelExpected.college)
        await page.type("#jsonform-9-elt-program", oJSONModelExpected.program)
        await page.type(
            "#jsonform-9-elt-academicYear",
            oJSONModelExpected.academicYear
        )
        await page.type(
            "#jsonform-9-elt-lastAccReview",
            oJSONModelExpected.lastAccReview
        )
        await page.type(
            "#jsonform-9-elt-deptSchool",
            oJSONModelExpected.deptSchool
        )
        await page.type(
            "#jsonform-9-elt-degreeLevel",
            oJSONModelExpected.degreeLevel
        )
        await page.type(
            "#jsonform-9-elt-personPreparingReport",
            oJSONModelExpected.personPreparingReport
        )
        await page.type(
            "#jsonform-9-elt-accreditationBody",
            oJSONModelExpected.accreditationBody
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
    // console.log(sJSONActual)
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
