import * as types from "./mutation-types";
import { setToken } from "@/lib/utils";
import { userLogin } from "@/api/index";
const actions = {
  // 异步提交vuex
  async login({ commit }, { userName, password }) {
    let payload = {
      account: userName,
      password: password
    };
    const { result, code, message } = await userLogin(payload);
    return new Promise((resolve, reject) => {
      if (code == 100) {
        resolve(result);
        commit(types.USER_INFO, result);
        setToken(result);
      } else {
        reject(message);
      }
    });
  }
};
export default actions;
