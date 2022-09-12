import {
  INCIDENT_LEGAL,
  INCIDENT_LEGAL_RESPPONSE,
  INCIDENT_REINTEGRATION,
  INCIDENT_REINTEGRATION_RESPPONSE,
  INCIDENT_MHPSS,
  INCIDENT_MHPSS_RESPPONSE,
  GET_ALL_CASE,
  GET_ALL_CASE_RESPONSE,
  GET_MHPSS,
  GET_MHPSS_RESPPONSE
} from '../IncidentList/ActionTypes';

export const sendLegalData = legalInfo => ({
  type: INCIDENT_LEGAL,
  payload: legalInfo,
});

export const sendLegalDataResponse = legalResponse => ({
  type: INCIDENT_LEGAL_RESPPONSE,
  payload: legalResponse,
});

export const sendReintegrationData = reintegrationInfo => ({
  type: INCIDENT_REINTEGRATION,
  payload: reintegrationInfo,
});

export const sendReintegrationDataResponse = reintegrationResponse => ({
  type: INCIDENT_REINTEGRATION_RESPPONSE,
  payload: reintegrationResponse,
});
export const sendMhpssData = mhpssInfo => ({
  type: INCIDENT_MHPSS,
  payload: mhpssInfo,
});

export const sendMhpssDataResponse = mhpssResponse => ({
  type: INCIDENT_MHPSS_RESPPONSE,
  payload: mhpssResponse,
});

export const getAllCase = () => ({
  type: GET_ALL_CASE,
});

export const getAllCaseResponse = response => ({
  type: GET_ALL_CASE_RESPONSE,
  payload: response,
});

export const getMhpss = (caseId) => ({
  type: GET_MHPSS,
  payload: caseId,
});

export const getMhpssResponse = response => ({
  type: GET_MHPSS_RESPPONSE,
  payload: response,
});