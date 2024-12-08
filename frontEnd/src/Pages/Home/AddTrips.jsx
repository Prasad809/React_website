import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import { tripsInitial, TripsValidate } from "../UserDetails/validationSchema";
import Textfield from "../../common-ui/Textfield";
import ButtonThemes from "../../common-ui/ButtonThemes";
import { FormControl, Grid, MenuItem } from "@mui/material";
import Dropdown from "../../common-ui/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTripsAction, getPlaceDataAction, getStateCustAction } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";

function AddTrips() {
    const dispatch = useDispatch()
    const [place, setPlace] = useState([])
    useEffect(() => {
        dispatch(getPlaceDataAction({})).then((res) => {
            setPlace(res.payload.data?.indianTouristPlaces)
        })
    }, [])
    const handleSubmitTrip = (values) => {
        dispatch(addTripsAction(values)).then((res) => {
            console.log(res.payload.data)
        })
        dispatch(getStateCustAction(values))
    }
    const Persons = [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
    ]

    const navigate = useNavigate()
    return (
                <Container>
                    <Formik initialValues={tripsInitial} validationSchema={TripsValidate} onSubmit={(data) => { handleSubmitTrip(data), console.log(data) }}>
                        {({ touched, errors, values, handleChange, handleBlur, handleReset }) => (
                            <Form autoComplete={0} >
                                <h2 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">LET'S PLAN YOUR TRIP RIGHT NOW<ButtonThemes name={'BACK'} clr={'outlined'} funcname={() => navigate('/dashboard')} style={{ marginLeft: "40rem" }} />
                                </h2>
                                <div className="row">
                                    <div className="col-6">
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>Email ID</label>
                                                <Textfield type="email" name='email' value={values.email}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    error={touched.email && Boolean(errors.email)}
                                                    helperText={touched.email && errors.email}
                                                    plh={'Enter Email Address'} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>FullName</label>
                                                <Textfield
                                                    name="fullName"
                                                    value={values.fullName}
                                                    onChange={(e) => {
                                                        const onlyChars = /^[A-Za-z ]+$/;
                                                        const inputValue = e.target.value;
                                                        if (inputValue === '' || onlyChars.test(inputValue)) {
                                                            const formattedValue = inputValue
                                                                .toLowerCase()
                                                                .replace(/\b\w/g, (char) => char.toUpperCase());
                                                            handleChange({
                                                                target: { name: 'fullName', value: formattedValue }
                                                            });
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    error={touched.fullName && Boolean(errors.fullName)}
                                                    helperText={touched.fullName && errors.fullName}
                                                    placeholder="Enter Full Name"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>Phone Number</label>
                                                <Textfield
                                                    name="phoneNumber"
                                                    value={values.phoneNumber}
                                                    onChange={(e) => {
                                                        const inputValue = e.target.value;
                                                        const onlyNumbers = /^[0-9]*$/;
                                                        if (inputValue === '' || onlyNumbers.test(inputValue)) {
                                                            handleChange(e);
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                                    helperText={touched.phoneNumber && errors.phoneNumber}
                                                    placeholder="Enter Phone Number"
                                                    inputProps={{ maxLength: 10 }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </div>
                                    <div className="col-6">
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>Trip Date</label>
                                                <Textfield type="date"
                                                    name='tripDate' value={values.tripDate}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    error={touched.tripDate && Boolean(errors.tripDate)}
                                                    helperText={touched.tripDate && errors.tripDate}
                                                    plh={"Enter Phone Number"} />
                                                {/* <Globaldatepicker tabIndex={33} name="tripDate" customInput={Textfield} value={values.tripDate}
                                             onChange={(date) => {
                                                 setFieldValue('tripDate', date);
                                             }}
                                             renderInput={(params) => <TextField tabIndex={32} {...params} size="small"
                                                 error={'tripDate' in touched && 'tripDate' in errors}
                                                 helperText={(getIn(touched, "tripDate") && getIn(errors, "tripDate"))} />} /> */}
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>Select the Location</label>
                                                <Dropdown
                                                    name='location' value={values.location}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    error={touched.location && errors.location}
                                                    list={place.map((place) => (<MenuItem key={place.id} value={place.name}>{place.name}</MenuItem>))}
                                                    helperText={touched.location && errors.location} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={4} mb={3}>
                                            <FormControl fullWidth>
                                                <label>Number of Persons</label>
                                                <Dropdown
                                                    name='persons' value={values.persons}
                                                    onChange={handleChange} onBlur={handleBlur}
                                                    error={touched.persons && errors.persons}
                                                    list={Persons.map((person) => (<MenuItem key={person.id} value={person.value}>{person.value}</MenuItem>))}
                                                    helperText={touched.persons && errors.persons} />
                                            </FormControl>
                                        </Grid>
                                    </div>
                                </div>
                                <Grid item sm={4} mb={3}>
                                    <FormControl fullWidth>
                                        <label>Requirements</label>
                                        <Textfield
                                            name='optional' value={values.optional}
                                            onChange={handleChange}
                                            plh={"Additional Information(optional)*"} />
                                    </FormControl>
                                </Grid>
                                <div className="row">
                                    <div className="col-6">
                                        <FormControl fullWidth>
                                            <ButtonThemes name={'submit'} typ={'submit'} clr={'contained'} />
                                        </FormControl>
                                    </div>
                                    <div className="col-6">
                                        <FormControl fullWidth>
                                            <ButtonThemes name={'cancel'} clr={'outlined'} funcname={handleReset} />
                                        </FormControl>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Container>
    )
}
export default AddTrips;