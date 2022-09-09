import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Service} from '../../../Services/Helper';
import {
  sendLegalDataResponse,
  sendReintegrationDataResponse,
  sendMhpssDataResponse,
  getAllCaseResponse
} from '../IncidentList/Action';
import {
  INCIDENT_LEGAL,
  INCIDENT_REINTEGRATION,
  INCIDENT_MHPSS,
  GET_ALL_CASE
} from '../IncidentList/ActionTypes';


function* postLegalData({payload: legalInfo}) {
  try {
    const authUser = yield call(Service.authUser);

    // victimInfo.UserID = authUser.userId;

    const response = yield call(
      Service.commonFetch,
      '/IncidentLegalLog/CreateIncidentLegalLog',
      'POST',
      legalInfo,
      true,
    );

    yield put(sendLegalDataResponse(response));
  } catch (error) {
    console.log(error);
  }
}
function* postReintegrationData({payload: reintegrationInfo}) {
    try {
  
      const authUser = yield call(Service.authUser);
  
      //  complaintsInfo.UserID = authUser.userId;
  
      const response = yield call(
        Service.commonFetch,
        '/IncidentReintegrationLog/CreateIncidentReintegrationLog',
        'POST',
        reintegrationInfo,
        true,
        
      );
  
      yield put(sendReintegrationDataResponse(response));
    } catch (error) {
      console.log(error);
    }
  }

  function* postMhpssData({payload: mhpssInfo}) {
    try {
   
  
      const authUser = yield call(Service.authUser);
  
      //  complaintsInfo.UserID = authUser.userId;
  
      const response = yield call(
        Service.commonFetch,
        '/MHPSSSupportiveCall/CreateMHPSSSupportiveCall',
        'POST',
        mhpssInfo,
        true,
        
      );
  
      yield put(sendMhpssDataResponse(response));
    } catch (error) {
      console.log(error);
    }
  }
  function* getCaseDetails() {
    try {
   
  
      const authUser = yield call(Service.authUser);
  
      //  complaintsInfo.UserID = authUser.userId;
  
      const response = yield call(
        Service.commonFetch,
        '/CaseList/GetAllCaseList',
        'GET',
        null,
        true,
        null
      );
  
      yield put(getAllCaseResponse(response));
    } catch (error) {
      console.log(error);
    }
  }

function* legal() {
  yield takeEvery(INCIDENT_LEGAL, postLegalData);
  yield takeEvery(INCIDENT_REINTEGRATION, postReintegrationData);
  yield takeEvery(INCIDENT_MHPSS,postMhpssData)
  yield takeEvery(GET_ALL_CASE,getCaseDetails)
}

export default legal;
