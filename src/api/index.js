
import { requestPOST, request, requestGET } from "./ajax";

/**
 * 登录
 * 
 */
export const userLogin = (payload) => {
  return requestGET('user/entity', {
      account: payload.account,
      password: payload.password
  })
}

/**
 * banner
 * 
 */

export const banner = () => {
  return requestGET('pic/getBanner', {})
}

/**
 *  订单结算页 门店信息 积分信息
 * 
 */
export const ReviewShoppingCart = (payload) => {
  return requestPOST('shoppingcart/reviewShoppingCart', {
    channel: constant.CHANNEL,
    isDelivery: 1,
    storeId: payload.storeId,
    uuid: payload.uuid,
    isPackage: 1
  })
}
