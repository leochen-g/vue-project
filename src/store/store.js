/**
 * Created by geng on 2017/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: ''
  },
  mutations: {
    new_title (state, msg) {
      state.title = msg
    }
  }
})
export default store
