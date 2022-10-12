/**********

Model Component
Gets Model options from server & generates select statement

**********/
import {useContext, useState, useEffect} from 'react';
import {endpoint, datatype, proxyFetch} from '../util/Endpoints';
import MySelect from './MySelect'
import VehicleContext from '../VehicleContext';

function Model(){
  const {year, make, changeModel} = useContext(VehicleContext);
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
    
    proxyFetch(endpoint+'/modelyear/'+year+'/make/'+make+datatype)
      .then( data => {
        let newModels = [];
      
        for(let i=0; i < data.Count; i++) {
          newModels.push(data.Results[i].Model);
        }
      
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
