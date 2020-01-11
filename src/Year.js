/**********

Year Component
Gets year data from server & generates select statement

**********/
import React, {useContext, useEffect, useState} from 'react';
import {endpoint, datatype} from './util/Endpoints';
import axios from 'axios-jsonp-pro';
import VehicleContext from './VehicleContext';

function Year() {
  const {changeYear} = useContext(VehicleContext);
  const [years, setYears] = useState([]);
  
  
  function handleChange(e){
    const year = e.target.value;
    changeYear(year);
  }
  
  useEffect(() => {
    if(years.length) return;
    axios
      .jsonp(endpoint+datatype)
      .then( data => {
        let newYears = [];
      
        /* Start at 1 because the value at Results[0] is erroneus */
        for (let i=1; i < data.Count; i++) {
          newYears.push(data.Results[i].ModelYear);
        }
      
        setYears(newYears);
      });
  });
  
  return (
    <div className='selectdiv' id='year'>
      <select onChange={handleChange}>
        <option value="">Year:</option>
        {
          years.map((year) =>
            <option value={year} key={year.toString()}>
              {year}
            </option>
          )
        }
      </select>
    </div>
  );
}

export default Year;
