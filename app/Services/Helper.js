import axios from 'axios';
import config from '../Config/config.json';
import {SecurityService} from '../Services/EncryptDecrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authUser = async () => {
  let data = await AsyncStorage.getItem('authUser');

  const encrptedData = crypto.AES.encrypt(data, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  });

const commonFetch = async (url, Method, bodyData, headerData, paramsData) => {
  const URL = config.WVI_DEV_BASE_URL + url;

  let paramsHeader = {};

  if (headerData === true) {
    // const authUser = JSON.parse(await AsyncStorage.getItem('authUser'));

    paramsHeader = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYxNzg5NDc5LCJleHAiOjE2NjE4NzU4NzksImlhdCI6MTY2MTc4OTQ3OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.MnPYLPqf1P7fYchw_wf-bi7lgAIFnq_cFjrzf3iRff0`,
    };
  }
  paramsHeader = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYxNzg5NDc5LCJleHAiOjE2NjE4NzU4NzksImlhdCI6MTY2MTc4OTQ3OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.MnPYLPqf1P7fYchw_wf-bi7lgAIFnq_cFjrzf3iRff0`,
  };

  const encryptData = (type, data) => {
    let ed = {
      EncryptData: '' + SecurityService.Encryption(JSON.stringify(data)) + '',
    };

    console.log(ed);

    if (type == 'body') return JSON.stringify(ed);

  const authUser = await AsyncStorage.getItem('authUser');
  console.log('my auth', authUser);
  let Header = {};
  if (authUser?.AccessToken) {
    console.log('came');
    Header = {
      Authorization: `Bearer ${authUser.AccessToken}`,
    };
  }

  let headerComponent = {
    method: Method,
    url: URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
      ...paramsHeader,
    },
    data: bodyData ? encryptData('body', bodyData) : null,
    params: paramsData ? encryptData('query', paramsData) : null,
  };

  let result;

  console.log('header', headerComponent);

  await axios(headerComponent)
    .then(res => {
      console.log('API Success: ', res);
      result = SecurityService.Decryption(res.data.EncryptData);
    })
    .catch(err => {
      console.log('API Error: ', err);
      result = SecurityService.Decryption(err.response.data.EncryptData);
    });

  return result;
}
}
}

export const Service = {
  commonFetch,
};
