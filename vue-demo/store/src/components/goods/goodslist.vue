<template>
    <div class="goodslist">
       <div class="goods-item" @click="goDetail(id)">
           <img src="../../images/img4.jpg">
           <h1 class="title">小米（Mi)Note 16G双网通版</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥2199</span>
                   <span class="old">￥2699</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩60件</span>
               </p>
           </div>
       </div>

       <div class="goods-item">
           <img src="../../images/img5.jpg">
           <h1 class="title">小米（Mi)Note 16G双网通版</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥2199</span>
                   <span class="old">￥2699</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩60件</span>
               </p>
           </div>
       </div>

       <div class="goods-item">
           <img src="../../images/img6.jpg">
           <h1 class="title">小米（Mi)Note 16G双网通版</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥2199</span>
                   <span class="old">￥2699</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩60件</span>
               </p>
           </div>
       </div>

    </div>
</template>

<script>
export default {
    methods:{
        goDetail(id){
            // 编程式路由https://router.vuejs.org/zh/guide/essentials/navigation.html
            this.$router.push({name:"goodsinfo",params:{id}})

        }
    }
};
</script>

<style lang="less" scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
   justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px;
        margin: 3px 0; 
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
           width: 100%;
           height: 150px; 
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left:10px;
                }
            }
            .sell{
                display:flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>

