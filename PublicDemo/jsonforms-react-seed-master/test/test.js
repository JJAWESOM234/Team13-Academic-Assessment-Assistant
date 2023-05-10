const puppeteer = require("puppeteer")
var expectedFormData = {
    college: "University of Nebraska at Omaha",
    program: "Computer Science",
    academicYear: "2022-2023",
    preparer: "Christopher Doe",
    deptSchool: "IS&T",
    degreeLevel: "Bachelors",
    dateRange: "2022 - 2023",
  
    studentLearningOutcomes:{    
        programSLOTable:[
            
            {
            programSLODesc: "Programming Skills",
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
        decisionsAndActionsSLODesc: "A description of the specific decisions and actions"
      }
    ],
  
    additionalInformation: "Additional info here"
}


var expectedString={
    "college": "University of Nebraska at Omaha",
    "program": "Computer Science",
    "academicYear": "2022-2023",
    "preparer": "Christopher Doe",
    "deptSchool": "IS&T",
    "degreeLevel": "Bachelors",
    "dateRange": "2022 - 2023",
  
    "studentLearningOutcomes":{    
        "programSLOTable":[
            
            {
            "programSLODesc": "Programming Skills",
            "programSLOBloom": "Knowledge",
            "programSLOCommon": ["1", "3"]
            }
            
        ],
        
        "proStandardsQuestion": true,
        "stakeholders": `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },
  
    "assessmentMethods":{
        "assessmentMeasure":[
            {
            "measureTitle": "Tests and Exams",
            "measureDescription": "This is the measure of all tests and exams",
            "measureDomain": ["Examination"],
            "measureType": "direct",
            "measurePoint":{
                "measurePointInProgram": "finalTerm",
                "measurePointLocation": "Dodge Campus"
            },
            "measurePopulation": "allStudents",
            "measureDataFreq": "other",
            "measureProficiencyThreshold": "Proficiency Threshold is ###",
            "measureProficiencyTarget": "Proficiency Target is ##%"
            }
        ],
      "measureComplementDirect": "Describe indirect measures here."
    },
  
    "dataCollection":{
      "dataResultsTable":[
        {
            "dataResultsEntryName": "SLO 1 - Measure One",
            "dataResultsEntryRange": "August 15, 2022 - December 15, 2022",
            "dataResultsEntryNumStudents": 242,
            "dataResultsEntryPercStudents": "78%"    
        }
      ],
      "dataSLOStatusTable":[
        {
          "dataSLOStatus": "met"
        },
      ],
      "dataResultsDescription": "A description of the data results and how they are communicated."
    },
    
    "decisionsAndActions":[
      {
        "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
      }
    ],
  
    "additionalInformation": "Additional info here"
}

function compareJSONModels(actualResult){

    var aTestingSet = [
        "college",
        "program",
        "academicYear",
        "lastAccReview",
        "deptSchool",
        "degreeLevel",
        "personPreparingReport",
        "accreditationBody",
        "studentLearningOutcomes",
        "assessmentMethods",
        "dataCollection",
        "decisionsAndActions",
        "additionalInformation"

    ]
    var bSameModel = true

    for (let [key1, valueActual] of Object.entries(actualResult)) {
        for (let [key2, valueExp] of Object.entries(expectedFormData)) {
            if (aTestingSet.includes(key1) && key1 === key2) {
                if (valueActual !== valueExp) {
                    bSameModel = false
                    return bSameModel
                }
            }
        }
    }

    return bSameModel;
}

async function test () {

    //Load assessment assistant page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:3000/")
    await page.setViewport({
      width: 1246,
      height: 1167,
      deviceScaleFactor: 1,

      });


/*
    //Expand the 4 form sections
    await page.click(".MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiButtonBase-root .MuiSvgIcon-root", {
        timeout: 50,
    })


    await page.click(".MuiGrid-root:nth-child(2) > .MuiPaper-root > .MuiButtonBase-root", {
        timeout: 50,
    })
    await page.waitForTimeout(1000);
    await page.click(".MuiGrid-root:nth-child(3) > .MuiPaper-root > .MuiButtonBase-root", {
        timeout: 50,
    })
    await page.click(".MuiGrid-root:nth-child(4) > .MuiPaper-root .MuiAccordionSummary-content", {
        timeout: 50,
    })
    
    //Fill out header inputs
    await page.type("[id='#/properties/head/properties/college-input']", expectedFormData.college)
    await page.type("[id='#/properties/head/properties/program-input']", expectedFormData.program)
    await page.type("[id='#/properties/head/properties/academicYear-input']", expectedFormData.academicYear)
    await page.type("[id='#/properties/head/properties/deptSchool-input']", expectedFormData.deptSchool)
    await page.type("[id='#/properties/head/properties/degreeLevel-input']", expectedFormData.degreeLevel)
    await page.type("[id='#/properties/head/properties/dateRange-input']", expectedFormData.dateRange)
    await page.type("[id='#/properties/head/properties/preparer-input']", expectedFormData.preparer)

    //Complete Section 1A - Fill out 1 SLO
    await page.type("#root.form-control", 
    expectedFormData.studentLearningOutcomes.programSLOTable[0].programSLODesc)

    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
    await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

    // Complete Sections 1B and 1C
    await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
    await page.type("#root_studentLearningOutcomes_stakeholders", expectedFormData.studentLearningOutcomes.stakeholders)
    
    //
    
    /* Testing that adding another SLO and inputting works as intended
    await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
    
    await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
    

    // Complete Section 2 - Assessment Measure

    await page.type("#root_assessmentMethods_assessmentMeasure_0_measureTitle",
    expectedFormData.assessmentMethods.assessmentMeasure[0].measureTitle)
    await page.type("#root_assessmentMethods_assessmentMeasure_0_measureDescription",
    expectedFormData.assessmentMethods.assessmentMeasure[0].measureDescription)
    await page.click("#root_assessmentMethods_assessmentMeasure_0_measureDomain > .checkbox:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_0_measureType > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_0_measurePoint_measurePointInProgram > .radio:nth-child(1) span > span")
    
    await page.type("#root_assessmentMethods_assessmentMeasure_0_measurePoint_measurePointLocation",
    expectedFormData.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
    await page.click("#root_assessmentMethods_assessmentMeasure_0_measurePopulation > .radio:nth-child(1) span > span")
    await page.click("#root_assessmentMethods_assessmentMeasure_0_measureDataFreq > .radio:nth-child(3) span > span")

    await page.type("#root_assessmentMethods_assessmentMeasure_0_measureProficiencyThreshold",
    expectedFormData.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
    await page.type("#root_assessmentMethods_assessmentMeasure_0_measureProficiencyTarget",
    expectedFormData.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)

    await page.type("#root_assessmentMethods_measureComplementDirect",
    expectedFormData.assessmentMethods.measureComplementDirect)
    
    // Complete Section 3 - Data Collection

    await page.type("#root_dataCollection_dataResultsTable_0 > .form-group:nth-child(2) > #root",
    expectedFormData.dataCollection.dataResultsTable[0].dataResultsEntryName)
    await page.type("#root_dataCollection_dataResultsTable_0 > .form-group:nth-child(3) > #root",
    expectedFormData.dataCollection.dataResultsTable[0].dataResultsEntryRange)
    await page.type(".dataResultsEntryNumStudents > #root",
    expectedFormData.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents.toString(), {delay: 20})
    await page.type(".dataResultsEntryPercStudents > #root",
    expectedFormData.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents)

    await page.click(".dataSLOStatus > #root > .radio:nth-child(1) span > span")
    await page.type("#root_dataCollection_dataResultsDescription",
    expectedFormData.dataCollection.dataResultsDescription)

    // Complete Section 4 - Decisions and Actions
    await page.type("#root_decisionsAndActions_0 #root",
    expectedFormData.decisionsAndActions[0].decisionsAndActionsSLODesc)

    // Complete Section 5 - Additional Information
    await page.type("#root_additionalInformation", expectedFormData.additionalInformation)
*/

    
    await page.pdf({ path: "example.pdf", format: "letter" })
    //Submit Form
    page.on('dialog', async dialog => {
        await dialog.accept();
        });
    const submitButton = await page.$('.MuiGrid-grid-sm-10 > div > .MuiButtonBase-root')
    await page.click(".MuiGrid-grid-sm-10 > div > .MuiButtonBase-root")
    
    // Copy Final Form Data
    await page.focus(".data")
    console.log(jsonReturnActual)
    var jsonReturnActual = await page.$eval(
        ".data",
        (el) => el.textContent
    )
    console.log(jsonReturnActual)
    await browser.close()

};

test();