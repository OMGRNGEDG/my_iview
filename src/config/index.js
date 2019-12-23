const isOnline = process.env.NODE_ENV === 'production'; // false 测试  true 正式
export default {
  // 存储状态
  MemberId: "bba102ba0d1bc7d30c81aadeb7fc7c16",
  CHANNEL: "214", // 渠道
  OKCODE: ["100", "104", "127", "117", "114"],
  USERINFO: null,
  // 接口地址信息
  DOMAIN: isOnline ? 'http://localhost:8080/' : 'https://apfmtest.sandload.cn/', //测试地址
}
