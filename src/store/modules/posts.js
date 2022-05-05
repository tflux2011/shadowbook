import { HTTP_REQUEST } from "../../http-config/http-req";

const state = {
  posts: null,
};

const getters = {
  GET_POSTS: (state) => state.posts,
};
const actions = {
  FETCH_POSTS: async function(context) {
    const httpReq = {
      url: `/api/posts`,
      method: "GET",
      authRequest: true,
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_POSTS", httpRes);
    return httpRes;
  },
  FETCH_POST: async function(context, {id}) {
    const httpReq = {
      url: `/api/posts/${id}`,
      method: "GET",
      authRequest: true,
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_POSTS", httpRes);
    return httpRes;
  },
  CREATE_POST: async function(context, payload) {
    const httpReq = {
      url: `/api/posts`,
      method: "POST",
      authRequest: true,
      body: payload
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_POSTS", httpRes);
    return httpRes;
  },

  UPDATE_POSTS: async function(context, {id, payload}) {
    const httpReq = {
      url: `/api/posts/${id}`,
      method: "PUT",
      authRequest: true,
      body: payload
    };
    const httpRes = await HTTP_REQUEST(httpReq);
    context.commit("SET_POSTS", httpRes);
    return httpRes;
  },

};
const mutations = {
  SET_POSTS: (state, data) => {
    state.posts = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
