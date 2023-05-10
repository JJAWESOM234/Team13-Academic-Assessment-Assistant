const puppeteer = require("puppeteer") // v13.0.0 or later
var _ = require("lodash")

var oJSONModelExpected = {
    college: "University of Nebraska at Omaha",
    program: "Computer Science ",
    academicYear: "2023",
    preparer: "Josh Smith",
    deptSchool: "IS&T",
    degreeLevel: "bahelors",
    dateRange: "01/01/2023 to 04/01/2023",
    SLOInformation: [
        {
            programSLOsSLO1: "Students will learn python",
            programSLOsSLO1Common: "2",
            assessmentMeasure: [
                {
                    measureTitle: "Weekly Python Projects",
                    measureDescription:
                        "Students will complete projects in python",
                    measureDomain: "Examination",
                    measureType: "Direct Measure",
                    measurePoint: {
                        measurePointInProgram: "In Final Term of Program",
                        measurePointLocation: "N/A",
                    },
                    measurePopulation: {
                        measurePopulationDropDown: "All Students",
                        measurePopulationDesc: "N/A",
                    },
                    measureDataFreq: "Once/semester",
                    measureProficiencyThreshold: "80%",
                    measureProficiencyTarget: "90%",
                    datacollection: {
                        dataResultsSLO1Range: "01/01/2023 to 04/01/2023",
                        dataResultsSLO1NumStudents: 65,
                        dataResultsSLO1PercStudents: "85%",
                    },
                },
            ],
            dataSLOStatus: "Met",
            decisionActions: "Continue with SLO",
        },
        {
            programSLOsSLO1: "Students will understand Agile Processes",
            programSLOsSLO1Common: "4",
            assessmentMeasure: [
                {
                    measureTitle: "Weekly meetings",
                    measureDescription:
                        "Ensure students are emulating a fast paced enviornment",
                    measureDomain: "Product",
                    measureType: "Indirect Measure",
                    measurePoint: {
                        measurePointInProgram: "In Final Year of Program",
                        measurePointLocation: "N/A",
                    },
                    measurePopulation: {
                        measurePopulationDropDown:
                            "Sample of Students - Describe below",
                        measurePopulationDesc: "50% of students",
                    },
                    measureDataFreq: "Once/year",
                    measureProficiencyThreshold: "88%",
                    measureProficiencyTarget: "95%",
                    datacollection: {
                        dataResultsSLO1Range: "02/01/2023 to 04/01/2023",
                        dataResultsSLO1NumStudents: 764,
                        dataResultsSLO1PercStudents: "88%",
                    },
                },
                {
                    measureTitle: "Task creation and completion rate",
                    measureDescription: "Encourages high throughput of tasks",
                    measureDomain: "Performance",
                    measureType: "Direct Measure",
                    measurePoint: {
                        measurePointInProgram: "In Final Term of Program",
                        measurePointLocation: "N/A",
                    },
                    measurePopulation: {
                        measurePopulationDropDown: "All Students",
                        measurePopulationDesc: "N/A",
                    },
                    measureDataFreq: "Once/semester",
                    measureProficiencyThreshold: "88%",
                    measureProficiencyTarget: "98%",
                    datacollection: {
                        dataResultsSLO1Range: "01/04/2023 to 04/01/2023",
                        dataResultsSLO1NumStudents: 5673,
                        dataResultsSLO1PercStudents: "89%",
                    },
                },
            ],
            dataSLOStatus: "Not Met",
            decisionActions:
                "Need to validate the number of measures and ensure they are enforced.",
        },
    ],
    bSegment: "Yes",
    cSegment: "No stakeholder information.",
    measureComplementDirect: "No additional Measures",
    dataResultsDescription: "No communication needed",
    additionalInformation: "No additional information",
}
function fnTestingCaseThree(callback) {
    ;(async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const timeout = 5000
        page.setDefaultTimeout(timeout)

        {
            const targetPage = page
            await targetPage.setViewport({
                width: 1164,
                height: 1009,
            })
        }
        {
            const targetPage = page
            const promises = []
            promises.push(targetPage.waitForNavigation())
            await targetPage.goto(
                "file:///E:/Capstone/PersonalTesting/index.html"
            )
            await Promise.all(promises)
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#TestingDesign2"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#TestingDesign2"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 158,
                    y: 13,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-college"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-college"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 113,
                    y: 16.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-college"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-college"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "University of Nebraska at Omaha"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "University of Nebraska at Omaha"
                )
            } else {
                await changeElementValue(
                    element,
                    "University of Nebraska at Omaha"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-program"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-program"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 192,
                    y: 10.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-program"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-program"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Computer Science ")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Computer Science ")
            } else {
                await changeElementValue(element, "Computer Science ")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-academicYear"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-academicYear"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 128,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-academicYear"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-academicYear"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "2023")
            } else {
                await changeElementValue(element, "2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-preparer"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-preparer"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 131,
                    y: 21.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-preparer"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-preparer"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Josh Smith")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Josh Smith")
            } else {
                await changeElementValue(element, "Josh Smith")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-deptSchool"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-deptSchool"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 114,
                    y: 18.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-deptSchool"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-deptSchool"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "IS&T")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "IS&T")
            } else {
                await changeElementValue(element, "IS&T")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-degreeLevel"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-degreeLevel"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 84,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-degreeLevel"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-degreeLevel"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "bahelors")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "bahelors")
            } else {
                await changeElementValue(element, "bahelors")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-dateRange"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-dateRange"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 92,
                    y: 15.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-dateRange"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-dateRange"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/01/2023 to 04/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "01/01/2023 to 04/01/2023")
            } else {
                await changeElementValue(element, "01/01/2023 to 04/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 73,
                    y: 28.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Students will learn python")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Students will learn python")
            } else {
                await changeElementValue(element, "Students will learn python")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-7 > div.form-group.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom > div > div > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-7 > div.form-group.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom > div > div > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 57,
                    y: 10.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-7 > div.form-group.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom > div > div > div:nth-child(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-7 > div.form-group.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom > div > div > div:nth-child(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 70,
                    y: 3.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1Common > div:nth-child(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1Common > div:nth-child(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 15,
                    y: 16.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 103,
                    y: 18.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Weekly Python Projects")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Weekly Python Projects")
            } else {
                await changeElementValue(element, "Weekly Python Projects")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 106,
                    y: 28.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Students will complete projects in python"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Students will complete projects in python"
                )
            } else {
                await changeElementValue(
                    element,
                    "Students will complete projects in python"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 91,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 92,
                    y: 26.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 150,
                    y: 17.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "80%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "80%")
            } else {
                await changeElementValue(element, "80%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 112,
                    y: 22.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "90%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "90%")
            } else {
                await changeElementValue(element, "90%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 118,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/01/2023 to 04/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "01/01/2023 to 04/01/2023")
            } else {
                await changeElementValue(element, "01/01/2023 to 04/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 122,
                    y: 9.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "65")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "65")
            } else {
                await changeElementValue(element, "65")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 123,
                    y: 16.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "85%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "85%")
            } else {
                await changeElementValue(element, "85%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.dataSLOStatus > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[0\\]\\.dataSLOStatus > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 22,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.decisionActions"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.decisionActions"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 151,
                    y: 107.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.decisionActions"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[0\\]\\.decisionActions"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Continue with SLO")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Continue with SLO")
            } else {
                await changeElementValue(element, "Continue with SLO")
            }
        }
        await page.pdf({
            path: "./test-pdfs/TestCaseThreeSLO1.pdf",
            format: "A4",
        })
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-6 > a.btn.btn-default._jsonform-array-addmore",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-6 > a.btn.btn-default._jsonform-array-addmore",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 25,
                    y: 25.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 130,
                    y: 29.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Students will understand Agile Processes"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Students will understand Agile Processes"
                )
            } else {
                await changeElementValue(
                    element,
                    "Students will understand Agile Processes"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(6) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(6) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 58,
                    y: 4.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(5) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(5) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 57,
                    y: 3.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-27 > div.form-group.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div > div > div:nth-child(1) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 50,
                    y: 17.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1Common > div:nth-child(4) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.programSLOsSLO1Common > div:nth-child(4) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 20,
                    y: 15.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-counter-28 > div > ul > li > a"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-counter-28 > div > ul > li > a"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 67,
                    y: 23.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 87,
                    y: 18.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Weekly meetings")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Weekly meetings")
            } else {
                await changeElementValue(element, "Weekly meetings")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 86,
                    y: 28.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Ensure students are emulating a fast paced enviornment"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Ensure students are emulating a fast paced enviornment"
                )
            } else {
                await changeElementValue(
                    element,
                    "Ensure students are emulating a fast paced enviornment"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 57,
                    y: 28.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Product")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Product")
            } else {
                await changeElementValue(element, "Product")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureType",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureType",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 107,
                    y: 11.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureType",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureType",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Indirect Measure")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Indirect Measure")
            } else {
                await changeElementValue(element, "Indirect Measure")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointInProgram",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointInProgram",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 81,
                    y: 20.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointInProgram",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointInProgram",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "In Final Year of Program")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "In Final Year of Program")
            } else {
                await changeElementValue(element, "In Final Year of Program")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 93,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 73,
                    y: 60.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 79,
                    y: 21.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Sample of Students - Describe below"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Sample of Students - Describe below"
                )
            } else {
                await changeElementValue(
                    element,
                    "Sample of Students - Describe below"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 78,
                    y: 20.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 16,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "50% of students")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "50% of students")
            } else {
                await changeElementValue(element, "50% of students")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 108,
                    y: 17.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "88%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "88%")
            } else {
                await changeElementValue(element, "88%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 107,
                    y: 21.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "95%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "95%")
            } else {
                await changeElementValue(element, "95%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 84,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Once/year")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Once/year")
            } else {
                await changeElementValue(element, "Once/year")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-counter-30 > div > ul > li > a"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-counter-30 > div > ul > li > a"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 54,
                    y: 23.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 117,
                    y: 17.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/01/2023 to 02/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "01/01/2023 to 02/01/2023")
            } else {
                await changeElementValue(element, "01/01/2023 to 02/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 104,
                    y: 6.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "65")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "65")
            } else {
                await changeElementValue(element, "65")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 115,
                    y: 20.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "77%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "77%")
            } else {
                await changeElementValue(element, "77%")
            }
        }
        await page.screenshot({
            path: "./test-pdfs/test-screenshots/TestCaseThreeSLO2Data1.png",
        })
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-30 > a.btn.btn-default._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-30 > a.btn.btn-default._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 12,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 121,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/01/2023 to 02/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "01/01/2023 to 02/01/2023")
            } else {
                await changeElementValue(element, "01/01/2023 to 02/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 28,
                    y: 19.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1Range > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "02/01/2023 to 04/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "02/01/2023 to 04/01/2023")
            } else {
                await changeElementValue(element, "02/01/2023 to 04/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1NumStudents > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1NumStudents > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 163,
                    y: 20.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1NumStudents > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1NumStudents > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "764")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "764")
            } else {
                await changeElementValue(element, "764")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1PercStudents > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1PercStudents > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 105,
                    y: 6.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1PercStudents > div > input",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "html > body > div:nth-child(7) > form > div > fieldset:nth-child(2) > div > div > div > div > div > div.tab-pane.active > div > div.form-group.jsonform-error- > div > div > div > div > div > fieldset > div.form-group.jsonform-error- > div > div > div > div > div.tab-pane.active > fieldset > div.form-group.jsonform-error-SLOInformation\\[1\\]---assessmentMeasure\\[0\\]---datacollection---dataResultsSLO1PercStudents > div > input",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "88%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "88%")
            } else {
                await changeElementValue(element, "88%")
            }
        }
        await page.pdf({
            path: "./test-pdfs/TestCaseThreeSLO2Measure1.pdf",
            format: "A4",
        })
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-counter-28 > a.btn.btn-default._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-counter-28 > a.btn.btn-default._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 12,
                    y: 4.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 123,
                    y: 26.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Task creation and completion rate"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Task creation and completion rate"
                )
            } else {
                await changeElementValue(
                    element,
                    "Task creation and completion rate"
                )
            }
        }
        {
            const targetPage = page
            await targetPage.keyboard.down("Tab")
        }
        {
            const targetPage = page
            await targetPage.keyboard.up("Tab")
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Encourages high throughput of tasks"
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Encourages high throughput of tasks"
                )
            } else {
                await changeElementValue(
                    element,
                    "Encourages high throughput of tasks"
                )
            }
        }
        {
            const targetPage = page
            await targetPage.keyboard.down("Tab")
        }
        {
            const targetPage = page
            await targetPage.keyboard.up("Tab")
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 85,
                    y: 13.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Performance")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "Performance")
            } else {
                await changeElementValue(element, "Performance")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 80,
                    y: 15.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 98,
                    y: 12.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 50,
                    y: 18.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "N/A")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "N/A")
            } else {
                await changeElementValue(element, "N/A")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 87,
                    y: 9.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "88%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "88%")
            } else {
                await changeElementValue(element, "88%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 74,
                    y: 22.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "98%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "98%")
            } else {
                await changeElementValue(element, "98%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-counter-32 > div > ul > li > a"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-counter-32 > div > ul > li > a"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 53,
                    y: 21.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 95,
                    y: 17.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/04/2023 to 04/01/2023")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "01/04/2023 to 04/01/2023")
            } else {
                await changeElementValue(element, "01/04/2023 to 04/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 57,
                    y: 19.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "5673")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "5673")
            } else {
                await changeElementValue(element, "5673")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 73,
                    y: 23.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "89%")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "89%")
            } else {
                await changeElementValue(element, "89%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.dataSLOStatus > div:nth-child(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-5-elt-SLOInformation\\[1\\]\\.dataSLOStatus > div:nth-child(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 47,
                    y: 14.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.decisionActions"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.decisionActions"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 206,
                    y: 109.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.decisionActions"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-SLOInformation\\[1\\]\\.decisionActions"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Need to validate the number of measures and ensure they are enforced."
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(
                    element,
                    "Need to validate the number of measures and ensure they are enforced."
                )
            } else {
                await changeElementValue(
                    element,
                    "Need to validate the number of measures and ensure they are enforced."
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-cSegment"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-cSegment"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 118,
                    y: 33.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-cSegment"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-cSegment"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "No stakeholder information."
                )
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "No stakeholder information.")
            } else {
                await changeElementValue(element, "No stakeholder information.")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-measureComplementDirect"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-measureComplementDirect"]],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 250,
                    y: 70.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-measureComplementDirect"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-measureComplementDirect"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "No additional Measures")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "No additional Measures")
            } else {
                await changeElementValue(element, "No additional Measures")
            }
        }
        {
            const targetPage = page
            await targetPage.keyboard.down("Tab")
        }
        {
            const targetPage = page
            await targetPage.keyboard.up("Tab")
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-dataResultsDescription"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-dataResultsDescription"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "No communication needed")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "No communication needed")
            } else {
                await changeElementValue(element, "No communication needed")
            }
        }
        {
            const targetPage = page
            await targetPage.keyboard.down("Tab")
        }
        {
            const targetPage = page
            await targetPage.keyboard.up("Tab")
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#jsonform-5-elt-additionalInformation"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#jsonform-5-elt-additionalInformation"]],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "No additional information")
            } else if (
                [
                    "textarea",
                    "text",
                    "url",
                    "tel",
                    "search",
                    "password",
                    "number",
                    "email",
                ].includes(inputType)
            ) {
                await typeIntoElement(element, "No additional information")
            } else {
                await changeElementValue(element, "No additional information")
            }
        }

        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#TestingDesign2Json > div > input"],
                    ["pierce/#TestingDesign2Json > div > input"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#TestingDesign2Json > div > input"],
                    ["pierce/#TestingDesign2Json > div > input"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 13,
                    y: 15.015625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [["#returnJSON"], ["pierce/#returnJSON"]],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [["#returnJSON"], ["pierce/#returnJSON"]],
                targetPage,
                { timeout, visible: true }
            )
            var jsonReturnActual = await page.$eval(
                "#returnJSON",
                (el) => el.textContent
            )
        }
        await page.pdf({ path: "./test-pdfs/TestCaseThree.pdf", format: "A4" })
        await browser.close()

        /**
         * Function to wait for the selector to appear in the frame.
         * @async
         * @param {Array} Array - Selector array Doc HTML selectors
         * @param {Object} frame - Frame object representing the current HTML frame
         * @param {Object} options - Selector options object
         * @returns {Promise} Promise for a function to find selectors with the given conditions
         * @throws {Error} Element with the given selector could not be found.
         */
        async function waitForSelectors(selectors, frame, options) {
            for (const selector of selectors) {
                try {
                    return await waitForSelector(selector, frame, options)
                } catch (err) {
                    console.error(err)
                }
            }
            throw new Error(
                "Could not find element for selectors: " +
                    JSON.stringify(selectors)
            )
        }

        /**
         * Function to scroll the selector into frame.
         * @async
         * @param {Array} selectors - Selector array Doc HTML selectors
         * @param {Object} frame - Frame object representing the current HTML frame
         * @param {Object} timeout - Wait timeout
         * @returns {Object} Returns nothing, is used to break our of the function
         * @throws {Error} Element with the given selector could not be found.
         */
        async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
            const element = await waitForSelectors(selectors, frame, {
                visible: false,
                timeout,
            })
            if (!element) {
                throw new Error("The element could not be found.")
            }
            await waitForConnected(element, timeout)
            const isInViewport = await element.isIntersectingViewport({
                threshold: 0,
            })
            if (isInViewport) {
                return
            }
            await element.evaluate((element) => {
                element.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "auto",
                })
            })
            await waitForInViewport(element, timeout)
        }

        /**
         * Function to scroll the selector into frame.
         * @async
         * @param {Object} element - HTML element object
         * @param {Object} timeout - Wait timeout
         * @returns {Promise} Promise of getting a property
         * @throws {Error} Element with the given selector could not be found.
         */
        async function waitForConnected(element, timeout) {
            await waitForFunction(async () => {
                return await element.getProperty("isConnected")
            }, timeout)
        }

        /**
         * Function that waits for the element to be viewable or until a timeout period.
         * @async
         * @param {Object} element - HTML element object
         * @param {Object} timeout - Wait timeout
         */
        async function waitForInViewport(element, timeout) {
            await waitForFunction(async () => {
                return await element.isIntersectingViewport({ threshold: 0 })
            }, timeout)
        }

        /**
         * Function to wait for the selector to be visible or selectable or until a timeout period.
         * @async
         * @param {Object} selector - Selector Object Doc HTML selectors
         * @param {Object} frame - Frame object representing the current HTML frame
         * @param {Object} options - Selector options object
         * @returns {Object} Element that was found and waited for
         */
        async function waitForSelector(selector, frame, options) {
            if (!Array.isArray(selector)) {
                selector = [selector]
            }
            if (!selector.length) {
                throw new Error("Empty selector provided to waitForSelector")
            }
            let element = null
            for (let i = 0; i < selector.length; i++) {
                const part = selector[i]
                if (element) {
                    element = await element.waitForSelector(part, options)
                } else {
                    element = await frame.waitForSelector(part, options)
                }
                if (!element) {
                    throw new Error(
                        "Could not find element: " + selector.join(">>")
                    )
                }
                if (i < selector.length - 1) {
                    element = (
                        await element.evaluateHandle((el) =>
                            el.shadowRoot ? el.shadowRoot : el
                        )
                    ).asElement()
                }
            }
            if (!element) {
                throw new Error("Could not find element: " + selector.join("|"))
            }
            return element
        }

        /**
         * Funtion to wait for the visibility of an element or until a timeout period.
         * @async
         * @param {Object} step - Object containing HTML selectors
         * @param {Object} frame - Frame object representing the current HTML frame
         * @param {Object} timeout - Wait timeout
         * @return {Boolean} Denotes if the element was loaded or found within the timeout
         */
        async function waitForElement(step, frame, timeout) {
            const {
                count = 1,
                operator = ">=",
                visible = true,
                properties,
                attributes,
            } = step
            const compFn = {
                "==": (a, b) => a === b,
                ">=": (a, b) => a >= b,
                "<=": (a, b) => a <= b,
            }[operator]
            await waitForFunction(async () => {
                const elements = await querySelectorsAll(step.selectors, frame)
                let result = compFn(elements.length, count)
                const elementsHandle = await frame.evaluateHandle(
                    (...elements) => {
                        return elements
                    },
                    ...elements
                )
                await Promise.all(elements.map((element) => element.dispose()))
                if (result && (properties || attributes)) {
                    result = await elementsHandle.evaluate(
                        (elements, properties, attributes) => {
                            for (const element of elements) {
                                if (attributes) {
                                    for (const [name, value] of Object.entries(
                                        attributes
                                    )) {
                                        if (
                                            element.getAttribute(name) !== value
                                        ) {
                                            return false
                                        }
                                    }
                                }
                                if (properties) {
                                    if (!isDeepMatch(properties, element)) {
                                        return false
                                    }
                                }
                            }
                            return true

                            function isDeepMatch(a, b) {
                                if (a === b) {
                                    return true
                                }
                                if ((a && !b) || (!a && b)) {
                                    return false
                                }
                                if (
                                    !(a instanceof Object) ||
                                    !(b instanceof Object)
                                ) {
                                    return false
                                }
                                for (const [key, value] of Object.entries(a)) {
                                    if (!isDeepMatch(value, b[key])) {
                                        return false
                                    }
                                }
                                return true
                            }
                        },
                        properties,
                        attributes
                    )
                }
                await elementsHandle.dispose()
                return result === visible
            }, timeout)
        }

        /**
         * Function that uses the selectors and the frame to find all matching elements.
         * @async
         * @param {Array} selectors - Selector array Doc HTML selectorss
         * @param {Object} frame - Frame object representing the current HTML frame
         * @returns {Array} All elements that match the given selectors and frame
         */
        async function querySelectorsAll(selectors, frame) {
            for (const selector of selectors) {
                const result = await querySelectorAll(selector, frame)
                if (result.length) {
                    return result
                }
            }
            return []
        }

        /**
         * Function that uses the selector and the greame to find the matching element.
         * @async
         * @param {Object} selector - Selector Object Doc HTML selectors
         * @param {Object} frame - Frame object representing the current HTML frame
         * @returns {Array} All elements that match the given selector and frame
         */
        async function querySelectorAll(selector, frame) {
            if (!Array.isArray(selector)) {
                selector = [selector]
            }
            if (!selector.length) {
                throw new Error("Empty selector provided to querySelectorAll")
            }
            let elements = []
            for (let i = 0; i < selector.length; i++) {
                const part = selector[i]
                if (i === 0) {
                    elements = await frame.$$(part)
                } else {
                    const tmpElements = elements
                    elements = []
                    for (const el of tmpElements) {
                        elements.push(...(await el.$$(part)))
                    }
                }
                if (elements.length === 0) {
                    return []
                }
                if (i < selector.length - 1) {
                    const tmpElements = []
                    for (const el of elements) {
                        const newEl = (
                            await el.evaluateHandle((el) =>
                                el.shadowRoot ? el.shadowRoot : el
                            )
                        ).asElement()
                        if (newEl) {
                            tmpElements.push(newEl)
                        }
                    }
                    elements = tmpElements
                }
            }
            return elements
        }

        /**
         * Function to wait for the promise of an asnyc function or until a timeout period.
         * @async
         * @param {Function} fn - A function with a promise to wait for the handshake to complete
         * @param {Object} timeout - Wait timeout
         * @returns {Object} Returns nothing, is used to break our of the function
         */
        async function waitForFunction(fn, timeout) {
            let isActive = true
            const timeoutId = setTimeout(() => {
                isActive = false
            }, timeout)
            while (isActive) {
                const result = await fn()
                if (result) {
                    clearTimeout(timeoutId)
                    return
                }
                await new Promise((resolve) => setTimeout(resolve, 100))
            }
            throw new Error("Timed out")
        }

        /**
         * Function to update the value of an HTML select element.
         * @async
         * @param {Object} element - HTML element object
         * @param {Object} value - Value to update the HTML element with
         */
        async function changeSelectElement(element, value) {
            await element.select(value)
            await element.evaluateHandle((e) => {
                e.blur()
                e.focus()
            })
        }

        /**
         * Function to update the value of an input element.
         * @async
         * @param {Object} element - HTML element object
         * @param {Object} value - Value to update the HTML element with
         */
        async function changeElementValue(element, value) {
            await element.focus()
            await element.evaluate((input, value) => {
                input.value = value
                input.dispatchEvent(new Event("input", { bubbles: true }))
                input.dispatchEvent(new Event("change", { bubbles: true }))
            }, value)
        }

        /**
         * Function to update the value of an input text element.
         * @async
         * @param {Object} element - HTML element object
         * @param {Object} value - Value to update the HTML element with
         */
        async function typeIntoElement(element, value) {
            const textToType = await element.evaluate((input, newValue) => {
                if (
                    newValue.length <= input.value.length ||
                    !newValue.startsWith(input.value)
                ) {
                    input.value = ""
                    return newValue
                }
                const originalValue = input.value
                input.value = ""
                input.value = originalValue
                return newValue.substring(originalValue.length)
            }, value)
            await element.type(textToType)
        }
        callback(jsonReturnActual)
    })().catch((err) => {
        console.error(err)
        process.exit(1)
    })
}

// QUnit.module("fnTestingCaseThree", (hooks) => {
//     QUnit.test("Test Case Three", (assert) => {
//         const done = assert.async()
//         fnTestingCaseThree((res) => {
//             var oJSONActual = JSON.parse(res)
//             assert.true(_.isEqual(oJSONActual, oJSONModelExpected))
//             done()
//         })
//     })
// })
