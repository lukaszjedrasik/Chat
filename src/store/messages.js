import Vue from "vue";
import axiosBase from "@/axios_base";

export default {
  namespaced: true,

  state: {
    messages: []
  },
  mutations: {
    SET_MESSAGES(state, data) {
      state.messages = data;
    }
  },
  actions: {
    async get({ commit, state }) {
      try {
        let { data } = await axiosBase("/messages.json");
        Vue.set(state.messages, data);
        commit("SET_MESSAGES", data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
