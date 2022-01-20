<template>
  <div id="cartcontrol">
    <div id="cartcontrol">
      <transition name="dj">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop="decreasecart"> </div>
      </transition>
      <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop="addCart" v-on:click="show =!show"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"; // Vue.set()
export default {
  name: "cartcontrol",
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      show: true
    };
  },

  methods: {
    addCart(event) {
      if (event._constructed) {
        if (!this.food.count) {
          //vue中动态设置对象的属性（响应式的） Vue.delete 同理
          Vue.set(this.food, "count", 1);
        } else {
          this.food.count++;
        }
      }
    },
    decreasecart(event) {
      if (event._constructed) {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  }
};
</script>


<style scoped lang="less">
@import "../../common/css/style.less";

#cartcontrol {
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    color: rgb(0, 160, 220);
    font-size: 24px;
    line-height: 24px;
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    color: rgb(0, 160, 220);
    font-size: 24px;
    line-height: 24px;
  }
}

.dj-enter-active,
.dj-leave-active {
  transition: all 0.4s linear;
}
.dj-enter-to,
.dj-leave {
  opacity: 1; //其实可以不用加，v-show display:none; 效果一样
  transform: translate3d(0, 0, 0) rotate(0deg);
}
.dj-enter,
.dj-leave-to {
  opacity: 0;
  transform: translate3d(24px, 0, 0) rotate(180deg);
}
</style>
