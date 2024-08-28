/**********

Model Component
Gets Model options from server & generates select statement

**********/
import {useContext, useState, useEffect} from 'react';
import {endpoint, datatype, proxyFetch} from '../util/Endpoints';
import MySelect from './MySelect'
import VehicleContext from '../VehicleContext';

function Model(){
  const {year, make, changeModel, setErr} = useContext(VehicleContext);
  const [models, setModels] = useState([]);
  
  function handleChange(e){
    const model = e.target.value;
    changeModel(model);
  }
  
  useEffect(() => {
    if (year === "" || make === "") {
      setModels([]);
      return;
    }
    
    proxyFetch(`${endpoint}/models?modelYear=${year}&make=${make}&${datatype}`)
      .then(data => {
        let newModels = [];

        if (data.count === 0) {
          setErr(true);
          return;
        }
      
        for(let i=0; i < data.count; i++) {
          newModels.push(data.results[i].model);
        }

        const models = new Set(newModels);
        newModels = Array.from(models).sort();
      
        setModels(newModels);
      });
  },[year,make]);
  
  return (
    <VehicleContext.Consumer>
      {({model}) => {
        return (
          <MySelect
            value={model}
            onChange={handleChange}
            label="Model"
          >
            <option value=""/>
            {
              models.map((model) =>
                <option value={model.replace('/&/g','_')} key={model}>
                  {model}
                </option>
              )
            }
          </MySelect>
        );
    }}
    </VehicleContext.Consumer>
  );
}

export default Model;
