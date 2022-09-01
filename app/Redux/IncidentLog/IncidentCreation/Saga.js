import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Service} from '../../../Services/Helper';
import {
  caseAssignmentResponse,
  sendVictimDataResponse,
  sendComplaintsDataResponse,
} from '../IncidentCreation/Action';
import {
  CASE_ASSIGNMENT,
  INCIDENT_VICTIM,
  INCIDENT_COMPLAINTS,
} from '../IncidentCreation/ActionTypes';

function* postVictimData({payload: victimInfo}) {
  try {
    console.log('cameee');
    const authUser = yield call(Service.authUser);

    // victimInfo.UserID = authUser.userId;

    const response = yield call(
      Service.commonFetch,
      '/IncidentVictimLog/CreateIncidentVictomLog',
      'POST',
      victimInfo,
      false,
    );

    yield put(sendVictimDataResponse(response));
  } catch (error) {
    console.log(error);
  }
}

function* postComplaintsData({payload: complaintsInfo}) {
  try {
    console.log('ggghr');

    const authUser = yield call(Service.authUser);

    //  complaintsInfo.UserID = authUser.userId;

    const response = yield call(
      Service.commonFetch,
      '/IncidentComplaintLog/CreateIncidentComplaintLog',
      'POST',
      complaintsInfo,
      true,
      
    );

    yield put(sendComplaintsDataResponse(response));
  } catch (error) {
    console.log(error);
  }
}

function* caseAssignment({payload: caseAssignmentInfo}) {
  try {
    console.log('Saga');

    const authUser = yield call(Service.authUser);

    caseAssignmentInfo.legalCaseManagerUserId = authUser.userId;

    const response = yield call(
      Service.commonFetch,
      '/IncidentCaseAssignmentLog/CreateIncidentCaseAssignmentLog',
      'POST',
      caseAssignmentInfo,
      true,
    );

    yield put(caseAssignmentResponse(response));
  } catch (error) {
    console.log(error);
  }
}

function* victim() {
  yield takeEvery(INCIDENT_VICTIM, postVictimData);
  yield takeEvery(INCIDENT_COMPLAINTS, postComplaintsData);

  yield takeEvery(CASE_ASSIGNMENT, caseAssignment);
}

export default victim;
