
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import React, {useState} from "react"
import './NonAccUnGradForm.css';

/**
 * Defines the react-jsonschema-form JSON schema for the Non-Accredited Undergraduate assessment Form.
 * 
 */
const NAUGschema = {
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
      "title": "I. Program Student Learning Outcomes (SLOs)",
      "description": `List each program SLO and indicate the highest cognitive level it represents. To accommodate more than four SLOs, add rows as needed.`,
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
          "description": "B. SLOs reflect professional standards as dictated by an accreditation or other external body.",
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
            "description": `C. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.
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
        "assessmentMeasureArray": {
          "type": "array",
          "minItems": 1,
          "items": {
            "properties":{
              "assessmentMeasure":{
                "type": "array",
                "minItems": 1,
                "items":{
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
                          "title": "Point In Program Assessment is Administered",
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
                          "type": "string",
                          "title": "Where does the assessment occur:"
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
                    "measurePopDescribe": {
                      "type": "string"
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
                    "measureDFDescribe": {
                      "type": "string"
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
              }
            }
        },
        "measureComplementDirect":{
          "type": "string",
          "description": "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs."
        }
      }
    },
  },

    "dataCollection":{
      "type": "object",
      "title": "III. Data Collection and Analysis",
      "properties": {
        "dataResultsArray":{
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
      \nFurthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions: 
      \nWhat are the effects of your previously stated changes from your last report? 
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
      "type": "object",
      "title": "V. Additional Information",
      "description": `OPTIONAL:  Provide additional information that may be helpful to reviewers.`,
      "properties":{
        "additionalInformationDesc":{
          "type": "string"
        }
      }
    }
  }
};


/**
 * Defines the react-jsonschema-form UI schema for the Non-Accredited Undergraduate assessment form.
 * 
 */
const uiSchema = {
  "headerInfo":{
    "classNames": "naug-headerInfo",
    "college":{
      "classNames": "naug-headerInput"
    },
    "program":{
      "classNames": "naug-headerInput"
    },
    "academicYear":{
      "classNames": "naug-headerInput"
    },
    "preparer":{
      "classNames": "naug-headerInput"
    },
    "deptSchool":{
      "classNames": "naug-headerInput"
    },
    "degreeLevel":{
      "classNames": "naug-headerInput"
    },
    "dateRange":{
      "classNames": "naug-headerInput"
    },
    "ui:options":{
      "title": false
    }
  },
  "studentLearningOutcomes": {
    "stakeholders":{
      "ui:widget": "textarea",
      "classNames": "naug-stakeholders"
    },

    "proStandardsQuestion":{
      "ui:widget": "radio",
      "classNames": "naug-proStandardsQuestion"
    },

    "programSLOTable":{
      "classNames": "naug-slo-table",
      "items": {
        "programSLODesc":{
          "ui:widget": "textarea",
          "classNames": "naug-table-slo-input",
          "ui:options": {
            rows: 5, 
            cols: 10,
            "label": false
          }
        },
        "programSLOBloom":{
          "ui:widget": "radio",
          "ui:template": "table",
          "classNames": "naug-table-slo-bloom",
        },
        "programSLOCommon":{
          "ui:widget": "CheckboxesWidget",
          "classNames": "naug-table-slo-common"
        }
      }
    }
  },

  "assessmentMethods":{
    "assessmentMeasureArray":{
      "items":{
        "assessmentMeasure":{
          "classNames": "naug-assessmentMeasure",
          "items":{
            "ui:field": "regular",
            "measureDomain":{
              "ui:widget": "checkboxes",
              "classNames": "naug-measureDomain",
              "ui:options":{
                "inline": true
              }
            },
            "measureDescription": {
              "ui:widget": "textarea",
              "classNames": "naug-measureDesc",
              "ui:options": {
                cols: 5,
                rows: 8
              }
            },
            "measureType":{
              "ui:widget": "radio",
              "classNames": "naug-measureType",
              "ui:options":{
                "inline": true
              }
            },
            "measurePoint":{
              "classNames": "naug-measurePoint",
              "measurePointInProgram":{
                "ui:widget": "radio",
                "classNames": "naug-measurePointInProgram",
              },
              "ui:options":{
                "label": false
              },
              "measurePointLocation": {
                "classNames": "naug-measurePointLocation",
                "ui:widget": "textarea",
                "ui:options": {
                  cols: 5,
                  rows: 3
                }
              }
            },
            "measurePopulation":{
                "ui:widget": "radio",
                "classNames": "naug-measurePopulation"
            },
            "measurePopDescribe":{
              "ui:widget": "textarea",
              "classNames": "naug-measurePopDescribe",
              "ui:options": {
                "label": false,
                cols: 5,
                rows: 3
              }
            },
            "measureDataFreq":{
                "ui:widget": "RadioWidget",
                "classNames": "naug-measureDataFreq",
                
            },
            "measureDFDescribe":{
              "classNames": "naug-measureDFDescribe",
              "ui:widget": "textarea",
              "ui:options":{
                "label": false,
                cols: 5,
                rows: 3
              }
            },
            "measureProficiencyThreshold":{
              "classNames": "naug-measureProfThreshold",
              "ui:widget": "textarea",
              "ui:options":{
                cols: 5,
                rows: 3
              }
            }
          }
      }
      }
    }
    
  },

  "dataCollection":{
    "dataResultsArray":{
      "classNames": "dataResultsArray",
      "items":{
        "dataResultsEntryName":{
          "classNames": "naug-dataResultsEntryName"
        },
        "dataResultsEntryRange":{
          "classNames": "naug-dataResultsEntryRange"
        },
        "dataResultsEntryNumStudents":{
          "classNames": "naug-dataResultsEntryNumStudents"
        },
        "dataResultsEntryPercStudents":{
          "classNames": "naug-dataResultsEntryPercStudents"
        },
      }
    },
    "dataSLOStatusTable":{
      "items": {
        "dataSLOStatus":{
          "ui:widget": "RadioWidget",
          "classNames": "naug-dataSLOStatus",
          "ui:options":{
            "inline": true,
            "label": false
          }
        },
      }
    },
    "dataResultsDescription":{
      "classNames": "naug-dataResultsDescription",
      "ui:widget": "textarea",
      "ui:options":{
        cols: 12,
        rows: 6
      }
    }
  },

  "decisionsAndActions":{
    "items":{
      "decisionsAndActionsSLODesc":{
        "ui:options":{
          "label": false,
          rows: 5,
          cols: 12
        },
        "ui:widget": "textarea",
        "classNames": "naug-decisionsAndActionsSLODesc"
      }
    }
    
  },

  "additionalInformation":{
    "additionalInformationDesc":{
      "classNames": "naug-additionalInformationDesc",
      "ui:widget": "textarea",
      "ui:options": {
        "label": false,
        rows: 5
      },
      "className": "naug-addInfo"
    }
    
  },
  "ui:submitButtonOptions":{
    "props":{
      "className": "naug-form-submit-btn"
    }
  }
}


function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, required, title } = props;
  console.log(title)

  let returnTitle = title;
  let checkSLO = title.substring(0, 3);
  switch(title){
    case "headerInfo":
      returnTitle = ``;
      break;
    case "programSLOTable":
      returnTitle = ``;
      break;
    case "assessmentMeasureArray":
      returnTitle = ``;
      break;
    case "assessmentMeasure":
      returnTitle = ``;
      break;
    case "measurePoint":
      returnTitle = ``;
      break;
    case "dataResultsArray":
      returnTitle = ``;
      break;
    case "dataSLOStatusTable":
      returnTitle = ``;
      break;
    case "dataResultsDescription":
      returnTitle = ``;
      break;
    case "Point In Program Assessment is Administered":
      returnTitle = ``;
      break;
  }

  if (checkSLO === "SLO"){
    return (
      <header id={id} className="naug-slo-header">
      {returnTitle}
    </header>
    )
  }
  //console.log(checkSLO)
  return (
    <header id={id} className="naug-header">
      {returnTitle}
    </header>
  );
}
/**
 * Defines a custom title "SLO #" for array items.
 * @param {FieldProps} props - The RJSF attributes for a given form array item.
 * @returns The array item's schema field with an updated name.
 */
const CustomArraySchemaField = function(props) {
  const { index, registry, name } = props;
  const { SchemaField } = registry.fields;

  let newName = name

  const arrayItem = name.split("-");

  switch(arrayItem[0]){
    case "programSLOTable":
      newName = `SLO ${index+1}:`;
      break;
    case "assessmentMeasureArray":
      newName = `SLO ${index+1}`;
      break;
    case "assessmentMeasure":
      newName = ``;
      break;
    case "decisionsAndActions":
      newName = `SLO ${index+1}:`;
      break;
    case "dataResultsArray":
      newName = ``;
      break;
    case "dataSLOStatusTable":
      newName = `SLO ${index+1}:`;
      break;

  }
  //console.log(name)
  return <SchemaField {...props} name={newName} className={newName}/>;
};

function MoveDownButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <>
    </>
  );
}

function MoveUpButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <>
    </>
  );
}

/**
 * Defines the custom fields that the RJSF form references.
 * @constant
 */
const fields = {
  ArraySchemaField: CustomArraySchemaField
};

const templates = {
  ButtonTemplates:{
    MoveDownButton,
    MoveUpButton
  },
  TitleFieldTemplate
}

/**
 * @function
 * @returns The auto generated Non-Accredited Undergraduate assessment form.
 */ 
function NonAccUnGradForm() {

  //Use state to track formData, set initial formData with 1 SLO
  /**
   * Uses React state to track changes to the initally defined JSON schema.
   * 
   */
  const [schema, setSchema] = useState(NAUGschema);
  /**
   * Uses React state to track changes to user inputted form data.
   * 
   */
  const [formData, setFormData] = useState({ 
    studentLearningOutcomes: { programSLOTable: [{}] }});

  /**
   * Uses React state to track the number of items in the Student Learning Outcomes array.
   * 
   */
  //use formData to track changes to number of SLOs
  const [numSLO, setNumSLO] = useState(formData.studentLearningOutcomes.programSLOTable.length)

  //use formData to track changes to number of assessment measures
  /**
   * Uses React state to track the number of items in the Assessment Measures array.
   * @constant
   */
  const [numAM, setNumAM] = useState(1)

  /**
   * Updates form data state after detecting changes.
   * @param {formData} newFormData - The most recently updated user form data.
   */
  //Track changes to formData and numSLOs using updated formData
  const onChange = ({ formData: newFormData}) => {
    setNumSLO(newFormData.studentLearningOutcomes.programSLOTable.length)
    setNumAM(newFormData.assessmentMethods.assessmentMeasureArray.length)
    
    
    //if DecisionsAndActions not equal to SLOs, add or subtract 
    const updatedFormData = {
      ...newFormData,
      decisionsAndActions: [...newFormData.decisionsAndActions],
      assessmentMeasureArray: [...newFormData.assessmentMethods.assessmentMeasureArray],
      dataResultsArray: [...newFormData.dataCollection.dataResultsArray],
      dataSLOStatusTable: [...newFormData.dataCollection.dataSLOStatusTable]
   };

    const dnaLength = newFormData.decisionsAndActions.length;
    const amlength = newFormData.assessmentMethods.assessmentMeasureArray.length;
    if (dnaLength < numSLO){
      for (let i = dnaLength; i < numSLO; i++){
        updatedFormData.decisionsAndActions.push("")
      }
      setFormData(updatedFormData);
    }
    else if (dnaLength > numSLO){
      for (let i = dnaLength; i > numSLO; i--){
        updatedFormData.decisionsAndActions.pop()
      }
      setFormData(updatedFormData)
    }
    else {
      setFormData(newFormData)
    }
    
    //Match length of assessment measure array to number of SLOs
    if (amlength > numSLO){
      for (let i = amlength; i > numSLO; i--){
        updatedFormData.assessmentMethods.assessmentMeasureArray.pop()
        setFormData(updatedFormData)
      }
    }
    else if (amlength < numSLO){
      for (let i = amlength; i < numSLO; i++){
        updatedFormData.assessmentMethods.assessmentMeasureArray.push({})
        setFormData(updatedFormData)
      }
    }
    else {
      setFormData(newFormData)
    }

    //Match length of data results array to number of total assessment measures

    let drlength = newFormData.dataCollection.dataResultsArray.length;
    console.log("Number of AM: " + numAM)
    console.log("Number of DR: " + drlength)
    if (drlength < numAM){
      for (let i = drlength; i < numAM; i++){
        updatedFormData.dataCollection.dataResultsArray.push({})
        setFormData(updatedFormData)
      }
    }

    //Match length of Data Status table to SLO number
    const dslength = newFormData.dataCollection.dataSLOStatusTable.length
    if (dslength > numSLO){
      for (let i = dslength; i > numSLO; i--){
        updatedFormData.dataCollection.dataSLOStatusTable.pop()
        setFormData(updatedFormData)
      }
    }
    else if (dslength < numSLO){
      for (let i = dslength; i < numSLO; i++){
        updatedFormData.dataCollection.dataSLOStatusTable.push({})
        setFormData(updatedFormData)
      }
    }
    else{
      setFormData(newFormData)
    }
  };
  
  

  return (
    <div className='body'>
      <div className='naug-form'>
        <Form 
          schema={schema} validator={validator} uiSchema={uiSchema} 
          fields={fields} formData={formData} templates={templates}
          onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
          onChange={onChange}/>
      </div>
    </div>
  );
}
  
  export default NonAccUnGradForm;
  