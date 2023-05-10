import logo from './logo.svg';
import { RJSFSchema } from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import FormSelector from './FormSelector'
import { ArrayFieldTitleTemplateProps,ArrayFieldTemplateItemType, titleId, Registry } from "@rjsf/utils";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/**
 * The App component is the top-level component that renders the entire application.
 * @returns Academic Assessment main page with FormSelector body
 */
function App() {
  return (
    <div>
      <div class="page-header" style={{ textAlign: 'center' }}>
        <h1>Academic Assessment</h1>
      </div>
      <FormSelector/>
    </div>
  );
}

export default App;
