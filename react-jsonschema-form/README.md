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

## Milestone 4

This version of the react-jsonschema-form application represents what is likely the final design of the four forms.
There is a dynamic relationship between the number of SLOs and the number of Decisions and Actions.
There is also a dynamic relationship between the number of SLOs and the assessment measures (AMs). For each SLO, there is an AM array of any length.
The data results table has a dynamic relationship with the number of AM arrays, where the minimum number of data results is set to the number of AM arrays.
The SLO status table has a one to one relationship with the number of SLOs.
On submitting the form, the user's input as a JSON string will be displayed in a browser alert. 

