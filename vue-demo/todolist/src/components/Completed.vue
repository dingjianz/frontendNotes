<template>
  <div class="completed">
    <h3>completed</h3>
    <ul>
        <li v-for="datas in completed" :key="datas">
            <input type="checkbox" v-model="datas.isChecked">
            <span :class="{dele:datas.isChecked}">{{datas.text}}</span>
            </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "completed",
  data() {
    return {};
  },
  computed: {
      ...mapGetters(["completed"])
  }
};
</script>

<style scoped lang="less">
.dele{
    text-decoration: line-through;
}
</style>
