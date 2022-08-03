import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./ActionTypes";
import { Service } from "../../Services/Helper";
import { usersLogin } from "./Action";

function* userLogin({ payload: loginCredentials }) {
  try {
    const response = yield call(
      Service.commonFetch,
      "/User/UserLogin",
      "POST",
      loginCredentials,
      null
    );

    if (response.status == 201) {
      yield put(usersLogin(response));
      sessionStorage.setItem("authUser", JSON.stringify(response.data.result));
    }else if (response.status == 400) {
      yield put(usersLogin(response));
    }
    else if (response.status == 500) {
        yield put(usersLogin(response));
      }
  } catch (error) {
   
  }
}
function* login() {
  yield takeEvery(LOGIN, userLogin);
}

export default login;