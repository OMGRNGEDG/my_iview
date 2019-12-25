export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  }
];
