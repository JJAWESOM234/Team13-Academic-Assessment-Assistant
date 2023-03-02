# JSON Forms React seed App

This seed demonstrates how to use JSON Forms (https://jsonforms.io) with React in order to render a simple form for displaying the Academic Assessment Assistant.

It is based on `create-react-app` and only contains minor modifications.

- Execute `npm ci` to install the prerequisites. If you want to have the latest released versions use `npm install`.
- Execute `npm start` to start the application.

Browse to http://localhost:3000 to see the application in action.

## File Structure

- `src/schema.json` contains the JSON schema
- `src/index.tsx` is the entry point of the application. We also customize the Material UI theme to give each control more space.
- `src/App.tsx` is the main app component and makes use of the `JsonForms` component in order to render a form.


The [corresponding UI schema](src/uischema.json) specifies controls for each property and puts them into a vertical layout that in turn contains two horizontal layouts. //NOT YET INCLUDED IN THIS VERSION

## Rendering JSON Forms

JSON Forms is rendered by importing and using the `JsonForms` component and directly handing over the `schema`, `uischema`, `data`, `renderer` and `cell` props. We listen to changes in the form via the `onChange` callback.

## Release Notes 3/1/2023

This release only displays a default rendering of the schema.json. It does not yet have dynamic implementations or a uischema.json file to modify formating. 
