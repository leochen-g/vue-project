/**
 * Created by geng on 2017/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '娱票儿-电影票'
  },
  mutations: {
    new_title (state, msg) {
      state.title = msg
    }
  },
  actions: {
  }
})
export default store
