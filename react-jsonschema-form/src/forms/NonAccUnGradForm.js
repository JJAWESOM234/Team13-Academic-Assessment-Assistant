
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import React, {useState} from "react"
import './NonAccGradForm.css';

const NAUGschema: RJSFSchema = {
  "title": "Non-Accredited Undergraduate Assessment Report Template",
  "type": "object",
  "properties": {
    "headerInfo": {
      "type": "object",
      "properties": {
        "college": {"type": "string", "title": "College"},
        "deptSchool": {"type": "string", "title": "Department/School"},
        "program": {"type": "string", "title": "Program"},
        "degreeLevel": {"type": "string", "title": "Degree Level"},
        "academicYear": {"type": "string", "title": "Academic Year of Report"},
        "dateRange": {"type": "string", "title": "Date Range of Reported Data"},
        "preparer": {"type": "string", "title": "Person Preparing the Report"},
      },
      
    },
    
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
          "minItems": 1,
          "type": "array",
          "items": {
            "properties": {
              "programSLODesc":{
                "type": "string",
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
          "minItems": 1,
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
          "minItems": 1,
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
          "minItems": 1,
          "items": {
            "properties": {
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
      "minItems": 1,
      "items": {
        "properties":{
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
  "headerInfo":{
    "classNames": "headerInfo",
    "college":{
      "classNames": "headerInput"
    },
    "program":{
      "classNames": "headerInput"
    },
    "academicYear":{
      "classNames": "headerInput"
    },
    "preparer":{
      "classNames": "headerInput"
    },
    "deptSchool":{
      "classNames": "headerInput"
    },
    "degreeLevel":{
      "classNames": "headerInput"
    },
    "dateRange":{
      "classNames": "headerInput"
    },
    "ui:options":{
      "title": false
    }
  },
  "studentLearningOutcomes": {
    "stakeholders":{
      "ui:widget": "textarea"
    },

    "proStandardsQuestion":{
      "ui:widget": "radio"
    },

    "programSLOTable":{
      "classNames": "slo-table",
      "items": {
        "programSLODesc":{
          "ui:widget": "textarea",
          "classNames": "table-slo-input",
          "ui:options": {
            rows: 5, 
            cols: 10
          }
        },
        "programSLOBloom":{
          "ui:widget": "radio",
          "ui:template": "table",
          "classNames": "table-slo-bloom"
        },
        "programSLOCommon":{
          "ui:widget": "CheckboxesWidget",
          "classNames": "table-slo-common"
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
    
  },

  "additionalInformation":{
    "ui:widget": "textarea",
    "className": "addInfo"
  }
}


function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, required, title } = props;
  return (
    <header id={id}>
      {title}
      {required}
    </header>
  );
}

const CustomArraySchemaField = function(props: FieldProps) {
  const { index, registry } = props;
  const { SchemaField } = registry.fields;
  const name = `SLO ${index+1}`.replace(/\*$/, '');
  //console.log(props)
  return <SchemaField {...props} name={name} />;
};


const fields: RegistryFieldsType = {
  ArraySchemaField: CustomArraySchemaField
};

  
function NonAccUnGradForm() {

  //Use state to track formData, set initial formData with 1 SLO
  const [schema, setSchema] = useState(NAUGschema);
  const [formData, setFormData] = useState({ 
    studentLearningOutcomes: { programSLOTable: [{}] }});

  //use formData to track changes to number of SLOs
  const [numSLO, setNumSLO] = useState(formData.studentLearningOutcomes.programSLOTable.length)

 
  //Track changes to formData and numSLOs using updated formData
  const onChange = ({ formData: newFormData}) => {
    setNumSLO(newFormData.studentLearningOutcomes.programSLOTable.length)
    
    
    //if DecisionsAndActions not equal to SLOs, add or subtract 
    const updatedFormData = {}
    const dnaLength = newFormData.decisionsAndActions.length;
    if (dnaLength < numSLO){
      const updatedFormData = {
        ...newFormData,
        decisionsAndActions: [...newFormData.decisionsAndActions]
      };
      
      for (let i = dnaLength; i < numSLO; i++){
        updatedFormData.decisionsAndActions.push("")
      }
      setFormData(updatedFormData);
    }
    else if (dnaLength > numSLO){
      const updatedFormData = {
        ...newFormData,
        decisionsAndActions: [...newFormData.decisionsAndActions]
      };

      for (let i = dnaLength; i > numSLO; i--){
        updatedFormData.decisionsAndActions.pop()
      }
      setFormData(updatedFormData)
    }
    else{
      setFormData(newFormData);
    }
    

    
    console.log(formData.decisionsAndActions)
  };
  

  return (
    <div className='body'>
      <div className='rjsfForm'>
        <p>Number of SLOS: {numSLO} </p>
        <Form 
          schema={schema} validator={validator} uiSchema={uiSchema} 
          fields={fields} formData={formData}
          onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
          onChange={onChange}/>
      </div>
    </div>
  );
}
  
  export default NonAccUnGradForm;
  