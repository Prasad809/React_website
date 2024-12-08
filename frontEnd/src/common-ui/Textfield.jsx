import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Textfield({plh,style,name,...props}) {
  return (
      <TextField fullWidth name={name} placeholder={plh} {...props} style={style}/>
  );
}
