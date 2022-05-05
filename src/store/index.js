import Vue from "vue";
import Vuex from "vuex";

import posts from "../store/modules/posts";
import auth from "../store/modules/auth";
import users from "../store/modules/users"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  modules: {
    auth,
    posts,
    users
  },
  plugins: [],
});