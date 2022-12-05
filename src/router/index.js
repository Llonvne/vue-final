import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //   默认导航到发现页面
  {
    name: "find",
    path: "/",
    redirect: "/find",
  },
  //   配置发现页面
  {
    name: "find",
    path: "/find",
    component: () => import("../views/FindView.vue"),
  },
  {
    name: "my",
    path: "/my",
    component: () => import("../views/MyView.vue"),
  },
  {
    name: "star",
    path: "/star",
    component: () => import("../views/StarView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
