$(function() {
	$('.form, .handheld-form').on('click', function() {

		if ($('.form-container').hasClass('appear')) {
			$('.form-container').toggleClass('appear');
			
 			$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
 			$(window).scrollTop(-$('.form-container').data('ycoord'));
    		setTimeout(function() { 
				$('.form-container').toggleClass('isDisplay'); }, 510);
			} else {
				var ycoord2 = $(window).scrollTop();
				ycoord2 = ycoord2 * -1;
			 	$('.form-container').data('ycoord',ycoord2);
			 	$('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord2 + 'px');
				$('header').css('top', 0);
				$('.form-container').toggleClass('isDisplay');
				setTimeout(function() { $('.form-container').toggleClass('appear'); }, 10)
		}
	});

	$('.toggle-menu').on('click', function() {
		$('.toggle-menu').toggleClass('active');

		if ($('.handheld-nav-ul').hasClass('appear')) {
			$('.handheld-nav-ul').toggleClass('appear');
			
 			$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
 			$(window).scrollTop(-$('.handheld-nav-ul').data('ycoord'));
			setTimeout(function() { 
				$('.handheld-nav-ul').toggleClass('isDisplay'); 
				
			}, 510);
		} else {
			var ycoord1 = $(window).scrollTop();
				ycoord1 = ycoord1 * -1;
			 	$('.handheld-nav-ul').data('ycoord',ycoord1);
			 	$('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord1 + 'px');
				$('header').css('top', 0);
			$('.handheld-nav-ul').toggleClass('isDisplay');
			setTimeout(function() { $('.handheld-nav-ul').toggleClass('appear'); }, 10)
		}
	});
	

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
