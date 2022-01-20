$(() => {
    // 1.0 实现轮播图大小图切换
    let items = $(".carousel-inner .item")
    $(window).on('resize', () => {
        let clientW = $(window).width();
        if (clientW >= 768) {
            items.each((index, item) => {
                let imgSrc = $(item).data("largeImg");
                $(item).html('<a href="javascript:;" class="pcImg"></a>').css('backgroundImage', 'url(' + imgSrc + ')');
                $(item).css("backgroundPosition", "center center");
            });
        } else {
            items.each((index, item) => {
                let imgSrc = $(item).data("smallImg");
                $(item).html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '"></a>');
            });
        }
    }).trigger("resize");

    // 1.1 添加移动端的滑动操作
    let startX, endX;
    // 获取当前轮播图
    let carousel_inner = $(".carousel-inner")[0]; //转换成DOM元素
    carousel_inner.addEventListener("touchstart", (e) => {
        startX = e.targetTouches[0].clientX;
    });

    carousel_inner.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            // 上一张
            $('.carousel').carousel("prev");
        } else if (endX - startX < 0) {
            // 下一张
            $('.carousel').carousel('next')
        }
    })



    //2.0 添加active类名
    addActive();

    function addActive() {
        let lists = document.getElementsByClassName("navbar-nav")[0].children;
        let lastIndex = 1;
        for (let i = 1; i < lists.length; i++) {
            ((i) => {
                let li = lists[i];
                li.onclick = function () {
                    lists[lastIndex].className = '';
                    li.className = "active";
                    lastIndex = i;
                }
            })(i);
        }
    }

    //3.0  触发工具提示 toolTip
    $('[data-toggle="tooltip"]').tooltip();

    //4.0 实现标签页导航栏横向滚动
    let totalWidth = 0;
    let lis = $(".wjs_product .nav-tabs").find("li");
    lis.each((index,item)=>{
        totalWidth += $(item).innerWidth();
    })    
    $(".wjs_product .nav-tabs").width(totalWidth);
    
    
    let nav = $(".wjs_product .tab_parent").get(0);
    var myScroll = new IScroll(nav,{scrollX:true,scrollY:false});
});