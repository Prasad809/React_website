
import { Box, Button, Checkbox, FormControl, Grid, Grid2, Modal } from "@mui/material";

import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { registerInitial, registerValidate } from "./validationSchema";
import Textfield from "../../common-ui/Textfield";
import { useDispatch } from "react-redux";
import { userRegistrationAction } from "../../Redux/Actions";
import { useState } from "react";
import AlertMsg from "../../common-ui/AlertBox";
import ButtonThemes from "../../common-ui/ButtonThemes";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    height: '85%',
    overflowY: 'auto',
    border: '1px solid #000',
    boxShadow: 24,
};

function UserRegisteration() {
    const [open,setOpen]=useState(false)
    const [errStatus,setErrStatus]=useState('')
    const errClose=(str)=>setErrStatus('')
    const dispatch=useDispatch()
    const handleSubmit = (value) => {
        dispatch(userRegistrationAction(value)).then((res)=>{
            if(res.payload.data.status === 'success'){
                setOpen(true)
            }else{
                setErrStatus(res.payload.data.message)
            }
        })
    }
    return (
            <Container>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 shadow-sm p-3 mb-2 bg-body-tertiary rounded">
                    <AlertMsg errClose={errClose} errStatus={errStatus} severity={'error'}/>
                <Formik initialValues={registerInitial} validationSchema={registerValidate} onSubmit={(data) => { handleSubmit(data) }}>
                    {({ touched, errors, values, handleChange, handleBlur,handleReset }) => (
                        <Form autoComplete={0} >
                            <h2 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">SIGNUP PAGE</h2>
                            <Grid2>
                            <Grid item sm={4} mb={3}>
                                <FormControl fullWidth>
                                <label>UserName</label>
                                    <Textfield name='userName' value={values.userName}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.userName && Boolean(errors.userName)}
                                        helperText={touched.userName && errors.userName}
                                        plh={'Enter UserName'} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3}>
                                <FormControl fullWidth>
                                    <label>User Email</label>
                                    <Textfield name='email' value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        plh={'Enter Email Address'} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3}>
                                <FormControl fullWidth>
                                    <label>Password</label>
                                    <Textfield type='password'
                                        name='password' value={values.password}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        plh={"Enter Password"} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3} mr={2}>
                            <FormControl fullWidth>
                                    <ButtonThemes name={'submit'} typ={'submit'} clr={'contained'}/>
                            </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3} mr={2}>
                            <FormControl fullWidth>
                                    <ButtonThemes name={'cancel'} clr={'outlined'} funcname={handleReset}/>
                            </FormControl>
                            </Grid>
                            <span>Do You have Account Already ?</span><Link to={'/'}>SignIn</Link>
                        </Grid2>
                        </Form>
                    )}
                </Formik>
                    </div>
                    <div className="col-4">
                        <Modal open={open} onClose={()=>setOpen(false)}>
                            <Box sx={style}>
                                <span>Success</span>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </Container>
    )
}
export default UserRegisteration





