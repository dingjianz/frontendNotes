//1.0 轮播图切换
$(function () {
    $(window).on('resize', function () {
        let clientW = $(window).width();
        let isBigImg = clientW >= 800;
        let $allItem = $('.item');
        $allItem.each(function (index, item) {
            let src = isBigImg ? $(this).data("bigimg") : $(this).data("smallimg");
            if (isBigImg) {
                $(this).empty();
                $(this).css({
                    backgroundImage: 'url("' + src + '")'
                })
            } else {
                let $img = $('<img src = ' + src + '>');
                $(this).empty().append($img);
            }

        });
    })
    $(window).trigger("resize");

    // 2.0 title工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //3.0 弹出框
    $('[data-toggle="popover"]').popover()

    //4.0 返回顶部隐藏和显示
    returnTop();

    function returnTop() {
        $(window).on('scroll', () => {
            $(this).scrollTop() == 0 ? $('.return-top').hide() : $('.return-top').show();
        });
        $('.return-top').click(() => {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
    };

   
   
})