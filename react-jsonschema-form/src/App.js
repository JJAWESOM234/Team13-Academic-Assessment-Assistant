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
        "programSLOs": {
          "type": "object",
          "title": "",
          "properties": {
            "programSLOsSLO1":{
              "type": "string",
              "title": "SLO1",
            },
            "programSLOsSLO1Bloom":{
              "type": "array",
              "title": "Bloom’s Taxonomy Cognitive Level",
              "items": {
                "type": "string",
                "enum": [
                  "Knowledge",
                  "Analysis",
                  "Comprehension",
                  "Synthesis",
                  "Application",
                  "Evaluation"
                ]
              },
              "uniqueItems": true
            },
            "programSLOsSLO1Common":{
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
            "programSLOsSLO2":{
              "type": "string",
              "title": "SLO2",
            },
            "programSLOsSLO2Bloom":{
              "type": "array",
              "title": "Bloom’s Taxonomy Cognitive Level",
              "items": {
                "type": "string",
                "enum": [
                  "Knowledge",
                  "Analysis",
                  "Comprehension",
                  "Synthesis",
                  "Application",
                  "Evaluation"
                ]
              },
              "uniqueItems": true
            },
            "programSLOsSLO2Common":{
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
            "programSLOsSLO3":{
              "type": "string",
              "title": "SLO3",
            },
            "programSLOsSLO3Bloom":{
              "type": "array",
              "title": "Bloom’s Taxonomy Cognitive Level",
              "items": {
                "type": "string",
                "enum": [
                  "Knowledge",
                  "Analysis",
                  "Comprehension",
                  "Synthesis",
                  "Application",
                  "Evaluation"
                ]
              },
              "uniqueItems": true
            },
            "programSLOsSLO3Common":{
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
            "programSLOsSLO4":{
              "type": "string",
              "title": "SLO4",
            },
            "programSLOsSLO4Bloom":{
              "type": "array",
              "title": "Bloom’s Taxonomy Cognitive Level",
              "items": {
                "type": "string",
                "enum": [
                  "Knowledge",
                  "Analysis",
                  "Comprehension",
                  "Synthesis",
                  "Application",
                  "Evaluation"
                ]
              },
              "uniqueItems": true
            },
            "programSLOsSLO4Common":{
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
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": ["Direct Measure", "Indirect Measure"]
                },
                "uniqueItems": true
              },
              "measurePoint":{
                "title": "Point In Program Assessment is Administered",
                "type": "object",
                "properties": {
                  "measurePointInProgram": {
                    "type": "string",
                    "enum": ["In Final Term of Program", "In Final Year of Program"]
                  },
                  "measurePointLocation": {
                    "type": "string"
                  },
                }
              },
              "measurePopulation": {
                "title": "Population Measured",
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": ["All Students", "Sample of Students - Describe below"]//when sample selected, allow string input to describe
                },
                "uniqueItems": true
              },
              "measureDataFreq": {
                "title": "Frequency of Data Collection",
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": ["Once/semester", "Once/year", "Other - Describe below"]//when sample selected, allow string input to describe
                }
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
          "type": "object",
          "description": `A.    Results Table – Report results for each SLO. If an SLO was assessed by 
      multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.`,
          "properties":{
            "dataResultsSLO1":{
              "type": "object",
              "title": "SLO 1 - Measure One",
              "properties":{
                "dataResultsSLO1Range":{
                  "type": "string",
                  "title": "Data Collection Date Range"
                },
                "dataResultsSLO1NumStudents":{
                  "type": "number",
                  "title": "Number of Students Assessed"
                },
                "dataResultsSLO1PercStudents":{
                  "type": "string",
                  "title": "Percentage of Students who Met/Exceeded Threshold Proficiency"
                }
              }
            },
            "dataResultsSLO2":{
              "type": "object",
              "title": "SLO 2 - Measure One",
              "properties":{
                "dataResultsSLO2Range":{
                  "type": "string",
                  "title": "Data Collection Date Range"
                },
                "dataResultsSLO2NumStudents":{
                  "type": "number",
                  "title": "Number of Students Assessed"
                },
                "dataResultsSLO2PercStudents":{
                  "type": "string",
                  "title": "Percentage of Students who Met/Exceeded Threshold Proficiency"
                }
              }
            },
            "dataResultsSLO3":{
              "type": "object",
              "title": "SLO 3 - Measure One",
              "properties":{
                "dataResultsSLO3Range":{
                  "type": "string",
                  "title": "Data Collection Date Range"
                },
                "dataResultsSLO3NumStudents":{
                  "type": "number",
                  "title": "Number of Students Assessed"
                },
                "dataResultsSLO3PercStudents":{
                  "type": "string",
                  "title": "Percentage of Students who Met/Exceeded Threshold Proficiency"
                }
              }
            },
            "dataResultsSLO4":{
              "type": "object",
              "title": "SLO 4 - Measure One",
              "properties":{
                "dataResultsSLO4Range":{
                  "type": "string",
                  "title": "Data Collection Date Range"
                },
                "dataResultsSLO4NumStudents":{
                  "type": "number",
                  "title": "Number of Students Assessed"
                },
                "dataResultsSLO4PercStudents":{
                  "type": "string",
                  "title": "Percentage of Students who Met/Exceeded Threshold Proficiency"
                }
              }
            },
          }
        },
        "dataSLOStatusTable":{
          "type": "object",
          "description": `B.  SLO Status Table – Based on the results reported in the above table and 
          referring to the program proficiency target, indicate the current status of program SLOs as Met, 
          Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.`,
          "properties": {
            "dataSLO-1Status":{
              "type": "array",
              "title": "SLO 1",
              "items": {
                "type": "string",
                "enum": ["Met", "Partially Met", "Not Met", "Unknown"]
              },
              "uniqueItems": true
            },
            "dataSLO-2Status":{
              "type": "array",
              "title": "SLO 2",
              "items": {
                "type": "string",
                "enum": ["Met", "Partially Met", "Not Met", "Unknown"]
              },
              "uniqueItems": true
            },
            "dataSLO-3Status":{
              "type": "array",
              "title": "SLO 3",
              "items": {
                "type": "string",
                "enum": ["Met", "Partially Met", "Not Met", "Unknown"]
              },
              "uniqueItems": true
            },
            "dataSLO-4Status":{
              "type": "array",
              "title": "SLO 4",
              "items": {
                "type": "string",
                "enum": ["Met", "Partially Met", "Not Met", "Unknown"]
              },
              "uniqueItems": true
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
      "type": "object",
      "title": "IV. Decisions and Actions",
      "description": `Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. 
      Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions: 
      What are the effects of your previously stated changes from your last report? 
      What did you do in response to your previous assessment report feedback?
      How have you made progress since the last assessment report? `,

      "properties":{
        "decisionsAndActionsSLO1":{
          "type": "string",
          "title": "SLO 1"
        },
        "decisionsAndActionsSLO2":{
          "type": "string",
          "title": "SLO 2"
        },
        "decisionsAndActionsSLO3":{
          "type": "string",
          "title": "SLO 3"
        },
        "decisionsAndActionsSLO4":{
          "type": "string",
          "title": "SLO 4"
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

    "programSLOs":{
      "programSLOsSLO1":{
        "ui:widget": "textarea"
      },
      "programSLOsSLO1Bloom":{
        "ui:widget": "RadioWidget"
      },
      "programSLOsSLO1Common":{
        "ui:widget": "CheckboxesWidget"
      },
      "programSLOsSLO2":{
        "ui:widget": "textarea"
      },
      "programSLOsSLO2Bloom":{
        "ui:widget": "RadioWidget"
      },
      "programSLOsSLO2Common":{
        "ui:widget": "CheckboxesWidget"
      },
      "programSLOsSLO3":{
        "ui:widget": "textarea"
      },
      "programSLOsSLO3Bloom":{
        "ui:widget": "RadioWidget"
      },
      "programSLOsSLO3Common":{
        "ui:widget": "CheckboxesWidget"
      },
      "programSLOsSLO4":{
        "ui:widget": "textarea"
      },
      "programSLOsSLO4Bloom":{
        "ui:widget": "RadioWidget"
      },
      "programSLOsSLO4Common":{
        "ui:widget": "CheckboxesWidget"
      }
    }
  },

  "assessmentMethods":{
    "assessmentmeasure":{
      "measureDomain":{
        "ui:widget": "checkboxes"
      }
    }
  },

  "dataCollection":{
    "dataSLOStatusTable":{
      "dataSLO-1Status":{
        "ui:widget": "RadioWidget"
      },
      "dataSLO-2Status":{
        "ui:widget": "RadioWidget"
      },
      "dataSLO-3Status":{
        "ui:widget": "RadioWidget"
      },
      "dataSLO-4Status":{
        "ui:widget": "RadioWidget"
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

function App() {
  return (
    <Form 
      schema={schema} validator={validator} uiSchema={uiSchema}
      onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}/>
  );
}

export default App;
