import {
    INCIDENT_LEGAL,
    INCIDENT_LEGAL_RESPPONSE,
    INCIDENT_REINTEGRATION,
    INCIDENT_REINTEGRATION_RESPPONSE
    
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
  
  
  
  