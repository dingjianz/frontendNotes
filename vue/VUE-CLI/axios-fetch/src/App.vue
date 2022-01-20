<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    //fetch
  /*
  fetch ("/apis/test/testToken.php",{
    method:"post",
    headers:{
      "Content-type":"application/json",
      token:"f4c902c9ae5a2a9d8f84868ad064e706"
    },
    body:JSON.stringify({username:"dingjian",password:121212}),
  }).then(result=>{
    return result.json();
  }).then(data=>{
    console.log(data);
    
  });
  */
    //axios main.js 里面还设置了相关内容
    this.$axios.post("/apis/test/testToken.php",{username:"dingjian",password:121212})
    .then(data=>{
      console.log(data);
      
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
