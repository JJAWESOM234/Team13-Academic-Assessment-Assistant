import React from 'react';
import ReactDOM from 'react-dom/client';

// Default V2 theme
import 'survey-core/defaultV2.min.css';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';

const surveyJson = {

  title: "Non-Accredited Graduate Assessment Report Template",
  type: "object",

// ------------------------------------------------- Heading
  showQuestionNumbers: false,
  elements: [

    {
      type: "multipletext",
      name: "heading",
      title: " ",
      items: [
        {
          name: "college",
          title: "College",
          inputtype: "text",
        },
        {
          name: "program",
          title: "Program",
          inputType: "text",
        },
        {
          name: "year",
          title: "Academic Year of Report",
          inputType: "text",
        },
        {
          name: "reporter",
          title: "Reporter",
          inputType: "text",
        },
        {
          name: "departmentSchool",
          title: "Department/School",
          inputType: "text",
        },
        {
          name: "dateRange",
          title: "Date Range of Data",
          inputType: "text",
        },
        {
          name: "degreeLevel",
          title: "Degree level",
          inputType: "text",
        },
      ],
      colCount: 2,
    },
// ------------------------------------------------- Degree Program & SLO Panel
    {
      type: "panel",
      name: "panel1",
      title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
      elements: [
      {
        type: "matrixdynamic",
        name: "SLOs",
        title: "A. [Insert Description]",
        addRowText: "Add SLO",
        columns: [
         {
            name: "SLO",
            cellType: "text",
            title: "Student Learning Outcomes:",
         },
         {
            name: "bloom",
            cellType: "checkbox",
            title: "Bloom’s Taxonomy Cognitive Level:",
            choices: [ "Knowledge", "Comprehension", "Application", "Analysis", "Synthesis", "Evaluation" ],
            colCount: 2,
         },
          {
           name: "graduateSLOs",
           cellType: "checkbox",
           title: "Common Graduate Program SLOs:",
           choices: [ "1", "2", "3", "4", "Not applicable for SLO" ],
           colCount: 2,
         }
        ],
        "rowCount": 4
      },
      {
        type: "boolean",
        name: "standards",
        title: "B: SLOs reflect professional standards as dictated by an accreditation or other external body.",
        valueTrue: "Yes",
        valueFalse: "No",
        renderAs: "radio"
      },
      {
       type: "comment",
        name: "stakeholders",
        title: "C: Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
      }

      ]
    },
// ------------------------------------------------- Assessment Methods Panel
    {
      type: "panel",
      name: "panel2",
      title: "II. Assessment Methods",
      elements: [
        {
          type: "text",
          name: "measureTitle",
          title: "Title of the Measure:",
        },
        {
          type: "comment",
          name: "measureAlignment",
          title: "Describe How the Measure Aligns to the SLO:",
        },
        {
          type: "checkbox",
          name: "domain",
          title: "Domain:",
          choices: [ "Examination", "Product", "Performance" ],
          colCount: 3,
        },
        {
          type: "checkbox",
          name: "type",
          title: "Type:",
          choices: [ "Direct Measure", "Indirect Measure" ],
          colCount: 2,
        },
        {
          type: "panel",
          name: "administeredPanel",
          title: "Point in Program Assessment is Administered:",
          elements: [
            {
              type: "checkbox",
              name: "point",
              title: " ",
              choices: [ "In final term of program", "In final year of program" ],
              colCount: 2,
            },
            {
              type: "text",
              name: "where",
              title: "Where does the assessment occur:",
            }
          ]
        },
        {
          type: "checkbox",
          name: "population",
          title: "Population Measured:",
          choices: [ "All students", "Sample of students [Dynamic element]" ],
          colCount: 2,
        },
        {
          type: "checkbox",
          name: "frequency",
          title: "Frequency of Data Collection:",
          choices: [ "Once/semester", "Once/year", "Other [Dynamic element]" ],
          colCount: 3,
        },
        {
          type: "text",
          name: "threshold",
          title: "Proficiency Threshold:",
          placeholder: "Describe here",
        },
        {
          type: "text",
          name: "target",
          title: "Program Proficiency Target:",
          placeholder: "Describe here",
        },
        {
          type: "comment",
          name: "complements",
          title: "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
        }
      ]
    },
// ------------------------------------------------- Data Collection and Analysis 
    {
      type: "panel",
      name: "panel3",
      title: "III. Data Collection and Analysis",
      elements: [
        {
          type: "matrixdynamic",
          name: "data",
          title: "A. [Insert Description]",
          addRowText: "Add SLO Measure",
          columns: [
          {
            name: "SLO#Measure#",
            cellType: "text",
            title: "[Dynamic SLO# Measure#]",
          },
          {
            name: "dateRange",
            cellType: "text",
            title: "Data Collection Date Range:",
          },
          {
            name: "numberOfStudents",
            cellType: "text",
            title: "Number of Students Assessed:",
          },
          {
            name: "percentage",
            cellType: "text",
            title: "Percentage of Students who Met/Exceeded Threshold Proficiency:",
          },
          ],
          "rowCount": 4
        },
        {
          type: "matrixdynamic",
          name: "status",
          title: "B. SLO Status Table – Based on the results reported in the above table and referring to the program proficiency target, indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.",
          addRowText: "Add Row",
          columns: [
            {
              cellType: "checkbox",
              name: "frequency",
              title: " ",
              choices: [ "Met", "Partially Met", "Not Met", "Unknown" ],
              colCount: 4,
            },
          ],
          "rowCount": 4
        },
        {
          type: "comment",
          name: "communication",
          title: "C: Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
        }
      ]
    },
// ------------------------------------------------- Decisions and Actions
    {
      type: "panel",
      name: "panel4",
      title: "IV. Decisions and Actions",
      elements: [
        {
          type: "matrixdynamic",
          name: "decisions&Actions",
          title: "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions: What are the effects of your previously stated changes from your last report? What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report?",
          addRowText: "Add Row",
          columns: [
            {
              cellType: "text",
              name: "frequency",
              title: " ",
              colCount: 4,
              placeholder: "[SLO #]"
            },
          ],
          "rowCount": 4
        },
      ]
    },
// ------------------------------------------------- V. Additional Information
    {
      type: "panel",
      name: "panel5",
      title: "V. Additional Information",
      elements: [
        {
          type: "comment",
          name: "additionalInfo",
          title: " ",
          placeholder: "OPTIONAL: Provide additional information that may be helpful to reviewers.",
        }
      ]
    },
  ]

};




function App() {

  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model = {survey}/>;

}

export default App;