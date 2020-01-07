import React, {useState} from 'react';
import Year from './Year';
import Make from './Make';
import Model from './Model';
import Campaign from './Campaign';
import VehicleContext from './VehicleContext';

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
    <VehicleContext.Provider value={context}>
      <div>
        <h1>NHTSA Recall Datatbase</h1>
        <div className="selectBox">
          <Year/>
          <Make/>
          <Model/>
        </div>
        <Campaign/>
      </div>
    </VehicleContext.Provider>
  );
}

export default App;
