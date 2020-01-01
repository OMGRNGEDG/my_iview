import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import user from "./module/user";
import routers from "../router/router";
import { getMenuByRouter } from "../lib/utils";
Vue.use(Vuex);
const getters = {
  menuList: () => getMenuByRouter(routers)
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  }
});
