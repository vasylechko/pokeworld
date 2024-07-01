import { createWebHistory, createRouter } from "vue-router";

import { loadLayoutMiddleware } from "./middleware/loadLayoutMiddleware.js";

import HomeRouters from "../pages/Home/routes.js";
import PokemonsRouters from "../pages/Pokemon/routes.js";
import ProfileRouters from "../pages/Profile/routes.js";
import UserRouters from "../pages/User/routes.js";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...HomeRouters, ...PokemonsRouters, ...ProfileRouters, ...UserRouters],
});

routes.beforeEach(loadLayoutMiddleware);

export default routes;
