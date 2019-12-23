import * as types from './mutation-types'

const mutations = {
  [types.SET_GOODLIST](state, params) {
    state.goodList = params
  }
}
export default mutations
