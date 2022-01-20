import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
//定义一个数据结构。Store中至少要注入两项，state 和 mutation。
const store = new Vuex.Store({
  state: {
    // state就是根据你项目的需求
    count:0,
    list: []
  },
  mutations: {
    add: (state, payload) => {
      console.log(payload);
      state.list.push(payload);
    },
    jia(state){
      return state.count++;
    },
    remove(state){
      return store.state.count--;
    }
  },
  getters: {
    activelist(state) {
      return state.list.filter(listitem => listitem.isChecked === false);
    },
    completed(state){
        return state.list.filter(listitem => listitem.isChecked === true);
    },
    uncompleted(state){
        return state.list.filter(listitem => listitem.isChecked === false).length;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
});
export default store;
