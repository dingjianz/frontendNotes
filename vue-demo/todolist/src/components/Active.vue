<template>
  <div id="active">
      <h3>active</h3>
      <ul>
          <li v-for="datas in activelist" :key="datas">
              <input type="checkbox" v-model="datas.isChecked">
              <span>{{datas.text}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'active',
  data () {
    return {
   
    }
  },
   computed: {
       ...mapGetters(["activelist"])
  }
}
</script>

<style scoped lang="less">

</style>
