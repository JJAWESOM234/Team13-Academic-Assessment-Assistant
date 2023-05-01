import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';

import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import { makeStyles } from '@mui/styles';
import MyGroupRenderer, { myGroupTester } from './MyGroup';
import { update } from '@jsonforms/core';

const useStyles = makeStyles({
  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
});


const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
  { tester: myGroupTester, renderer: MyGroupRenderer },
];

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>();
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);



  const clearData = () => {
    setData({});
  };

//print form data to log
  function clickMe() {
    console.log(stringifiedData);
  }
  
//update form array sizes for dynamic features
  function updatearraysize(data: any) {
    var numofSlo:number = data.AccreditedGraduate.studentLearningOutcomes.programSLOs.length;
    var newdata = data;
    
    if (data.AccreditedGraduate.assessmentMethods.assessmentMeasure.length !== numofSlo)
    {
    newdata.AccreditedGraduate.assessmentMethods.assessmentMeasure.length=numofSlo;
    newdata.AccreditedGraduate.decisionsAndActions.decisionOrAction.length=numofSlo;
    newdata.AccreditedGraduate.dataCollection.dataSLOStatusTable.length=numofSlo;
      setData(newdata);
    }
    else
    {
      setData(data);
    }

  }

  return (
    <Fragment>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Academic Assesment Assistant</h1>
        </header>
      </div>

      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={10}>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => {updatearraysize(data); console.log(data); }}
            />
          </div>
          <div>
            <Button onClick={clickMe}>Submit Form</Button>
            <Button onClick={clearData}>Clear Data</Button>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default App;
