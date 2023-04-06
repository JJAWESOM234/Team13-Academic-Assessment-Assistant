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

  function clickMe() {
    alert(stringifiedData);
    console.log(stringifiedData);
  }

  function updatearraysize() {
    data.AccreditedGraduate.assessmentMethods.assessmentMeasure.length=data.AccreditedGraduate.studentLearningOutcomes.programSLOs.length;
    data.AccreditedGraduate.decisionsAndActions.decisionOrAction.length=data.AccreditedGraduate.studentLearningOutcomes.programSLOs.length;
    data.AccreditedGraduate.dataCollection.dataSLOStatusTable.length=data.AccreditedGraduate.studentLearningOutcomes.programSLOs.length;
  }

  return (
    <Fragment>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to JSON Forms with React</h1>
          <p className='App-intro'>More Forms. Less Code.</p>
        </header>
      </div>

      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        className={classes.container}
      >
        {/*
        <Grid item sm={6}>
          <Typography variant={'h4'} className={classes.title}>
            Bound data
          </Typography>
          <div className={classes.dataContent}>
            <pre id='boundData'>{stringifiedData}</pre>
          </div>
          <Button
            className={classes.resetButton}
            onClick={clearData}
            color='primary'
            variant='contained'
          >
            Clear data
          </Button>
        </Grid>
  */}
        <Grid item sm={10}>
          <Typography variant={'h4'} className={classes.title}>
            Academic Assesment Assistant
          </Typography>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => {setData(data); console.log(data); updatearraysize();}}
            />
          </div>
          <div>
            <Button onClick={clickMe}>Submit Form</Button>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default App;