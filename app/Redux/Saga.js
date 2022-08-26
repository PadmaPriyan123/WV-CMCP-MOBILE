import { all } from "redux-saga/effects";
import login from "./Login/Saga";
import Incidentlog from "./IncidentLog/Reducers";


export default function* rootSaga() {
    yield all([
        login(),
        Incidentlog(),
    ])
}