export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/login/Page.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/register/Page.vue"),
    meta: {
      layout: "auth",
    },
  },
];
