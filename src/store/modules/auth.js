import { HTTP_REQUEST } from "../../http-config/http-req";

const state = {
  login: null,
};

const getters = {
  GET_LOGIN: (state) => state.login,
};
const actions = {
  LOGIN_USER: async function(context, payload) {
    const httpReq = {
      url: `/api/auth`,
      method: "POST",
      authRequest: true,
      body: payload,
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_LOGIN", httpRes);
    return httpRes;
  }

};
const mutations = {
  SET_LOGIN: (state, data) => {
    state.login = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
