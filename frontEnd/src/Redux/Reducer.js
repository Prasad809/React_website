
const initialValues = {
  error: false,
  user: null,
  errMsg: '',
};

export const GetStateDataReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_STATE':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};
export const GetPlaceDataReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_PLACE':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};

 //GetUserRegistrationReducer
export const GetUserRegistrationReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'USER_REGIST':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};
 //GetUserRegistrationReducer
export const GetUserLoginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};

 
 //GetaddTripsReducer
export const GetaddTripsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'ADD_TRIPS':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};


 
 //GetaddTripsReducer
export const GetreqTripsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'REQ_TRIPS':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};


 
 //GetOfferReducer
export const GetOffersReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_OFFER':
      if (action.payload && action.payload.data) {
        return {
          ...state,
          error: false,
          user: action.payload.data, 
          errMsg: '',
        };
      }      
      return state; 

    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errMsg: action.payload.data.messages[0].description,
      };

    default:
      return state; 
  }
};
//custom redux

export const GetStateCustomReducer=(state=initialValues,action)=>{
  switch(action.type){
    case "GET_CUST_STATE":
      return {user:action.payload}
    case "GET_CUST_STATE":
      return {
        ...initialValues
      }
    default:
      return state
  }
}
 
