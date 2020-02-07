/*
  MySelect Component
  Common select component for consistency
*/
import React from 'react';
import {NativeSelect, FormControl, InputLabel, makeStyles}
  from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root:{
    width: '100%'
  }
})

export default function MySelect({children, label, value, onChange}) {
  const classes = useStyles();

  return (
    <FormControl classes={{root: classes.root}}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      {value ? 
        <NativeSelect
          value={value} 
          inputProps={{
            name: label,
            id: label
          }}
          onChange={onChange}
        >
          {children}
        </NativeSelect> : 
        <NativeSelect
          inputProps={{
            name: label,
            id: label
          }}
          onChange={onChange}
        >
          {children}
        </NativeSelect>
      }
    </FormControl>
    )
}

MySelect.propTypes = {
  children: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
