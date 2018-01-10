
$(document).ready(function() {


    $(".scroll").on("click", function(e) { 

        e.preventDefault();
        $("html, body").animate({ scrollTop: $(".second, .swiper-container, .content, .store").offset().top }, 800);
        return false;

    });

    $('.toggle-menu').on("click", function() {

        $('body').toggleClass('menu-show');
        $('.toggle-menu').toggleClass('open');

    });

    var mySwiper = new Swiper ('.swiper-container', {
        
        pagination: {
            el: '.swiper-pagination'
        },
           
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
           
        nested: true,

        setWrapperSize: true
      
    });

});