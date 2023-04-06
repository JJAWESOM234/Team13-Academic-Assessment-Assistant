const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  // NON_ACCREDITED GRADUATE SCENARIO 1 TEST
  // Click Non-Accredited Graduate radio button
  await page.click('.sd-selectbase--multi-column:nth-child(1) > .sd-selectbase__column:nth-child(3)');

  // Non-Accredited Graduate heading
  await page.type('#sq_157i', 'University of Nebraska Omaha');
  await page.type('#sq_158i', 'IS&T');
  await page.type('#sq_159i', 'Computer Science');
  await page.type('#sq_160i', 'Bachelor');
  await page.type('#sq_161i', 'Spring 23');
  await page.type('#sq_162i', 'August 22\' - May 23\'');
  await page.type('#sq_163i', 'John Doe');
  
  // Panel I
  await page.type('#sq_210i', 'SLO 1');
  await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(3) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(1) .sd-item__decorator');
  await page.click('.sd-table__row:nth-child(1) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(2) > .sd-item:nth-child(2) .sd-item__decorator');

  // Panel II
  await page.type('#sq_250i', 'Title');
  await page.type('#sq_251i', 'Measure');
  await page.click('#sq_252 .sd-selectbase__column:nth-child(2) .sd-item__decorator');
  await page.click('#sq_253 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.click('#sq_254 .sd-selectbase__column:nth-child(2) .sd-item__decorator');
  await page.type('#sq_255i', 'Occur');
  await page.click('#sq_256 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.click('#sq_257 .sd-selectbase__column:nth-child(1) .sd-item__decorator');
  await page.type('#sq_258i', 'Threshold');
  await page.type('#sq_259i', 'Target');
  await page.type('#sq_190i', 'Description');

  // Panel III
  await page.type('#sq_222i', 'SLO 1/Measurement');
  await page.click('.sd-table__row:nth-child(1) .sd-selectbase__column:nth-child(3) .sd-item__decorator');
  await page.type('#sq_238i', 'SLO 1');
  await page.type('#sq_205i', 'Result Description');

  // Panel IV
  await page.type('#sq_246i', 'SLO 1 Decision');

  // Panel V
  await page.type('#sq_209i', 'Additional Information');

  // await page.screenshot({ path: 'example.png' });
  await page.pdf({ path: "example.pdf", format: "A4" });

  // NON_ACCREDITED GRADUATE SCENARIO 3 TEST ADD ON

  // Panel I
  await page.type('#sq_213i', 'SLO 2');
  await page.click('.sd-table__row:nth-child(2) > .sd-table__cell:nth-child(2) .sd-selectbase__column:nth-child(1) > .sd-item:nth-child(3) .sd-item__decorator');
  await page.click('.sd-table__row:nth-child(2) > .sd-table__cell:nth-child(3) .sd-item:nth-child(3) .sd-item__decorator');

  // Panel II
  await page.click('#sv-pd-next-btn .sd-action__title');

  // Panel III

  // await page.screenshot({ path: 'example2.png' });
  await page.pdf({ path: "example2.pdf", format: "A4" });

  await browser.close();
})();