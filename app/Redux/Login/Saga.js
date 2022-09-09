// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {LOGIN} from './ActionTypes';
import {Service} from '../../Services/Helper';
import {userLoginResponse} from './Action';

function* userLogin({payload: loginCredentials}) {
  try {
    const response = yield call(
      Service.commonFetch,
      '/User/UserLogin',
      'POST',
      loginCredentials,
      false,
    );


    if (response.StatusCode == 201) {
      yield put(userLoginResponse(response));
    } else if (response.StatusCode == 400) {
      yield put(userLoginResponse(response));
    } else if (response.StatusCode == 500) {
      yield put(userLoginResponse(response));
    }
  } catch (error) {
    console.error(error)
  }
}
function* login() {
  yield takeEvery(LOGIN, userLogin);
}

export default login;
