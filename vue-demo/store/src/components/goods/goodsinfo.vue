<template>
    <div class="goodsinfo-container">
        <!-- 小球 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../../images/img4.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../images/img5.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../images/img6.jpg" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">小米(Mi)小米Note 16G双网通版</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>￥2399</del> &nbsp;&nbsp; 销售价：
                        <span class="nowprice">￥2199</span>
                    </p>
                    <p>购买数量：
                        <numberbox class="numberbox" @getCount="getSelectedCount"></numberbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--  商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：SD2932214404</p>
                    <p>库存情况：60 件</p>
                    <p>上架时间：2015-04-20 01：19:30</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
import numberbox from "../subcomponents/goodsinfo_numberbox";
export default {
  data() {
    return {
      ballFlag: false, //控制小球隐藏显示的标识符
      selectedCount: 1 //保存用户选中的商品数量，默认至少买一件
    };
  },
  methods: {
    goDesc() {
      // 编程式路由
      this.$router.push({ name: "goodsdesc" });
    },
    goComment() {
      this.$router.push({ name: "goodscomment" });
    },
    addToShopCar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
      // 
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      let x1 = el.getBoundingClientRect().left;
      let y1 = el.getBoundingClientRect().top;

      //   获取不到 父组件的元素 this.$refs.badge,DOM 可以获得dom
      //   let x2 = this.$refs.badge.getBoundingClientRect().left
      //   let y2 = this.$refs.badge.getBoundingClientRect().top

      const badge = document.getElementsByClassName("mui-badge")[0];
      let x2 = badge.getBoundingClientRect().left;
      let y2 = badge.getBoundingClientRect().top;

      const x = parseInt(x2 - x1);
      const y = parseInt(y2 - y1);

      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 0.5s ease";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
      this.selectedCount = count;
      console.log("this.selectedCount" + this.selectedCount);
    }
  },
  components: {
    numberbox
  }
};
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  // 将顶部出去的白色块去掉
  overflow: hidden;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      text-align: center;
      img {
        //   width: 100%;
        height: 100%;
      }
    }
  }
  .nowprice {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .numberbox {
    display: inline-block;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 30;
    top: 390px;
    left: 152px;
  }
}
</style>

