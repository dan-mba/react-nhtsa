/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import {useContext, useEffect, useState} from 'react';
import {Grid, Typography, Card, CardHeader, CardContent} from '@mui/material';
import {recallEndpoint, datatype, proxyFetch} from '../util/Endpoints';
import VehicleContext from '../VehicleContext';

function Campaign() {
  const {year, make, model} = useContext(VehicleContext);
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      setCampaigns([]);
      return;
    }
    
    proxyFetch(`${recallEndpoint}/?modelYear=${year}&make=${make}&model=${model}&${datatype}`)
    .then(data => {
      let newCampaigns = [];
      
      for(let i=0; i < data.Count; i++) {
        newCampaigns.push(data.results[i]);
      }

      newCampaigns = newCampaigns.map(data => {
        const d = data.ReportReceivedDate.split('/');
        return {...data, ReportReceivedDate: new Date(`${d[1]}/${d[0]}/${d[2]}`)}
      });
      newCampaigns.sort((a,b) => b.ReportReceivedDate - a.ReportReceivedDate);
      
      setCampaigns(newCampaigns);
    });
  }, [year,make,model]);
  
  function d(date) {
    return date.toDateString().slice(4);
  }
  
  return (
    <Grid container justifyContent='center' sx={{
      margin: 0,
      width: '100%'

    }}>
      {
        campaigns.map((campaign) =>
          <Grid item sm={12} md={6}
            sx={{padding: '16px'}}
            key={campaign.NHTSACampaignNumber}
          >
            <Card sx={{height: '100%'}}>
              <CardHeader
                title={campaign.NHTSACampaignNumber}
                subheader={d(campaign.ReportReceivedDate)}
              >
              </CardHeader>
              <CardContent sx={{height: '100%'}}>
                <Typography variant="body2" paragraph>
                  {campaign.Summary}
                </Typography>
                <Typography variant="body2" paragraph>
                  {campaign.Conequence}
                </Typography>
                <Typography variant="body2" paragraph>
                  {campaign.Remedy}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }
    </Grid>
  );
}

export default Campaign;
