/**********

Year Component
Gets year data from server & generates select statement

**********/
import React from 'react';
import {endpoint, datatype} from './util/Endpoints';
import $ from 'jquery';

class Year extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      years : []
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    const year = e.target.value;
    this.props.onChange(year);
    $("select").blur();
  }
  
  componentDidMount(){
    var xhr = $.ajax({ url: endpoint+datatype,
                       dataType: 'jsonp'
                    });
    xhr.done( function(data) {
      var newYears = [];
      
      /* Start at 1 because the value at Results[0] is erroneus */
      for(var i=1; i < data.Count; i++) {
        newYears.push(data.Results[i].ModelYear);
      }
      
      this.setState({ isLoaded: true, years : newYears });
    }.bind(this));
  }
  
  render() {
    const {isLoaded, years} = this.state;
    
    return (
      <div className='selectdiv' id='year'>
        <select onChange={this.handleChange}>
          <option value="">Year:</option>
          {
            isLoaded ?
              years.map((year) =>
                <option value={year} key={year.toString()}>
                  {year}
                </option>
              ) : ""
          }
        </select>
      </div>
    );
  } 
}

export default Year;
