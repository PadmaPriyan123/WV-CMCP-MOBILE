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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYyMDQyNTAzLCJleHAiOjE2NjIxMjg5MDMsImlhdCI6MTY2MjA0MjUwMywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.CHjkBDKM3AEUYBYg-96JORiDjZ9kk5WRNNoebNxVYsg`,
    };
  }
   paramsHeader = {
     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYyMDQyNTAzLCJleHAiOjE2NjIxMjg5MDMsImlhdCI6MTY2MjA0MjUwMywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.CHjkBDKM3AEUYBYg-96JORiDjZ9kk5WRNNoebNxVYsg`,
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
