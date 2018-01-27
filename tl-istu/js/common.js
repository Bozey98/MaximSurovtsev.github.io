$(function() {

	$('.form, .handheld-form').on('click', function() {

		if ($('.form-container').hasClass('appear')) {
			$('.form-container').toggleClass('appear');
			$('body').toggleClass('disable-scroll');
			setTimeout(function() { 
				$('.form-container').toggleClass('isDisplay'); 
				
			}, 510);
		} else {
			$('body').toggleClass('disable-scroll');
			$('.form-container').toggleClass('isDisplay');
			setTimeout(function() { $('.form-container').toggleClass('appear'); }, 10)
		}
		
	});

	$('.toggle-menu').on('click', function() {
		$('.toggle-menu').toggleClass('active');

		if ($('.handheld-nav-ul').hasClass('appear')) {
			$('.handheld-nav-ul').toggleClass('appear');
			$('body').toggleClass('disable-scroll');
			setTimeout(function() { 
				$('.handheld-nav-ul').toggleClass('isDisplay'); 
				
			}, 510);
		} else {
			$('body').toggleClass('disable-scroll');
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
