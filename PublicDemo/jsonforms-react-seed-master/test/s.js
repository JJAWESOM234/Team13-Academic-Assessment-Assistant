const puppeteer = require('puppeteer'); // v13.0.0 or later
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);
  var oJSONModelTest1 = {
    headerInfo: {
      college: "College of IS&T",
      program: "Computer Science",
      academicYear: "2022-2023",
      preparer: "John Doe",
      deptSchool: "Computer Science Department",
      degreeLevel: "Master's",
      dateRange: "August 15, 2022 - May 15, 2023",
    },

    studentLearningOutcomes: {
      programSLOTable: [
        {
          programSLODesc: "Students will learn XYZ",
          programSLOBloom: "Knowledge",
          programSLOCommon: ["1", "3"]
        }
      ],

      proStandardsQuestion: 'Yes',
      stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },

    assessmentMethods: {
      assessmentMeasure: [
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "In Final Term of Program",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        }
      ],
      measureComplementDirect: "Describe indirect measures here."
    },

    dataCollection: {
      dataResultsTable: [
        {
          dataResultsEntryName: "SLO 1 - Measure One",
          dataResultsEntryRange: "August 15, 2022 - December 15, 2022",
          dataResultsEntryNumStudents: "242",
          dataResultsEntryPercStudents: "78%"
        }
      ],
      dataSLOStatusTable: [
        {
          dataSLOStatus: "met"
        },
      ],
      dataResultsDescription: "A description of the data results and how they are communicated."
    },

    decisionsAndActions: [
      {
        decisionsAndActionsSLODesc: "A description of the specific decisions and actions",
      },
    ],

    additionalInformation: "Additional info here"
  }

  var oJSONModelTest2 = {
    studentLearningOutcomes: {
      programSLOTable: [
        {
          programSLODesc: "Students will learn XYZ",
          programSLOBloom: "Knowledge",
          programSLOCommon: ["1", "3"]
        },
        {
          programSLODesc: "Students can analyze problems",
          programSLOBloom: "Analysis",
          programSLOCommon: ["2", "4"]
        }
      ],

      proStandardsQuestion: true,
      stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },

    assessmentMethods: {
      assessmentMeasure: [
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalTerm",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Surveys",
          measureDescription: "This is the measure of all surveys",
          measureDomain: ["Performance"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalYear",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        }
      ],
      measureComplementDirect: "Describe indirect measures here."
    },

    dataCollection: {
      dataResultsTable: [{}],
      dataSLOStatusTable: [{}]
    },

    decisionsAndActions: [
      {}, ''
    ]
  }

  var oJSONModelTest3 = {
    studentLearningOutcomes: {
      programSLOTable: [
        {
          programSLODesc: "Students will learn XYZ",
          programSLOBloom: "Knowledge",
          programSLOCommon: ["1", "3"]
        },
        {
          programSLODesc: "Students can analyze problems",
          programSLOBloom: "Analysis",
          programSLOCommon: ["2", "4"]
        }
      ],

      proStandardsQuestion: true,
      stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },

    assessmentMethods: {
      assessmentMeasure: [
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalTerm",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Surveys",
          measureDescription: "This is the measure of all surveys",
          measureDomain: ["Performance"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalYear",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Measure 3",
          measureDescription: "Measure 3 Desc",
          measureDomain: ["Performance"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalYear",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
      ],
      measureComplementDirect: "Describe indirect measures here."
    },

    dataCollection: {
      dataResultsTable: [{}],
      dataSLOStatusTable: [{}]
    },

    decisionsAndActions: [
      {}, ''
    ],
  }

  var oJSONModelTest4 = {
    headerInfo: {
    },

    studentLearningOutcomes: {
      programSLOTable: [
        {
          programSLODesc: "Students will learn XYZ",
          programSLOBloom: "Knowledge",
          programSLOCommon: ["1", "3"]
        },
        {
          programSLODesc: "Students can analyze problems",
          programSLOBloom: "Analysis",
          programSLOCommon: ["2", "4"]
        },
        {
          programSLODesc: "Students will comprehend",
          programSLOBloom: "Comprehension",
          programSLOCommon: ["Not Applicable for SLO"]
        },
        {
          programSLODesc: "Students will evaluate",
          programSLOBloom: "Evaluation",
          programSLOCommon: ["1", "2"]
        }
      ],

      proStandardsQuestion: true,
      stakeholders: `When it comes to the creation and review of Student Learning Outcomes (SLOs), stakeholders play a crucial role in ensuring that these outcomes accurately reflect the needs and expectations of the educational community. This includes both internal stakeholders such as faculty, staff, and students, as well as external stakeholders such as employers, accrediting bodies, and community partners.`
    },

    assessmentMethods: {
      assessmentMeasure: [
        {
          measureTitle: "Tests and Exams",
          measureDescription: "This is the measure of all tests and exams",
          measureDomain: ["Examination"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalTerm",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Surveys",
          measureDescription: "This is the measure of all surveys",
          measureDomain: ["Performance"],
          measureType: "direct",
          measurePoint: {
            measurePointInProgram: "finalTerm",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "allStudents",
          measureDataFreq: "other",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Measure 3",
          measureDescription: "Measure 3 Desc",
          measureDomain: ["Product", "Performance"],
          measureType: "indirect",
          measurePoint: {
            measurePointInProgram: "finalYear",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "sampleStudents",
          measureDataFreq: "oncePerYear",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
        {
          measureTitle: "Measure 4",
          measureDescription: "Measure 4 Desc",
          measureDomain: ["Product"],
          measureType: "indirect",
          measurePoint: {
            measurePointInProgram: "finalYear",
            measurePointLocation: "Dodge Campus"
          },
          measurePopulation: "sampleStudents",
          measureDataFreq: "oncePerSemester",
          measureProficiencyThreshold: "Proficiency Threshold is ###",
          measureProficiencyTarget: "Proficiency Target is ##%"
        },
      ],
      measureComplementDirect: "Describe indirect measures here."
    },

    dataCollection: {
    },

    decisionsAndActions: [
      {

      },
    ],

    additionalInformation: "Additional info here"
  }

  //Expand Sections/Objects
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1246,
      height: 1167
    })
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('http://localhost:3000/');
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        'aria/UNDER-GRADUATE UNACCREDITED'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > header > div > div.MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX.css-69z67c-MuiTabs-scroller > div > button:nth-child(4)'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/header/div/div[3]/div/button[4]'
      ],
      [
        'text/Under-Graduate Unaccredited'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        'aria/UNDER-GRADUATE UNACCREDITED'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > header > div > div.MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX.css-69z67c-MuiTabs-scroller > div > button:nth-child(4)'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/header/div/div[3]/div/button[4]'
      ],
      [
        'text/Under-Graduate Unaccredited'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 101.083984375,
        y: 31.509765625,
      },
    });
    await targetPage.pdf({ path: "example.pdf", format: "letter" })
  }
  {
    const targetPage = page;

    const element = await waitForSelectors([
      [
        'aria/I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)',
        'aria/[role="graphics-symbol"]'
      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(1) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper > svg > path'
      ],
      [
        'xpath///*[@data-testid="ExpandMoreIcon"]/path'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 5.58935546875,
        y: 5.923828125,
      },
    });
    await targetPage.pdf({ path: "example1.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Program SLOs[role="button"]',
        'aria/[role="graphics-symbol"]'
      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div.MuiToolbar-root.MuiToolbar-regular.css-r6ewbb-MuiToolbar-root > div > div:nth-child(2) > div > div > button > svg > path'
      ],
      [
        'xpath///*[@data-testid="AddIcon"]/path'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 5.876220703125,
        y: 6.522705078125,
      },
    });
    await targetPage.pdf({ path: "example2.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper > svg'
      ],
      [
        'xpath///*[@data-testid="ExpandMoreIcon"]'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 7.5390625,
        y: 15.73828125,
      },
    });
    await targetPage.pdf({ path: "example3.pdf", format: "letter" })
  }
  {
    const targetPage = page;

    const element = await waitForSelectors([
      [
        'aria/II. Assessment Methods'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[2]/div/div[1]'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 754.15234375,
        y: 35.515625,
      },
    });
    await targetPage.pdf({ path: "example4.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Assessment Measure[role="button"]'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div.MuiToolbar-root.MuiToolbar-regular.css-r6ewbb-MuiToolbar-root > div > div:nth-child(2) > div > div > button'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div[1]/div/div[2]/div/div/button'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 9.0546875,
        y: 35.357421875,
      },
    });
    await targetPage.pdf({ path: "example5.pdf", format: "letter" })
  }
  {
    const targetPage = page;

    const element = await waitForSelectors([
      [
        'aria/III. Data Collection and Analysis',

      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper > svg > path'
      ],
      [
        'xpath///*[@data-testid="ExpandMoreIcon"]/path'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 6.77685546875,
        y: 3.689453125,
      },
    });
    await targetPage.pdf({ path: "example51.pdf", format: "letter" })
  }

  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Data Results Table[role="button"]',

      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div.MuiToolbar-root.MuiToolbar-regular.css-r6ewbb-MuiToolbar-root > div > div:nth-child(2) > div > div > button > svg > path'
      ],
      [
        'xpath///*[@data-testid="AddIcon"]/path'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 5.84375,
        y: 12.96875,
      },
    });
    await targetPage.pdf({ path: "example6.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[1]'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 1880.5,
        y: 52.96875,
      },
    });
    await targetPage.pdf({ path: "example7.pdf", format: "letter" })
  }

  {
    const targetPage = page;

    const element = await waitForSelectors([
      [
        'aria/Data Results Table',

      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper > svg > path'
      ],
      [
        'xpath///*[@data-testid="ExpandMoreIcon"]/path'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 7.77294921875,
        y: 3.072265625,
      },
    });
    await targetPage.pdf({ path: "example8.pdf", format: "letter" })
  }

  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/IV. Decisions and Actions'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(4) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[4]/div/div[1]'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 16.3125,
        y: 38.03125,
      },
    });
    await targetPage.pdf({ path: "example10.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Decision Or Action[role="button"]'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(4) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div > table > thead > tr:nth-child(1) > th.MuiTableCell-root.MuiTableCell-head.MuiTableCell-alignRight.MuiTableCell-sizeMedium.css-ppkshe-MuiTableCell-root > button'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[4]/div/div[2]/div/div/div/div/div/div/table/thead/tr[1]/th[2]/button'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 10.0546875,
        y: 34.251953125,
      },
    });
    await targetPage.pdf({ path: "example11.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-o4b71y-MuiAccordionSummary-content > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-5.MuiGrid-grid-md-3.css-co6u3v-MuiGrid-root > div > div > div > div'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div/div[2]/div/div/div/div'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 46.5078125,
        y: 38.0546875,
      },
    });
    await targetPage.pdf({ path: "example12.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Point In Program Assessment is Administered',
        'aria/[role="graphics-symbol"]'
      ],
      [
        'html > body > div:nth-child(2) > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(5) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper > svg > path'
      ],
      [
        'xpath///*[@data-testid="ExpandMoreIcon"]/path'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 4.06396484375,
        y: 4.275390625,
      },
    });
    await targetPage.pdf({ path: "example13.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    const element = await waitForSelectors([
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root > div.MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-o4b71y-MuiAccordionSummary-content > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-5.MuiGrid-grid-md-3.css-co6u3v-MuiGrid-root > div'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div/div[2]/div'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 86.625,
        y: 21.96875,
      },
    });
    await targetPage.pdf({ path: "example14.pdf", format: "letter" })
  }



  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Unique SLO Data Result[role="button"]'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-1.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-5 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiAccordion-root.MuiAccordion-rounded.Mui-expanded.MuiAccordion-gutters.css-1elwnq4-MuiPaper-root-MuiAccordion-root > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div > table > thead > tr:nth-child(1) > th.MuiTableCell-root.MuiTableCell-head.MuiTableCell-alignRight.MuiTableCell-sizeMedium.css-ppkshe-MuiTableCell-root > button'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div/div/div/div/div/table/thead/tr[1]/th[2]/button'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 21.3203125,
        y: 40.265625,
      },
    });
    await targetPage.pdf({ path: "example16.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'aria/Add to Data SLO Status Table[role="button"]'
      ],
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-6.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-10 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(2) > div > div.MuiToolbar-root.MuiToolbar-regular.css-r6ewbb-MuiToolbar-root > div > div:nth-child(2) > div > div > button'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[2]/div/div[1]/div/div[2]/div/div/button'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 38.7265625,
        y: 38.3046875,
      },
    });
    await targetPage.pdf({ path: "example17.pdf", format: "letter" })
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        '#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.makeStyles-container-6.css-exfl4s-MuiGrid-root > div > div.makeStyles-demoform-10 > div > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[2]/div/div[2]/div/div[1]'
      ]
    ], frame, { timeout, visible: true });
    await element.click({
      offset: {
        x: 843.296875,
        y: 60.8125,
      },
    });
    await targetPage.pdf({ path: "example18.pdf", format: "letter" })
  }


  await page.type("[id='#/properties/head/properties/college-input']", oJSONModelTest1.headerInfo.college)
  await page.type("[id='#/properties/head/properties/program-input']", oJSONModelTest1.headerInfo.program)
  await page.type("[id='#/properties/head/properties/academicYear-input']", oJSONModelTest1.headerInfo.academicYear)
  await page.type("[id='#/properties/head/properties/deptSchool-input']", oJSONModelTest1.headerInfo.deptSchool)
  await page.type("[id='#/properties/head/properties/degreeLevel-input']", oJSONModelTest1.headerInfo.degreeLevel)
  await page.type("[id='#/properties/head/properties/dateRange-input']", oJSONModelTest1.headerInfo.dateRange)
  await page.type("[id='#/properties/head/properties/preparer-input']", oJSONModelTest1.headerInfo.preparer)

  //Section 1b and 1c 
  await delay(2000);
  await page.type("[id='#/properties/programSLOsSLO1-input']", oJSONModelTest1.studentLearningOutcomes.programSLOTable[0].programSLODesc)
  await page.click("[id='#/properties/programSLOsSLO1Bloom']")
  await page.type("[id='#/properties/proStandardsQuestion2']", oJSONModelTest1.studentLearningOutcomes.proStandardsQuestion)
  await page.type("[id='#/properties/stakeholders2-input']", oJSONModelTest1.studentLearningOutcomes.stakeholders)

  //Section 2
  await page.type("[id='#/properties/measureTitle-input']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureTitle)
  await page.type("[id='#/properties/measureDescription-input']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureDescription)
  await page.click("aria/Examination") //Needs attention for automation

  await page.type("[id='#/properties/measurePointInProgram']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointInProgram)
  await page.type("[id='#/properties/measurePointLocation-input']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measurePoint.measurePointLocation)
  await page.click("aria/All Students") //Needs attention for automation and 
  await page.type("[id='#/properties/frequencyOfDataCollection']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureDataFreq)
  await page.type("[id='#/properties/measureProficiencyThreshold-input']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyThreshold)
  await page.type("[id='#/properties/measureProficiencyTarget-input']", oJSONModelTest1.assessmentMethods.assessmentMeasure[0].measureProficiencyTarget)
  await page.type("[id='#/properties/measureComplementDirect-input']", oJSONModelTest1.assessmentMethods.measureComplementDirect)

  //Section 3
  /*
  await page.type("[id='#/properties/dataResultsSLO1Range-input']",oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryRange)
  await page.type("[id='#/properties/dataResultsSLONumStudents-input']",oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents)
  await page.type("[id='#/properties/dataResultsSLOPercStudents-input']",oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents)
*/
  //Section 3 Data SLO Status Table
  await page.click("aria/Met")
  await page.type("[id='#/properties/dataResultsDescription-input']", oJSONModelTest1.dataCollection.dataResultsDescription)
  //Data Collection Date    
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'div:nth-of-type(3) td:nth-of-type(1) input'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr/td[1]/div/input'
      ],
      [
        'pierce/div:nth-of-type(3) td:nth-of-type(1) input'
      ]
    ], frame, { timeout, visible: true });
    await changeElementValue(element, oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryRange);
  }
  //Number of Students Assessed
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    
    const element = await waitForSelectors([
        [
            'td:nth-of-type(2) input'
        ],
        [
            'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr/td[2]/div/input'
        ],
        [
            'pierce/td:nth-of-type(2) input'
        ]
    ], frame, { timeout, visible: true });
    await changeElementValue(element, oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryNumStudents);
}
  //Percentage of Students who Met/Exceeded Threshold Proficiency
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    
    const element = await waitForSelectors([
        [
            'td:nth-of-type(3) input'
        ],
        [
            'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[3]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr/td[3]/div/input'
        ],
        [
            'pierce/td:nth-of-type(3) input'
        ]
    ], frame, { timeout, visible: true });
    await typeIntoElement(element, oJSONModelTest1.dataCollection.dataResultsTable[0].dataResultsEntryPercStudents);
}

  //Section 4
  await page.type("[id='#/properties/measureComplementDirect-input']", oJSONModelTest1.assessmentMethods.measureComplementDirect)
  await page.pdf({ path: "example0.pdf", format: "letter" })
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();

    const element = await waitForSelectors([
      [
        'div:nth-of-type(4) > div > div > div > div > div:nth-of-type(4) tr:nth-of-type(1) input'
      ],
      [
        'xpath///*[@id="root"]/div[2]/div/div[1]/div/div[4]/div/div/div/div/div[4]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[1]/div/input'
      ],
      [
        'pierce/div:nth-of-type(4) > div > div > div > div > div:nth-of-type(4) tr:nth-of-type(1) input'
      ]
    ], frame, { timeout, visible: true });
    await typeIntoElement(element, oJSONModelTest1.decisionsAndActions[0].decisionsAndActionsSLODesc);
  }
  await page.type("[id='#/properties/AccreditedGraduate/properties/additionalInformation-input']", oJSONModelTest1.additionalInformation)

  await page.pdf({ path: "example.pdf", format: "letter" })
  await browser.close();

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
    if (!element) {
      throw new Error(
        'The element could not be found.'
      );
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate(element => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'auto',
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty('isConnected');
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to waitForSelector');
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('>>'));
      }
      if (i < selector.length - 1) {
        element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
      }
    }
    if (!element) {
      throw new Error('Could not find element: ' + selector.join('|'));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = '>=',
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      '==': (a, b) => a === b,
      '>=': (a, b) => a >= b,
      '<=': (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle((...elements) => {
        return elements;
      }, ...elements);
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes
        );
      }
      await elementsHandle.dispose();
      return result === visible;
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to querySelectorAll');
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }

  async function changeSelectElement(element, value) {
    await element.select(value);
    await element.evaluateHandle((e) => {
      e.blur();
      e.focus();
    });
  }

  async function changeElementValue(element, value) {
    await element.focus();
    await element.evaluate((input, value) => {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }

  async function typeIntoElement(element, value) {
    const textToType = await element.evaluate((input, newValue) => {
      if (
        newValue.length <= input.value.length ||
        !newValue.startsWith(input.value)
      ) {
        input.value = '';
        return newValue;
      }
      const originalValue = input.value;
      input.value = '';
      input.value = originalValue;
      return newValue.substring(originalValue.length);
    }, value);
    await element.type(textToType);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
