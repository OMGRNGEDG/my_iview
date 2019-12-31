import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router.js";
import NProgress from "nprogress";
import { changeTiele, getToken } from "../lib/utils";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  changeTiele(to.meta.title);
  if (!getToken() && to.name !== "login") {
    router.replace({
      name: "login"
    });
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
