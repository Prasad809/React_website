
import { FormControl, Grid } from "@mui/material";

import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { signInInitial, signInValidate } from "./validationSchema";
import Textfield from "../../common-ui/Textfield";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../Redux/Actions";
import AlertMsg from "../../common-ui/AlertBox";
import { useState } from "react";
import ButtonThemes from "../../common-ui/ButtonThemes";
import Token from "../../Redux/Token";



function UserSignIn() {
    const navigate = useNavigate() 
    const [errStatus,setErrStatus]=useState('')
    const errClose=(str)=>setErrStatus('')
    const dispatch = useDispatch()
    const handleSubmit = (value) => {
        dispatch(userLoginAction(value)).then((res) => {
            if(res.payload.data.message === 'LogIn Success'){
                Token.setUser(value)
                navigate('/dashboard')
            }else{
                setErrStatus(res.payload.data.message)
            }
        })
    }
    return (
        <Container>
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4 shadow-sm p-3 mb-2 bg-body-tertiary rounded">
                    <AlertMsg errClose={errClose} errStatus={errStatus} severity={'error'}/>
                    <Formik initialValues={signInInitial} validationSchema={signInValidate} onSubmit={(data) => { handleSubmit(data) }}>
                        {({ touched, errors, values, handleChange, handleBlur, handleReset }) => (
                            <Form autoComplete={0} >
                                <h2 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">SIGNIN PAGE</h2>
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
                                <Grid item sm={4} mb={3}>
                                <FormControl fullWidth>
                                    <ButtonThemes name={'submit'} typ={'submit'} clr={'contained'} />
                                </FormControl>
                                </Grid>
                                <Grid item sm={4} mb={3}>
                                <FormControl fullWidth>
                                    <ButtonThemes name={'cancel'} clr={'outlined'} funcname={handleReset} />
                                </FormControl>
                                </Grid>
                                    <span>Forget password ? </span><br/>
                                    <span>Don't have an Account ? </span><Link to={'/register'}>SignUp</Link>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="col-4"></div>
            </div>
        </Container>
    )
}
export default UserSignIn





