/**********

Campaign Component
Gets campaign data from server & displays it

**********/
import {useContext, useEffect, useState} from 'react';
import {Grid, Typography, Card, CardHeader, CardContent} from '@mui/material';
import {recallEndpoint, proxyFetch} from '../util/Endpoints';
import VehicleContext from '../VehicleContext';

function Campaign() {
  const {year, make, model, err, setErr} = useContext(VehicleContext);
  const [campaigns, setCampaigns] = useState([]);
  const [failMod, setFailMod] = useState("");
  
  useEffect(() => {
    if (year === "" || make === "" || model === "") {
      // Clear list on reset
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCampaigns([]);
      setFailMod("");
      return;
    }

    const adjMod = failMod === model ? failMod.split(" ")[0] : model;
    
    proxyFetch(`${recallEndpoint}/?modelYear=${year}&make=${make}&model=${adjMod}`)
    .then(data => {
      let newCampaigns = [];

      if (data.Count == 0) {
        if (model.includes(" ") && !err) {
          setFailMod(model);
          return;
        }
        setErr(true);
        setFailMod("");
        return;
      }

      for(let i=0; i < data.Count; i++) {
        newCampaigns.push(data.results[i]);
      }

      newCampaigns = newCampaigns.map(data => {
        const d = data.ReportReceivedDate.split('/');
        return {...data, ReportReceivedDate: new Date(`${d[1]}/${d[0]}/${d[2]}`)}
      });
      newCampaigns.sort((a,b) => b.ReportReceivedDate - a.ReportReceivedDate);
      
      setCampaigns(newCampaigns);
    })
    .catch(e => setErr(true));
  }, [year,make,model,failMod,err,setErr]);
  
  function d(date) {
    return date.toDateString().slice(4);
  }
  
  return (
    (<Grid container justifyContent='center' spacing={2}>
      { err ?
        <Grid
          sx={{padding: '16px'}}
          size={{
            sm: 12,
            md: 6
          }}>
          <Card>
            <CardContent >
              <Typography variant="body1" align="center">
                No Data Returned
              </Typography>
              <Typography variant="body1" align="center">
                Either no recalls or API failure
              </Typography>
            </CardContent>
          </Card>
        </Grid> :
        campaigns.map((campaign) =>
          <Grid
            key={campaign.NHTSACampaignNumber}
            size={{
              sm: 12,
              md: 6
            }}>
            <Card sx={{height: '100%'}}>
              <CardHeader
                title={campaign.NHTSACampaignNumber}
                subheader={d(campaign.ReportReceivedDate)}
              >
              </CardHeader>
              <CardContent sx={{height: '100%'}}>
                <Typography variant="body2" sx={{marginBottom: '1em'}}>
                  {campaign.Summary}
                </Typography>
                <Typography variant="body2"  sx={{marginBottom: '1em'}}>
                  {campaign.Consequence}
                </Typography>
                <Typography variant="body2">
                  {campaign.Remedy}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }
    </Grid>)
  );
}

export default Campaign;
