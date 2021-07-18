import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history",
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem("user");
  if (
    to.name !== "admin-login" &&
    to.path.indexOf("admin") >= 0 &&
    !isAuthenticated
  )
    next({ name: "admin-login" });
  else next();
});
export default router;
