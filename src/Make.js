/**********

Make Component
Gets make data from server & generates select statement

**********/
import React, {useEffect, useState, useContext} from 'react';
import {endpoint, datatype} from './util/Endpoints';
import axios from 'axios-jsonp-pro';
import VehicleContext from './VehicleContext';

function Make() {
  const {year, changeMake} = useContext(VehicleContext);
  const [makes, setMakes] = useState([]);
    
  function handleChange(e){
    const make = e.target.value;
    changeMake(make);
  }
  
  useEffect(() => {
    if(year === "") return;
    axios
      .jsonp(endpoint+'/modelyear/'+year+datatype)
      .then( data => {
        let newMakes = [];
      
        for(let i=0; i < data.Count; i++) {
          newMakes.push(data.Results[i].Make);
        }
      
        setMakes(newMakes);
      });
  }, [year]);
  
  return (
    <div className='selectdiv' id='make'>
      <VehicleContext.Consumer>
        {({make}) => {
          return (
            <select
              value={make}
              onChange={handleChange}
            >
              <option value="">Make:</option>
              {
                makes.map((make) =>
                  <option value={make.replace('/&/g','_')} key={make}>
                    {make}
                  </option>
                )
              }
            </select>
          )
        }}
      </VehicleContext.Consumer>
    </div>
  );

}

export default Make;
