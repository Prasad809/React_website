import * as Yup from 'yup'

//initialvalues
export const signInInitial = {
    email: "",
    password: "",
}
export const registerInitial = {
    userName:"",
    email: "",
    password: "",
}
export const tripsInitial = {
    email: "",
    fullName:"",
    phoneNumber: "",
    tripDate:"",
    location:"",
    persons:"",
    optional:""
}
//schema
export const signInValidate = Yup.object().shape({
    email: Yup.string('').email().required("Email Should Not be Blank ,Please Enter Information"),
    password: Yup.string('').required("Password Should Not be Blank ,Please Enter Information")
})
export const registerValidate = Yup.object().shape({
    userName:Yup.string().required("UserName Should Not be Blank ,Please Enter Information"),
    email: Yup.string('').email().required("Email Should Not be Blank ,Please Enter Information"),
    password: Yup.string('').required("Password Should Not be Blank ,Please Enter Information")
})
export const TripsValidate = Yup.object().shape({
    email: Yup.string('').email().required("Email Should Not be Blank ,Please Enter Information"),
    fullName:Yup.string().required("FullName Should Not be Blank ,Please Enter Information"),
    phoneNumber: Yup.string('').required("PhoneNumber Should Not be Blank ,Please Enter Information")
    .min(10,"PhoneNumber Must be 10 Digits Number"),
    tripDate: Yup.string('').required("TripDate Should Not be Blank ,Please Enter Information")
    .test('tripDate',"Trip Date Should be Future",(value)=>{
        const today = new Date();
                const dob = new Date(value)
                const dobYear = today.getFullYear() <= dob.getFullYear();                
                return dobYear;
            }),
    location: Yup.string('').required("Location Should Not be Blank ,Please Enter Information"),
    persons: Yup.string('').required("Persons Should Not be Blank ,Please Enter Information"),
})

