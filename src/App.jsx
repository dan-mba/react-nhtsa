import {useState} from 'react';
import { ThemeProvider, StyledEngineProvider, CssBaseline, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';
import Campaign from './components/Campaign';
import VehicleContext from './VehicleContext';
import theme from './util/Theme'

function App() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [err, setErr] = useState(false);


  function changeYear(year) {
    setYear(year);
    setMake("");
    setModel("");
    setErr(false);
  }

  function changeMake(make){
    setMake(make);
    setModel("");
    setErr(false);
  }

  function changeModel(model){
    setModel(model);
    setErr(false);
  }

  const context = {
    year,
    changeYear,
    make,
    changeMake,
    model,
    changeModel,
    err,
    setErr
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
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
        </>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
