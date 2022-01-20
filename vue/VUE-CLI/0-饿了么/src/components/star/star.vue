<template>
  <div id="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index">

    </span>
  </div>
</template>

<script type="text/ecmascript-6">
const Length = 5; //设置星星个数
const CLS_on = "on"; //设置满星className
const CLS_half = "half"; //设置半星className
const CLS_off = "off"; //设置0星className
export default {
  name: "star",
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },

  data() {
    return {};
  },

  methods: {},
  computed: {
    starType() {
      return "star-" + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2; //设置0.5的倍数
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_on);
      }
      if (hasDecimal) {
        result.push(CLS_half);
      }
      while (result.length < Length) {
        result.push(CLS_off);
      }
      return result;
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.bg-img(@url) {
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background: url("@{url}@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background: url("@{url}@3x.png");
  }
}
#star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
}
.star-48 {
  .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px !important;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    .bg-img("star48_on");
  }
  .half {
    .bg-img("star48_half");
  }
  .off {
    .bg-img("star48_off");
  }
  &.last-child {
    margin-right: 0;
    background-color: red;
  }
}

.star-36 {
  .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px !important;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    .bg-img("star36_on");
  }
  .half {
    .bg-img("star36_half");
  }
  .off {
    .bg-img("star36_off");
  }
}

.star-24 {
  .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px !important;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    .bg-img("star24_on");
  }
  .half {
    .bg-img("star24_half");
  }
  .off {
    .bg-img("star24_off");
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
