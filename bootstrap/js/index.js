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
    $(window).trigger("resize"); //放在函数下面，没有函数声明提升 es6 let
    
    // 2. 工具提示
    $('[data-toggle="tooltip"]').tooltip();
    //3.0  动态处理宽度 设置滚动条
     $(window).on("resize", function () {
         let $ul = $("#lk_product .nav");
         let $allLis = $("[role='presentation']", $ul);
         // 3.1 遍历
         let totalW = 0;
         $allLis.each(function (index, item) {
             totalW += $(item).width();
         });


         let parentW = $ul.parent().width();
         // 3.2 设置宽度
         if (totalW > parentW) {
             $ul.css({
                 width: totalW + "px"
             })
         } else {
             $ul.removeAttr("style");
         }
     });

         // 4. 导航处理
         let allLis = $("#lk_header .navbar .navbar-nav li");
         console.log(allLis);
         

         $(allLis[2]).on("click", function () {
             $("html,body").animate({
                 scrollTop: $("#hot").offset().top
             }, 1000);
         });

});