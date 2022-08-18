import config from '../Config/config.json';
import axios from 'axios';

const commonFetch = async (url, Method, bodyData, paramsHeader) => {
  const URL = config.WVI_DEV_BASE_URL + url;
  // console.log('came', URL, Method, bodyData, paramsHeader);
  let headerComponent = {
    method: Method,
    url: URL,
    data: bodyData ? bodyData : null,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjYwNjY1MTgwLCJleHAiOjE2NjA2NjU3ODAsImlhdCI6MTY2MDY2NTE4MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.TvhqGWgKirJJO5tW134eiDMBWgzsedO5hghqaoNPNQY',
    },
  };

  let result;

  await axios(headerComponent)
    .then(response => (result = response.data))
    .catch(error => (result = error.response.data));

  return await result;
};

export const Service = {
  commonFetch,
};
