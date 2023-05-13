const puppeteer = require("puppeteer") // v13.0.0 or later
var _ = require("lodash")

var oJSONModelExpected = {
    college: "University of Nebraska at Omaha",
    program: "Computer Science",
    academicYear: "2023",
    preparer: "Josh Smith",
    deptSchool: "IS&T",
    degreeLevel: "Bachelors",
    dateRange: "01/01/2023 to 04/01/2023",
    SLOInformation: [
        {
            programSLOsSLO1: "Students will learn python",
            programSLOsSLO1Bloom: "Comprehension",
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
                        dataResultsSLO1NumStudents: 64,
                        dataResultsSLO1PercStudents: "85%",
                    },
                },
            ],
            dataSLOStatus: "Met",
            decisionActions: "Continue with SLO",
        },
        {
            programSLOsSLO1: "Students will understand Agile Processes",
            programSLOsSLO1Bloom: "Analysis",
            assessmentMeasure: [
                {
                    measureTitle: "Weekly meetings",
                    measureDescription:
                        "Ensure students are emulating a fast paced enviornment",
                    measureDomain: "Product",
                    measureType: "Direct Measure",
                    measurePoint: {
                        measurePointInProgram: "In Final Term of Program",
                        measurePointLocation: "N/A",
                    },
                    measurePopulation: {
                        measurePopulationDropDown:
                            "Sample of Students - Describe below",
                        measurePopulationDesc: "50% of students",
                    },
                    measureDataFreq: "Once/semester",
                    measureProficiencyThreshold: "88%",
                    measureProficiencyTarget: "95%",
                    datacollection: {
                        dataResultsSLO1Range: "02/01/2023 to 04/01/2023",
                        dataResultsSLO1NumStudents: 854,
                        dataResultsSLO1PercStudents: "88%",
                    },
                },
                {
                    measureTitle: "Task creation and completion rate",
                    measureDescription: "Encourages high throughput of tasks",
                    measureDomain: "Performance",
                    measureType: "Indirect Measure",
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
                        dataResultsSLO1NumStudents: 231,
                        dataResultsSLO1PercStudents: "89%",
                    },
                },
            ],
            dataSLOStatus: "Partially Met",
            decisionActions:
                "Adhere more to the measures listed above to ensure the students are learning.",
        },
        {
            programSLOsSLO1: "Hardware understanding of computers",
            programSLOsSLO1Bloom: "Analysis",
            assessmentMeasure: [
                {
                    measureTitle: "Testable electrical components",
                    measureDescription:
                        "The students will create functioning electrical components which is a vital part of any computers. ",
                    measureDomain: "Product",
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
                    measureProficiencyThreshold: "99%",
                    measureProficiencyTarget: "100%",
                    datacollection: {
                        dataResultsSLO1Range: "04/01/2023 to 04/16/2023",
                        dataResultsSLO1NumStudents: 652,
                        dataResultsSLO1PercStudents: "98%",
                    },
                },
            ],
            dataSLOStatus: "Partially Met",
            decisionActions: "Continue with SLO 98% is common ",
        },
        {
            programSLOsSLO1: "Students will learn JavaScript",
            programSLOsSLO1Bloom: "Analysis",
            assessmentMeasure: [
                {
                    measureTitle: "Website",
                    measureDescription: "Use JavaScript to create a website ",
                    measureDomain: "Product",
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
                    measureProficiencyTarget: "95%",
                    datacollection: {
                        dataResultsSLO1Range: "04/01/2023 to 05/01/2023",
                        dataResultsSLO1NumStudents: 12331,
                        dataResultsSLO1PercStudents: "93%",
                    },
                },
                {
                    measureTitle: "Create a local server",
                    measureDescription:
                        "Uses JS libraries to imitate a backend system ",
                    measureDomain: "Product",
                    measureType: "Direct Measure",
                    measurePoint: {
                        measurePointInProgram: "In Final Term of Program",
                        measurePointLocation: "N/A",
                    },
                    measurePopulation: {
                        measurePopulationDropDown: "All Students",
                        measurePopulationDesc: "N/A",
                    },
                    measureDataFreq: "Once/year",
                    measureProficiencyThreshold: "95%",
                    measureProficiencyTarget: "98%",
                    datacollection: {
                        dataResultsSLO1Range: "01/01/2023 to 01/01/2024",
                        dataResultsSLO1NumStudents: 4816,
                        dataResultsSLO1PercStudents: "96%",
                    },
                },
            ],
            dataSLOStatus: "Met",
            decisionActions: "Continue with SLO ",
        },
    ],
    bSegment: "Yes",
    cSegment: "No stakeholder information.",
    measureComplementDirect: "No additional Measures",
    dataResultsDescription: "No communication needed",
    additionalInformation: "No additional information",
}
function fnTestingCaseFour(callback) {
    ;(async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const timeout = 5000
        page.setDefaultTimeout(timeout)

        {
            const targetPage = page
            await targetPage.setViewport({
                width: 1028,
                height: 1320,
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
                [
                    ["aria/Non-Accredited Graduate"],
                    ["#nonAccGradButton"],
                    ['xpath///*[@id="nonAccGradButton"]'],
                    ["pierce/#nonAccGradButton"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Non-Accredited Graduate"],
                    ["#nonAccGradButton"],
                    ['xpath///*[@id="nonAccGradButton"]'],
                    ["pierce/#nonAccGradButton"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 80,
                    y: 12,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/College"],
                    ["#jsonform-8-elt-college"],
                    ['xpath///*[@id="jsonform-8-elt-college"]'],
                    ["pierce/#jsonform-8-elt-college"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/College"],
                    ["#jsonform-8-elt-college"],
                    ['xpath///*[@id="jsonform-8-elt-college"]'],
                    ["pierce/#jsonform-8-elt-college"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 110,
                    y: 10.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/College"],
                    ["#jsonform-8-elt-college"],
                    ['xpath///*[@id="jsonform-8-elt-college"]'],
                    ["pierce/#jsonform-8-elt-college"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/College"],
                    ["#jsonform-8-elt-college"],
                    ['xpath///*[@id="jsonform-8-elt-college"]'],
                    ["pierce/#jsonform-8-elt-college"],
                ],
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
                [
                    ["aria/Program"],
                    ["#jsonform-8-elt-program"],
                    ['xpath///*[@id="jsonform-8-elt-program"]'],
                    ["pierce/#jsonform-8-elt-program"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program"],
                    ["#jsonform-8-elt-program"],
                    ['xpath///*[@id="jsonform-8-elt-program"]'],
                    ["pierce/#jsonform-8-elt-program"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 185,
                    y: 29.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program"],
                    ["#jsonform-8-elt-program"],
                    ['xpath///*[@id="jsonform-8-elt-program"]'],
                    ["pierce/#jsonform-8-elt-program"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program"],
                    ["#jsonform-8-elt-program"],
                    ['xpath///*[@id="jsonform-8-elt-program"]'],
                    ["pierce/#jsonform-8-elt-program"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Computer Science")
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
                await typeIntoElement(element, "Computer Science")
            } else {
                await changeElementValue(element, "Computer Science")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Academic Year of Report"],
                    ["#jsonform-8-elt-academicYear"],
                    ['xpath///*[@id="jsonform-8-elt-academicYear"]'],
                    ["pierce/#jsonform-8-elt-academicYear"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Academic Year of Report"],
                    ["#jsonform-8-elt-academicYear"],
                    ['xpath///*[@id="jsonform-8-elt-academicYear"]'],
                    ["pierce/#jsonform-8-elt-academicYear"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 211,
                    y: 26.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Academic Year of Report"],
                    ["#jsonform-8-elt-academicYear"],
                    ['xpath///*[@id="jsonform-8-elt-academicYear"]'],
                    ["pierce/#jsonform-8-elt-academicYear"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Academic Year of Report"],
                    ["#jsonform-8-elt-academicYear"],
                    ['xpath///*[@id="jsonform-8-elt-academicYear"]'],
                    ["pierce/#jsonform-8-elt-academicYear"],
                ],
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
                [
                    ["aria/Person Preparing the Report"],
                    ["#jsonform-8-elt-preparer"],
                    ['xpath///*[@id="jsonform-8-elt-preparer"]'],
                    ["pierce/#jsonform-8-elt-preparer"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Person Preparing the Report"],
                    ["#jsonform-8-elt-preparer"],
                    ['xpath///*[@id="jsonform-8-elt-preparer"]'],
                    ["pierce/#jsonform-8-elt-preparer"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 147,
                    y: 18.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Person Preparing the Report"],
                    ["#jsonform-8-elt-preparer"],
                    ['xpath///*[@id="jsonform-8-elt-preparer"]'],
                    ["pierce/#jsonform-8-elt-preparer"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Person Preparing the Report"],
                    ["#jsonform-8-elt-preparer"],
                    ['xpath///*[@id="jsonform-8-elt-preparer"]'],
                    ["pierce/#jsonform-8-elt-preparer"],
                ],
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
                [
                    ["aria/Department/School"],
                    ["#jsonform-8-elt-deptSchool"],
                    ['xpath///*[@id="jsonform-8-elt-deptSchool"]'],
                    ["pierce/#jsonform-8-elt-deptSchool"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Department/School"],
                    ["#jsonform-8-elt-deptSchool"],
                    ['xpath///*[@id="jsonform-8-elt-deptSchool"]'],
                    ["pierce/#jsonform-8-elt-deptSchool"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 150,
                    y: 16.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Department/School"],
                    ["#jsonform-8-elt-deptSchool"],
                    ['xpath///*[@id="jsonform-8-elt-deptSchool"]'],
                    ["pierce/#jsonform-8-elt-deptSchool"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Department/School"],
                    ["#jsonform-8-elt-deptSchool"],
                    ['xpath///*[@id="jsonform-8-elt-deptSchool"]'],
                    ["pierce/#jsonform-8-elt-deptSchool"],
                ],
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
                [
                    ["aria/Degree Level"],
                    ["#jsonform-8-elt-degreeLevel"],
                    ['xpath///*[@id="jsonform-8-elt-degreeLevel"]'],
                    ["pierce/#jsonform-8-elt-degreeLevel"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Degree Level"],
                    ["#jsonform-8-elt-degreeLevel"],
                    ['xpath///*[@id="jsonform-8-elt-degreeLevel"]'],
                    ["pierce/#jsonform-8-elt-degreeLevel"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 146,
                    y: 17.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Degree Level"],
                    ["#jsonform-8-elt-degreeLevel"],
                    ['xpath///*[@id="jsonform-8-elt-degreeLevel"]'],
                    ["pierce/#jsonform-8-elt-degreeLevel"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Degree Level"],
                    ["#jsonform-8-elt-degreeLevel"],
                    ['xpath///*[@id="jsonform-8-elt-degreeLevel"]'],
                    ["pierce/#jsonform-8-elt-degreeLevel"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Bachelors")
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
                await typeIntoElement(element, "Bachelors")
            } else {
                await changeElementValue(element, "Bachelors")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Date Range of Reported Data"],
                    ["#jsonform-8-elt-dateRange"],
                    ['xpath///*[@id="jsonform-8-elt-dateRange"]'],
                    ["pierce/#jsonform-8-elt-dateRange"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Date Range of Reported Data"],
                    ["#jsonform-8-elt-dateRange"],
                    ['xpath///*[@id="jsonform-8-elt-dateRange"]'],
                    ["pierce/#jsonform-8-elt-dateRange"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 149,
                    y: 26.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Date Range of Reported Data"],
                    ["#jsonform-8-elt-dateRange"],
                    ['xpath///*[@id="jsonform-8-elt-dateRange"]'],
                    ["pierce/#jsonform-8-elt-dateRange"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Date Range of Reported Data"],
                    ["#jsonform-8-elt-dateRange"],
                    ['xpath///*[@id="jsonform-8-elt-dateRange"]'],
                    ["pierce/#jsonform-8-elt-dateRange"],
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
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 153,
                    y: 27.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.programSLOsSLO1",
                    ],
                ],
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
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1Bloom"]/div[3]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].programSLOsSLO1Bloom"]/div[3]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Bloom div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 84,
                    y: 8.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-10"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-10"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 93,
                    y: 8.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 124,
                    y: 20.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
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
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 157,
                    y: 19.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 163,
                    y: 19.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 109,
                    y: 11.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 118,
                    y: 13.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
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
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 132,
                    y: 18.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
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
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 121,
                    y: 17.010406494140625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
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
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 226,
                    y: 13.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "64")
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
                await typeIntoElement(element, "64")
            } else {
                await changeElementValue(element, "64")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 208,
                    y: 9.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
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
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].dataSLOStatus"]/div[1]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].dataSLOStatus"]/div[1]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 24,
                    y: 6.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 478,
                    y: 119.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[0].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[0\\]\\.decisionActions",
                    ],
                ],
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
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#jsonform-8-elt-counter-9 > a._jsonform-array-addmore"],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-9 > a._jsonform-array-addmore"],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 22,
                    y: 23.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 513,
                    y: 17.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.programSLOsSLO1",
                    ],
                ],
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
                        "div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 43,
                    y: 10.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-28"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-28"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 101,
                    y: 10.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#jsonform-8-elt-counter-29 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-29"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-29 > div > ul a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-29 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-29"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-29 > div > ul a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 43,
                    y: 13.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 97,
                    y: 24.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
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
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 112,
                    y: 19.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
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
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 105,
                    y: 16.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 123,
                    y: 10.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 118,
                    y: 15.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 99,
                    y: 22.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 97,
                    y: 20.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Population Measured Details"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measurePopulation.measurePopulationDropDown"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDropDown",
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
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 122,
                    y: 2.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
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
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 124,
                    y: 22.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
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
                    ["#jsonform-8-elt-counter-31 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-31"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-31 > div a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-31 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-31"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-31 > div a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 66,
                    y: 17.677001953125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 90,
                    y: 10.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
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
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 200,
                    y: 28.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "854")
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
                await typeIntoElement(element, "854")
            } else {
                await changeElementValue(element, "854")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 188,
                    y: 6.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
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
                        "#jsonform-8-elt-counter-29 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-29"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-29 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-8-elt-counter-29 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-29"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-29 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 10.333332061767578,
                    y: 7.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 108,
                    y: 12.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
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
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 145,
                    y: 24.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
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
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 123,
                    y: 16.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
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
                    ["aria/Type"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureType"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Type"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureType"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 145,
                    y: 21.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Type"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureType"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Type"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureType"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureType",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 128,
                    y: 6.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 104,
                    y: 20.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 102,
                    y: 18.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
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
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 128,
                    y: 29.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
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
                [
                    ["#jsonform-8-elt-counter-33 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-33"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-33 > div a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-33 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-33"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-33 > div a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 85,
                    y: 25.677001953125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 108,
                    y: 16.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
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
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 159,
                    y: 19.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "231")
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
                await typeIntoElement(element, "231")
            } else {
                await changeElementValue(element, "231")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 145,
                    y: 11.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
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
                        "div.jsonform-error-SLOInformation\\[1\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].dataSLOStatus"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[1\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].dataSLOStatus"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[1\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 64,
                    y: 11.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 314,
                    y: 73.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[1].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[1\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Adhere more to the measures listed above to ensure the students are learning."
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
                    "Adhere more to the measures listed above to ensure the students are learning."
                )
            } else {
                await changeElementValue(
                    element,
                    "Adhere more to the measures listed above to ensure the students are learning."
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 11.333332061767578,
                    y: 10.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 218,
                    y: 24.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 158,
                    y: 13.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Hardware understanding of computers"
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
                    "Hardware understanding of computers"
                )
            } else {
                await changeElementValue(
                    element,
                    "Hardware understanding of computers"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 58,
                    y: 7.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-34"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-34"]/div[3]/div/div/div[3]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---programSLOsSLO1Common > div div:nth-of-type(3) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 107,
                    y: 11.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#jsonform-8-elt-counter-35 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-35"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-35 > div > ul a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-35 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-35"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-35 > div > ul a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 49,
                    y: 25.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 158,
                    y: 24.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Testable electrical components"
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
                await typeIntoElement(element, "Testable electrical components")
            } else {
                await changeElementValue(
                    element,
                    "Testable electrical components"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 230,
                    y: 20.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "The students will create functioning electrical components which is a vital part of any computers. "
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
                    "The students will create functioning electrical components which is a vital part of any computers. "
                )
            } else {
                await changeElementValue(
                    element,
                    "The students will create functioning electrical components which is a vital part of any computers. "
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 174,
                    y: 10.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 174,
                    y: 15.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 94,
                    y: 6.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 153,
                    y: 0.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "99%")
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
                await typeIntoElement(element, "99%")
            } else {
                await changeElementValue(element, "99%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 128,
                    y: 14.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "100%")
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
                await typeIntoElement(element, "100%")
            } else {
                await changeElementValue(element, "100%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#jsonform-8-elt-counter-37 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-37"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-37 > div a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-37 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-37"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-37 > div a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 81,
                    y: 19.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 36,
                    y: 18.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "04/01/2023 to 04/16/2023")
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
                await typeIntoElement(element, "04/01/2023 to 04/16/2023")
            } else {
                await changeElementValue(element, "04/01/2023 to 04/16/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 141,
                    y: 22.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "652")
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
                await typeIntoElement(element, "652")
            } else {
                await changeElementValue(element, "652")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 126,
                    y: 16.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
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
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].dataSLOStatus"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[2\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].dataSLOStatus"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[2\\]---dataSLOStatus div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 34,
                    y: 12.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 244,
                    y: 67.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[2].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[2\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Continue with SLO 98% is common "
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
                    "Continue with SLO 98% is common "
                )
            } else {
                await changeElementValue(
                    element,
                    "Continue with SLO 98% is common "
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-9"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-9 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 7.333332061767578,
                    y: 8.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 358,
                    y: 15.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.programSLOsSLO1",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Students will learn JavaScript"
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
                await typeIntoElement(element, "Students will learn JavaScript")
            } else {
                await changeElementValue(
                    element,
                    "Students will learn JavaScript"
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].programSLOsSLO1Bloom"]/div[2]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Bloom > div div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 50,
                    y: 10.010406494140625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Common div:nth-of-type(4) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-38"]/div[3]/div/div/div[4]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Common div:nth-of-type(4) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Common div:nth-of-type(4) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-38"]/div[3]/div/div/div[4]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---programSLOsSLO1Common div:nth-of-type(4) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 80,
                    y: 7.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["#jsonform-8-elt-counter-39 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-39"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-39 > div > ul a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-39 > div > ul a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-39"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-39 > div > ul a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 50,
                    y: 23.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 202,
                    y: 29.010406494140625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Website")
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
                await typeIntoElement(element, "Website")
            } else {
                await changeElementValue(element, "Website")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 195,
                    y: 17.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Use JavaScript to create a website "
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
                    "Use JavaScript to create a website "
                )
            } else {
                await changeElementValue(
                    element,
                    "Use JavaScript to create a website "
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 84,
                    y: 14.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureDomain",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 254,
                    y: 26.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 248,
                    y: 16.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 136,
                    y: 10.010406494140625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyThreshold",
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
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 141,
                    y: 26.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.measureProficiencyTarget",
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
                    ["#jsonform-8-elt-counter-41 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-41"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-41 > div a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-41 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-41"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-41 > div a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 69,
                    y: 21.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 132,
                    y: 24.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 137,
                    y: 14.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "04/01/2023 to 05/01/2023")
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
                await typeIntoElement(element, "04/01/2023 to 05/01/2023")
            } else {
                await changeElementValue(element, "04/01/2023 to 05/01/2023")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 306,
                    y: 7.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "12331")
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
                await typeIntoElement(element, "12331")
            } else {
                await changeElementValue(element, "12331")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 282,
                    y: 15.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[0].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[0\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "93%")
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
                await typeIntoElement(element, "93%")
            } else {
                await changeElementValue(element, "93%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#jsonform-8-elt-counter-39 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-39"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-39 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#jsonform-8-elt-counter-39 > a._jsonform-array-addmore > i",
                    ],
                    ['xpath///*[@id="jsonform-8-elt-counter-39"]/a[1]/i'],
                    [
                        "pierce/#jsonform-8-elt-counter-39 > a._jsonform-array-addmore > i",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 2.333332061767578,
                    y: 13.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 135,
                    y: 21.010406494140625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Title of the Measure"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureTitle"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureTitle",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Create a local server")
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
                await typeIntoElement(element, "Create a local server")
            } else {
                await changeElementValue(element, "Create a local server")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 230,
                    y: 9.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe How the Measure Aligns to the SLO"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDescription"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDescription",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(
                    element,
                    "Uses JS libraries to imitate a backend system "
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
                    "Uses JS libraries to imitate a backend system "
                )
            } else {
                await changeElementValue(
                    element,
                    "Uses JS libraries to imitate a backend system "
                )
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 200,
                    y: 19.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Domain"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDomain"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDomain",
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
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 102,
                    y: 20.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Point Description"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePoint.measurePointLocation"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePoint\\.measurePointLocation",
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
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 206,
                    y: 20.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Describe here"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measurePopulation.measurePopulationDesc"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measurePopulation\\.measurePopulationDesc",
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
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 103,
                    y: 26.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Other - Describe below")
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
                await typeIntoElement(element, "Other - Describe below")
            } else {
                await changeElementValue(element, "Other - Describe below")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 101,
                    y: 13.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Frequency of Data Collection"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureDataFreq"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureDataFreq",
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
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 112,
                    y: 19.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Proficiency Threshold"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyThreshold"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyThreshold",
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
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 94,
                    y: 15.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Program Proficiency Target"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].measureProficiencyTarget"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.measureProficiencyTarget",
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
                [
                    ["#jsonform-8-elt-counter-43 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-43"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-43 > div a"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["#jsonform-8-elt-counter-43 > div a"],
                    ['xpath///*[@id="jsonform-8-elt-counter-43"]/div/ul/li/a'],
                    ["pierce/#jsonform-8-elt-counter-43 > div a"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 43,
                    y: 19.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 126,
                    y: 15.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Data Collection Date Range"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1Range"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1Range",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "01/01/2023 to 01/01/2024")
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
                await typeIntoElement(element, "01/01/2023 to 01/01/2024")
            } else {
                await changeElementValue(element, "01/01/2023 to 01/01/2024")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 156,
                    y: 21.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Number of Students Assessed"],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1NumStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1NumStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "4816")
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
                await typeIntoElement(element, "4816")
            } else {
                await changeElementValue(element, "4816")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 311,
                    y: 11.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Percentage of Students who Met/Exceeded Threshold Proficiency",
                    ],
                    [
                        "#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].assessmentMeasure[1].datacollection.dataResultsSLO1PercStudents"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.assessmentMeasure\\[1\\]\\.datacollection\\.dataResultsSLO1PercStudents",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "96%")
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
                await typeIntoElement(element, "96%")
            } else {
                await changeElementValue(element, "96%")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].dataSLOStatus"]/div[1]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "div.jsonform-error-SLOInformation\\[3\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].dataSLOStatus"]/div[1]/label',
                    ],
                    [
                        "pierce/div.jsonform-error-SLOInformation\\[3\\]---dataSLOStatus div:nth-of-type(1) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 36,
                    y: 11.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 315,
                    y: 56.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                    ],
                    ["#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions"],
                    [
                        'xpath///*[@id="jsonform-8-elt-SLOInformation[3].decisionActions"]',
                    ],
                    [
                        "pierce/#jsonform-8-elt-SLOInformation\\[3\\]\\.decisionActions",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Continue with SLO ")
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
                await typeIntoElement(element, "Continue with SLO ")
            } else {
                await changeElementValue(element, "Continue with SLO ")
            }
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/B. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                    ],
                    ["#jsonform-8-elt-cSegment"],
                    ['xpath///*[@id="jsonform-8-elt-cSegment"]'],
                    ["pierce/#jsonform-8-elt-cSegment"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/B. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                    ],
                    ["#jsonform-8-elt-cSegment"],
                    ['xpath///*[@id="jsonform-8-elt-cSegment"]'],
                    ["pierce/#jsonform-8-elt-cSegment"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 100,
                    y: 63.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/B. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                    ],
                    ["#jsonform-8-elt-cSegment"],
                    ['xpath///*[@id="jsonform-8-elt-cSegment"]'],
                    ["pierce/#jsonform-8-elt-cSegment"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/B. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                    ],
                    ["#jsonform-8-elt-cSegment"],
                    ['xpath///*[@id="jsonform-8-elt-cSegment"]'],
                    ["pierce/#jsonform-8-elt-cSegment"],
                ],
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
                [
                    [
                        "aria/C. Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                    ],
                    ["#jsonform-8-elt-measureComplementDirect"],
                    ['xpath///*[@id="jsonform-8-elt-measureComplementDirect"]'],
                    ["pierce/#jsonform-8-elt-measureComplementDirect"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/C. Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                    ],
                    ["#jsonform-8-elt-measureComplementDirect"],
                    ['xpath///*[@id="jsonform-8-elt-measureComplementDirect"]'],
                    ["pierce/#jsonform-8-elt-measureComplementDirect"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 288,
                    y: 85.67706298828125,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/C. Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                    ],
                    ["#jsonform-8-elt-measureComplementDirect"],
                    ['xpath///*[@id="jsonform-8-elt-measureComplementDirect"]'],
                    ["pierce/#jsonform-8-elt-measureComplementDirect"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/C. Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                    ],
                    ["#jsonform-8-elt-measureComplementDirect"],
                    ['xpath///*[@id="jsonform-8-elt-measureComplementDirect"]'],
                    ["pierce/#jsonform-8-elt-measureComplementDirect"],
                ],
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
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/D. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    ],
                    ["#jsonform-8-elt-dataResultsDescription"],
                    ['xpath///*[@id="jsonform-8-elt-dataResultsDescription"]'],
                    ["pierce/#jsonform-8-elt-dataResultsDescription"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/D. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    ],
                    ["#jsonform-8-elt-dataResultsDescription"],
                    ['xpath///*[@id="jsonform-8-elt-dataResultsDescription"]'],
                    ["pierce/#jsonform-8-elt-dataResultsDescription"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 349,
                    y: 95.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "aria/D. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    ],
                    ["#jsonform-8-elt-dataResultsDescription"],
                    ['xpath///*[@id="jsonform-8-elt-dataResultsDescription"]'],
                    ["pierce/#jsonform-8-elt-dataResultsDescription"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "aria/D. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    ],
                    ["#jsonform-8-elt-dataResultsDescription"],
                    ['xpath///*[@id="jsonform-8-elt-dataResultsDescription"]'],
                    ["pierce/#jsonform-8-elt-dataResultsDescription"],
                ],
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
            await scrollIntoViewIfNeeded(
                [
                    ["aria/E. Additional Information"],
                    ["#jsonform-8-elt-additionalInformation"],
                    ['xpath///*[@id="jsonform-8-elt-additionalInformation"]'],
                    ["pierce/#jsonform-8-elt-additionalInformation"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/E. Additional Information"],
                    ["#jsonform-8-elt-additionalInformation"],
                    ['xpath///*[@id="jsonform-8-elt-additionalInformation"]'],
                    ["pierce/#jsonform-8-elt-additionalInformation"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 567,
                    y: 50.0103759765625,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/E. Additional Information"],
                    ["#jsonform-8-elt-additionalInformation"],
                    ['xpath///*[@id="jsonform-8-elt-additionalInformation"]'],
                    ["pierce/#jsonform-8-elt-additionalInformation"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/E. Additional Information"],
                    ["#jsonform-8-elt-additionalInformation"],
                    ['xpath///*[@id="jsonform-8-elt-additionalInformation"]'],
                    ["pierce/#jsonform-8-elt-additionalInformation"],
                ],
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
                    ["aria/Submit"],
                    ["#nonAccGradSampleJson > div > input"],
                    ['xpath///*[@id="submitForm"]'],
                    ["pierce/#nonAccGradSampleJson > div > input"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/Submit"],
                    ["#nonAccGradSampleJson > div > input"],
                    ['xpath///*[@id="submitForm"]'],
                    ["pierce/#nonAccGradSampleJson > div > input"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 46,
                    y: 18.677001953125,
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
        await page.pdf({ path: "./test-pdfs/TestCaseFour.pdf", format: "A4" })
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

QUnit.module("fnTestingCaseFour", (hooks) => {
    QUnit.test("Test Case Four", (assert) => {
        const done = assert.async()
        fnTestingCaseFour((res) => {
            var oJSONActual = JSON.parse(res)
            assert.true(_.isEqual(oJSONActual, oJSONModelExpected))
            done()
        })
    })
})
