<template>
  <div class="photolist-container">
    <div id="wrapper" ref="wrapper">
      <ul class="content">
        <li>推荐</li>
        <li>热点</li>
        <li>社会</li>
        <li>北京</li>
        <li>娱乐</li>
        <li>科技</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// 使用better-scroll 或者 iscroll  必须搭配this.$nextTick 或者在 mounted 钩子函数里调用
export default {
  data() {
    return {
      cates: [] //所有分类的列表数组
    };
  },
  methods: {
    initScroll() {
      let wrapper = this.$refs.wrapper;
      let scroll = new BScroll(wrapper, { scrollX: true, scrollY: false });
    },
    getAllCategory() {
      // 获取所有的图片分类
      this.$http
        .get("api/getimgcategory")
        .then(res => {
          if (res.body.status === 0) {
            // 手动拼接出最完整的列表
            res.body.message.unshift({ title: "全部", id: 0 });
            this.cates = ress.body.message;
          }
        })
        .catch(err => {
          console.log("数据获取失败");
        });
    }
  },
  created() {
    this.getAllCategory();
    this.$nextTick(() => {
      this.initScroll();
    });
  }
};
</script>

<style lang="less" scoped>
.photolist-container {
  touch-action: pan-y;
  margin-top: -17px;
  overflow-x: hidden;
  #wrapper {
    width: 100%;
    padding: 0;

    .content {
      box-sizing: border-box;
      width: 480px;
      padding: 0;
      display: flex;
      li {
        list-style: none;
        flex: 0 0 100px;
        width: 100px;
        line-height: 35px;
        text-align: center;
      }
    }
  }
}
</style>

