import config from '../Config/config.json';
import crypto from 'react-native-crypto-js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const key = crypto.enc.Base64.parse(config.ENCRYPTION_KEY);
const iv = crypto.enc.Base64.parse(config.ENCRYPTION_IV);

const encryption = params => {
  const data = JSON.stringify(params);

  const encrptedData = crypto.AES.encrypt(data, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  });

  const bodyData = {
    EncryptData: '' + encrptedData + '',
  };

  return JSON.stringify(bodyData);
};

const decryption = params => {
  const decrypted = crypto.AES.decrypt(params, key, {iv: iv});
  return JSON.parse(decrypted.toString(crypto.enc.Utf8));
};

const commonFetch = async (url, Method, bodyData, paramsHeader) => {
  const URL = config.WVI_DEV_BASE_URL + url;

  const authUser = await AsyncStorage.getItem('authUser');
  const userToken = JSON.parse(authUser);
  console.log('body data', bodyData);
  let Header = {};
  if (userToken?.AccessToken) {
    Header = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYxNjg2NzgzLCJleHAiOjE2NjE2ODg1ODMsImlhdCI6MTY2MTY4Njc4MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.XZ_MCq4ICBQl17BHe_CDW2kdOWffxoFVxEw_fD2XGJ4`,
    };
  }

  let headerComponent = {
    method: Method,
    url: URL,
    headers: {
      'Content-Type': 'application/json',
      host: 'localhost:3000',
      Accept: '*/*',
      Connection: 'keep-alive',
      ...Header,
    },
    data: bodyData ? encryption(bodyData) : null,
  };

  let result;


  await axios(headerComponent)
    .then(res => {
      console.log('api success', res);
      result = decryption(res.data.EncryptData);
    })
    .catch(err => {
      console.log('api error', err);
      result = decryption(err.response.data.EncryptData);
    });

  return result;
};

export const Service = {
  commonFetch,
};
