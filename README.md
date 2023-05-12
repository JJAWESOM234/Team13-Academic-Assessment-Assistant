# Academic-Assessment-Assistant

The purpose of this project is to explore various form auto generation libraries.
These libraries are:
  - [JSON Forms](https://jsonforms.io/)
  - [SurveyJS](https://surveyjs.io/)
  - [jQuery JSON Form](https://plugins.jquery.com/jsForm/)
  - [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/)

Each library has a separate application in this repo.
  
## How To Use It

To use the applications, clone the entire repository. Follow the instructions of the README.md of 
each project in order to run them.

## Release Notes

### Milestone 1
Each application takes a JSON schema for the Non-Accredited Graduate Assessment report and uses the
respesctive library to auto generate a form. On completing the form, the applications output the user's input as a JSON string.

Each application besides JSON Forms(React) allows users to add and subtract SLO entries, assessment methods, etc.

### Milestone 2
Each application now reads a JSON schema for each of the four assessment reports and auto generates the respective forms.
Each application allows users to add and subtract SLO entries, assessment methods, etc.
Users can easily switch between forms, enter information, and receive that form's output back to them on submitting the form.

### Milestone 3
Each application implements web automation testing via the puppeteer JavaScript library. Various scenarios for user actions are 
tested and pdfs of the scenarios are created. Eventually QUnit testing will also be included to compare automated results to expected results.
  
### Milestone 4
All four applications represent a near fully realized representation of the assessment report forms within the respective auto generation libraries.
There is now an deep understanding of how the Academic Assessment Assistant application would appear if it were to adopt the use of any of these libraries. 
Beyond this, automated web tools have also been utilized to record test cases and watch various user scenarios.

### Milestone 5
This milestone represents the most complete versions of each application. We have utilized the four form auto generation libraries to bring to replicate the design of each assessment report template. Each application has dynamic relationships between form sections. Each application has been tested using web automation. A variety of features have been implemented throughout the appllications:
  - Tracking SLO Names
  - Preserving entered information upon form switch
  - Tabbed SLO structure
