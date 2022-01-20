<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
       <h3 class="title">{{newsinfo.title}}</h3>
       <!-- 子标题 -->
       <p class="subtitle">
           <span>发表时间{{newsinfo.add_time| dateFormat}}</span>
           <span>点击 {{newsinfo.click}} 次</span>
       </p>
       <hr>
       <!-- 内容区域 -->
       <div class="content" v-html="newsinfo.content">
           <!-- newsinfo.content  是一个html info ，所以用 v-html -->
       </div>
       <!-- 评论区 -->
       <comment :id="this.id"></comment>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
import {dateFormat} from "../../filters/dateFormat"
import comment from "../subcomponents/comment"
export default {
  name: "newsinfo",
  data() {
    return {
        id:this.$route.params,//将URL 地址中国产地过来的id值，挂在到data中，方便 以后调用
        newsinfo:[]
    };
  },
  methods: {
      getNewsInfo(){//获取新闻详情
        this.$http.get("api/getnew/"+this.id).then((res)=>{
            if(res.body.status ===0){
                this.newsinfo = res.body.message[0]
            }else{
                Toast("获取新闻失败")
            }
        })
      }
  },
  created() {
      this.getNewsInfo()
  },
  components:{
      comment
  }
};
</script>

<style lang="less" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color:red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width:100%; 
            }
        }
    }
</style>

