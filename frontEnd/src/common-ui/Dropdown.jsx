import * as React from 'react';
import Select from '@mui/material/Select';
import { FormControl,MenuItem } from '@mui/material';

export default function Dropdown({list,name,value,inputProps,onChange,helperText,error,onBlur,touched,plh,...props}) {
  return (
      <FormControl fullWidth>
       <Select name={name} 
       onChange={onChange}
       {...props}
        value={value || ""} onBlur={onBlur}
        helperText={helperText} error={error} touched={touched} >
        <MenuItem value="" disabled>
          {plh || 'Select'}
        </MenuItem>
        {list}  
      </Select>
      {error && (
        <p style={{
          color: '#d32f2f',
          fontFamily:'Roboto,Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '0.75rem',
          lineHeight: '1.66',
          letterSpacing: '0.03333em',
          textAlign: 'left',
          marginTop: '4px',
          marginRight: '14px',
          marginLeft: '14px',
          marginBottom:'0',
        }}>{helperText}</p>
      )}
      </FormControl>
  );
}
