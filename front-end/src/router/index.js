import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Thread from "../views/Thread.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thread/:id",
    name: "Thread",
    component: Thread,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
