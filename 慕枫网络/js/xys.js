  $(document).ready(function ($) {
    let rightH = $('.right').height();
        $('.left').css({
            height: rightH
        });
        
    $(window).on('scroll',() => {
        if ($(window).scrollTop() == 70) {
            $('.navbar-default').css({
            //    backgroundColor:'rgba(255,20,255)',
                position: 'fixed'
            });
            $('.navbar').css({
            //    backgroundColor:'rgba(255,20,255)',
                position: 'fixed'
            });
       }
    })


  });