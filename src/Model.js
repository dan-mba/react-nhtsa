/**********

Model Component
Gets Model options from server & generates select statement

**********/
import React from 'react';
import {endpoint, datatype} from './util/Endpoints';
import $ from 'jquery';

class Model extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      year: "",
      make: "",
      models : []
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    const model = e.target.value;
    this.props.onChange(model);
    $("select").blur();
  }
  
  componentDidUpdate(){
    const {year, make} = this.props;
    const {isLoaded} = this.state
    
    if((isLoaded && (year === this.state.year) && (make === this.state.make)) || 
      (year.length === 0) || (make.length === 0)) return;
    
    var self = this;
    var xhr = $.ajax({ url: endpoint+'/modelyear/'+year+'/make/'+make+datatype,
                       dataType: 'jsonp',
                       year: year,
                       make: make
                    });
    xhr.done( function(data) {
      var newModels = [];
      
      for(var i=0; i < data.Count; i++) {
        newModels.push(data.Results[i].Model);
      }
      
      self.setState({ isLoaded: true, models : newModels, year: this.year, make: this.make });
    });
  }
  
  render() {
    const {models, year, make, isLoaded} = this.state;

    return (
      <div className='selectdiv' id='model'>
        <select
          defaultValue=""
          onChange={this.handleChange}>
        
          <option value="">Model:</option>
          {
            (isLoaded && (this.props.year === year) && (this.props.make === make)) ? 
              models.map((model) =>
                <option value={model.replace('/&/g','_')} key={model}>
                  {model}
                </option>
              ) : ""
          }
        </select>
      </div>
    );
  } 
}

export default Model;
