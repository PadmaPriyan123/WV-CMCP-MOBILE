import {
    INCIDENT_LEGAL_RESPPONSE,
    INCIDENT_REINTEGRATION_RESPPONSE
   
  } from './ActionTypes';
  
  const initialState = {
    error: '',
    sendlegalDataResponse: {},
    sendReintegrationResponse:{},
    
   
  };
  
  const incidentLegal = (state = initialState, action) => {
    switch (action.type) {
      case INCIDENT_LEGAL_RESPPONSE:
        state = {
          ...state,
          sendlegalDataResponse: action.payload,
        };
        break;
        case INCIDENT_REINTEGRATION_RESPPONSE:
            state = {
              ...state,
              sendReintegrationResponse: action.payload,
            };
            break;
      default:
        state = {...state};
        break;
    }
    return state;
  };
  
  export default incidentLegal;
  