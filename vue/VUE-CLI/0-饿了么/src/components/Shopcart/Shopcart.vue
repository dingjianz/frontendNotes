<template>
  <div>
    <div id="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highLight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highLight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highLight':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop="pay">
          <div class="pay" :class="{'enough':totalPrice>=20}">{{payDesc}}</div>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <div class="title">购物车</div>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fold">
      <div class="shop-mask" v-show="listShow" @click="hideList"></div>
    </transition>
  </div>

</template>

<script>
import Cartcontrol from "../Cartcontrol/Cartcontrol";
import Bscroll from "better-scroll";
export default {
  name: "shopcart",
  data() {
    return {
      fold: true
    };
  },
  props: {
    minPrice: {
      type: Number,
      default: 0
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default() {
        //数组、对象default都以函数形式返回
        return [];
      }
    }
  },
  methods: {
    toggleList() {
      if (!this.totalCount) {
        return;
      } else {
        this.fold = !this.fold;
      }
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    },
    pay() {
      if (this.totalPrice >= this.minPrice) {
        alert(`您需支付${this.totalPrice}元`);
      }
    },
    hideList(){
      this.fold = !this.fold;
    }
  },

  components: {
    Cartcontrol
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}起送`;
      } else {
        return "去结算";
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false; 
      }
      let show = !this.fold;
      if (show) {
        this.$nextTick(() => {
          if (!this.listScroll) {
            this.listScroll = new Bscroll(this.$refs.listContent, {
              click: true
            });
          } else {
            this.listScroll.refresh();
          }
        });
      }
      return show;
    }
  }
};
</script>


<style scoped lang="less">
@import "../../common/css/style.less";
/*------------------------------ shopcart */
#shopcart {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 48px;
  width: 100%;
  z-index: 101;

  .content {
    display: flex;
    background-color: #141d27;
    font-size: 0; //消除间隙
    .content-left {
      flex-grow: 1;
      height: 48px;
      .logo-wrapper {
        display: inline-block;
        width: 56px;
        height: 56px;
        position: relative;
        top: -10px;
        margin: 0 18px 2px 18px;
        padding: 6px;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #2b343c;
          text-align: center;
          &.highLight {
            background-color: rgb(0, 160, 220);
          }
        }
        .icon-shopping_cart {
          font-size: 24px;
          line-height: 44px;
          color: #80858a;
          &.highLight {
            color: #fff;
          }
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          font-size: 9px;
          color: rgb(255, 255, 255);
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          background-color: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        padding-right: 12px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        &.highLight {
          color: #fff;
        }
      }
      .desc {
        display: inline-block;
        position: relative;
        top: -10px;
        font-size: 10px;
        line-height: 24px;
        font-weight: 700;
        margin-left: 12px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        width: 100%;
        height: 100%;
        font-size: 12px;
        line-height: 48px;
        font-weight: 700;
        margin: 0 auto;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        background-color: #2b333b;
        &.enough {
          background-color: #00b43c;
          color: #fff;
        }
      }
    }
  }
  .shopcart-list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;

    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background-color: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
  .fold-enter-active {
    transition: all 1s;
  }
  .fold-leave-active {
    transition: all 5s;
  }
  .fold-enter,
  .fold-leave {
    transform: translate3d(0, 0, 0);
  }
  .fold-enter-to,
  .fold-leave {
    transform: translate3d(0, -100%, 0);
  }
}
.shop-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.6);
  -webkit-backdrop-filter: blur(10px);
}
</style>
