# React-JsonSchema-Form Application

This is a basic application that displays a form selector page for the four assessment report forms.

The user first selects one of the forms by clicking on a button on the side of the page. The user then inputs information into the form. On submission, a JSON string of the user's form data is displayed back to them in a browser alert.

# How To Use The Application

1. Clone the react-jsonschema-form folder
2. cd react-jsonschema-form
3. npm install
4. npm start
5. Application will run on browser at localhost:3000

# Release Notes

## Milestone 3

The application displays a main page where users can select from four assessment forms. Users can input information,
add and subtract SLO entries, assessment methods, decisions and actions, and data collection objects. FormData is displayed
at the bottom of the page while user inputs information. There is a dynamic relationship between the number of SLOs and 
the number of Decisions and Actions. On submitting the form, the user's input as a JSON string will be displayed in a browser alert. 

### Testing
Located in the react-jsonschema-form-test directory is the testing suite for this application. The puppeteer test runs through
four different scenarios of the rjsf Non-Acc Graduate Assessment.
