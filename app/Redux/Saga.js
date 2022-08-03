import { all } from "redux-saga/effects";
import login from "./Login/Saga";


export default function* rootSaga() {
    yield all([
        login(),
    ])
}