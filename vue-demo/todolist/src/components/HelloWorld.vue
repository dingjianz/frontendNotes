<template>
  <div class="hello">
    <button @click="jia">点击jia</button>
    <button @click="remove">点击remove</button>
    <br>
    <div>Hello</div>
  {{count}}
  <All></All>
  </div>
</template>

<script>
import All from 'components/All.vue'
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
     jia() {
      this.$store.commit("jia");
    },
    remove() {
        this.$store.commit("remove");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  components: {
    All
  }
};
</script>

<style scoped lang="less">
</style>
