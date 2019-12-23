import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router.js";
import NProgress from 'nprogress';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(tranntion => {
  NProgress.done()
})
export default router;
