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

var oJSONModelTest3 = {
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
          measureDataFreq: "oncePerSemester",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Surveys",
          measureDescription: "This is the measure of all surveys",
          measureDomain: ["Product"],
          measureType: "indirect",
          measurePoint:{
              measurePointInProgram: "finalYear",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "sampleStudents",
          measureDataFreq: "oncePerYear",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Measure 3",
          measureDescription: "Measure 3 Desc",
          measureDomain: ["Performance"],
          measureType: "indirect",
          measurePoint:{
              measurePointInProgram: "finalYear",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "sampleStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
      ],
    measureComplementDirect: "Describe indirect measures here."
  },

  dataCollection:{
    dataResultsTable: [ {} ], 
    dataSLOStatusTable: [ {} ] 
  },
  
  decisionsAndActions:[
    {}, ''
  ],
}

var oJSONModelTest4 = {
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
        },
        {
          programSLODesc: "Students will comprehend",
          programSLOBloom: "Comprehension",
          programSLOCommon: ["Not Applicable for SLO"]
        },
        {
          programSLODesc: "Students will evaluate",
          programSLOBloom: "Evaluation",
          programSLOCommon: ["1", "2"]
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
        },
        {
          measureTitle: "Measure 3",
          measureDescription: "Measure 3 Desc",
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
        },
        {
          measureTitle: "Measure 4",
          measureDescription: "Measure 4 Desc",
          measureDomain: ["Examination", "Product", "Performance"],
          measureType: "indirect",
          measurePoint:{
              measurePointInProgram: "finalYear",
              measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "sampleStudents",
          measureDataFreq: "oncePerYear",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
      ],
    measureComplementDirect: "Describe indirect measures here."
  },

  dataCollection:{
    dataResultsTable: [ {} ], dataSLOStatusTable: [ {} ]
  },
  
  decisionsAndActions:[
    {}, '', '', ''
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
      await page.click(".nag-button", {
          timeout: 50,
      })
      
      //Fill out header inputs
      await page.type("#root_headerInfo_college", oJSONModelTest1.headerInfo.college)
      await page.type("#root_headerInfo_program", oJSONModelTest1.headerInfo.program)
      await page.type("#root_headerInfo_academicYear", oJSONModelTest1.headerInfo.academicYear)
      await page.type("#root_headerInfo_deptSchool", oJSONModelTest1.headerInfo.deptSchool)
      await page.type("#root_headerInfo_degreeLevel", oJSONModelTest1.headerInfo.degreeLevel)
      await page.type("#root_headerInfo_dateRange", oJSONModelTest1.headerInfo.dateRange)
      await page.type("#root_headerInfo_preparer", oJSONModelTest1.headerInfo.preparer)

      //Complete Section 1A - Fill out 1 SLO
      await page.type("#root.form-control", 
      oJSONModelTest1.studentLearningOutcomes.programSLOTable[0].programSLODesc)

      await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
      await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
      await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

      // Complete Sections 1B and 1C
      await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
      await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest1.studentLearningOutcomes.stakeholders)
      
      //
      
      /* Testing that adding another SLO and inputting works as intended
      await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
      
      await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
      */

      // Complete Section 2 - Assessment Measure
      
      await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(1) > #root",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureTitle)
      await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(2) > #root",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureDescription)
      await page.click("#root_assessmentMethods_assessmentMeasure_0 .checkbox #root-0")
      await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measureType > #root #root-0")
      await page.click("#root_assessmentMethods_assessmentMeasure_0 #root_measurePointInProgram > .radio:nth-child(1) span > span")
      
      await page.type("#root_measurePointLocation",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
      await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measurePopulation .radio:nth-child(1) > label")
      await page.click("#root_assessmentMethods_assessmentMeasure_0 .radio:nth-child(3) span > span")
      await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(8) > #root",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
      await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(9) > #root",
      oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)

      await page.type("#root_assessmentMethods_measureComplementDirect",
      oJSONModelTest1.assessmentMethods.measureComplementDirect)
      
      // Complete Section 3 - Data Collection

      await page.type("#root_dataCollection_dataResultsTable_0 > .form-group:nth-child(1) > #root",
      oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryName)
      await page.type("#root_dataCollection_dataResultsTable_0 > .form-group:nth-child(2) > #root",
      oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryRange)
      await page.type(".dataResultsEntryNumStudents > #root",
      oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents.toString(), {delay: 20})
      await page.type(".dataResultsEntryPercStudents > #root",
      oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents)

      await page.click(".dataSLOStatus > #root > .radio:nth-child(1) span > span")
      await page.type("#root_dataCollection_dataResultsDescription",
      oJSONModelTest1.dataCollection.dataResultsDescription)

      // Complete Section 4 - Decisions and Actions
      await page.type("#root_decisionsAndActions_0 #root",
      oJSONModelTest1.decisionsAndActions[0].decisionsAndActionsSLODesc)

      // Complete Section 5 - Additional Information
      await page.type("#root_additionalInformation", oJSONModelTest1.additionalInformation)

  
      
      await page.pdf({ path: "test1.pdf", format: "A4" })
      //Submit Form
      page.on('dialog', async dialog => {
          await dialog.accept();
          });
      await page.click('.form-submit-btn')
      
      // Copy Final Form Data
      await page.focus(".formData")
      var jsonReturnActual = await page.$eval(
          ".formData",
          (el) => el.textContent
      )
      //console.log(jsonReturnActual)
      await browser.close()

      callback && callback(jsonReturnActual)
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
    await page.click(".nag-button", {
        timeout: 50,
    })
    
    //Fill out header inputs
   
    //Complete Section 1A
    
    //First SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_0 > .table-slo-input > #root", 
    oJSONModelTest2.studentLearningOutcomes.programSLOTable[0].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

    //Click add slo button
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    //Second SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root",
    oJSONModelTest2.studentLearningOutcomes.programSLOTable[1].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .radio:nth-child(2) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-1")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-3")

    // Complete Sections 1B and 1C
    await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
    await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest1.studentLearningOutcomes.stakeholders)
    
    //
    
    /* Testing that adding another SLO and inputting works as intended
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
    */

    // Complete Section 2 - Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(1) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[0].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(2) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[0].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 .checkbox #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measureType > #root #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 #root_measurePointInProgram > .radio:nth-child(1) span > span")
    
    await page.type("#root_measurePointLocation",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measurePopulation .radio:nth-child(1) > label")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 .radio:nth-child(3) span > span")
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(8) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(9) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)

   
   
    
    // Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Second Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(1) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[1].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(2) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[1].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .checkbox:nth-child(3) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measureType > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointLocation", 
    oJSONModelTest2.assessmentMethods.assessmentMeasure[1].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measurePopulation > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .radio:nth-child(3) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(8) > #root", 
    oJSONModelTest2.assessmentMethods.assessmentMeasure[1].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(9) > #root",
    oJSONModelTest2.assessmentMethods.assessmentMeasure[1].measureProficiencyTarget)

    //Complement
    await page.type("#root_assessmentMethods_measureComplementDirect",
    oJSONModelTest2.assessmentMethods.measureComplementDirect)

    await page.pdf({ path: "test2.pdf", format: "A4" })
    //Submit Form
    page.on('dialog', async dialog => {
        await dialog.accept();
        });
    await page.click('.form-submit-btn')
    
    // Copy Final Form Data
    await page.focus(".formData")
    var jsonReturnActual = await page.$eval(
        ".formData",
        (el) => el.textContent
    )
    //console.log(jsonReturnActual)
    await browser.close()

    callback && callback(jsonReturnActual)
  })()
}

function fnTest3(callback) {
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
    await page.click(".nag-button", {
        timeout: 50,
    })
    
    //Fill out header inputs
   
    //Complete Section 1A
    
    //First SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_0 > .table-slo-input > #root", 
    oJSONModelTest3.studentLearningOutcomes.programSLOTable[0].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

    //Click add slo button
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    //Second SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root",
    oJSONModelTest3.studentLearningOutcomes.programSLOTable[1].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .radio:nth-child(2) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-1")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-3")

    // Complete Sections 1B and 1C
    await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
    await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest3.studentLearningOutcomes.stakeholders)
    
    //
    
    /* Testing that adding another SLO and inputting works as intended
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
    */

    // Complete Section 2 - Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(1) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[0].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(2) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[0].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 .checkbox #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measureType > #root #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 #root_measurePointInProgram > .radio:nth-child(1) span > span")
    
    await page.type("#root_measurePointLocation",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measurePopulation .radio:nth-child(1) > label")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measureDataFreq > #root #root-0")
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(8) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(9) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)
   
    
    // Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Second Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(1) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[1].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(2) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[1].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .checkbox #root-1")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measureDataFreq > #root #root-1")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measureType > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointLocation", 
    oJSONModelTest3.assessmentMethods.assessmentMeasure[1].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measurePopulation > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .radio:nth-child(2) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(8) > #root", 
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(9) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureProficiencyTarget)

    //Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Third Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(1) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(2) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_2 .checkbox:nth-child(3) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 > .measureType > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_2 #root_measurePointLocation", 
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_2 > .measurePopulation > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 .radio:nth-child(3) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(8) > #root", 
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(9) > #root",
    oJSONModelTest3.assessmentMethods.assessmentMeasure[2].measureProficiencyTarget)

    //Complement
    await page.type("#root_assessmentMethods_measureComplementDirect",
    oJSONModelTest3.assessmentMethods.measureComplementDirect)

    await page.pdf({ path: "test3.pdf", format: "A1" })
    //Submit Form
    page.on('dialog', async dialog => {
        await dialog.accept();
        });
    await page.click('.form-submit-btn')
    
    // Copy Final Form Data
    await page.focus(".formData")
    var jsonReturnActual = await page.$eval(
        ".formData",
        (el) => el.textContent
    )
    //console.log(jsonReturnActual)
    await browser.close()

    callback && callback(jsonReturnActual)
  })()
}

function fnTest4(callback) {
  ;(async () => {
       //Load assessment assistant page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:3000/")
    

    //Select Non Accred Grad Form
    await page.click(".nag-button", {
        timeout: 50,
    })
    
    //Fill out header inputs
   
    //Complete Section 1A
    
    //First SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_0 > .table-slo-input > #root", 
    oJSONModelTest4.studentLearningOutcomes.programSLOTable[0].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

    //Click add slo button
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    //Second SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root",
    oJSONModelTest4.studentLearningOutcomes.programSLOTable[1].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .radio:nth-child(2) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-1")
    await page.click("#root_studentLearningOutcomes_programSLOTable_1 .checkbox #root-3")

    //Click add SLO button
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    //Third SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_2 > .table-slo-input > #root",
    oJSONModelTest4.studentLearningOutcomes.programSLOTable[2].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_2 .radio:nth-child(3) > label")
    await page.click("#root_studentLearningOutcomes_programSLOTable_2 .checkbox #root-4")
    
    //Click add SLO button
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    //Fourth SLO
    await page.type("#root_studentLearningOutcomes_programSLOTable_3 > .table-slo-input > #root",
    oJSONModelTest4.studentLearningOutcomes.programSLOTable[3].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_3 .radio:nth-child(6) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_3 .checkbox #root-0")
    await page.click("#root_studentLearningOutcomes_programSLOTable_3 .checkbox #root-1")
    
    // Complete Sections 1B and 1C
    await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
    await page.type("#root_studentLearningOutcomes_stakeholders", oJSONModelTest4.studentLearningOutcomes.stakeholders)
    
    //
    
    /* Testing that adding another SLO and inputting works as intended
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
    */

    // Complete Section 2 - Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(1) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[0].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(2) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[0].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 .checkbox #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measureType > #root #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 #root_measurePointInProgram > .radio:nth-child(1) span > span")
    
    await page.type("#root_measurePointLocation",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
    await page.click("#root_assessmentMethods_assessmentMeasure_0 > .measurePopulation .radio:nth-child(1) > label")
    await page.click("#root_assessmentMethods_assessmentMeasure_0 .radio:nth-child(3) span > span")
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(8) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_0 > .form-group:nth-child(9) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)
   
    
    // Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Second Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(1) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[1].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(2) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[1].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .checkbox:nth-child(3) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measureType > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_1 #root_measurePointLocation", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[1].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_1 > .measurePopulation > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_1 .radio:nth-child(3) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(8) > #root", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_1 > .form-group:nth-child(9) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureProficiencyTarget)

    //Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Third Assessment Measure
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(1) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(2) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_2 .checkbox:nth-child(3) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 > .measureType > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_2 #root_measurePointLocation", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_2 > .measurePopulation > #root > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_2 .radio:nth-child(3) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(8) > #root", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_2 > .form-group:nth-child(9) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[2].measureProficiencyTarget)

    //Click add measure button
    await page.click("#root_assessmentMethods_assessmentMeasure .col-xs-3 > .btn")

    //Fourth Assessment Measure

    await page.type("#root_assessmentMethods_assessmentMeasure_3 > .form-group:nth-child(1) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[3].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_3 > .form-group:nth-child(2) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[3].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_3 .checkbox #root-0")
    await page.click("#root_assessmentMethods_assessmentMeasure_3 .checkbox #root-1")
    await page.click("#root_assessmentMethods_assessmentMeasure_3 .checkbox #root-2")

    await page.click("#root_assessmentMethods_assessmentMeasure_3 > .measureType > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_3 #root_measurePointInProgram > .radio:nth-child(2) span > span")
    

    await page.type("#root_assessmentMethods_assessmentMeasure_3 #root_measurePointLocation", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[3].measurePoint.measurePointLocation)

    await page.click("#root_assessmentMethods_assessmentMeasure_3 > .measurePopulation > #root > .radio:nth-child(2) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_3 > .measureDataFreq > #root #root-1")

    await page.type("#root_assessmentMethods_assessmentMeasure_3 > .form-group:nth-child(8) > #root", 
    oJSONModelTest4.assessmentMethods.assessmentMeasure[3].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_3 > .form-group:nth-child(9) > #root",
    oJSONModelTest4.assessmentMethods.assessmentMeasure[3].measureProficiencyTarget)

    //Complement
    await page.type("#root_assessmentMethods_measureComplementDirect",
    oJSONModelTest4.assessmentMethods.measureComplementDirect)

    await page.pdf({ path: "test4.pdf", format: "A1" })
    //Submit Form
    page.on('dialog', async dialog => {
        await dialog.accept();
        });
    await page.click('.form-submit-btn')
    
    // Copy Final Form Data
    await page.focus(".formData")
    var jsonReturnActual = await page.$eval(
        ".formData",
        (el) => el.textContent
    )
    //console.log(jsonReturnActual)
    await browser.close()

    callback && callback(jsonReturnActual)
  })()
}

QUnit.config.testTimeout = 600000;


QUnit.module("fnTest1", (hooks) => {
    QUnit.test("Test Case 1", (assert) => {
        var done = assert.async()
        fnTest1((res) => {
            assert.true(fnCompareJSONModels(oJSONModelTest1, res))
            done()
        })
    })
})


QUnit.module("fnTest2", (hooks) => {
  QUnit.test("Test Case 2", (assert) => {
      var done = assert.async()
      fnTest2((res) => {
          assert.true(fnCompareJSONModels(oJSONModelTest2, res))
          done()
      })
  })
})

QUnit.module("fnTest3", (hooks) => {
  QUnit.test("Test Case 3", (assert) => {
      var done = assert.async()
      fnTest3((res) => {
          assert.true(fnCompareJSONModels(oJSONModelTest3, res))
          done()
      })
  })
})

QUnit.module("fnTest4", (hooks) => {
  QUnit.test("Test Case 4", (assert) => {
      var done = assert.async()
      fnTest4((res) => {
          assert.true(fnCompareJSONModels(oJSONModelTest4, res))
          done()
      })
  })
})

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
    
    var foo1 = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } };
    var foo2 = { a: 1, b: 2, c: { a: 1, b: 3, c: { a: 1, b: 2 } } };
    var foo3 = {c: { a: 1, c: { a: 1, b: 2 }, b: 3 },  a: 1, b: 2 };

    //console.log(_.isEqual(foo1, foo2))
    //console.log(_.isEqual(foo2, foo3))
    bSameModel = _.isEqual(oJSONActual, oJSONModelExpected)
    return bSameModel
}

fnTest4();