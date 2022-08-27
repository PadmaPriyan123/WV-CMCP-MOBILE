// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {INCIDENTLOG} from './ActionTypes';
import {Service} from '../../Services/Helper';
import {IncidentLogResponse} from './Action';

function* incidentLog({payload: incidentlogCredentials}) {
  try {
    const response = yield call(
      Service.commonFetch,
      'IncidentVictimLog/CreateIncidentVictomLog',
      'POST',
      incidentlogCredentials,
      null,
    );

    console.log(response);

    if (response.StatusCode == 201) {
      yield put(IncidentLogResponse(response));
    } else if (response.StatusCode == 400) {
      yield put(IncidentLogResponse(response));
    } else if (response.StatusCode == 500) {
      yield put(IncidentLogResponse(response));
    }
  } catch (error) {
  }
}
function* victim() {
  yield takeEvery(INCIDENTLOG, incidentLog);
}

export default victim;
