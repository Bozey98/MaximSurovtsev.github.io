(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				} else {
                    ths.removeClass(inEffect).css("opacity", "0");
                };
			}, {
				offset: "100%"
			});

		});
	};
})(jQuery);

if($(window).width() < 480) {
    $('.sixth-screen .container').addClass('owl-carousel');

    $('.sixth-screen .container').owlCarousel({
        items: 1,
        slideBy:1,
        mouseDrag:true,
        stagePadding: 35,
        loop:false,
        nav: true,
        center: true,
        startPosition: 1,
        nav:false,
        dots: true,
        URLhashListener: true,
        dotsEach: true,
        smartSpeed: 400
});

}


$('.owl-carousel').owlCarousel({
    items:2,
    slideBy:2,
    mouseDrag:true,
    loop:true,
    stagePadding:60,
    
    nav:true,
    navText: ["<img src='../img/back.png'>","<img src='../img/next.png'>"],
    smartSpeed: 400,
    responsive: {
        0:{
            items: 1,
            slideBy: 1,
            nav: false,
            dot: true,
            stagePadding:0
        },
        1000:{
            items:2,
            slideBy:2,
            nav:true,
            dot: false
        }
    }
});


$(document).ready(function(){
    if($(window).width() > 480) {
        $('h2').animated('fadeInDown');
        $('.time').animated('zoomIn');
        $('.sixth-screen img').animated('zoomIn');
    }
});

var mobileOffset = 0;

if($(window).width() < 480) {
    mobileOffset = -60;
}

$('.navLink').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollSpeed = 450,
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top + mobileOffset;
    if ($(this).attr('data-scroll') == 'fifth-screen') {
        scrollPoint += $(window).height()*0.22 + mobileOffset;
    }
   
    $('body,html').animate({
        scrollTop: scrollPoint
    }, scrollSpeed);

    return false;

});

var countDownDate = new Date("Feb 1, 2018 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    var dates = [days, hours, minutes, seconds];
    var names = ["days",'hours','minutes','seconds'];
    dates.forEach(function (item,i,dates) {
      if (item > 9) {
          if (i == 3)
            document.getElementById(names[i]).innerHTML = item;
          else
            document.getElementById(names[i]).innerHTML = item  + ':';
      } else {
          if (i == 3) 
            document.getElementById(names[i]).innerHTML ='0' + item;
          else
           document.getElementById(names[i]).innerHTML = '0' + item + ':';
      }
    }); 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    
    if (windscroll >= 100) {
        $('.content-screen').each(function(i) {
            if ($(this).position().top + mobileOffset*1.25 <= windscroll) {
                $('.navLink.activeLink').removeClass('activeLink');
                $('.navLink').eq(i).addClass('activeLink');
            }
        });
    } else {

        $('.navLink').removeClass('activeLink');
        $('.navLink.activeLink').removeClass('activeLink');
    }
}).scroll();

