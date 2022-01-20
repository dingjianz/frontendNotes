<!--模板：html结构 -->
<template>
  <div id="app">
    <router-link to='/home'>点我</router-link>
    <router-view></router-view>
    <Header @titleChange='updateTitle($event)' v-bind:title="titleMsg"></Header>
    <users v-bind:some = "users"></users>
    <button @click="deletUser">删除ueser</button>
    <Footer v-bind:title="titleMsg"></Footer>
  </div>
</template>

<!--行为：处理逻辑-->
<script>
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
export default {
  name: 'App',
  data() {
    return {
      titleMsg:"传递的是一个值",
       users: [
        // { name: "henry", position: "Web开发", show: false },
        // { name: "tom", position: "CEO", show: false },
        // { name: "丁磊", position: "经理", show: false },
        // { name: "王东", position: "总监", show: false },
        // { name: "丁鑫", position: "技术指导", show: false },
        // { name: "丁士明", position: "后勤", show: false },
        // { name: "丁邦松", position: "秘书", show: false },
        // { name: "丁泽宇", position: "实习生", show: false },
        // { name: "丁士宏", position: "外包人员", show: false },
        // { name: "丁昭华", position: "董事长", show: false },
        // { name: "丁健", position: "总裁", show: false }
      ]
    }
  },

  methods: {
    updateTitle (someThing) {
      this.titleMsg = someThing;
    },
    deletUser(){
      this.users.pop();
    }
  },
  created () {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
      this.users = data.body;
    },(err)=>{
      throw err;
    })
  },
  // beforeUpdate () {
  //   alert("组件更新前，页面仍未显示，但虚拟DOM已经配置完毕")
  // },
  // updated () {
  //   alert("组件更新后，此方法执行后，页面显示");
  // },
  components:{
    Users,
    Header,
    Footer
  }
}

</script>

<!--样式：解决样式 -->
<style scoped>
  h1{
    color: green;
  }
</style>
