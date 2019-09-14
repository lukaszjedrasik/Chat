import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/chat",
      name: "Chat",
      component: () => import("@/components/Chat")
    }
  ]
});
