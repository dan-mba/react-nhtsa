/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import React, {useContext, useEffect, useState} from 'react';
import {endpoint, datatype} from './util/Endpoints';
import axios from 'axios-jsonp-pro';
import VehicleContext from './VehicleContext';

function Campaign() {
  const {year, make, model} = useContext(VehicleContext);
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      setCampaigns([]);
      return;
    }

    axios
      .jsonp(endpoint+'/modelyear/'+year+'/make/'+make+'/model/'+model+datatype)
      .then(data => {
        let newCampaigns = [...data.Results];
      
        setCampaigns(newCampaigns);
      });
  }, [year,make,model]);
  
  function d(date) {
    if (!date) return "";
    let newDate = new Date(parseInt(date.substr(6)));
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
