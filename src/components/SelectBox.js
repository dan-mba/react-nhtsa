/*
  SelectBox Component
  Groups the Year, Make, & Model components in a responsive way
*/
import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import Year from './Year';
import Model from './Model';
import Make from './Make';

const useStyles = makeStyles({
  root: {
    margin: '0 0 16px',
    width: '100%'
  }
})

function SelectBox() {
  const classes = useStyles(); 

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={4} md={2}>
        <Year/>
      </Grid>
      <Grid item xs={8} md={4}>
        <Make/>
      </Grid>
      <Grid item xs={8} md={6}>
        <Model/>
      </Grid>
    </Grid>
  );
}

export default SelectBox;
