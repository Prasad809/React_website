import axios from "axios"

const headers='content-type:application/json'
//stateData
export const getStateData=(getStateDataCreds)=>{
    //http://localhost:4040
    return axios.get('http://localhost:4040/users/states',getStateDataCreds,{headers:headers})
}
//places
export const getPlaceData=(getPlaceDataCreds)=>{
    return axios.get('http://localhost:4040/users/places',getPlaceDataCreds,{headers:headers})
}
//userRegistration
export const userRegistration=(userRegistrationCreds)=>{
    return axios.post('http://localhost:4040/users/register',userRegistrationCreds,{headers:headers})
}
//userLogin
export const userLogin=(userLoginCreds)=>{
    return axios.post('http://localhost:4040/users/login',userLoginCreds,{headers:headers})
}
//addTrips
export const addTrips=(addTripsCreds)=>{
    return axios.post('http://localhost:4040/trips/addTrip',addTripsCreds,{headers:headers})
}
//addTrips
export const reqTrips=(reqTripsCreds)=>{
    return axios.post('http://localhost:4040/place/reqTrip',reqTripsCreds,{headers:headers})
}
//getOffers
export const getOffers=(getOffersCreds)=>{
    return axios.get('http://localhost:4040/hotel/offers',getOffersCreds,{headers:headers})
}