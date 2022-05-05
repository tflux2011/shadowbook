import { HTTP_REQUEST } from "../../http-config/http-req";

const state = {
  users: null,
};

const getters = {
  GET_USERS: (state) => state.users,
};
const actions = {
  FETCH_USERS: async function(context) {
    const httpReq = {
      url: `/api/users`,
      method: "GET",
      authRequest: true,
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_USERS", httpRes);
    return httpRes;
  },
  FETCH_USER: async function(context, {id}) {
    const httpReq = {
      url: `/api/posts/${id}`,
      method: "GET",
      authRequest: true,
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_USERS", httpRes);
    return httpRes;
  },
  CREATE_USER: async function(context, payload) {
    const httpReq = {
      url: `/api/users`,
      method: "POST",
      authRequest: true,
      body: payload
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_USERS", httpRes);
    return httpRes;
  },

  UPDATE_USERS: async function(context, {id, payload}) {
    const httpReq = {
      url: `/api/users/${id}`,
      method: "PUT",
      authRequest: true,
      body: payload
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_USERS", httpRes);
    return httpRes;
  },

};
const mutations = {
  SET_USERS: (state, data) => {
    state.users = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
