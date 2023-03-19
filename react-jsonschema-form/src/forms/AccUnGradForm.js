
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import React, {useState} from "react"
import './NonAccGradForm.css';

const schema: RJSFSchema = {
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
                "title": "Frequency of Data Collection",
                "type": "string",
              },
            }
          }
        },
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
    "assessmentMeasure":{
      "items": {
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
    const name = `SLO ${index+1}`;
    return <SchemaField {...props} name={name} />;
  };
  
  
  const fields: RegistryFieldsType = {
    ArraySchemaField: CustomArraySchemaField
  };
  
    
  function AccUnGradForm() {
  
    //Use state to track formData, set initial formData with 1 SLO
    const [formData, setFormData] = useState({ 
      studentLearningOutcomes: { programSLOTable: [""] } });
  
    //use formData to track changes to number of SLOs
    const [numSLO, setNumSLO] = useState(formData.studentLearningOutcomes.programSLOTable.length)
   
    //Track changes to formData and numSLOs using updated formData
    const onChange = ({ formData: newFormData}) => {
      setFormData(newFormData);
      setNumSLO(newFormData.studentLearningOutcomes.programSLOTable.length)
    };
  
    
  
    return (
      <div className='body'>
        <div className='rjsfForm'>
          <p>Number of SLOS: {numSLO} </p>
          <Form 
            schema={schema} validator={validator}  uiSchema={uiSchema}
            fields={fields} formData={formData}
            onSubmit={({formData}) => alert(JSON.stringify(formData, null, 2))}
            onChange={onChange}/>
        </div>
      </div>
    );
  }

  export default AccUnGradForm;