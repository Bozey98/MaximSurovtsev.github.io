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

$('.owl-carousel').owlCarousel({
    items:1,
    slideBy:1,
    mouseDrag:false,
    stagePadding:30,
   // animateIn: 'fadeInUp',
    //animateOut: 'fadeOutDown',
    loop:true,
    margin:100,
    nav:true,
    navText: ["<img src='../img/back.png'>","<img src='../img/next.png'>"],
    smartSpeed: 400
});


$(document).ready(function(){
    if($(window).width() > 480) {
        $('h2').animated('fadeInDown');
        $('.time').animated('zoomIn');
        $('.sixth-screen img').animated('zoomIn');
    }
});


$('.navLink').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollSpeed = 650,
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
    if ($(this).attr('data-scroll') == 'fourth-screen') {
        //scrollPoint += $(window).height()*0.23;
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

