<template>
  <div class="all">
      <h3>所有事项</h3>
  <ul>
       <li v-for="datas in list" :key="datas"> 
           <input type="checkbox" v-model="datas.isChecked">
          <span :class="{dele:datas.isChecked}">{{datas.text}}</span>
        </li>
  </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "all",
  data() {
    return {
      msg: "dj"
    };
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style scoped lang="less">
.dele{
    text-decoration: line-through;
}
</style>
