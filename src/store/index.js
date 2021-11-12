import Vuex from 'vuex'
import Vue from 'vue'
// import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBarHeight: 0,
  },
  getters: {
    navBarHeight: state => {
      return state.navBarHeight
    }
  },
  mutations: {
    setNavBarHeight(state, height) {
      state.navBarHeight = height
    }
  },
  actions: {
    setNavBarHeight(context, height) {
      context.commit('setNavBarHeight', height)
    }
  }
});