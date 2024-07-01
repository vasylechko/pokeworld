import { createStore } from "vuex";

import user from "./pages/User/store/index.js";
import pokemon from "./pages/Pokemon/store/index.js";
import home from "./pages/Home/store/index.js";

const store = createStore({
  modules: { user, pokemon, home },
});

export default store;
