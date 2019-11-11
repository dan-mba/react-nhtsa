/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import React from 'react';
import {endpoint, datatype} from './util/Endpoints';
import $ from 'jquery';

class Campaign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      year: "",
      make: "",
      model: "",
      campaigns : []
    };
  }
  
  componentDidUpdate(){
    const year = this.props.year;
    const make = this.props.make;
    const model = this.props.model;
    
    if(this.state.isLoaded && (year === this.state.year) && (make === this.state.make) && (model === this.state.model)) return;
    if((year.length === 0) || (make.length === 0) || (model.length === 0)) {
      if(this.state.isLoaded) this.setState({ isLoaded: false, campaigns: [], make: "", model: "", year: ""});
      return;
    }
    
    var self = this;
    var xhr = $.ajax({ url: endpoint+'/modelyear/'+year+'/make/'+make+'/model/'+model+datatype,
                       dataType: 'jsonp',
                       year: year,
                       make: make,
                       model: model
                    });
    xhr.done( function(data) {
      var newCampaigns = data.Results;
      
      self.setState({ isLoaded: true, campaigns : newCampaigns, year: this.year, make: this.make, model: this.model });
    });
  }
  
  render() {
    var campaigns = [];
    var d = function(date) {
      var newDate = new Date(parseInt(date.substr(6)));
      return newDate.toString().split(" ").slice(0,4).join(" ");
    }
                             
    const bStyle = {fontWeight: 'bold'};
    const tStyle = {fontWeight: 'bold', textAlign: 'center'};
    if(this.state.campaigns.length) {
      campaigns = this.state.campaigns.map((campaign) =>
        <div key={campaign.NHTSACampaignNumber} className='campaign'>
          <div><span style={bStyle}>Campaign Number</span>: {campaign.NHTSACampaignNumber}</div>
          <div><span style={bStyle}>Report Received Date</span>: {d(campaign.ReportReceivedDate)}</div>
          <div><div style={tStyle}>Summary</div>{campaign.Summary}</div>
          <div><div style={tStyle}>Problem</div>{campaign.Conequence}</div>
          <div><div style={tStyle}>Remedy</div>{campaign.Remedy}</div>
        </div>
      );
    }
                                           
    return (
      <div className="campaignBox">
        {campaigns}
      </div>
    );
  } 
}

export default Campaign;
