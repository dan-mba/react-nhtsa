/**********

Year Component
Gets year data from server & generates select statement

**********/
import {useContext, useEffect, useState} from 'react';
import {endpoint, datatype, proxyFetch} from '../util/Endpoints';
import MySelect from './MySelect'
import VehicleContext from '../VehicleContext';

function Year() {
  const {changeYear} = useContext(VehicleContext);
  const [years, setYears] = useState([]);
  
  
  function handleChange(e){
    const year = e.target.value;
    changeYear(year);
  }
  
  useEffect(() => {
    proxyFetch(endpoint+'/modelYears?'+datatype)
      .then( data => {
        let newYears = [];
      
        for (let i=0; i < data.count-1; i++) {
          newYears.push(data.results[i].modelYear);
        }
        newYears.sort((a,b) => (b-a))
      
        setYears(newYears);
      });
  },[]);
  
  return (
    <MySelect label='Year' onChange={handleChange}>
      <option value=""/>
      {
        years.map((year) =>
          <option value={year} key={year.toString()}>
            {year}
          </option>
        )
      }
    </MySelect>
  );
}

export default Year;
