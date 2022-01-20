new Vue({
    el: '#app',
    data: {
        // 购物车中的数据
        shopListArr: [],
        // 是否全选
        isSelectedAll: false,
        // 所有商品的总价格
        totalPrice: 0,
        // 是否隐藏删除面板
        isHidden: true,
        // 当前要删除的一个商品
        currentShop: {}
    },
    // 组件已经加载完毕, 请求网络数据, 业务处理
    mounted() {
        // 请求本地的数据
        this.getLocalData();
    },
    // 过滤
    filters: {
        //格式化金钱
        moneyFormat(money) {
            return '￥' + money.toFixed(2);
        }
    },
    methods: {
        // 1. 请求本地的数据
        getLocalData() {
            this.$http.get('./data/cart.json').then(response => {
                const res = response.body;
                if (res) {
                    this.shopListArr = res.allShops.shopList;
                }
            }, response => {
                alert('请求数据失败！');

            });
        },
        singerShopPrice(shop, flag) {
            if (flag) { //true加
                shop.shopNumber += 1;
            } else {
                if (shop.shopNumber <= 1) {
                    shop.shopNumber = 1;
                    return;
                }
                shop.shopNumber -= 1;
            }
            this.getTotalPrice();
        },
        // 3. 选中所有的商品
        selectAll(flag) {
            // 3.1 总控制
            this.isSelectedAll = !flag;
            // 3.2 遍历所有的商品数据
            this.shopListArr.forEach((value, index) => {
                if (typeof value.checked === 'undefined') {
                    //设置属性
                    this.$set(value, 'checked', !flag);
                }
                value.checked = !flag;
            });
            // 3.3 计算总价格
            this.getTotalPrice();
        },
        // 4. 计算商品的总价格
        getTotalPrice() {
            let totalprice = 0;
            // 4.1 遍历所有的商品
            this.shopListArr.forEach((value, index) => {
                // 判断商品是否被选中
                if (value.checked) {
                    totalprice += value.shopNumber * value.shopPrice;
                }
            });
            this.totalPrice = totalprice;//放在上边一行就会出现删除完以后总价格为最后一个删除商品的价格
        },
        // 5. 单个商品的选中和取消
        singerSelected(shop) {
            // 5.1 判断有没有这个属
            if (!shop.checked) {
                this.$set(shop, 'checked', true);
            } else {
                shop.checked = !shop.checked;
            };
            // 5.2 计算总价
            this.getTotalPrice();
            // 5.3 判断是否全选
            this.hasSelectedAll();
        },
        // 6. 判断是否全选
        hasSelectedAll() {
            let flag = true;
            this.shopListArr.forEach((value, index) => {
                if (!value.checked) {
                    flag = false;
                }
            });
            this.isSelectedAll = flag;
        },
        // 7. 点击垃圾篓
        delShop(shop) {
            this.isHidden = false;
            this.currentShop = shop;
        },
        // 8. 删除当前的商品
        isDel() {
            // 8.1 隐藏面板
            this.isHidden = true;
            let index = this.shopListArr.indexOf(this.currentShop);
            this.shopListArr.splice(index, 1);
            // 8.2 计算总价格
            this.getTotalPrice();
        }
    }
});