<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 谁使用轮播图组件，直接传递 list -->
            <mt-swipe-item v-for="item in list" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
