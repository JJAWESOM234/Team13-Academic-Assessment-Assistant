import React from 'react';
// import ReactDOM from 'react-dom/client';

// Default V2 theme
import 'survey-core/defaultV2.min.css';

import { ItemValue} from 'survey-core';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';

/**
 * JSON element used to generate an AAC form; utilizes the surveyJS library.
 */
const surveyJson = {

  title: "{programs} Assessment Report",
  type: "object",
// ------------------------------------------------- Heading
  showQuestionNumbers: false,
  elements: [
    {
      type: "radiogroup",
      name: "programs",
      title: "Choose Program: ",
      defaultValue: "Non-Accredited Graduate",
      colCount: 4,
      choices: ["Non-Accredited Undergraduate", "Accredited Undergraduate", "Non-Accredited Graduate", "Accredited Graduate" ]
    },
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
          name: "departmentSchool",
          title: "Department/School",
          inputType: "text",
        },
        {
          name: "program",
          title: "Program",
          inputType: "text",
        },
        {
          name: "degreeLevel",
          title: "Degree level",
          inputType: "text",
        },
        {
          name: "year",
          title: "Academic Year of Report",
          inputType: "text",
        },
        {
          name: "dateRange",
          title: "Date Range of Reported Data",
          inputType: "text",
        },
        {
          name: "reporter",
          title: "Reporter",
          inputType: "text",
        },
      ],
      colCount: 2,
    },
// ------------------------------------------------- Degree Program & SLO Panel
    {
      type: "panel",
      name: "I",
      title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
      elements: [
        {
          type: "matrixdynamic",
          name: "SLOMatrix",
          title: "{panelIDesc}",
          valueName: "SLOs",
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
              choices: [ "1", "2", "3", "4", "Not applicable" ],
              visibleIf: "{programs} = 'Non-Accredited Graduate' or {programs} = 'Accredited Graduate'",
              colCount: 2,
            }
          ],
          rowCount: 4
        }
      ]
    },
// ------------------------------------------------- Assessment Methods Panel
    {
      type: "panel",
      name: "II",
      title: "II. Assessment Methods",
      elements: [
      {
        type: "matrixdynamic",
        name: "accrMethods",
        title: "{panelIIDesc}",
        visibleIf: "{programs} = 'Accredited Graduate' or {programs} = 'Accredited Undergraduate'",
        valueName: "SLOs",
        // allowAddRows: false,
        columns: [
        {
          name: "accrMeasureTitle",
          cellType: "text",
          title: "Measurement Title:",
        },
        {
          name: "accrSLO",
          cellType: "dropdown",
          title: "SLO:",
        },
        {
          name: "accrDomain",
          cellType: "text",
          title: "Domain (Product, Performance, Examination):",
        },
        {
          name: "accrCollection",
          cellType: "text",
          title: "Data Collection (i.e. annually, by semester) :",
        },
        ],
        rowCount: 4
      },
      {
        type: "paneldynamic",
        name: "nonAccrMethods",
        title: "{panelIIDesc}",
        renderMode: "progressTopBottom",
        valueName: "SLOs",
        visibleIf: "{programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate'",
        templateElements: [
        {
          type: "panel",
          name: "nonAccrTemplate",
          title: " ",
          elements: [
            {
              type: "dropdown",
              name: "nonAccrSLO",
              title: "SLO:",
            },
            {
              type: "text",
              name: "nonAccrMeasureTitle",
              title: "Title of Measure:",
            },
            {
              type: "comment",
              name: "nonAccrAlignment",
              title: "Describe How the Measure Aligns to the SLO:",
            },
            {
              type: "checkbox",
              name: "nonAccrDomain",
              title: "Domain:",
              choices: [ "Examination", "Product", "Performance" ],
              colCount: 3,
            },
            {
              type: "checkbox",
              name: "nonAccrType",
              title: "Type:",
              choices: [ "Direct Measure", "Indirect Measure" ],
              colCount: 2,
            },
            {
              type: "panel",
              name: "nonAccrAdministeredPanel",
              title: "Point in Program Assessment is Administered:",
              elements: [
                {
                  type: "checkbox",
                  name: "nonAccrPoint",
                  title: " ",
                  choices: [ "In final term of program", "In final year of program" ],
                  colCount: 2,
                },
                {
                  type: "text",
                  name: "nonAccrLocation",
                  title: "Where does the assessment occur:",
                }
              ]
            },
            {
              type: "checkbox",
              name: "nonAccrPopulation",
              title: "Population Measured:",
              choices: [ "All students", "Sample of students [Dynamic element]" ],
              colCount: 2,
            },
            {
              type: "checkbox",
              name: "nonAccrFrequency",
              title: "Frequency of Data Collection:",
              choices: [ "Once/semester", "Once/year", "Other [Dynamic element]" ],
              colCount: 3,
            },
            {
              type: "text",
              name: "nonAccrThreshold",
              title: "Proficiency Threshold:",
              placeholder: "Describe here",
            },
            {
              type: "text",
              name: "nonAccrTarget",
              title: "Program Proficiency Target:",
              placeholder: "Describe here",
            },
          ]
        },
        ],
        templateTitle : " ",
        // templateTitle: "SLO {panelIndex}: {panel.SLO}",
      },
      {
        type: "comment",
        name: "nonAccrComplements",
        title: "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
        visibleIf: "{programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate'",
      }
      ]
    },
// ------------------------------------------------- Data Collection and Analysis 
    {
      type: "panel",
      name: "III",
      title: "III. Data Collection and Analysis",
      elements: [
        {
          type: "matrixdynamic",
          name: "dataMatrix",
          title: "A. Results Table – Report results for each SLO. If an SLO was assessed by multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.",
          visibleIf: "{programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate'",
          allowAddRows: true,
          columns: [
          {
            name: "measureTitle",
            cellType: "text",
            title: "Title of Measure:",
          },
          {
            name: "SLO#",
            cellType: "dropdown",
            title: "SLO:",
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
            name: "proficiency%",
            cellType: "text",
            title: "Percentage of Students Who Met/Exceeded Threshold Proficiency:",
          },
          ],
          rowCount: 4
        },
        {
          type: "matrixdynamic",
          name: "statusMatrix",
          title: "{panelIIIStsTblDesc}",
          allowAddRows: false,
          columns: [
            {
              name: "SLO#",
              cellType: "dropdown",
              title: "SLO:",
            },
            {
              cellType: "checkbox",
              name: "SLOStatus",
              title: " ",
              maxSelectedChoices: 1,
              choices: [ "Met", "Partially Met", "Not Met", "Unknown" ],
              colCount: 4,
            },
          ],
          "rowCount": 4
        },
        {
          type: "comment",
          name: "resultsCommunication",
          title: "C: Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
          visibleIf: "{programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate'",
        }
      ]
    },
// ------------------------------------------------- Decisions and Actions
    {
      type: "panel",
      name: "panelIV",
      title: "IV. Decisions and Actions",
      elements: [
        {
          type: "matrixdynamic",
          name: "decisionsMatrix",
          title: "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions: What are the effects of your previously stated changes from your last report? What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report?",
          allowAddRows: false,
          columns: [
            {
              name: "SLO#",
              cellType: "dropdown",
              title: "SLO:",
            },
            {
              cellType: "text",
              name: "decisionsActions",
              title: "Decision and/or Actions",
              colCount: 4,
            },
          ],
          "rowCount": 4
        },
      ]
    },
// ------------------------------------------------- V. Additional Information
    {
      type: "panel",
      name: "panelV",
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
  // end of elements
  ],

  calculatedValues: [
    {
      name: "panelIDesc",
      expression: "iif({programs} = 'Non-Accredited Graduate' or {programs} = 'Accredited Graduate', 'A. List degree program SLOs. For each, SLO, indicate the highest cognitive level and Common Graduate Program SLO it represents.  To accommodate more than four SLOs, add rows as needed. The Common Graduate SLOs for master’s programs (adopted 2/2017) are listed below.', 'A. List each program SLO and indicate the highest cognitive level it represents. To accommodate more than four SLOs, add rows as needed.')"
    },
    {
      name: "panelIIDesc",
      expression: "iif({programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate', 'A. Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.','List the assessment measures used. For each measure, indicate the domain and how often data is collected. Rows are automatically added to accommodate additional SLOs.' )"
    },
    {
      name: "panelIIIStsTblDesc",
      expression: "iif({programs} = 'Non-Accredited Graduate' or {programs} = 'Non-Accredited Undergraduate', 'B.  SLO Status Table – Based on the results reported in the above table and referring to the program proficiency target, indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.','SLO Status Table – Indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.' )"
    }

  // end of calculated values
  ]

// end of surveyConst
};

/**
 * Function that creates a model from surveyJson; is exported to index.js.
 * @function
 * @returns survey model
 */
function App() {

  const survey = new Model(surveyJson);

  survey.onMatrixCellValueChanged.add((sender, options) => {     

    if(options.columnName === 'SLO') {

      let itemValue = new ItemValue(options.value);
      // get array of current SLOs

      // should not push duplicates
      if (itemValue != '' && itemValue != ' ' && itemValue != null)
      {
        let dropdownQuestion = sender.getQuestionByName('nonAccrMethods').templateElements[0].elements[0];
        dropdownQuestion.choices.push(itemValue);

        dropdownQuestion = sender.getQuestionByName('accrMethods');
        dropdownQuestion.choices.push(itemValue);

        dropdownQuestion = sender.getQuestionByName('dataMatrix');
        dropdownQuestion.choices.push(itemValue);

        dropdownQuestion = sender.getQuestionByName('statusMatrix');
        dropdownQuestion.choices.push(itemValue);

        dropdownQuestion = sender.getQuestionByName('decisionsMatrix');
        dropdownQuestion.choices.push(itemValue);
      }

      // somehow check each dropdown option against SLO array and remove uneeded elements in dropdown
    }

  });

  survey.onMatrixCellCreated.add((sender, options) => {
    
    if(options.column.name === 'SLO') {
      options.cellQuestion.placeHolder = options.column.name + " "
      + (options.question.visibleRows.indexOf(options.row) + 1).toString();
    }

  });

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    navigator.clipboard.writeText(results);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model = {survey}/>;

}

export default App;
