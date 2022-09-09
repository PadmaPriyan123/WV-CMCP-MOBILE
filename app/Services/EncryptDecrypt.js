import config from '../Config/config.json';
import crypto from 'react-native-crypto-js';

const key = crypto.enc.Base64.parse(config.ENCRYPTION_KEY);
const iv = crypto.enc.Base64.parse(config.ENCRYPTION_IV);

const Encryption = params => {
  const encrptedData = crypto.AES.encrypt(params, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  });

  return encrptedData;
};

const Decryption = params => {
  const decrypted = crypto.AES.decrypt(params, key, {iv: iv});

  return JSON.parse(decrypted.toString(crypto.enc.Utf8));
};

export const SecurityService = {
  Encryption,
  Decryption,
};
