import {
  INCIDENT_VICTIM_RESPPONSE,
  INCIDENT_COMPLAINTS_RESPPONSE,
  CASE_ASSIGNMENT_RESPONSE,
} from './ActionTypes';

const initialState = {
  error: '',
  sendVictimDataResponse: {},
  caseAssignmentResponse: {},
  sendComplaintsDataResponse: {},
};

const incidentVictim = (state = initialState, action) => {
  switch (action.type) {
    case INCIDENT_VICTIM_RESPPONSE:
      state = {
        ...state,
        sendVictimDataResponse: action.payload,
      };
      break;
    case INCIDENT_COMPLAINTS_RESPPONSE:
      state = {
        ...state,
        sendComplaintsDataResponse: action.payload,
      };
      break;
    case CASE_ASSIGNMENT_RESPONSE:
      state = {
        ...state,
        caseAssignmentResponse: action.payload,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default incidentVictim;
