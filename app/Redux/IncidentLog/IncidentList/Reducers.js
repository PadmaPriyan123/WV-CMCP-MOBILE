import {
    INCIDENT_LEGAL_RESPPONSE,
    INCIDENT_REINTEGRATION_RESPPONSE,
    INCIDENT_MHPSS_RESPPONSE
  } from './ActionTypes';
  
  const initialState = {
    error: '',
    sendlegalDataResponse: {},
    sendReintegrationDataResponse:{},
    sendMhpssDataResponse:{}, 
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
            case INCIDENT_MHPSS_RESPPONSE:
              state = {
                ...state,
                sendMhpssDataResponse: action.payload,
              };
              break;
      default:
        state = {...state};
        break;
    }
    return state;
  };
  
  export default incidentLegal;
  