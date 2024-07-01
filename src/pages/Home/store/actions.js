import { getRegions } from "../api.js";

export default {
  async getRegions(context) {
    const response = await getRegions();

    context.commit("SET_REGIONS", response);
  },
};
