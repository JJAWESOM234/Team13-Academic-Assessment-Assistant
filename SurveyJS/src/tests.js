const puppeteer = require("puppeteer")
const _ = require('lodash');

var oJSONModelTest1= {
  headerInfo: {
    college: "College of IS&T",
    program: "Computer Science",
    academicYear: "2022-2023",
    preparer: "John Doe",
    deptSchool: "Computer Science Department",
    degreeLevel: "Master's",
    dateRange: "August 15, 2022 - May 15, 2023",
  },
  
  studentLearningOutcomes:{    
    programSLOTable:[
        {
        programSLODesc: "Students will learn XYZ",
        programSLOBloom: "Knowledge",
        programSLOCommon: ["1", "3"]
        } 
    ],
    
    proStandardsQuestion: true,
    stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
  },

  assessmentMethods:{
      assessmentMeasure:[
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint:{
              measurePointInProgram: "finalTerm",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        }
      ],
    measureComplementDirect: "Describe indirect measures here."
  },

  dataCollection:{
    dataResultsTable:[
      {
          dataResultsEntryName: "SLO 1 - Measure One",
          dataResultsEntryRange: "August 15, 2022 - December 15, 2022",
          dataResultsEntryNumStudents: 242,
          dataResultsEntryPercStudents: "78%"    
      }
    ],
    dataSLOStatusTable:[
      {
        dataSLOStatus: "met"
      },
    ],
    dataResultsDescription: "A description of the data results and how they are communicated."
  },
  
  decisionsAndActions:[
    {
      decisionsAndActionsSLODesc: "A description of the specific decisions and actions",
    },
  ],

  additionalInformation: "Additional info here"
}

var oJSONModelTest2 = {
  studentLearningOutcomes:{    
    programSLOTable:[
        {
        programSLODesc: "Students will learn XYZ",
        programSLOBloom: "Knowledge",
        programSLOCommon: ["1", "3"]
        },
        {
          programSLODesc: "Students can analyze problems",
          programSLOBloom: "Analysis",
          programSLOCommon: ["2", "4"]
        } 
    ],
    
    proStandardsQuestion: true,
    stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
  },

  assessmentMethods:{
      assessmentMeasure:[
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint:{
              measurePointInProgram: "finalTerm",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Surveys",
          measureDescription: "This is the measure of all surveys",
          measureDomain: ["Performance"],
          measureType: "direct",
          measurePoint:{
              measurePointInProgram: "finalYear",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        }
      ],
    measureComplementDirect: "Describe indirect measures here."
  },

  dataCollection:{
    dataResultsTable: [ {} ], 
    dataSLOStatusTable: [ {} ] 
  },
  
  decisionsAndActions:[
    {}, ''
  ]
}

function fnTest1(callback) {
    ;(async () => {
      
      //Load assessment assistant page
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto("http://localhost:3000/")
      await page.setViewport({
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,

          });

      //Select Non Accred Grad Form
      await page.click(".sd-selectbase--multi-column:nth-child(1) > .sd-selectbase__column:nth-child(3)", {
          timeout: 50,
      })
      
      // Fill out header inputs
      await page.type('input[aria-label="College"]', oJSONModelTest1.headerInfo.college)
      await page.type('input[aria-label="Department/School"]', oJSONModelTest1.headerInfo.program)
      await page.type('input[aria-label="Program"]', oJSONModelTest1.headerInfo.academicYear)
      await page.type('input[aria-label="Degree level"]', oJSONModelTest1.headerInfo.deptSchool)
      await page.type('input[aria-label="Academic Year of Report"]', oJSONModelTest1.headerInfo.degreeLevel)
      await page.type('input[aria-label="Date Range of Reported Data"]', oJSONModelTest1.headerInfo.dateRange)
      await page.type('input[aria-label="Reporter"]', oJSONModelTest1.headerInfo.preparer)

      // Complete Section 1A - Fill out 1 SLO
      await page.type('input[placeholder="SLO 1"]', 
      oJSONModelTest1.studentLearningOutcomes.programSLOTable[0].programSLODesc)
      await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(3) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(1) .sd-item__decorator');
      await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(2) > .sd-item:nth-child(2) .sd-item__decorator');
      
      // Complete Sections 1B and 1C
      //   await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
      //   await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest1.studentLearningOutcomes.stakeholders)

      // Complete Section 2 - Assessment Measure
      await page.type("#sq_263i",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureTitle)
      await page.type("#sq_264i",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureDescription)
      await page.click("#sq_265 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
      await page.click("#sq_266 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
      await page.click("#sq_267 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
      
      await page.type("#sq_268i",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
      await page.click("#sq_269 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
      await page.click("#sq_270 .sd-selectbase__column:nth-child(3) .sd-item__decorator")
      await page.type("#sq_271i",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
      await page.type("#sq_272i",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)

      await page.type("#sq_193i",
      oJSONModelTest1.assessmentMethods.measureComplementDirect)
      
      // Complete Section 3 - Data Collection
      // await page.type("#sq_226i",
      // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryName)
      // await page.type("#sq_228i",
      // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryRange)
      // await page.type("#sq_229i",
      // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents.toString(), {delay: 20})
      // await page.type("#sq_230i",
      // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents)

      await page.click("div:nth-of-type(5) tr:nth-of-type(1) fieldset > div > div:nth-of-type(1) span.sd-item__decorator")
      await page.type("#sq_208i",
      oJSONModelTest1.dataCollection.dataResultsDescription)

      // Complete Section 4 - Decisions and Actions
      // await page.type("#sq_255i",
      // oJSONModelTest1.decisionsAndActions[0].decisionsAndActionsSLODesc)

      // Complete Section 5 - Additional Information
      await page.type('textarea[placeholder="OPTIONAL: Provide additional information that may be helpful to reviewers."]', oJSONModelTest1.additionalInformation)

      await page.pdf({ path: "test1.pdf", format: "A4" })

      //Submit Form
      page.on('dialog', async dialog => {
          await dialog.accept();
          });
      await page.click('.sd-btn')
      
      // Copy Final Form Data
      // var jsonReturnActual = getAlert();
      // console.log(jsonReturnActual)
      await browser.close()

      // callback
      // callback && callback(jsonReturnActual)
    })()
}

function fnTest2(callback) {
  ;(async () => {
      
    //Load assessment assistant page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:3000/")
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,

        });

    //Select Non Accred Grad Form
    await page.click(".sd-selectbase--multi-column:nth-child(1) > .sd-selectbase__column:nth-child(3)", {
        timeout: 50,
    })
    
    // Fill out header inputs
    await page.type('input[aria-label="College"]', oJSONModelTest1.headerInfo.college)
    await page.type('input[aria-label="Department/School"]', oJSONModelTest1.headerInfo.program)
    await page.type('input[aria-label="Program"]', oJSONModelTest1.headerInfo.academicYear)
    await page.type('input[aria-label="Degree level"]', oJSONModelTest1.headerInfo.deptSchool)
    await page.type('input[aria-label="Academic Year of Report"]', oJSONModelTest1.headerInfo.degreeLevel)
    await page.type('input[aria-label="Date Range of Reported Data"]', oJSONModelTest1.headerInfo.dateRange)
    await page.type('input[aria-label="Reporter"]', oJSONModelTest1.headerInfo.preparer)

    // Complete Section 1A - Fill out 2 SLOs
    await page.type('input[placeholder="SLO 1"]', 
    oJSONModelTest2.studentLearningOutcomes.programSLOTable[0].programSLODesc)
    await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(3) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(1) .sd-item__decorator');
    await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(2) > .sd-item:nth-child(2) .sd-item__decorator');

    await page.type('input[placeholder="SLO 2"]', 
    oJSONModelTest2.studentLearningOutcomes.programSLOTable[1].programSLODesc)
    await page.click('tr:nth-of-type(2) > td:nth-of-type(2) div > div:nth-of-type(2) > div:nth-of-type(2) span.sd-item__decorator');
    await page.click('tr:nth-of-type(2) > td:nth-of-type(3) fieldset > div > div:nth-of-type(2) > div:nth-of-type(1) span.sd-item__decorator');
    
    // Complete Sections 1B and 1C
    //   await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
    //   await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest1.studentLearningOutcomes.stakeholders)

    // Complete Section 2 - Assessment Measure
    await page.type("#sq_263i",
    oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureTitle)
    await page.type("#sq_264i",
    oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureDescription)
    await page.click("#sq_265 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
    await page.click("#sq_266 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
    await page.click("#sq_267 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
    
    await page.type("#sq_268i",
    oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
    await page.click("#sq_269 .sd-selectbase__column:nth-child(1) .sd-item__decorator")
    await page.click("#sq_270 .sd-selectbase__column:nth-child(3) .sd-item__decorator")
    await page.type("#sq_271i",
    oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
    await page.type("#sq_272i",
    oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)

    await page.type("#sq_193i",
    oJSONModelTest1.assessmentMethods.measureComplementDirect)
    
    // Complete Section 3 - Data Collection
    // await page.type("#sq_226i",
    // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryName)
    // await page.type("#sq_228i",
    // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryRange)
    // await page.type("#sq_229i",
    // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents.toString(), {delay: 20})
    // await page.type("#sq_230i",
    // oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents)

    await page.click("div:nth-of-type(5) tr:nth-of-type(1) fieldset > div > div:nth-of-type(1) span.sd-item__decorator")
    await page.type("#sq_208i",
    oJSONModelTest1.dataCollection.dataResultsDescription)

    // Complete Section 4 - Decisions and Actions
    // await page.type("#sq_255i",
    // oJSONModelTest1.decisionsAndActions[0].decisionsAndActionsSLODesc)

    // Complete Section 5 - Additional Information
    await page.type('textarea[placeholder="OPTIONAL: Provide additional information that may be helpful to reviewers."]', oJSONModelTest1.additionalInformation)

    await page.pdf({ path: "test2.pdf", format: "A4" })

    //Submit Form
    page.on('dialog', async dialog => {
        await dialog.accept();
        });
    await page.click('.sd-btn')
    
    // Copy Final Form Data
    // var jsonReturnActual = getAlert();
    // console.log(jsonReturnActual)
    await browser.close()

    // callback
    // callback && callback(jsonReturnActual)
  })()
}

// QUnit.config.testTimeout = 600000;


// QUnit.module("fnTest1", (hooks) => {
//     QUnit.test("Test Case 1", (assert) => {
//         var done = assert.async()
//         fnTest1((res) => {
//             assert.true(fnCompareJSONModels(oJSONModelTest1, res))
//             done()
//         })
//     })
// })


// QUnit.module("fnTest2", (hooks) => {
//   QUnit.test("Test Case 2", (assert) => {
//       var done = assert.async()
//       fnTest2((res) => {
//           assert.true(fnCompareJSONModels(oJSONModelTest2, res))
//           done()
//       })
//   })
// })

function fnCompareJSONModels(oJSONModelExpected, sJSONActual) {
    // console.log("\n\n\n\n\n")
    // console.log(sJSONActual)
    console.log("\n\n\n\n\n")
    console.log("***EXPECTED JSON***\n")
    console.log(oJSONModelExpected)

    var oJSONActual = JSON.parse(sJSONActual)
    
    console.log("\n\n\n\n\n")
    console.log("***ACTUAL JSON***\n")
    console.log(oJSONActual)
    var bSameModel = true

    bSameModel = _.isEqual(oJSONActual, oJSONModelExpected)
    return bSameModel
}

fnTest1();
fnTest2();