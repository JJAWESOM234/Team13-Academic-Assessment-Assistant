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
                        dataResultsSLO1NumStudents: 73,
                        dataResultsSLO1PercStudents: "85%",
                    },
                },
            ],
            dataSLOStatus: "Met",
            decisionActions: "Continue with SLO",
        },
    ],
    bSegment: "Yes",
    cSegment: "No stakeholders",
    measureComplementDirect: "No additional measures",
    dataResultsDescription: "No results will be communicated",
    additionalInformation: "No additional information",
}

function fnTestingCaseOne(callback) {
    ;(async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const timeout = 5000
        page.setDefaultTimeout(timeout)

        {
            const targetPage = page
            await targetPage.setViewport({
                width: 1783,
                height: 1329,
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
                    x: 107,
                    y: 14,
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
                    x: 237,
                    y: 7.34375,
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
                    x: 67,
                    y: 15.34375,
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
                    x: 96,
                    y: 24.34375,
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
                    x: 185,
                    y: 10.34375,
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
                    x: 186,
                    y: 21.34375,
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
                    x: 98,
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
                    x: 281,
                    y: 5.34375,
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
                    x: 154,
                    y: 29.0103759765625,
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
                    x: 87,
                    y: 9.34375,
                },
            })
        }
        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-10"]/div[3]/div/div/div[2]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    [
                        "#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common div:nth-of-type(2) > label",
                    ],
                    [
                        'xpath///*[@id="jsonform-8-elt-counter-10"]/div[3]/div/div/div[2]/label',
                    ],
                    [
                        "pierce/#nonAccGradContainer div.jsonform-error-SLOInformation\\[0\\]---programSLOsSLO1Common div:nth-of-type(2) > label",
                    ],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 61,
                    y: 11.34375,
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
                    x: 108,
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
                    x: 85,
                    y: 14.34375,
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
                    x: 122,
                    y: 18.34375,
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
                    x: 99,
                    y: 19.34375,
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
                    x: 98,
                    y: 8.34375,
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
                    x: 75,
                    y: 16.34375,
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
                    x: 42,
                    y: 8.010406494140625,
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
                    x: 85,
                    y: 20.0103759765625,
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
                await changeSelectElement(element, "73")
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
                await typeIntoElement(element, "73")
            } else {
                await changeElementValue(element, "73")
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
                    x: 73,
                    y: 16.0103759765625,
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
                    x: 38,
                    y: 8.67706298828125,
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
                    x: 93,
                    y: 46.67706298828125,
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
                    x: 109,
                    y: 36.67706298828125,
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
                await changeSelectElement(element, "No stakeholders")
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
                await typeIntoElement(element, "No stakeholders")
            } else {
                await changeElementValue(element, "No stakeholders")
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
                    x: 182,
                    y: 36.34375,
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
                await changeSelectElement(element, "No additional measures")
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
                await typeIntoElement(element, "No additional measures")
            } else {
                await changeElementValue(element, "No additional measures")
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
                    x: 117,
                    y: 137.0103759765625,
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
                await changeSelectElement(
                    element,
                    "No results will be communicated"
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
                    "No results will be communicated"
                )
            } else {
                await changeElementValue(
                    element,
                    "No results will be communicated"
                )
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
                    x: 228,
                    y: 46.677001953125,
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
                    x: 57,
                    y: 16.34375,
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

        await page.pdf({ path: "./test-pdfs/TestCaseOne.pdf", format: "A4" })
        await browser.close()

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

        async function waitForConnected(element, timeout) {
            await waitForFunction(async () => {
                return await element.getProperty("isConnected")
            }, timeout)
        }

        async function waitForInViewport(element, timeout) {
            await waitForFunction(async () => {
                return await element.isIntersectingViewport({ threshold: 0 })
            }, timeout)
        }

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

        async function querySelectorsAll(selectors, frame) {
            for (const selector of selectors) {
                const result = await querySelectorAll(selector, frame)
                if (result.length) {
                    return result
                }
            }
            return []
        }

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

        async function changeSelectElement(element, value) {
            await element.select(value)
            await element.evaluateHandle((e) => {
                e.blur()
                e.focus()
            })
        }

        async function changeElementValue(element, value) {
            await element.focus()
            await element.evaluate((input, value) => {
                input.value = value
                input.dispatchEvent(new Event("input", { bubbles: true }))
                input.dispatchEvent(new Event("change", { bubbles: true }))
            }, value)
        }

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

QUnit.module("fnTestingCaseOne", (hooks) => {
    QUnit.test("Test Case One", (assert) => {
        const done = assert.async()
        fnTestingCaseOne((res) => {
            var oJSONActual = JSON.parse(res)
            
            assert.true(_.isEqual(oJSONActual, oJSONModelExpected))
            done()
        })
    })
})

//lodash
