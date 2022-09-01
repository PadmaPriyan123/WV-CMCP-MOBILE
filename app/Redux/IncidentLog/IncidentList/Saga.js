import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Service} from '../../../Services/Helper';
import {
  sendLegalDataResponse,
  sendReintegrationDataResponse
} from '../IncidentList/Action';
import {
  INCIDENT_LEGAL,
  INCIDENT_REINTEGRATION
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




function* legal() {
  yield takeEvery(INCIDENT_LEGAL, postLegalData);
  yield takeEvery(INCIDENT_REINTEGRATION, postReintegrationData);

}

export default legal;
