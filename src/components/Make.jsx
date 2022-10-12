/**********

Make Component
Gets make data from server & generates select statement

**********/
import {useEffect, useState, useContext} from 'react';
import {endpoint, datatype, proxyFetch} from '../util/Endpoints';
import MySelect from './MySelect';
import VehicleContext from '../VehicleContext';

function Make() {
  const {year, changeMake} = useContext(VehicleContext);
  const [makes, setMakes] = useState([]);
    
  function handleChange(e){
    const make = e.target.value;
    changeMake(make);
  }
  
  useEffect(() => {
    if(year === "") return;
    proxyFetch(endpoint+'/modelyear/'+year+datatype)
      .then( data => {
        let newMakes = [];
      
        for(let i=0; i < data.Count; i++) {
          newMakes.push(data.Results[i].Make);
        }
      
        setMakes(newMakes);
      });
  }, [year]);
  
  return (
    <VehicleContext.Consumer>
      {({make}) => {
        return (
          <MySelect
            value={make}
            label="Make"
            onChange={handleChange}
          >
            <option value=""/>
            {
              makes.map((make) =>
                <option value={make.replace('/&/g','_')} key={make}>
                  {make}
                </option>
              )
            }
          </MySelect>
        )
      }}
    </VehicleContext.Consumer>
  );

}

export default Make;
