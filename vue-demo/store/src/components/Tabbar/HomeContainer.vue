<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../images/img1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/img2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/img3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/list">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yezi"></use>
            </svg>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/photolist">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiangjiao"></use>
            </svg>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/goodslist">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yingtao"></use>
            </svg>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xigua"></use>
            </svg>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-boluo"></use>
            </svg>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chengzi"></use>
            </svg>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "mint-ui";
Vue.component(Toast.name, Toast);
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    getLunbotu() {
      /*
          this.$http.get("http://vue.studyit.io/api/getlunbo").then(
            res => {
              console.log(res.body);
            },
            err => {
              Toast({
                message: "数据获取失败",
                duration: 3000
              });
            }
          );*/
    }
  },
  created() {
    this.getLunbotu();
  }
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
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  .mui-table-view-cell {
    border: 0;
  }
  .icon {
    font-size: 25px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>
