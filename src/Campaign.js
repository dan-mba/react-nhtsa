/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import React, {useContext, useEffect, useState} from 'react';
import {endpoint, datatype} from './util/Endpoints';
import $ from 'jquery';
import VehicleContext from './VehicleContext';

function Campaign() {
  const {year, make, model} = useContext(VehicleContext);
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      setCampaigns([]);
      return;
    }

    var xhr = $.ajax({ url: endpoint+'/modelyear/'+year+'/make/'+make+'/model/'+model+datatype,
                       dataType: 'jsonp',
                       year: year,
                       make: make,
                       model: model
                    });
    xhr.done( function(data) {
      var newCampaigns = [...data.Results];
      
      setCampaigns(newCampaigns);
    });
  }, [year,make,model]);
  
  function d(date) {
    if (!date) return "";
    var newDate = new Date(parseInt(date.substr(6)));
    return newDate.toString().split(" ").slice(0,4).join(" ");
  }
                           
  const bStyle = {fontWeight: 'bold'};
  const tStyle = {fontWeight: 'bold', textAlign: 'center'};
  
  return (
    <div className="campaignBox">
      {
        campaigns.map((campaign) =>
          <div key={campaign.NHTSACampaignNumber} className='campaign'>
            <div><span style={bStyle}>Campaign Number</span>: {campaign.NHTSACampaignNumber}</div>
            <div><span style={bStyle}>Report Received Date</span>: {d(campaign.ReportReceivedDate)}</div>
            <div><div style={tStyle}>Summary</div>{campaign.Summary}</div>
            <div><div style={tStyle}>Problem</div>{campaign.Conequence}</div>
            <div><div style={tStyle}>Remedy</div>{campaign.Remedy}</div>
          </div>
        )
      }
    </div>
  );
}

export default Campaign;
