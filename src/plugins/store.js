import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      name: process.env.VUE_APP_NAME,
    },
  },
  mutations: {},
  actions: {},
  modules: {}
});
