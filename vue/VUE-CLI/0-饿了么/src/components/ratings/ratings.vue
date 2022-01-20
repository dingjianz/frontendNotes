<template>
  <div id="ratings">
    <div id="wrapper" ref="wrapper">
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll";
export default {
  name: "ratings",
  data() {
    return {};
  },

  methods: {
    _initScroll() {
      this.scroll = new IScroll(this.$refs.wrapper);
    }
  },

  components: {},
  created() {
    this.$nextTick(() => {
          //等到DOM 元素更新完事以后在执行回调函数
          this._initScroll();
        });
  }
};
</script>


<style scoped>
</style>
