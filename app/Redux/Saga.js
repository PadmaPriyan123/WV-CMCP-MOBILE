import {all} from 'redux-saga/effects';
import login from './Login/Saga';
import incidentlog from './IncidentLog/IncidentCreation/Saga';
import incidentlist from './IncidentLog/IncidentList/Saga';

export default function* rootSaga() {
  yield all([login(), incidentlog(), incidentlist()]);
}
