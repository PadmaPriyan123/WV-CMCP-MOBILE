import {
  INCIDENT_VICTIM,
  INCIDENT_VICTIM_RESPPONSE,
  INCIDENT_COMPLAINTS,
  INCIDENT_COMPLAINTS_RESPPONSE,
  CASE_ASSIGNMENT,
  CASE_ASSIGNMENT_RESPONSE,
} from './ActionTypes';

export const sendVictimData = victimInfo => ({
  type: INCIDENT_VICTIM,
  payload: victimInfo,
});

export const sendVictimDataResponse = victimResponse => ({
  type: INCIDENT_VICTIM_RESPPONSE,
  payload: victimResponse,
});

export const sendComplaintsData = complaintsInfo => ({
  
  type: INCIDENT_COMPLAINTS,
  payload: complaintsInfo,
});

export const sendComplaintsDataResponse = complaintsInfo => ({
  type: INCIDENT_COMPLAINTS_RESPPONSE,
  payload: complaintsInfo,
});

export const caseAssignment = caseAssignmentInfo => ({
  type: CASE_ASSIGNMENT,
  payload: caseAssignmentInfo,
});

export const caseAssignmentResponse = caseAssignmentResponse => ({
  type: CASE_ASSIGNMENT_RESPONSE,
  payload: caseAssignmentResponse,
});

