/**********

Make Component
Gets make data from server & generates select statement

**********/
import React from 'react';
import {endpoint, datatype} from './util/Endpoints';
import $ from 'jquery';

class Make extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      year: "",
      makes : []
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    const make = e.target.value;
    this.props.onChange(make);
  }
  
  componentDidUpdate(){
    const {year} = this.props;
    const {isLoaded} = this.state;
    if((isLoaded && (year === this.state.year)) || (year.length === 0)) return;

    var self = this;
    var xhr = $.ajax({ url: endpoint+'/modelyear/'+year+datatype,
                       dataType: 'jsonp'
                    });
    xhr.done( function(data) {
      var newMakes = [];
      
      for(var i=0; i < data.Count; i++) {
        newMakes.push(data.Results[i].Make);
      }
      
      self.setState({ isLoaded: true, makes : newMakes, year: data.Results[0].ModelYear });
    });
  }
  
  render() {
    const {makes, year, isLoaded} = this.state;
 
    return (
      <div className='selectdiv' id='make'>
        <select
          defaultValue=""
          onChange={this.handleChange}>
        
          <option value="">Make:</option>
          {
            (isLoaded &&(this.props.year ===year)) ? 
              makes.map((make) =>
                <option value={make.replace('/&/g','_')} key={make}>
                  {make}
                </option>
              ) : ""
          }
        </select>
      </div>
    );
  } 
}

export default Make;
