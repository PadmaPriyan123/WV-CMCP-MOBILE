import {all} from 'redux-saga/effects';
import login from './Login/Saga';
import incidentlog from './IncidentLog/Saga';

export default function* rootSaga() {
  yield all([login(), incidentlog()]);
}
