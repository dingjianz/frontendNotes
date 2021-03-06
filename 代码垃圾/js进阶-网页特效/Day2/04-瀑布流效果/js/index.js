window.onload = function () {
    // 1. 实现瀑布流布局
    waterFull("main", "box");

    // 2. 动态加载图片
    window.onscroll = function () {
        if(checkWillLoadImage()){
            // 2.1 造数据
            var dataArr = [
                { "src": "images/img01.jpg" },
                { "src": "images/img02.jpg" },
                { "src": "images/img03.jpg" },
                { "src": "images/img04.jpg" },
                { "src": "images/img05.jpg" },
                { "src": "images/img36.jpg" },
                { "src": "images/img07.jpg" },
                { "src": "images/img08.jpg" },
                { "src": "images/img09.jpg" },
                { "src": "images/img10.jpg" },
                { "src": "images/img11.jpg" },
                { "src": "images/img12.jpg" },
                { "src": "images/img13.jpg" },
                { "src": "images/img14.jpg" },
                { "src": "images/img15.jpg" },
                { "src": "images/img16.jpg" },
                { "src": "images/img17.jpg" },
                { "src": "images/img18.jpg" },
                { "src": "images/img19.jpg" },
                { "src": "images/img20.jpg" },
                { "src": "images/img21.jpg" },
                { "src": "images/img22.jpg" },
                { "src": "images/img23.jpg" },
                { "src": "images/img24.jpg" }
            ];

            // 2.2 创建元素
            for(var i in dataArr){
                var newBox = document.createElement("div");
                newBox.className = "box";
                $("main").appendChild(newBox);

                var newPic = document.createElement("div");
                newPic.className = "pic";
                newBox.appendChild(newPic);

                var newImg = document.createElement("img");
                newImg.src =  dataArr[i].src;
                newPic.appendChild(newImg);
            }

            // 2.3 重新布局
            waterFull("main", "box");
        }
    }
};

/**
 * 实现瀑布流布局
 */
function waterFull(parent, child) {
    // 1. 父盒子居中
    // 1.1 获取所有的盒子
    var allBox = $(parent).getElementsByClassName(child);
    // 1.2 获取子盒子的宽度
    var boxWidth = allBox[0].offsetWidth;
    // 1.3 获取屏幕的宽度
    var screenW = document.documentElement.clientWidth;
    // 1.4 求出列数
    var cols = parseInt(screenW / boxWidth);
    // 1.5 父盒子居中
    $(parent).style.width = cols * boxWidth + 'px';
    $(parent).style.margin = "0 auto";


    // 2. 子盒子的定位
    // 2.1 定义高度数组
    var heightArr = [], boxHeight = 0, minBoxHeight = 0, minBoxIndex = 0;
    // 2.2 遍历子盒子
    for (var i = 0; i < allBox.length; i++) {
        // 2.2.1 求出每一个子盒子的高度
        boxHeight = allBox[i].offsetHeight;
        // 2.2.2 取出第一行盒子的高度放入高度数组
        if (i < cols) { // 第一行
            heightArr.push(boxHeight);
        } else { // 剩余行
            // 1. 取出最矮的盒子高度
            minBoxHeight = _.min(heightArr);
            // 2. 求出最矮盒子对应的索引
            minBoxIndex = getMinBoxIndex(heightArr, minBoxHeight);
            // 3. 子盒子定位
            allBox[i].style.position = "absolute";
            allBox[i].style.left = minBoxIndex * boxWidth + 'px';
            allBox[i].style.top = minBoxHeight + 'px';
            // 4. 更新数组中的高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }

    console.log(heightArr, minBoxHeight, minBoxIndex);
}
/**
 * 获取数组中最矮盒子高度的索引
 * @param arr
 * @param val
 * @returns {number}
 */
function getMinBoxIndex(arr, val) {
    for(var i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
}
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}
/**
 * 判断是否具备加载图片的条件
 */
function checkWillLoadImage() {
    // 1. 获取最后一个盒子
    var allBox = document.getElementsByClassName("box");
    var lastBox = allBox[allBox.length - 1];

    // 2. 求出最后一个盒子自身高度的一半 + offsetTop
    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;

    // 3. 求出屏幕的高度
    var screenW = document.body.clientHeight || document.documentElement.clientHeight;

    // 4. 求出页面偏离浏览器的高度
    var scrollTop = scroll().top;

    return lastBoxDis <= screenW + scrollTop;
}


