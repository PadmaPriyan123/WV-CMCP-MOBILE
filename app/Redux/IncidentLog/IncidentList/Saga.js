import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Service} from '../../../Services/Helper';
import {
  sendLegalDataResponse,
  sendReintegrationDataResponse,
  sendMhpssDataResponse
} from '../IncidentList/Action';
import {
  INCIDENT_LEGAL,
  INCIDENT_REINTEGRATION,
  INCIDENT_MHPSS
} from '../IncidentList/ActionTypes';


function* postLegalData({payload: legalInfo}) {
  try {
    console.log('ok');
    const authUser = yield call(Service.authUser);

    // victimInfo.UserID = authUser.userId;

    const response = yield call(
      Service.commonFetch,
      '/IncidentLegalLog/CreateIncidentLegalLog',
      'POST',
      legalInfo,
      false,
    );

    yield put(sendLegalDataResponse(response));
  } catch (error) {
    console.log(error);
  }
}
function* postReintegrationData({payload: reintegrationInfo}) {
    try {
      console.log('ggghr');
  
      const authUser = yield call(Service.authUser);
  
      //  complaintsInfo.UserID = authUser.userId;
  
      const response = yield call(
        Service.commonFetch,
        '/IncidentReintegrationLog/CreateIncidentReintegrationLog',
        'POST',
        reintegrationInfo,
        false,
        
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
        false,
        
      );
  
      yield put(sendMhpssDataResponse(response));
    } catch (error) {
      console.log(error);
    }
  }


function* legal() {
  yield takeEvery(INCIDENT_LEGAL, postLegalData);
  yield takeEvery(INCIDENT_REINTEGRATION, postReintegrationData);
  yield takeEvery(INCIDENT_MHPSS,postMhpssData)

}

export default legal;
