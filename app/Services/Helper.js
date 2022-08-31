import axios from 'axios';
import config from '../Config/config.json';
import {SecurityService} from '../Services/EncryptDecrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authUser = async () => {
  let data = await AsyncStorage.getItem('authUser');

  return await JSON.parse(data);
};

const commonFetch = async (url, Method, bodyData, headerData, paramsData) => {
  const URL = config.WVI_DEV_BASE_URL + url;

  let paramsHeader = {};

  if (headerData === true) {
    // const authUser = JSON.parse(await AsyncStorage.getItem('authUser'));

    paramsHeader = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYxOTUxNjIyLCJleHAiOjE2NjIwMzgwMjIsImlhdCI6MTY2MTk1MTYyMiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.3Qm83zPHOzAo-3r-v-gtP_qD3LUq6jO-LLbs8FGDlSo`,
    };
  }
   paramsHeader = {
     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYxOTQ4MDA3LCJleHAiOjE2NjIwMzQ0MDcsImlhdCI6MTY2MTk0ODAwNywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.9zFJziuH77GSz77tcp2-K4uzYZk-xoom8bqZnt8RDdU`,
   };

  
  const encryptData = (type, data) => {
    let ed = {
      EncryptData: '' + SecurityService.Encryption(JSON.stringify(data)) + '',
    };

    console.log(ed);

    if (type == 'body') return JSON.stringify(ed);

    if (type == 'query') return ed;
  };

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

  console.log(result);

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
};

export const Service = {
  commonFetch,
  authUser,
};
