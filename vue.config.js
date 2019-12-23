const cdn = {
  css: [
    // 'https://unpkg.com/view-design@4.0.2/dist/styles/iview.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    'http://unpkg.com/view-design/dist/iview.min.js'
  ]
};
const path = require('path');
const webpack = require('webpack');
const resolve = dir => path.join(__dirname, dir);
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'));
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 10240
      }));
    if (isProduction) {
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      });
      // 生产环境注入cdn
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args;
        });
      new webpack.HashedModuleIdsPlugin()
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new webpack.HashedModuleIdsPlugin()
      );
      // 用cdn方式引入
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'view-design': 'iview',
        // 'AMap': 'AMap' // 高德地图配置
      }
    }
    // else {
    //   config.externals = {
    //     'AMap': 'AMap' // 高德地图配置
    //   }
    // }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false
};
