<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>

  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  name: "App",
  data() {
    return {
      seller: {},
      goods: {},
      ratings: {}
    };
  },
  methods: {},
  created() {
    this.$http.get("../static/data.json").then(
      res => {
        this.seller = res.body.seller;
        this.goods = res.body.goods;
        this.ratings = res.body.ratings;
      },
      response => {
        // 响应错误回调
        alert("服务器请求失败");
      }
    );
  },
  components: {
    "my-header": Header,
  }
};
</script>

<style scoped  lang="less">
@charset "utf-8";

#app {
  @h: 40px;
  .tab {
    display: flex;
    width: 100%;
    height: @h;
    line-height: 40px;

    &-item {
      flex-grow: 1;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 88, 93);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      z-index: 12;//menu-wapper上移1px，为防止遮盖
    }
  }
  .router-link-active {
    color: rgb(240, 20, 20);
  }
}
</style>
