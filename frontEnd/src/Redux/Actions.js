import { addTrips, getOffers, getPlaceData, getStateData, reqTrips, userLogin, userRegistration } from "./restAPI"

export const getStateDataAction = (creds) => {
  return async (dispatch) => {
    try {
      const getStateDataResponse = await getStateData(creds);
      return dispatch({
        type: "GET_STATE",
        payload: getStateDataResponse,
      });
    } catch (stateErr) {
      return dispatch({
        type: "GET_STATE", 
        payload: stateErr.response || null,
      });
    }
  };
};
export const getPlaceDataAction = (creds) => {
  return async (dispatch) => {
    try {
      const getPlaceDataResponse = await getPlaceData(creds);
      return dispatch({
        type: "GET_PLACE",
        payload: getPlaceDataResponse,
      });
    } catch (placeErr) {
      return dispatch({
        type: "GET_PLACE", 
        payload: placeErr.response || null,
      });
    }
  };
};

//userRegistration
export const userRegistrationAction = (creds) => {  
  return async (dispatch) => {
    try {
      const userRegistrationResponse = await userRegistration(creds);
      return dispatch({
        type: "USER_REGIST",
        payload: userRegistrationResponse,
      });
    } catch (userRegistErr) {
      return dispatch({
        type: "USER_REGIST", 
        payload: userRegistErr.response|| null,
      });
    }
  };
};
//userRegistration
export const userLoginAction = (creds) => {  
  return async (dispatch) => {
    try {
      const userLoginResponse = await userLogin(creds);
      return dispatch({
        type: "LOGIN_USER",
        payload: userLoginResponse,
      });
    } catch (userLoginErr) {
      return dispatch({
        type: "LOGIN_USER", 
        payload: userLoginErr.response|| null,
      });
    }
  };
};
//addTrips
export const addTripsAction = (creds) => {  
  return async (dispatch) => {
    try {
      const addTripsResponse = await addTrips(creds);
      return dispatch({
        type: "ADD_TRIPS",
        payload: addTripsResponse,
      });
    } catch (addTripErr) {
      return dispatch({
        type: "ADD_TRIPS", 
        payload: addTripErr.response|| null,
      });
    }
  };
};
//reqTrips
export const reqTripsAction = (creds) => {  
  return async (dispatch) => {
    try {
      const reqTripsResponse = await reqTrips(creds);
      return dispatch({
        type: "REQ_TRIPS",
        payload: reqTripsResponse,
      });
    } catch (reqTripErr) {
      return dispatch({
        type: "REQ_TRIPS", 
        payload: reqTripErr.response|| null,
      });
    }
  };
};
//reqTrips
export const getOffersAction = (creds) => {  
  return async (dispatch) => {
    try {
      const reqTripsResponse = await getOffers(creds);
      return dispatch({
        type: "GET_OFFER",
        payload: reqTripsResponse,
      });
    } catch (offerpErr) {
      return dispatch({
        type: "GET_OFFER", 
        payload: offerpErr.response|| null,
      });
    }
  };
};
//custom redux
export const getStateCustAction = (creds) => {  
  return async (dispatch) => {
    try {
      return dispatch({
        type: "GET_CUST_STATE",
        payload: creds,
      });
    } catch (offerpErr) {
      return dispatch({
        type: "GET_CUST_STATE", 
        payload: offerpErr.response|| null,
      });
    }
  };
};
