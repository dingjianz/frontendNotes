<template>
    <div>
        <h1>这是登录组件，使用 .vue组件定义出来的---{{msg}}</h1>
    </div>
</template>

<script>
export default {
  data() {
    //组件中的 data 必须是 function
    return {
        msg:"hello world"
    };
  },
  methods:{
      show(){
          console.log("调用了 Login.vue 中的 show 方法");
          
      }
  }
};
</script>

<style lang="less" scoped>
</style>
