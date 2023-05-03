const puppeteer = require('puppeteer');
var _ = require('lodash');

/**
 * Initial testing scenario with Puppeteer.
 */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  // NON_ACCREDITED GRADUATE SCENARIO 1 TEST

  // Click Non-Accredited Graduate radio button
  await page.click('.sd-selectbase--multi-column:nth-child(1) > .sd-selectbase__column:nth-child(3)');

  // Non-Accredited Graduate heading
  await page.type('input[aria-label="College"]', 'University of Nebraska Omaha');
  await page.type('input[aria-label="Department/School"]', 'IS&T');
  await page.type('input[aria-label="Program"]', 'Computer Science');
  await page.type('input[aria-label="Degree level"]', 'Bachelor');
  await page.type('input[aria-label="Academic Year of Report"]', 'Spring 23');
  await page.type('input[aria-label="Date Range of Reported Data"]', 'August 22\' - May 23\'');
  await page.type('input[aria-label="Reporter"]', 'John Doe');
  
  // Panel I
  await page.type('input[placeholder="SLO 1"]', 'SLO 1 Test'  );
  await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(3) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(1) .sd-item__decorator');
  await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(2) > .sd-item:nth-child(2) .sd-item__decorator');

  // Panel II
  await page.type('input[aria-label="Select..."]', '1');
  await page.type('input[aria-label="Title of Measure:"]', 'Title 1');
  await page.type('textarea[aria-label="Describe How the Measure Aligns to the SLO:"]', 'Measure 1');
  await page.click('#sq_255 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.click('#sq_256 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.click('#sq_257 .sd-selectbase__column:nth-child(2) .sd-item__decorator');
  await page.type('input[aria-label="Where does the assessment occur:"]', 'Occur 1');
  await page.click('#sq_259 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.click('#sq_260 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.type('input[aria-label="Proficiency Threshold:"]', 'Threshold 1');
  await page.type('input[aria-label="Program Proficiency Target:"]', 'Target 1');
  await page.type('textarea[aria-label="B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs."]', 'Description 1');

  // Panel III
  await page.type('#sq_224i', 'SLO 1/Measurement');
  await page.type('#sq_225i', '2022-2023');
  await page.type('#sq_226i', '724');
  await page.type('#sq_227i', '30%');

  await page.type('#sq_240i', 'SLO 1');
  await page.click('.sd-table__row:nth-child(1) .sd-selectbase__column:nth-child(3) .sd-item__decorator');
  await page.type('textarea[aria-label="C: Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed."]', 'Results 1');

  // // Panel IV
  await page.type('#sq_248i', 'Decision 1');

  // // Panel V
  await page.type('textarea[placeholder="OPTIONAL: Provide additional information that may be helpful to reviewers."]', 'No additional information');

  await page.pdf({ path: "example1.pdf", format: "A4" });

  // // NON_ACCREDITED GRADUATE SCENARIO 3 TEST - Adding a SLO and measure

  // // Panel I
  // await page.type('input[placeholder="SLO 2"]', 'SLO 2 Test'  );
  // await page.click('.sd-table__row:nth-child(2) > .sd-table__cell:nth-child(3) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(1) .sd-item__decorator');
  // await page.click('.sd-table__row:nth-child(2) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(2) > .sd-item:nth-child(2) .sd-item__decorator');

  // // Panel II
  // await page.click('#sv-pd-next-btn .sd-action');
  // await page.type('input[aria-label="Select..."]', '2');
  // await page.type('input[aria-label="Title of Measure:"]', 'Title 2');
  // await page.type('textarea[aria-label="Describe How the Measure Aligns to the SLO:"]', 'Measure 2');
  // await page.click('#sq_266 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  // await page.click('#sq_267 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  // await page.click('#sq_268 .sd-selectbase__column:nth-child(2) .sd-item__decorator');
  // await page.type('input[aria-label="Where does the assessment occur:"]', 'Occur 2');
  // await page.click('#sq_270 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  // await page.click('#sq_271 .sd-selectbase__column:nth-child(3) .sd-item__decorator');
  // await page.type('input[aria-label="Proficiency Threshold:"]', 'Threshold 2');
  // await page.type('input[aria-label="Program Proficiency Target:"]', 'Target 2');
  // await page.type('textarea[aria-label="B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs."]', 'Description 2');

  // // Panel III
  // await page.type('#sq_228i', 'SLO 2/Measurement');
  // await page.type('#sq_229i', '2022-2023');
  // await page.type('#sq_230i', '824');
  // await page.type('#sq_231i', '80%');

  // await page.type('#sq_242i', 'SLO 2');
  // await page.click('.sd-table__row:nth-child(2) .sd-selectbase__column:nth-child(1) .sd-item__decorator');

  // // Panel IV
  // await page.type('#sq_249i', 'Decision 2');

  // await page.pdf({ path: "example2.pdf", format: "A4" });

  var JSONExpected = {
  
  programs: "Non-Accredited Graduate",
  heading: {
      college: "University of Nebraska Omaha",
      departmentSchool: "IS&T",
      degreeLevel: "Bachelor",
      dateRange: "August 22' - May 23'",
      program: "Computer Science",
      year:"Spring 23",
      reporter:"John Doe"
  },
  SLOs: [{
    SLO: "SLO 1 Test",
    bloom: ["Analysis"],
    graduateSLOs: ["1"],
    nonAccrMeasureTitle: "Title 1",
    nonAccrAlignment: "Measure 1",
    nonAccrDomain: ["Examination"],
    nonAccrType: ["Direct Measure"],
    nonAccrPoint: ["In final year of program"],
    nonAccrLocation: "Occur 1",
    nonAccrPopulation: ["All students"],
    nonAccrFrequency: ["Once/semester"],
    nonAccrThreshold:"Threshold 1",
    nonAccrTarget:"Target 1" 
  }, {}, {}, {}],
  nonAccrComplements: "Description 1",
  dataMatrix: [{
    measureTitle: "SLO 1/Measure",
    SLOnum: "1",
    dateRange: "2022-2023",
    numberOfStudents: "724",
    proficiencyPer: "30%"
  }, {}, {}, {}],
  statusMatrix: [{
    SLOnum: "1",
    SLOStatus: ["Not Met"]
  }, {}, {}, {}],
  resultsCommunication: "Results 1",
  decisionsMatrix: [{
    SLOnum: "1",
    decisionsActions: "Decision 1"
  }, {}, {}, {}],
  additionalInfo: "No additional information"

}

  var JSONActual = JSON.parse(res)
  assert.true(_.isEqual(JSONActual, JSONExpected))

  await browser.close();

})();
