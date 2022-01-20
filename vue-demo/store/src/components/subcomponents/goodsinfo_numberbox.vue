<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='60'>
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" v-model="selectCount" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectCount: 1
    };
  },
  watch: {
    selectCount(newValue, oldValue) {
      this.$emit("getCount", parseInt(newValue));
    }
  },
  mounted() {
    this.selectCount = this.$refs.numbox.value;
  }
};
</script>

<style lang="less" scoped>
</style>

