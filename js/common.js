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
$(document).ready(function(){
if($(window).width() < 480) {
    var number_of_carousel_items = 1,
        slide_by = 1,
        margin_ = 0;
} else {
    var number_of_carousel_items = 2,
        slide_by = 2
        margin_ = 100;
}
$('.owl-carousel').owlCarousel({

    items:number_of_carousel_items,
    slideBy:slide_by,
    mouseDrag:false,
    stagePadding:30,

    loop:false,
    margin:margin_,
    nav:true,
    navText: ["<img src='../img/prev.png'>","<img src='../img/next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    },
    smartSpeed:450
});
if($(window).width() > 480) {
$('h2').animated('fadeInDown');
$('.time').animated('zoomIn');
$('.sixth-screen img').animated('zoomIn');
$('.scheme-grid-container').animated('zoomIn');
}
});
$('.navLink').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollSpeed = 650,
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 20;
    if ($(this).attr('data-scroll') == 'fourth-screen') {
        scrollPoint += $(window).height()*0.23;
    }

    $('body,html').animate({
        scrollTop: scrollPoint
    }, scrollSpeed);

    return false;

});

var countDownDate = new Date("Apr 11, 2018 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
   
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
// If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.content-screen').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('.navLink.activeLink').removeClass('activeLink');
                $('.navLink').eq(i).addClass('activeLink');
            }
        });
    } else {

        $('.navLink').removeClass('activeLink');
        $('.navLink.activeLink').removeClass('activeLink');
    }
}).scroll();

