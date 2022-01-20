<template>
  <div id="app">
    <mt-header fixed title="固定在顶部">
      <span slot="left" v-show="flag">
        <mt-button icon="back" @click="goback">返回</mt-button>
      </span>
    </mt-header>

    <transition>
        <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (this.$route.path === "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path"(newVal, oldVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>


<style scoped lang="less">
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  h1 {
    z-index: 99;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    // 实现淡出淡入同时进行
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
}
</style>
