import logo from './logo.svg';
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import './App.css';

const schema: RJSFSchema = {
  "title": "Non-Accredited Graduate Assessment Report Template",
  "type": "object",
  "properties": {
    "college": {"type": "string", "title": "College"},
    "program": {"type": "string", "title": "Program"},
    "academicYear": {"type": "string", "title": "Academic Year of Report"},
    "preparer": {"type": "string", "title": "Person Preparing the Report"},
    "deptSchool": {"type": "string", "title": "Department/School"},
    "degreeLevel": {"type": "string", "title": "Degree Level"},
    "dateRange": {"type": "string", "title": "Date Range of Reported Data"},

    "studentLearningOutcomes": {
      "type": "object",
      "title": "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
      "description": `A.List degree program SLOs.  For each, SLO, indicate the highest cognitive level and Common Graduate Program SLO it represents.
      To accommodate more than four SLOs, add rows as needed.  The Common Graduate SLOs for master’s programs (adopted 2/2017) are listed below.
      Students shall demonstrate at the graduate level:
      1. Mastery of discipline content
    2. Proficiency in analyzing, evaluating and synthesizing information
    3. Effective oral and written communication
    4. Knowledge of discipline’s ethics and standards`,
      "properties": {
        "programSLOTable": {
          "minItems": 4,
          "title": "",
          "type": "array",
          "items": {
            "properties": {
              "programSLODesc":{
                "type": "string",
                "title": "SLODesc",
              },
              "programSLOBloom":{
                "type": "string",
                "title": "Bloom’s Taxonomy Cognitive Level",
                "oneOf": [
                  {"const": "Knowledge", "title": "Knowledge"},
                  {"const": "Analysis", "title": "Analysis"},
                  {"const": "Comprehension", "title": "Comprehension"},
                  {"const": "Synthesis", "title": "Synthesis"},
                  {"const": "Application", "title": "Application"},
                  {"const": "Evaluation", "title": "Evaluation"}
                  ]
              },
              "programSLOCommon":{
                "type": "array",
                "title": "Common Graduate Program SLOs",
                "items" : {
                  "type": "string",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "Not Applicable for SLO",
                  ]
                },
                "uniqueItems": true
              },
            }
          }
        },
        "proStandardsQuestion": {
          "type": "boolean",
          "title": "B.",
          "description": "SLOs reflect professional standards as dictated by an accreditation or other external body.",
          "oneOf": [
            {
              "title": "Yes",
              "const": true
            },
            {
              "title": "No",
              "const": false
            }
          ]
          },
          "stakeholders": {
            "type": "string",
            "title": "C.",
            "description": `Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.
            A few examples of internal stakeholders (and communication methods) could include full-time/adjunct faculty and staff (departmental meetings or retreats), and/or current students (syllabi, advising documents, student organizations). 
            Some examples of external stakeholders (and communication methods) could include prospective students (recruitment materials), alumni (advisory boards, focus groups, surveys, newsletters), employers (internship evaluation forms, focus groups, surveys, advisory boards, 
            `
          }
      }
    },
    
    "assessmentMethods": {
      "type": "object",
      "title": "II. Assessment Methods",
      "description": `A.  Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. 
      Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.`,
      "properties": {
        "assessmentMeasure": {
          "type": "array",
          "minItems": 4,
          "items": {
            "type": "object",
            "properties": {
              "measureTitle": {
                "title": "Title of the Measure",
                "type": "string"
              },
              "measureDescription": {
                "title": "Describe How the Measure Aligns to the SLO",
                "type": "string",
              },
              "measureDomain":{
                "title": "Domain",
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": ["Examination", "Product", "Performance"]
                },
                "uniqueItems": true,
                "description": "Check all that apply",
              },
              "measureType":{
                "title": "Type",
                "type": "string",
                "oneOf": [
                  {
                    "title": "Direct Measure",
                    "const": "direct"
                  },
                  {
                    "title": "Indirect Measure",
                    "const": "indirect"
                  }
                ]
              },
              "measurePoint":{
                "title": "Point In Program Assessment is Administered",
                "type": "object",
                "properties": {
                  "measurePointInProgram": {
                    "type": "string",
                    "oneOf": [
                      {
                        "title": "In final term of program",
                        "const": "finalTerm"
                      },
                      {
                        "title": "In final year of program",
                        "const": "finalYear"
                      }
                    ]
                  },
                  "measurePointLocation": {
                    "type": "string"
                  },
                }
              },
              "measurePopulation": {
                "title": "Population Measured",
                "type": "string",
                "oneOf": [
                  {
                    "title": "All Students",
                    "const": "allStudents"
                  },
                  {
                    "title": "Sample of Students - Describe below",
                    "const": "sampleStudents"
                  }
                ]
              },
              "measureDataFreq": {
                "title": "Frequency of Data Collection",
                "type": "string",
                "oneOf": [
                  {
                    "title": "Once/semester",
                    "const": "oncePerSemester"
                  },
                  {
                    "title": "Once/year",
                    "const": "oncePerYear"
                  },
                  {
                    "title": "Other - Describe Below",
                    "const": "other"
                  }
                ]
              },
              "measureProficiencyThreshold": {
                "title": "Proficiency Threshold",
                "type":"string"
              },
              "measureProficiencyTarget":{
                "title": "Program Proficiency Target",
                "type": "string"
              }
            }
          }
        },
        "measureComplementDirect":{
          "type": "string",
          "description": "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs."
        }
      }
    },

    "dataCollection":{
      "type": "object",
      "title": "III. Data Collection and Analysis",
      "properties": {
        "dataResultsTable":{
          "type": "array",
          "description": `A.    Results Table – Report results for each SLO. If an SLO was assessed by 
          multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.`,
          "minItems": 4,
          "items": {
            "properties":{
              "dataResultsEntryName":{
                "type": "string",
                "title": "SLO Number & Measure Number"
              },
              "dataResultsEntryRange":{
                "type": "string",
                "title": "Data Collection Date Range"
              },
              "dataResultsEntryNumStudents":{
                "type": "number",
                "title": "Number of Students Assessed"
              },
              "dataResultsEntryPercStudents":{
                "type": "string",
                "title": "Percentage of Students who Met/Exceeded Threshold Proficiency"
              }
            }
          }
        },
        "dataSLOStatusTable":{
          "type": "array",
          "description": `B.  SLO Status Table – Based on the results reported in the above table and 
          referring to the program proficiency target, indicate the current status of program SLOs as Met, 
          Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.`,
          "minItems": 4,
          "items": {
            "properties": {
              "dataSLOName":{
                "type": "string",
                "title": "SLO Name/#"
              },
              "dataSLOStatus":{
                "type": "string",
                "oneOf": [
                  {
                    "title": "Met",
                    "const": "met"
                  },
                  {
                    "title": "Partially Met",
                    "const": "partiallyMet"
                  },
                  {
                    "title": "Not Met",
                    "const": "notMet"
                  },
                  {
                    "title": "Unknown",
                    "const": "unknown"
                  }
                ]
              },
            }
          }
        },
        "dataResultsDescription":{
          "type": "string",
          "description": `C. Describe how results are communicated within the program. Address each SLO. 
          If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.`
          
        }
      }
    },
    "decisionsAndActions":{
      "type": "array",
      "title": "IV. Decisions and Actions",
      "description": `Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. 
      Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions: 
      What are the effects of your previously stated changes from your last report? 
      What did you do in response to your previous assessment report feedback?
      How have you made progress since the last assessment report? `,
      "minItems": 4,
      "items": {
        "properties":{
          "decisionsAndActionsSLO":{
            "type": "string",
            "title": "SLO #"
          },
          "decisionsAndActionsSLODesc":{
            "type": "string",
            "title": "Description"
          }
        }
      }
    },

    "additionalInformation":{
      "type": "string",
      "title": "V. Additional Information",
      "description": `OPTONAL:  Provide additional information that may be helpful to reviewers.`
    }
  }
};

const uiSchema = {
  "studentLearningOutcomes": {
    "stakeholders":{
      "ui:widget": "textarea"
    },

    "proStandardsQuestion":{
      "ui:widget": "radio"
    },

    "programSLOTable":{
      "items": {
        "programSLO":{
          "ui:widget": "textarea"
        },
        "programSLOBloom":{
          "ui:widget": "radio"
        },
        "programSLOCommon":{
          "ui:widget": "CheckboxesWidget"
        }
      }
    }
  },

  "assessmentMethods":{
    "assessmentMeasure":{
      "items": {
        "measureDomain":{
          "ui:widget": "checkboxes"
        },
        "measureType":{
          "ui:widget": "radio"
        },
        "measurePoint":{
          "measurePointInProgram":{
            "ui:widget": "radio"
          }
        },
        "measurePopulation":{
            "ui:widget": "radio"
        },
        "measureDataFreq":{
            "ui:widget": "RadioWidget"
        }
      }
    }
  },

  "dataCollection":{
    "dataSLOStatusTable":{
      "items": {
        "dataSLOStatus":{
          "ui:widget": "RadioWidget"
        },
      }
    },
    "dataResultsDescription":{
      "ui:widget": "textarea"
    }
  },

  "decisionsAndActions":{
    "decisionsAndActionsSLO1":{
      "ui:widget": "textarea"
    },
    "decisionsAndActionsSLO2":{
      "ui:widget": "textarea"
    },
    "decisionsAndActionsSLO3":{
      "ui:widget": "textarea"
    },
    "decisionsAndActionsSLO4":{
      "ui:widget": "textarea"
    },
  },

  "additionalInformation":{
    "ui:widget": "textarea"
  }
}

const formData = {
  "college": "College of IS&T",
  "program": "Computer Science",
  "academicYear": "2022-2023",
  "preparer": "John Doe",
  "deptSchool": "Computer Science Department",
  "degreeLevel": "Master's",
  "dateRange": "August 15, 2022 - May 15, 2023",

  "studentLearningOutcomes":{
    "programSLOTable":[
      {
      "programSLODesc": "Students will learn XYZ",
      "programSLOBloom": "Knowledge",
      "programSLOCommon": ["1", "3"]
      },
      {
      "programSLODesc": "Students will learn ABC",
      "programSLOBloom": "Comprehension",
      "programSLOCommon": ["3", "4"]
      },
      {
      "programSLODesc": "Students have TUV",
      "programSLOBloom": "Analysis",
      "programSLOCommon": ["2"]
      },
      {
      "programSLODesc": "Students know JKL",
      "programSLOBloom": "Evaluation",
      "programSLOCommon": ["Not Applicable for SLO"]
      },
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
        "dataSLOName": "SLO 1",
        "dataSLOStatus": "met"
      },
      {
        "dataSLOName": "SLO 2",
        "dataSLOStatus": "partiallyMet"
      },
      {
        "dataSLOName": "SLO 3",
        "dataSLOStatus": "met"
      },
      {
        "dataSLOName": "SLO 4",
        "dataSLOStatus": "unknown"
      },
    ],
    "dataResultsDescription": "A description of the data results and how they are communicated."
  },
  
  "decisionsAndActions":[
    {
      "decisionsAndActionsSLO": "SLO 1",
      "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
    },
    {
      "decisionsAndActionsSLO": "SLO 2",
      "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
    },
    {
      "decisionsAndActionsSLO": "SLO 3",
      "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
    },
    {
      "decisionsAndActionsSLO": "SLO 4",
      "decisionsAndActionsSLODesc": "A description of the specific decisions and actions"
    }
  ],

  "additionalInformation": "Additional info here"
}


function App() {
  return (
    <Form 
      schema={schema} validator={validator} uiSchema={uiSchema} formData={formData}
      onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}/>
  );
}

export default App;
