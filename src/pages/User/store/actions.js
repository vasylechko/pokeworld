import { registerUser, loginUser, signOutUser } from "../api.js";

export default {
  async registerUser({ commit }, userData) {
    const response = await registerUser(userData);

    commit("SET_USER_INFO", response);
  },

  async loginUser({ commit }, userData) {
    const response = await loginUser(userData);

    commit("SET_USER_INFO", response);
  },

  async logOutUser() {
    await signOutUser();
  },
};
