<template>
  <div>
    <div id="goods">
      <div class="menu-wrapper" ref="menu">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" v-bind:class="{current:currentIndex === index}" @click="selectMenu(index,$event)" v-bind:key="index">
            <span class="text">
              <i class="icon" :class="classMap[item.type]" v-show="item.type > 0"></i>
              {{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foods">
        <ul>
          <li v-for="(item,index) in goods" class="goods-list food-list-hook" v-bind:key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(food,index) in item.foods" @click="selectFood(food,$event)" :key="index">
                <div class="icon">
                  <img :src="food.icon" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="sellNum">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice" :selectFoods="selectFoods"></shopcart>
    </div>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import Shopcart from "../Shopcart/Shopcart";
import Cartcontrol from "../Cartcontrol/Cartcontrol";
import Food from "../Food/Food";
export default {
  name: "goods",
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  props: {
    seller: {
      type: Object
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new Bscroll(this.$refs.menu, {
        click: true
      });
      this.foodsScroll = new Bscroll(this.$refs.foods, {
        probeType: 3,
        click: true
      });
      this.foodsScroll.on("scroll", position => {
        this.scrollY = Math.abs(Math.round(position.y)); //代表当前纵轴滚动位置
      });
    },
    _calculateHeight() {
      let foodsList = this.$refs.foods.getElementsByClassName("food-list-hook"); //获得foods下所有子元素
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodsList.length; i++) {
        height += foodsList[i].offsetHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index, event) {
      if (event._constructed) {
        //手机端的点击才有.constructed属性，pc端点击没有此属性，不设置此条件，pc端点击时回调函数会两次执行，一个是本身点击，一个是派发给移动端
        let foodsList = this.$refs.foods.getElementsByClassName(
          "food-list-hook"
        );
        let el = foodsList[index];
        this.foodsScroll.scrollToElement(el, 300); //better-scroll的api接口scrollToElement(element,time[option])
      }
    },
    selectFood(food, event) {
      if (!event._constructed) {
        return;
      }

      this.$refs.food.show(); //父组件可以调用子组件方法，子组件调用不了父组件方法
      return (this.selectedFood = food);
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if ((this.scrollY >= height1 && this.scrollY < height2) || !height2) {
          //最后一个listHeight为undefined
          return i;
        }
      }
      return 0; //如 果listHeight不存在返回0
    },
    selectFoods() {
      let selectedFood = []; //选取后的食物数组
      this.goods.forEach(item => {
        item.foods.forEach(food => {
          if (food.count) {
            selectedFood.push(food);
          }
        });
      });
      return selectedFood;
    }
  },

  components: {
    Shopcart,
    Cartcontrol,
    Food
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$http.get("../static/data.json").then(
      res => {
        this.goods = res.body.goods;
        this.$nextTick(() => {
          //等到DOM 元素更新完事以后在执行回调函数
          this._initScroll();
          this._calculateHeight();
        });
      },
      response => {
        // 响应错误回调
        alert("服务器请求失败");
      }
    );
  }
};
</script>


<style scoped lang="less">
.bg-img(@url) {
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background: url("@{url}@3x.png") no-repeat center;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background: url("@{url}@2x.png") no-repeat center;
  }
}
#goods {
  display: flex;
  position: absolute;
  top: 182px;
  padding-bottom: 46px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px; //兼容安卓手机
    background-color: #f3f5f7;
    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      &.current {
        position: relative;
        margin-top: -1px;
        z-index: 10; //向上偏移1px,并盖住
        font-weight: 700;
        background-color: #fff;
        .text {
          border-bottom: 0;
        }
      }
      .text {
        display: table-cell;
        vertical-align: middle;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        font-size: 12px;
        line-height: 14px;
        font-weight: 200;
        color: black;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px !important;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease {
            .bg-img("decrease_3");
          }

          &.discount {
            .bg-img("discount_3");
          }

          &.special {
            .bg-img("special_3");
          }

          &.invoice {
            .bg-img("invoice_3");
          }

          &.guarantee {
            .bg-img("guarantee_3");
          }
        }
      }
    }
  }
  .foods-wrapper {
    flex-grow: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgba(147, 153, 159, 1);
      background: #f3f5f7;
    }
    .food-item {
      position: relative;
      display: flex;
      margin: 18px;
      margin: 18px 18px 0 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      &:last-child {
        border-bottom: 0;
      }
      .icon {
        margin-right: 10px;
        flex: 0 0 57px;
      }
      .name {
        font-size: 14px;
        line-height: 14px;
        color: rgb(7, 17, 27);
        margin-top: 2px;
        margin-bottom: 8px;
      }
      .desc {
        font-size: 10px;
        line-height: 18px;
        color: rgb(147, 153, 159);
        margin-bottom: 8px;
      }
      .extra {
        font-size: 10px;
        line-height: 10px;
        color: rgb(147, 153, 159);
        .sellNum {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
          margin-right: 8px;
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .cartcontrol-wrapper {
        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }
  }
}
</style>
