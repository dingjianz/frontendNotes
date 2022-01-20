<template>
    <div class="shopcar-container">
        <div class="mui-card card1">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch class="btn"></mt-switch>
                    <img src="../../images/img4.jpg" alt="">
                    <div class="info">
                        <h4>小米(Mi)小米Note 16G双网通版</h4>
                        <div>
                            <span class="price">￥2199</span>
                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='60'>
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="1" />
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                            </div>
                            <a href="javascript:;">删除</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card card2">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <div class="left">
                      <p>总计(不含运费)：</p>
                      <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
                  </div>
                 <mt-button type="danger">结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .card1 {
    .btn {
      display: inline-block;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: -5px;
    }
    .info {
      display: inline-block;
      padding-left:15px;
      h4 {
        font-size: 13px;
        margin-bottom: 8px;
      }
      > div {
        .price {
          color: red;
        }
        .mui-numbox{
            height: 25px;
        }
      }
    }
  }
  .card2{
      .mui-card-content-inner{
          display:flex;
          justify-content: space-between;
          align-items: center;
          .red{
              color: red;
              font-size: 16px;
              font-weight: bold;
          }
      }
  }
}
</style>
