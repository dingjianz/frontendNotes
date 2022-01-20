<template>
  <div id="app">

    <ul>
      <router-link to="/home" tag="li">HOME</router-link>
      <router-link to="/LIST" tag="LI">list</router-link>
    </ul>
    <router-view/>
   
  </div>
</template>

<script>
import icon from "./components/Icon.vue";
export default {
  name: "App"
};
</script>

<style>
</style>
