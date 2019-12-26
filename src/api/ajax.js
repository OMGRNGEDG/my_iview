import axios from './fetch';
import constant from '../config';
/**
 * 接口是否返回正常
 */
const isReturnOk = res => {
  let msgCode = res.data.code;
  if (constant.OKCODE.includes(msgCode)) {
    return true;
  } else {
    return false
  }
}
export async function requestPOST(path, payload) {
  return axios.post(path, payload).then(res => {
    if (!isReturnOk(res)) {
      return false
    }
    return res.data
  })
}

export async function request(path, payload) {
  return axios.post(path, payload).then(res => {
    return res.data
  })
}

export async function requestGET(path, payload) {
  return axios.get(constant.DOMAIN+path, {
    params: payload
  }).then(res => {
    return res.data
  })
}