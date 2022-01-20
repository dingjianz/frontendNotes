<template>
  <div id="app">
    <h1>这是app组件</h1>
    <hr>
    <counter></counter>
    <hr>
    <amount></amount>
    {{$store.state.moduleA.aaa}}
    <button @click="addAaa">moduleA中的mutations</button>
    <button @click="getList">moduleA中的actions</button>
  </div>
</template>

<script>
import counter from "./components/counter"
import amount from "./components/amount"
import {mapMutations,mapActions} from "vuex"
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    counter,
    amount
  },
  methods: {
    ...mapMutations(["addAaa"]),
     ...mapActions(["getList"])
  },
  computed: {
   
  }
};
</script>

<style  lang="less" scoped>
</style>
