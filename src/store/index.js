import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  name: '张三',
  age: 18,
  list: [
    {
      id: 1,
      name: '111'
    },
    {
      id: 2,
      name: '222'
    },
    {
      id: 3,
      name: '333'
    }
  ]
};
const getters = {
  getMessage(state) {
    return `hello${state.name}`;
  }
};
const mutations = {
  setName(state, params) {
    state.name = params;
  },
  setAge(state, params) {
    state.age = params;
  }
};
const actions = {
  setAge(content,params) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('content',content)
        console.log('content.state.age',content.state.age)
        content.commit('setAge',params);
        resolve()
      }, 1000);
    });
  }
};
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store;
