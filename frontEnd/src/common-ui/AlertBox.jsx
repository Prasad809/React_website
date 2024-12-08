import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

export function AlertMsg({errStatus, errClose,severity, errdt, sx}) {
  const [open, setOpen] = useState(false); 
    const [msg, setMsg] = useState('');
    const close = () =>{
        setOpen(false);
        setMsg('');
        errClose('');        
    };    
    useEffect(() => {        
        if(errStatus!==""){
            setOpen(true);
            setMsg(errStatus);
            setTimeout(()=>{
                close()
            },5000)
        }else{
            setOpen(false);
            setMsg('');
        }
    }, [errStatus, errdt])

    return (
        <Collapse in={open}><Alert onClose={() => {close()}} severity={severity} sx={sx}>
            {msg}
        </Alert></Collapse>
    );    

}
export default AlertMsg;