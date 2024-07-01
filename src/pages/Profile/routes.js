import { getAuth, onAuthStateChanged } from "firebase/auth";

const checkAuth = (to, from, next) => {
  let isAuth = false;

  onAuthStateChanged(getAuth(), (user) => {
    if (user && !isAuth) {
      isAuth = true;

      next();
    } else if (!user && !isAuth) {
      isAuth = true;

      next("/login");
    }
  });
};

export default [
  {
    path: "/profile",
    name: "Profile",
    component: () => import("./views/main/Page.vue"),
    beforeEnter: checkAuth,
  },
];
