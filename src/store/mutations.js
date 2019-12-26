import * as types from './mutation-types'

const mutations = {
  [types.SET_GOODLIST](state, params) {
    state.goodList = params
  },
  [types.USER_INFO](state, params) {
    state.userInfo = params
  }
}
export default mutations
