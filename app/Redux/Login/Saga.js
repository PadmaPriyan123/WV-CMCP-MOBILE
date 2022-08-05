import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./ActionTypes";
import { Service } from "../../Services/Helper";
import { userLoginResponse } from "./Action";

const commonFetch = async (url, Method, bodyData, paramsHeader) => {
  try{
  const URL = "http://wakiso-uganda-edrms.com:91/api" + url;

  let headerComponent = {
      method: Method,
      headers: {
          "Content-Type": "application/json",
          Host: window.location.host,
          Accept: "*/*",
          Connection: "keep-alive",
          
          ...paramsHeader,
      },

      body: JSON.stringify(bodyData) ,
  };

  console.log("www",headerComponent)

  const result = await fetch(URL, headerComponent);
  console.log("common",result)

  return await result.json();
}catch(e){
  console.log("error msg",e)
}
};

function* userLogin({ payload: loginCredentials }) {
  
  try {
    console.log("hiyjg")
    const response = yield call(
      commonFetch,
      "/User/UserLogin",
      "POST",
      loginCredentials,
      null
    );
    
    console.log(response)
    // if (response.status == 201) {
    //   yield put(userLoginResponse(response));
    //   sessionStorage.setItem("authUser", JSON.stringify(response.data.result));
    // }else if (response.status == 400) {
    //   yield put(userLoginResponse(response));
    // }
    // else if (response.status == 500) {
    //     yield put(userLoginResponse(response));
    //   }
  } catch (error) {
    console.log("came", error)
  }
}
function* login() {
  console.log("response saga")

  yield takeLatest('LOGIN', userLogin);
}

export default login;