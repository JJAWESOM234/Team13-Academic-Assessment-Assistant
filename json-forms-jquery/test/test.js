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

        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            await element.click({
                offset: {
                    x: 226,
                    y: 9.67706298828125,
                },
            })
        }

        {
            const targetPage = page
            await scrollIntoViewIfNeeded(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                ],
                targetPage,
                timeout
            )
            const element = await waitForSelectors(
                [
                    ["aria/SLO Title"],
                    ["#jsonform-5-elt-SLOInformation\\[0\\]\\.programSLOsSLO1"],
                ],
                targetPage,
                { timeout, visible: true }
            )
            const inputType = await element.evaluate((el) => el.type)
            if (inputType === "select-one") {
                await changeSelectElement(element, "Hello")
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
                await typeIntoElement(element, "Hello")
            } else {
                await changeElementValue(element, "Hello")
            }
        }
        // await page.type("input[name=program]", "hellop")

        await page.pdf({ path: "./test-pdfs/example.pdf", format: "A4" })
        await browser.close()

        // callback(jsonReturnActual)
    })()
}

// QUnit.module("fnInitialTestingDemo", (hooks) => {
//     QUnit.test("Initial Portion of the form", (assert) => {
//         const done = assert.async()
//         fnInitialTestingDemo((res) => {
//             assert.true(fnCompareJSONModels(res))
//             done()
//         })
//     })
// })

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

function nothing() {
    console.log("nothing")
}

fnTestingCaseOne(nothing)
async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame)
        if (result.length) {
            return result
        }
    }
    return []
}

async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
        try {
            return await waitForSelector(selector, frame, options)
        } catch (err) {
            console.error(err)
        }
    }
    throw new Error(
        "Could not find element for selectors: " + JSON.stringify(selectors)
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
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 })
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
            throw new Error("Could not find element: " + selector.join(">>"))
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
        const elementsHandle = await frame.evaluateHandle((...elements) => {
            return elements
        }, ...elements)
        await Promise.all(elements.map((element) => element.dispose()))
        if (result && (properties || attributes)) {
            result = await elementsHandle.evaluate(
                (elements, properties, attributes) => {
                    for (const element of elements) {
                        if (attributes) {
                            for (const [name, value] of Object.entries(
                                attributes
                            )) {
                                if (element.getAttribute(name) !== value) {
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
                        if (!(a instanceof Object) || !(b instanceof Object)) {
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
