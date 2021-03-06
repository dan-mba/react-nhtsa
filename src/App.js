import React, {useState} from 'react';
import {ThemeProvider, CssBaseline, Typography} from '@material-ui/core';
import SelectBox from './components/SelectBox';
import Campaign from './components/Campaign';
import VehicleContext from './VehicleContext';
import theme from './util/Theme'

function App() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");


  function changeYear(year) {
    setYear(year);
    setMake("");
    setModel("");
  }

  function changeMake(make){
    setMake(make);
    setModel("");
  }

  const context = {
    year,
    changeYear,
    make,
    changeMake,
    model,
    changeModel: setModel
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <VehicleContext.Provider value={context}>
          <Typography
            align='center'
            color='secondary'
            variant='h4'
            gutterBottom
          >NHTSA Recall Database</Typography>
          <SelectBox/>
          <Campaign/>
        </VehicleContext.Provider>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
