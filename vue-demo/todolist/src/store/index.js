import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
const moduleA = {
  // module中的aaa访问要this.$store.state.moduleA.aaa
  // module中的getters，actions，mutations跟以前一样使用
  state:{
    aaa:6666
  },
  mutations:{
    addAaa(state){
      state.aaa++
    }
  },
  actions: {
    getList(){
      axios.get('https://www.easy-mock.com/mock/5b7ec6e7a110b56227dce9b5/example/query').then(res=>{
        console.log(res.data)
      }).catch(err=>{
        throw err
      })
    }
  }
}
const store = new Vuex.Store({
  modules:{
    moduleA
  },
  state: {
    // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的
    // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
    count: 10,
    num:222
  },
  mutations: {
    // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
    // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')
    increment(state) {
      state.count++
    },
    decrease(state, c) {
      // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
      state.count -= c
    }
  },
  actions:{
    // 在actions里面，可以简写{commit，dispatch}等等
    getListAction({commit,dispatch}){
      axios.get('https://www.easy-mock.com/mock/5b7ec6e7a110b56227dce9b5/example/query').then(res=>{
        console.log(res.data)
      }).catch(err=>{
        throw err
      })
    }
  },
  getters: {
    // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations
    optCount(state) {
      // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；
      // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；
      return "当前数值是：" + state.count
    }
  }
})
// 总结：
// 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
// 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***
// 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数:可以是对象，数组等)
// 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***




export default store
