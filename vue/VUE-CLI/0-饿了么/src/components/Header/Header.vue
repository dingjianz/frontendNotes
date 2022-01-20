<template>
  <div id="Header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="回龙观" width="64" height="64">
      </div>
      <div class="seller">
        <div class="title">
          <span class="brand"></span>
          <span class="seller-name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <p>{{seller.supports[0].description}}</p>
        </div>
      </div>
      <div class="support-count" @click="showDetail">
        <span class="count" v-if="seller.supports">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-icon"></span>
      <span class="bulltein">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--头部 蒙板 -->
    <div class="mask">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <!-- 详细信息弹窗 -->
    <transition name="fade">
      <div class="detail" v-show="showMask">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <!-- 星星 -->
            <div class="star-wrapper">
              <Star :size="48" :score="seller.score"></Star>
            </div>
            <!-- 优惠信息 -->
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <!-- seller.supports -->
            <ul class="liebiao">
              <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <!-- 商家公告 -->
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="business">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hiddenDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Star from "../star/star";
export default {
  name: "Header",
  props: ["seller"],
  data() {
    return {
      showMask: false
    };
  },

  methods: {
    showDetail() {
      this.showMask = true;
    },
    hiddenDetail() {
      this.showMask = false;
    }
  },
  components: {
    Star
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>



<style scoped lang="less" rel="stylesheet/less"  type="text/css">
@font-face {
  font-family: "icomoon";
  src: url("../../common/fonts/icomoon.eot?3xttjv");
  src: url("../../common/fonts/icomoon.eot?3xttjv#iefix")
      format("embedded-opentype"),
    url("../../common/fonts/icomoon.ttf?3xttjv") format("truetype"),
    url("../../common/fonts/icomoon.woff?3xttjv") format("woff"),
    url("../../common/fonts/icomoon.svg?3xttjv#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}

.icon-add_circle:before {
  content: "\e900";
}
.icon-arrow_lift:before {
  content: "\e901";
}
.icon-close:before {
  content: "\e903";
}



.icon-keyboard_arrow_right:before {
  content: "\e905";
}




.bg-img(@url) {
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background: url("@{url}@3x.png") no-repeat center;
    background-size: 12px 12px;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background: url("@{url}@2x.png") no-repeat center;
    background-size: 12px 12px;
  }
}

#Header {
  position: relative;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.5);
    filter: blur(10px);
    z-index: -99;
  }

  .content-wrapper {
    font-size: 0;
    color: rgb(255, 255, 255);
    z-index: 20;
    position: relative;
    padding: 24px 12px 18px 24px;

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 7px 8px;
      font-size: 10px;
      line-height: 12px;
      border-radius: 10px;
    }

    .support-count .count {
      font-size: 12px;
      margin-left: 2px;

      .icon-keyboard_arrow_right {
        vertical-align: top;
        font-size: 12px;
      }
    }

    .avatar {
      display: inline-block;

      img {
        border-radius: 2px;
      }
    }

    .seller {
      display: inline-block;
      margin-left: 16px;
      vertical-align: top;
      margin-top: 2px;

      .title {
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
        margin-top: 2px;
        margin-bottom: 8px;

        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          background: url("./brand@2x.png") no-repeat center;
          background-size: 30px 18px;
        }
      }

      .description {
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 10px;
      }
    }

    .supports {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 2px;

      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        &.decrease {
          .bg-img("decrease_1");
        }

        &.discount {
          .bg-img("discount_1");
        }

        &.special {
          .bg-img("special_1");
        }

        &.invoice {
          .bg-img("invoice_1");
        }

        &.guarantee {
          .bg-img("guarantee_1");
        }
      }

      p {
        display: inline-block;
        vertical-align: top;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    color: #fff;
    height: 28px;
    background-color: rgba(7, 17, 27, 0.2);
    padding: 0 12px;

    .bulletin-icon {
      display: inline-block;
      width: 22px;
      height: 12px;
      background: url("./bulletin@2x.png") no-repeat center;
      background-size: 22px 12px;
      margin-right: 4px;
      vertical-align: 9px;
    }
    .bulltein {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 10px;
      line-height: 28px;
      margin-right: 4px;
      width: 90%;
    }

    .icon-keyboard_arrow_right {
      font-size: 10px;
      position: absolute;
      right: 12px;
      bottom: 7px;
    }
  }
  // detail
  .detail {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 199;
    background-color: rgba(7, 17, 27, 0.8);
    overflow: auto;

    .detail-wrapper {
      min-height: 100%;
      width: 100%;

      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;

        .name {
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .star-wrapper {
          text-align: center;
          margin-top: 16px;
          padding: 2px 0;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;

          .line {
            flex-grow: 1;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
            top: -6px;
          }
          .text {
            color: #fff;
            font-size: 14px;
            padding: 0 12px;
            font-weight: 700;
          }
        }

        .liebiao {
          width: 80%;
          margin: 0 auto;
          color: #fff;

          .support-item {
            margin-bottom: 12px;

            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              vertical-align: top;
              margin-right: 6px;
              &.decrease {
                .bg-img("decrease_1");
              }
              &.discount {
                .bg-img("brand");
              }

              &.special {
                .bg-img("special_1");
              }

              &.invoice {
                .bg-img("invoice_1");
              }

              &.guarantee {
                .bg-img("guarantee_1");
              }
            }

            .text {
              font-size: 12px;
              font-weight: 200;
              color: rgb(255, 255, 255);
              line-height: 16px;
            }
          }
        }
        .business {
          width: 80%;
          margin: 0 auto;
          line-height: 24px;

          .content {
            padding: 0 12px;
            color: rgb(255, 255, 255);
            font-size: 12px;
            font-weight: 200;
            text-align: left;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
      color: rgba(255, 255, 255, 0.5);
    }
    .clearfix {
      display: inline-block;
      &:after {
        display: block;
        content: "";
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
      }
    }
    // 动画效果
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  
  }
}
</style>
