import * as types from './mutation-types'
import { setToken } from '@/lib/utils'
import {
  getToken
} from '@/api/index'
import {
  async, reject
} from 'q'
const actions = {
  // 异步提交vuex
  async updateName({
    commit
  }, params) {
    let payload = {
      client_id: 'appletprodminiprogram',
      client_secret: 'freemud.123!secret'
    }
    const {
      access_token
    } = await getToken(payload)
    commit(types.SET_GOODLIST, access_token)
  },
  async login({ commit }, { client_id, client_secret }) {
    let payload = {
      client_id: client_id,
      client_secret: client_secret
    }
    const { access_token } = await getToken(payload)
    return new Promise((resolve, reject) => {
      if (access_token) {
        setToken(access_token)
        resolve()
      } else {
        reject(new Error('设置错误'))
      }
    })
  }
}
export default actions
