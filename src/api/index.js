
import { requestPOST, request, requestGET } from "./ajax";
/**
 * getToken
 * 
 */

export const getToken = (payload) => {
  return request('applet/login', {
    client_id: payload.client_id,
    client_secret: payload.client_secret,
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
