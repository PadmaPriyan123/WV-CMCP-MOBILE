import {INCIDENTLOG_RESPONSE} from './ActionTypes';

const initialState = {
  error: '',
  incidentlogSuccessfull: '',
};

const Incidentlog = (state = initialState, action) => {
  switch (action.type) {
    case INCIDENTLOG_RESPONSE:
      state = {
        ...state,
        incidentlogSuccessfull: action.payload,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default Incidentlog;
