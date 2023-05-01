
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import React, {useState} from "react"
import './AccGradForm.css';

/**
 * Defines the react-jsonschema-form JSON schema for the Accredited Graduate assessment Form.
 * @constant
 */
const AGschema = {
  "title": "Accredited Graduate Assessment Report Template",
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
        "lastReview": {"type": "string", "title": "Last Accreditation Review"},
        "accredBody": {"type": "string", "title": "Accreditation Body"},
        
      },
      
    },
    
    "studentLearningOutcomes": {
      "type": "object",
      "title": "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
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
                "description": "(Check highest level represented in the SLO)",
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
                "description": "(Check as many as necessary)",
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
      }
    },
    
    "assessmentMethods": {
      "type": "object",
      "title": "II. Assessment Methods",
      "description": `List the assessment measures used.  For each measure, indicate the domain and how often data is collected. 
      Add rows as needed to accommodate additional SLOs.`,
      "properties":{
        "assessmentMeasureArray":{
          "type": "array",
          "minItems": 1,
          "items": {
            "properties": {
              "assessmentMeasure": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "type": "object",
                  "properties": {
                    "measureTitle": {
                      "title": "Measure",
                      "type": "string"
                    },
                    "measureDomain":{
                      "title": "Domain (Product, Performance, Examination)",
                      "type": "string"
                    },
                    "measureDataFreq": {
                      "title": "Data Collection (i.e. annually, by semester)",
                      "type": "string",
                    },
                  }
                }
              },
            }
          }
        }
      }
    },

    "dataCollection":{
      "type": "object",
      "title": "III. Data Collection and Analysis",
      "properties": {
        "dataSLOStatusTable":{
          "type": "array",
          "description": `SLO Status Table – Based on the results reported in the above table and 
          referring to the program proficiency target, indicate the current status of program SLOs as Met, 
          Partially Met, Not Met, or Unknown. 
          Add rows as needed to accommodate additional SLOs.`,
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
 * Defines the react-jsonschema-form UI schema for the Accredited Graduate assessment form.
 * @constant
 */
const uiSchema = {
  "headerInfo":{
    "classNames": "ag-headerInfo",
    "college":{
      "classNames": "ag-headerInput"
    },
    "program":{
      "classNames": "ag-headerInput"
    },
    "academicYear":{
      "classNames": "ag-headerInput"
    },
    "preparer":{
      "classNames": "ag-headerInput"
    },
    "deptSchool":{
      "classNames": "ag-headerInput"
    },
    "degreeLevel":{
      "classNames": "ag-headerInput"
    },
    "dateRange":{
      "classNames": "ag-headerInput"
    },
    "lastReview":{
      "classNames": "ag-headerInput"
    },
    "accredBody":{
        "classNames": "ag-headerInput"
      },
    "ui:options":{
      "title": false
    }
  },
  "studentLearningOutcomes": {
    "programSLOTable":{
      "classNames": "ag-slo-table",
      "items": {
        "programSLODesc":{
          "ui:widget": "textarea",
          "classNames": "ag-table-slo-input",
          "ui:options": {
            rows: 5, 
            cols: 10,
            "label": false
          }
        },
        "programSLOBloom":{
          "ui:widget": "radio",
          "ui:template": "table",
          "classNames": "ag-table-slo-bloom"
        },
        "programSLOCommon":{
          "ui:widget": "CheckboxesWidget",
          "classNames": "ag-table-slo-common"
        }
      }
    }
  },

  "assessmentMethods":{
    "assessmentMeasureArray":{
      "items": {
        "assessmentMeasure":{
          "items": {
            "ui:field": "regular",
            "measureTitle": {
              "classNames": "ag-measureTitle"
            },
            "measureDomain":{
              "classNames": "ag-measureDomain",
            },
            "measureDataFreq": {
              "classNames": "ag-measureDataFreq"
            },
          }
        }
      }
    }
  },

  "dataCollection":{
    "dataSLOStatusTable":{
      "items": {
        "dataSLOStatus":{
          "ui:widget": "RadioWidget",
          "ui:options":{
            "inline": true,
            "label": false
          },
          "classNames": "ag-dataSLOStatus"
        },
      }
    },
  },

  "decisionsAndActions":{
    "items":{
      "decisionsAndActionsSLODesc":{
        "ui:options":{
          "label": false,
          rows: 5,
          cols: 15
        },
        "ui:widget": "textarea",
        "classNames": "ag-decisionsAndActionsSLODesc"
      }
    }
  },

  "additionalInformation":{
    "additionalInformationDesc":{
      "classNames": "ag-additionalInformationDesc",
      "ui:widget": "textarea",
      "ui:options": {
        "label": false,
        rows: 5
      },
      "className": "ag-addInfo"
    }
    
  },
  "ui:submitButtonOptions":{
    "props":{
      "className": "ag-form-submit-btn"
    }
  }
}

function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, required, title } = props;
  //console.log(title)

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
  }

  if (checkSLO === "SLO"){
    return (
      <header id={id} className="ag-slo-header">
      {returnTitle}
    </header>
    )
  }
  console.log(checkSLO)
  return (
    <header id={id} className="ag-header">
      {returnTitle}
    </header>
  );
}

/**
 * Defines a custom title "SLO #" for array items.
 * @constant
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
 * @returns The auto generated Accredited Graduate assessment form.
 */    
function AccGradForm() {

//Use state to track formData, set initial formData with 1 SLO
/**
 * Uses React state to track changes to the initally defined JSON schema.
 * @constant
 */
const [schema] = useState(AGschema);

/**
 * Uses React state to track changes to user inputted form data.
 * @constant
 */
const [formData, setFormData] = useState({ 
  studentLearningOutcomes: { programSLOTable: [{}] }});

//use formData to track changes to number of SLOs
/**
 * U@constantses React state to track the number of items in the Student Learning Outcomes array.
 * 
 */
const [numSLO, setNumSLO] = useState(formData.studentLearningOutcomes.programSLOTable.length)

/**
 * Updates form data state after detecting changes.
 * @constant
 * @param {formData} newFormData - The most recently updated user form data.
 */
//Track changes to formData and numSLOs using updated formData
const onChange = ({ formData: newFormData}) => {
  setNumSLO(newFormData.studentLearningOutcomes.programSLOTable.length)
  
  
  //if DecisionsAndActions not equal to SLOs, add or subtract 
  const updatedFormData = {
    ...newFormData,
    decisionsAndActions: [...newFormData.decisionsAndActions],
    assessmentMeasureArray: [...newFormData.assessmentMethods.assessmentMeasureArray],
    dataSLOStatusTable: [...newFormData.dataCollection.dataSLOStatusTable]

 };

  const dnaLength = newFormData.decisionsAndActions.length;
  if (dnaLength < numSLO){
    for (let i = dnaLength; i < numSLO; i++){
      updatedFormData.decisionsAndActions.push({})
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
  const amlength = newFormData.assessmentMethods.assessmentMeasureArray.length;
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

};


  

  return (
    <div className='body'>
      <div className='ag-form'>
        <Form 
          schema={schema} validator={validator}  uiSchema={uiSchema}
          fields={fields} formData={formData} templates={templates}
          onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
          onChange={onChange}/>
      </div>
    </div>
  );
}

export default AccGradForm;