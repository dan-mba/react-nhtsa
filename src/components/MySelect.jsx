/*
  MySelect Component
  Common select component for consistency
*/
import React from 'react';
import {NativeSelect, FormControl, InputLabel} from '@mui/material';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledSelect = styled(NativeSelect)({
  lineHeight: '1.1876em',
  '& .MuiInput-input': {
    padding: '6px 0 7px'
  },
  '& select.MuiNativeSelect-select.MuiNativeSelect-outlined': {
    paddingRight: '24px',
    height: '1.1875em'
  },
  '& .MuiSvgIcon-root': {
    right: 0
  }
});

export default function MySelect({children, label, value, onChange}) {
  return (
    <FormControl sx={{width: '100%', lineHeight: 1.43}}>
      <InputLabel htmlFor={label} sx={{
        lineHeight: 1,
        transform: 'translate(0, 24px) scale(1)',
        '&.Mui-focused, &.MuiFormLabel-filled':{
          transform: 'translate(0, 1.5px) scale(0.75)',
        }
      }}>
        {label}
      </InputLabel>
      {value ? 
        <StyledSelect
          value={value} 
          inputProps={{
            name: label,
            id: label
          }}
          onChange={onChange}
        >
          {children}
        </StyledSelect> : 
        <StyledSelect
          inputProps={{
            name: label,
            id: label
          }}
          onChange={onChange}
        >
          {children}
        </StyledSelect>
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
