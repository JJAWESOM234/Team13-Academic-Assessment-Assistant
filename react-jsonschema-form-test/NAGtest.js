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
      programSLOTable:[
        {
        programSLODesc: "Students will learn XYZ",
        programSLOBloom: "Knowledge",
        programSLOCommon: ["1", "3"]
        },
        {
        programSLODesc: "Students will learn ABC",
        programSLOBloom: "Comprehension",
        programSLOCommon: ["3", "4"]
        },
        {
        programSLODesc: "Students have TUV",
        programSLOBloom: "Analysis",
        programSLOCommon: ["2"]
        },
        {
        programSLODesc: "Students know JKL",
        programSLOBloom: "Evaluation",
        programSLOCommon: ["Not Applicable for SLO"]
        },
      ],
      
      proStandardsQuestion: true,
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
        },
        {
          "measureTitle": "Surveys",
          "measureDescription": "This is the measure of exit surveys.",
          "measureDomain": ["Product"],
          "measureType": "direct",
          "measurePoint":{
            "measurePointInProgram": "finalTerm",
            "measurePointLocation": "Dodge Campus"
          },
          "measurePopulation": "sampleStudents",
          "measureDataFreq": "oncePerYear",
          "measureProficiencyThreshold": "Proficiency Threshold is ###",
          "measureProficiencyTarget": "Proficiency Target is ##%"
        },
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
        },
        {
          "measureTitle": "Surveys",
          "measureDescription": "This is the measure of exit surveys.",
          "measureDomain": ["Product"],
          "measureType": "direct",
          "measurePoint":{
            "measurePointInProgram": "finalTerm",
            "measurePointLocation": "Dodge Campus"
          },
          "measurePopulation": "sampleStudents",
          "measureDataFreq": "oncePerSemester",
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
        },
        {
            "dataResultsEntryName": "SLO 1 - Measure Two",
            "dataResultsEntryRange": "January 5, 2023 - May 15, 2023",
            "dataResultsEntryNumStudents": 100,
            "dataResultsEntryPercStudents": "45%"    
        },
        {
            "dataResultsEntryName": "SLO 2 - Measure One",
            "dataResultsEntryRange": "August 15, 2022 - December 15, 2022",
            "dataResultsEntryNumStudents": 23,
            "dataResultsEntryPercStudents": "56%"    
        },
        {
            "dataResultsEntryName": "SLO 3 - Measure One",
            "dataResultsEntryRange": "August 15, 2022 - December 15, 2022",
            "dataResultsEntryNumStudents": 77,
            "dataResultsEntryPercStudents": "79%"    
        },
        {
            "dataResultsEntryName": "SLO 4 - Measure One",
            "dataResultsEntryRange": "January 5, 2023 - May 15, 2023",
            "dataResultsEntryNumStudents": 156,
            "dataResultsEntryPercStudents": "92%"    
        },
      ],
      "dataSLOStatusTable":[
        {
          "dataSLOStatus": "met"
        },
        {
          "dataSLOStatus": "partiallyMet"
        },
        {
          "dataSLOStatus": "met"
        },
        {
          "dataSLOStatus": "unknown"
        },
      ],
      "dataResultsDescription": "A description of the data results and how they are communicated."
    },
    
    "decisionsAndActions":[
      {
        "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
      },
      {
        "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
      },
      {
        "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
      },
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


        await page.screenshot({ path: "example.png" })
        await browser.close()

    };

    test();