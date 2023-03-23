# Academic-Assessment-Assistant
## About 
This library aims to implement form autogeneration using the jQuery library "jsonform". More specificlly this implmementation aims to distinguish itself from the other libraries we are testing to identify its advantages and disavatages when generating dynamic forms. Refer to `Team13-Academic-Assessment-Assistant/README.md` for more information about the porject as a whole. 

## Installation Steps
1. Download this repository as a ZIP file from github.
2. Unzip the file into any desired folder.
3. Open VS Code and use the "Open Folder" option under "File."
4. In the folder selection window navigate to the install directory and select this folder `json-forms-jquery/`
5. Open the VS console and run `npm install` to get the required packages.

## Use 
The applications as of now is a simple html form that is generated using the library. To use this application you just need to run the index.html file on the server, this can be done using VS code. VS code will start the server and display the html elements which have been modified by the form generation library. To modify the displayed form you must change the json model that is being read in `controller.js`. Note: the JSON model must be updated with valid objects conforming to the jsonform library. 

## Release Notes
### Milestone 2
The program now has the ability to display all four forms and can track the number of SLO created in real time. Additionally, this iteration of the forms uses tabarrays isntead of the usual arrays which removes some clutter and makes the form shorter. 

### Milestone 1 
The code when executed runs the website which displays the Non-accredidted Gradutate form and returns any input values in an easy to use object.

## Dependencies 
[Json Forms (JQuery) Library](https://github.com/jsonform/jsonform)
