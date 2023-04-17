
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import React, {useState} from "react"
import './AccUnGradForm.css';

/**
 * Defines the react-jsonschema-form JSON schema for the Accredited Undergraduate assessment Form.
 * @constant
 */
const AUGschema = {
  "title": "Accredited Undergraduate Assessment Report Template",
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
      }
    },
    
    "assessmentMethods": {
      "type": "object",
      "title": "II. Assessment Methods",
      "description": `A.  Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. 
      Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.`,
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

/**
 * Defines the react-jsonschema-form UI schema for the Accredited Undergraduate assessment form.
 * @constant
 */
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
    "lastReview":{
      "classNames": "headerInput"
    },
    "accredBody":{
        "classNames": "headerInput"
      },
    "ui:options":{
      "title": false
    }
  },
  "studentLearningOutcomes": {
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
              "classNames": "measureTitle"
            },
            "measureDomain":{
              "classNames": "measureDomain",
            },
            "measureDataFreq": {
              "classNames": "measureDataFreq"
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
            "inline": true
          }
        },
      }
    },
  },

  "decisionsAndActions":{
    
  },

  "additionalInformation":{
    "ui:widget": "textarea",
    "className": "addInfo"
  }
}

/**
 * Defines a custom title "SLO #" for array items.
 * @constant
 * @param {FieldProps} props - The RJSF attributes for a given form array item.
 * @returns The array item's schema field with an updated name.
 */
  const CustomArraySchemaField = function(props) {
    const { index, registry } = props;
    const { SchemaField } = registry.fields;
    const name = `SLO ${index+1}`;
    return <SchemaField {...props} name={name} />;
  };
  
  /**
   * Defines the custom fields that the RJSF form references.
   * @constant
   */
  const fields = {
    ArraySchemaField: CustomArraySchemaField
  };
  
  /**
   * @function
   * @returns The auto generated Accredited Undergraduate assessment form.
   */   
  function AccUnGradForm() {
  
    //Use state to track formData, set initial formData with 1 SLO
  /**
   * Uses React state to track changes to the initally defined JSON schema.
   * @constant
   */
  const [schema] = useState(AUGschema);
  /**
   * Uses React state to track changes to user inputted form data.
   * @constant
   */
  const [formData, setFormData] = useState({ 
    studentLearningOutcomes: { programSLOTable: [{}] }});

  /**
   * Uses React state to track the number of items in the Student Learning Outcomes array.
   * @constant
   */
  //use formData to track changes to number of SLOs
  const [numSLO, setNumSLO] = useState(formData.studentLearningOutcomes.programSLOTable.length)

  
 
  //Track changes to formData and numSLOs using updated formData
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
    else{
      setFormData(newFormData)
    }
  };
  
  
    
  
    return (
      <div className='body'>
        <div className='rjsfForm'>
          <p>Number of SLOS: {numSLO} </p>
          <Form 
            schema={schema} validator={validator}  uiSchema={uiSchema}
            formData={formData}
            onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
            onChange={onChange}/>
        </div>
      </div>
    );
  }

  export default AccUnGradForm;