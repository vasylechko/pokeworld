import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,

  state: {
    userId: "",
    userInfo: {
      token: "",
      email: "",
      refreshToken: "",
      expiresIn: "",
    },
    data: {
      createdAt: null,
      lastLoginAt: null,
      creationTime: null,
      lastSignInTime: null,
    },
  },

  mutations,
  actions,
};
