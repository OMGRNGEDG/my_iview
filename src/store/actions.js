import * as types from './mutation-types';
import { setToken } from '@/lib/utils';
import { userLogin } from '@/api/index';
import { async, reject } from 'q'
const actions = {
  // 异步提交vuex
  async login({ commit }, { userName, password }) {
    let payload = {
      account: userName,
      password: password
    }
    const { result, code } = await userLogin(payload);
    return new Promise((resolve, reject) => {
      if (code == 100) {
        resolve(result);
        commit(types.USER_INFO, result);
        setToken(JSON.stringify(result));
      } else {
        reject(new Error('设置错误'))
      }
    });
  }
}
export default actions
