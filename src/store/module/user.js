import * as types from '../mutation-types';

const state = {
  userName: '张三第一次'
}
const mutations = {
  [types.SET_USERNAME](state, params) {
    state.userName = params
  }
}
const actions = {
  setUserName({
    commit
  }, params) {
    commit(types.SET_USERNAME, params)
  }
}
export default {
  state,
  mutations,
  actions
}
