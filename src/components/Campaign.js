/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import React, {useContext, useEffect, useState} from 'react';
import {Grid, Typography, Card, CardHeader, CardContent, makeStyles}
  from '@material-ui/core';
import {endpoint, datatype} from '../util/Endpoints';
import axios from 'axios-jsonp-pro';
import VehicleContext from '../VehicleContext';

const useStyles = makeStyles({
  root:{
    margin: 0,
    width: '100%'
  },
  card: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
})

function Campaign() {
  const {year, make, model} = useContext(VehicleContext);
  const [campaigns, setCampaigns] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      setCampaigns([]);
      return;
    }

    axios
      .jsonp(endpoint+'/modelyear/'+year+'/make/'+make+'/model/'+model+datatype)
      .then(data => {
        let newCampaigns = data.Results.map(data => {
          // Convert UNIX timestamp (in ms) from Microsoft JSON format
          const d = data.ReportReceivedDate ?
            parseInt(data.ReportReceivedDate.slice(6,-1).split("-")[0]) : 0;
          return {...data, ReportReceivedDate: new Date(d)}
        });
        newCampaigns.sort((a,b) => b.ReportReceivedDate - a.ReportReceivedDate);
      
        setCampaigns(newCampaigns);
      });
  }, [year,make,model]);
  
  function d(date) {
    return date.toDateString().slice(4);
  }
                           
  return (
    <Grid container spacing={4} justify='center' className={classes.root}>
      {
        campaigns.map((campaign) =>
          <Grid item sm={12} md={6}
            key={campaign.NHTSACampaignNumber}
          >
            <Card className={classes.card}>
              <CardHeader
                title={campaign.NHTSACampaignNumber}
                subheader={d(campaign.ReportReceivedDate)}
              >
              </CardHeader>
              <CardContent classes={{root: classes.content}}>
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
