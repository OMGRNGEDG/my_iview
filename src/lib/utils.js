import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

function getAesString(data, key, iv) {
  //加密
  var nowkey = CryptoJS.enc.Utf8.parse(key);
  var nowiv = CryptoJS.enc.Utf8.parse(iv);
  var encrypted = CryptoJS.AES.encrypt(data, nowkey, {
    iv: nowiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(); //返回的是base64格式的密文
}
function getDAesString(encrypted, key, iv) {
  //解密
  var nowkey = CryptoJS.enc.Utf8.parse(key);
  var nowiv = CryptoJS.enc.Utf8.parse(iv);
  var decrypted = CryptoJS.AES.decrypt(encrypted, nowkey, {
    iv: nowiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
export function encryption(data) {
  //加密
  var encrypted = getAesString(
    data,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "1234567812345678"
  ); //密文
  return encrypted;
}

export function decrypt(data) {
  //解密
  var decryptedStr = getDAesString(
    data,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "1234567812345678"
  );
  return decryptedStr;
}

export const setToken = (token, tokenName = "TOKEN") => {
  let parsewords = encryption(token);
  Cookies.set(tokenName, parsewords);
};

export const getToken = (tokenName = "TOKEN") => {
  if (Cookies.get(tokenName)) {
    return decrypt(Cookies.get(tokenName));
  } else {
    return null;
  }
};

/**
 * 更改网站的title
 * @param {string} title 标题
 */
export const changeTiele = (title = "管理系统") => {
  window.document.title = title;
};
