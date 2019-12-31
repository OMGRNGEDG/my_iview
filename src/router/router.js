import Main from "../components/main/index"
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
    name: "_home",
    meta: {
      title: "首页"
    },
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import("@/views/Home.vue")
      }
    ],

  }
];
