window.onload = function () {
    //1.0 获取元素
    var slider_scroll = $('slider_scroll');
    var c = slider_scroll.children[0];
    var slider_ctl = $('slider_ctl');
    var slider_main = slider_scroll.children[0];
    var slider_main_img = slider_main.children;
    var iNow = 0;
    // 2. 动态创建指示器
    for (var i = 0; i < slider_main_img.length; i++) {
        var span = document.createElement('span');
        span.className = 'slider-ctl-icon';
        slider_ctl.insertBefore(span, slider_ctl.children[1]);
    }

    // 3. 让第一个选中
    slider_ctl.children[1].className = 'slider-ctl-icon current';
      // 4. 让滚动的内容归位
    var scroll_W = slider.offsetWidth;
    for (var m = 1; m < slider_main.children.length; m++) {
        slider_main.children[m].style.left = scroll_W + 'px';
    }
// 5. 遍历监听操作
    for (var j = 0; j < slider_ctl.children.length; j++) {
        // 5.1 监听点击
        (function (j) {
            slider_ctl.children[j].onmousedown = function () {
                // 5.2 判断
                if (this.className === 'slider-ctl-prev') {
                    /*
                    1.当前可视区域的图片快速右移;
                    2.上一张图片快速出现在可视区域的左边
                    3.再让这张图片做动画进入可视区域
                   */
                    buffer(slider_main_img[iNow], { "left": scroll_W });
                    iNow--;
                     // 判断
                    if (iNow < 0) {
                        iNow = slider_main_img.length - 1;
                    }
                    slider_main_img[iNow].style.left = -scroll_W + 'px';
                    buffer(slider_main_img[iNow], { left: 0 });

                } else if (this.className === 'slider-ctl-next') {
                    autoPlay();
                } else {
                    for (var n = 1; n < slider_ctl.children.length - 1; n++) {
                        slider_ctl.children[n].className = 'slider-ctl-icon';
                    }
                    this.className = 'slider-ctl-icon current';
                     /*
                 1.用当前点击的索引和选中索引对比
                 2.点击的 > 选中的, 相当于点击了右边的按钮
                 2.点击的 < 选中的, 相当于点击了左边的按钮
                */

                    if (j > iNow) {
                        autoPlay();
                    } else {
                        buffer(slider_main_img[iNow], { "left": scroll_W });
                        iNow--;
                        if (iNow < 0) {
                            iNow = slider_main_img.length - 1;
                        }
                        slider_main_img[iNow].style.left = -scroll_W + 'px';
                        buffer(slider_main_img[iNow], { left: 0 });
                    }
                }
                changeIndex();
            }
        })(j);
   
    }
    // 6.自动 切换索引
    function changeIndex() {
        for (var n = 1; n < slider_ctl.children.length - 1; n++) {
            slider_ctl.children[n].className = 'slider-ctl-icon';
        }
        slider_ctl.children[iNow+1].className = 'slider-ctl-icon current';
    }

      // 7. 自动播放
    var timer = setInterval(autoPlay, 1000);//autoPlay不能加括号，切记切记
    function autoPlay() {
        /*
        1.当前可视区域的图片快速左移;
        2.下一张图片快速出现在可视区域的右边
        3.让这张图片做动画进入
        */
        buffer(slider_main_img[iNow], { "left": -scroll_W });
        iNow++;
        // 判断
        if (iNow > slider_main_img.length - 1) {
            iNow = 0;
        }
        slider_main_img[iNow].style.left = scroll_W + 'px';
        buffer(slider_main_img[iNow], { left: 0 });
        changeIndex();
    };

    // 8. 设置和清除定时器
    slider.onmouseover = function () {
        clearInterval(timer);
    };
    slider.onmouseout = function () {
        timer = setInterval(autoPlay, 1000);// timer =  不能忘记写上
    };

}