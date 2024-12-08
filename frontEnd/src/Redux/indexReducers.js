import { combineReducers } from "redux";
import { GetaddTripsReducer, GetOffersReducer, GetPlaceDataReducer, GetreqTripsReducer, GetStateCustomReducer, GetStateDataReducer, GetUserLoginReducer, GetUserRegistrationReducer } from "./Reducer";

const rootReducers=combineReducers({
    GetStateDataReducer,
    GetPlaceDataReducer,
    GetUserRegistrationReducer,
    GetUserLoginReducer,
    GetaddTripsReducer,
    GetreqTripsReducer,
    GetOffersReducer,
    GetStateCustomReducer
})

export default rootReducers