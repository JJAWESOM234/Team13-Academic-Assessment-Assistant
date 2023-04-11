const puppeteer = require("puppeteer")
const $ = (jQuery = require("jquery"))

var oJSONModelExpected = {
    college: "University of Nebraska at Omaha",
    program: "Computer Science",
    academicYear: "2023",
    preparer: "Josh Smith",
    deptSchool: "IS&T",
    degreeLevel: "Bachelors",
    dateRange: "01/01/2023 to 04/01/2023",
    studentLearningOutcomes: {
        studentLearning: [
            {
                programSLOsSLO1: "Students will learn python",
                programSLOsSLO1Common: "2",
            },
        ],
        bSegment: "Yes",
        cSegment: "No stakeholder involvement",
    },
    assessmentMethods: {
        assessmentMeasure: [
            {
                measureTitle: "Weekly Python Projects",
                measureDescription: "Students will complete projects in python",
                measureType: "Direct Measure",
                measurePoint: {
                    measurePointInProgram: "In Final Term of Program",
                    measurePointLocation: "Online",
                },
                measurePopulation: {
                    measurePopulationDropDown: "All Students",
                    measurePopulationDesc: "N/A",
                },
                measureDataFreq: "Once/semester",
                measureProficiencyThreshold: "80%",
                measureProficiencyTarget: "90%",
            },
        ],
        measureComplementDirect: "No additional measures",
    },
    dataCollection: {
        dataResultsTable: [
            {
                SLOmeasure: [
                    {
                        dataResultsSLO1Range: "01/01/2023 to 04/01/2023",
                        dataResultsSLO1NumStudents: 10,
                        dataResultsSLO1PercStudents: "85%",
                    },
                ],
            },
        ],
        dataSLOStatusTable: { dataSLOStatustable: [{ dataSLOStatus: "Met" }] },
        dataResultsDescription: "No Communication",
    },
    decisionsAndActions: [{ decisionsAndActionsSLO1: "Continue with SLO" }],
    additionalInformation: "No additional information",
}

/**
 * Function to handle the initial testing demo and setup of puppeteer and QUnit.
 * @param {Function} callback - Function to call after the async has finished.
 * @async
 */
function fnTestingCaseOne(callback) {
    ;(async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const timeout = 5000
        await page.goto("file:///E:/Capstone/PersonalTesting/index.html")
        await page.click("#TestingDesign2")

        //Global details consitant across each test
        {
            await page.type(
                "#jsonform-5-elt-college",
                oJSONModelExpected.college
            )
            await page.type(
                "#jsonform-5-elt-program",
                oJSONModelExpected.program
            )
            await page.type(
                "#jsonform-5-elt-academicYear",
                oJSONModelExpected.academicYear
            )
            await page.type(
                "#jsonform-5-elt-preparer",
                oJSONModelExpected.preparer
            )
            await page.type(
                "#jsonform-5-elt-deptSchool",
                oJSONModelExpected.deptSchool
            )
            await page.type(
                "#jsonform-5-elt-degreeLevel",
                oJSONModelExpected.degreeLevel
            )
            await page.type(
                "#jsonform-5-elt-dateRange",
                oJSONModelExpected.dateRange
            )

            await page.select(
                "#jsonform-5-elt-bSegment",
                oJSONModelExpected.studentLearningOutcomes.bSegment
            )

            await page.type(
                "#jsonform-5-elt-cSegment",
                oJSONModelExpected.studentLearningOutcomes.cSegment
            )

            await page.type(
                "#jsonform-5-elt-measureComplementDirect",
                oJSONModelExpected.assessmentMethods.measureComplementDirect
            )
            await page.type(
                "#jsonform-5-elt-dataResultsDescription",
                oJSONModelExpected.dataCollection.dataResultsDescription
            )
            await page.type(
                "#jsonform-5-elt-additionalInformation",
                oJSONModelExpected.additionalInformation
            )
        }

        // await page.type("input[name=program]", "hellop")

        await page.pdf({ path: "./test-pdfs/example.pdf", format: "A4" })
        await browser.close()

        callback(jsonReturnActual)
    })()
}

/**
 * Module for QUnit to test fnTestingCaseOne for the testing demo.
 */
QUnit.module("fnInitialTestingDemo", (hooks) => {
    QUnit.test("Initial Portion of the form", (assert) => {
        const done = assert.async()
        fnInitialTestingDemo((res) => {
            assert.true(fnCompareJSONModels(res))
            done()
        })
    })
})

/**
 * Custom function to provide a boolean value representing the equality of the two JSON models.
 * @param {String} sJSONActual - String representation of a JSON model.
 * @returns {Boolean} Reprents the equality of the two JSON models
 */
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
