<template>
    <transition name="move">
        <div id="food" v-show="showFlag">
            <div class="food-content"></div>
            <div class="image-header">
                <img src="food.image ">
                <div class="back">
                    <i class="icon-arrow_lift" @click="hide"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: "food",
  data() {
    return {
      showFlag: false
    };
  },
  props: {
    food: {
      type: Object
    }
  },

  methods: {
    show() {
      this.showFlag = true;
    },
    hide(){
        this.showFlag =false;
    }
  },

  components: {}
};
</script>


<style scoped lang="less">
@import "../../common/css/style.less";
#food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  background-color: #ccc;
  .image-header{
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
    //  height:0; padding-bottom(top):100%; 相对于宽度 保证一个正方形  是奇淫技巧
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .back{
        position: absolute;
        top: 10px;
        left: 0;
        .icon-arrow_lift{
            display: block;
            padding: 10px;
            font-size: 20px;
            color: #fff;
        }
    }
  }
}
.move-enter-active,.move-leave-active {
  transition: all 0.2s linear;
}
.move-enter-to,.move-leave {
  transform: translate3d(0, 0, 0);
}
.move-enter,.move-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
