$(function() {
	

	var freezeVp = function(e) {
    e.preventDefault();
	};
	function stopBodyScrolling (bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
	}
	$('.form, .handheld-form').on('click', function() {

		if ($('.form-container').hasClass('appear')) {
			$('.form-container').toggleClass('appear');
			$('body').toggleClass('disable-scroll');
			$('html').css('overflow', 'auto');
			stopBodyScrolling(false);
			setTimeout(function() { 
				$('.form-container').toggleClass('isDisplay'); 
				
			}, 510);
		} else {
			$('body').toggleClass('disable-scroll');
			$('html').css('overflow', 'hidden');
			stopBodyScrolling(true);
			$('.form-container').toggleClass('isDisplay');
			setTimeout(function() { $('.form-container').toggleClass('appear'); }, 10)
		}
		
	});

	$('.toggle-menu').on('click', function() {
		$('.toggle-menu').toggleClass('active');

		if ($('.handheld-nav-ul').hasClass('appear')) {
			$('.handheld-nav-ul').toggleClass('appear');
			$('body').toggleClass('disable-scroll');
			$('html').css('overflow', 'auto');
			stopBodyScrolling(false);
			setTimeout(function() { 
				$('.handheld-nav-ul').toggleClass('isDisplay'); 
				
			}, 510);
		} else {
			$('body').toggleClass('disable-scroll');
			$('html').css('overflow', 'hidden');
			stopBodyScrolling(true);
			$('.handheld-nav-ul').toggleClass('isDisplay');
			setTimeout(function() { $('.handheld-nav-ul').toggleClass('appear'); }, 10)
		}
	});
	var wWidth = $(window).width();

	function heightDetect() {
		$("body").css("height", $(window).height());
	};

	heightDetect();
			
	if ( wWidth > 480 ) {
		$(window).resize(function() {
			heightDetect();
		});
	}

});
