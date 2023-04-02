const puppeteer = require("puppeteer")

var expectedFormData = {
    college: "College of IS&T",
    program: "Computer Science",
    academicYear: "2022-2023",
    preparer: "John Doe",
    deptSchool: "Computer Science Department",
    degreeLevel: "Master's",
    dateRange: "August 15, 2022 - May 15, 2023",
  
    studentLearningOutcomes:{    
        programSLOTable:{
            items:[
                {
                programSLODesc: "Students will learn XYZ",
                programSLOBloom: "Knowledge",
                programSLOCommon: ["1", "3"]
                }
            ]
        },
        
        proStandardsQuestion: true,
        stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },
  
    assessmentMethods:{
        assessmentMeasure:{
            items:[
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
            ]
        },
      measureComplementDirect: "Describe indirect measures here."
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

async function test () {

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
        await page.click(".nag-button")
        //Fill out header inputs
        await page.type("#root_headerInfo_college", expectedFormData.college)
        await page.type("#root_headerInfo_program", expectedFormData.program)
        await page.type("#root_headerInfo_academicYear", expectedFormData.academicYear)
        await page.type("#root_headerInfo_deptSchool", expectedFormData.deptSchool)
        await page.type("#root_headerInfo_degreeLevel", expectedFormData.degreeLevel)
        await page.type("#root_headerInfo_dateRange", expectedFormData.dateRange)
        await page.type("#root_headerInfo_preparer", expectedFormData.preparer)
        //await page.screenshot({ path: "header.png" })

        //Complete Section 1A - Fill out 1 SLO
        await page.type("#root.form-control", 
        expectedFormData.studentLearningOutcomes.programSLOTable.items[0].programSLODesc)

        await page.click("#root_studentLearningOutcomes_programSLOTable_0 .radio:nth-child(1) span > span")
        await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-0")
        await page.click("#root_studentLearningOutcomes_programSLOTable_0 .checkbox #root-2")

        // Complete Sections 1B and 1C
        await page.click("#root_studentLearningOutcomes_proStandardsQuestion-0")
        await page.type("#root_studentLearningOutcomes_stakeholders", expectedFormData.studentLearningOutcomes.stakeholders)
        //await page.screenshot({ path: "slo.png" })
        //
        
        /* Testing that adding another SLO and inputting works as intended
        await page.click("#root_studentLearningOutcomes_programSLOTable .col-xs-3 > .btn")
        
        await page.type("#root_studentLearningOutcomes_programSLOTable_1 > .table-slo-input > #root", "desc 2")
        */

        // Complete Section 2 - Assessment Measure

        await page.type("#root_assessmentMethods_assessmentMeasure_0_measureTitle",
        expectedFormData.assessmentMethods.assessmentMeasure.items[0].measureTitle)
        await page.type("#root_assessmentMethods_assessmentMeasure_0_measureDescription",
        expectedFormData.assessmentMethods.assessmentMeasure.items[0].measureDescription)
        await page.click("#root_assessmentMethods_assessmentMeasure_0_measureDomain > .checkbox:nth-child(1) span > span")
        await page.click("#root_assessmentMethods_assessmentMeasure_0_measureType > .radio:nth-child(1) span > span")
        await page.click("#root_assessmentMethods_assessmentMeasure_0_measurePoint_measurePointInProgram > .radio:nth-child(1) span > span")
        
        await page.type("#root_assessmentMethods_assessmentMeasure_0_measurePoint_measurePointLocation",
        expectedFormData.assessmentMethods.assessmentMeasure.items[0].measurePoint.measurePointLocation)
        await page.click("#root_assessmentMethods_assessmentMeasure_0_measurePopulation > .radio:nth-child(1) span > span")
        await page.click("#root_assessmentMethods_assessmentMeasure_0_measureDataFreq > .radio:nth-child(3) span > span")

        await page.type("#root_assessmentMethods_assessmentMeasure_0_measureProficiencyThreshold",
        expectedFormData.assessmentMethods.assessmentMeasure.items[0].measureProficiencyThreshold)
        await page.type("#root_assessmentMethods_assessmentMeasure_0_measureProficiencyTarget",
        expectedFormData.assessmentMethods.assessmentMeasure.items[0].measureProficiencyTarget)

        await page.type("#root_assessmentMethods_measureComplementDirect",
        expectedFormData.assessmentMethods.measureComplementDirect)
        await page.screenshot({ path: "example.png" })
        await browser.close()

    };

    test();