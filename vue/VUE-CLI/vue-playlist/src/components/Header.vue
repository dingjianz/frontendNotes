<template>
  <div class="header" @click='changeTitle'>
   <h1>{{test}}--{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ["title"],
  data () {
    return {
      test:'Vue demo'
    }
  },
  methods: {
    changeTitle(){
      this.$emit('titleChange',"子向父组件传值");
    }
  },
  //  beforeCreate () {
  //   alert('组件实例化之前执行的函数');
  // },
  // created () {
  //   alert('组件实例化完毕，但页面还未显示');
  // },
  // beforeMount () {
  //   alert('组件挂载前，页面仍未显示，但虚拟DOM已经配置完毕');
  // },
  // mounted () {
  //   alert("组件挂载后，此方法执行后，页面显示");
  // },
  // beforeUpdate () {
  //   alert("组件更新前，页面仍未显示，但虚拟DOM已经配置完毕")
  // },
  // updated () {
  //   alert("组件更新后，此方法执行后，页面显示");
  // },
  // beforeDestroy () {
  //   alert('组件销毁前');
  // },
  // destroyed () {
  //   alert("组件已经被销毁");
  // }
}
</script>

<style scoped >
.header{
    background-color: lightgreen;
    width:100%;
    text-align: center;
    padding: 10px;
}
</style>
