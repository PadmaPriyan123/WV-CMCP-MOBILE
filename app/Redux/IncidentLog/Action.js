import {INCIDENTLOG, INCIDENTLOG_RESPONSE} from './ActionTypes';

export const IncidentLog = incidentlogCredentials => ({
  type: INCIDENTLOG,
  payload: incidentlogCredentials,
});

export const IncidentLogResponse = incidentlogResponse => ({
  type: INCIDENTLOG_RESPONSE,
  payload: incidentlogResponse,
});
