import config from '../Config/config.json';
import crypto from 'react-native-crypto-js';
import axios from 'axios';
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
  console.log('decrypt', params);
  const decrypted = crypto.AES.decrypt(params, key, {iv: iv});

  console.log('decryption', JSON.parse(decrypted.toString(crypto.enc.Utf8)));
  return JSON.parse(decrypted.toString(crypto.enc.Utf8));
};

const commonFetch = async (url, Method, bodyData, paramsHeader) => {
  const URL = config.WVI_DEV_BASE_URL + url;
  let headerComponent = {
    method: Method,
    url: URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYwNjY1MTgwLCJleHAiOjE2NjA2NjU3ODAsImlhdCI6MTY2MDY2NTE4MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.TvhqGWgKirJJO5tW134eiDMBWgzsedO5hghqaoNPNQY',
      ...paramsHeader,
    },
    data: bodyData ? encryption(bodyData) : null,
  };

  let result;
  console.log('vikki', result);

  await axios(headerComponent)
    .then(res => {
      result = decryption(res.data.EncryptData);
      console.log(res);
    })
    .catch(err => {
      result = decryption(err.response.data.EncryptData);
      console.log(err);
    });
  console.log('hellow', result);

  return await result;
};

export const Service = {
  commonFetch,
};
