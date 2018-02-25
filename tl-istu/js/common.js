$(function() {

	//Инициализация начальных значений вьюпорта
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
		is_safari = navigator.userAgent.indexOf("Safari") > -1,
		wWidth = $(window).width(),
		wHeight = $(window).height(),
		dHeight = $(document).outerHeight(),
		new_wHeight;

	//Функция инициализации высоты главного экрана и оверлея и отмена перерисовки окна при ширине окна, не превышающей 480 пикселей
	function heightDetect() {
		$("#front_screen").height($(window).height());
		new_wHeight = $(window).outerHeight();
		if (wWidth < 1024) {
			$(".overlay").height($(document).outerHeight());
		}
	};

	heightDetect();
		
	// if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
		$(window).resize(function() {
			wWidth = $(window).width();
			if ( Math.abs(new_wHeight - $(window).outerHeight()) > 100 && wWidth < 1024) {
				heightDetect();
			} else if (wWidth >= 1024) {
				heightDetect();
			}
		});

		
	// $('.content-post-description').hover(function(event) {
	// 	$(event.target).prevUntil('.content-post-horizontal, .content-post-vertical').toggleClass('hoverPost');
	// });	
	//Функция закрытия модального окна
	function close() {
		$('.form_container').removeClass('appear');
		$('.overlay').removeClass('appear');
		$('.site-header-nav-ul_handheld').removeClass('appear');
		$('.toggle-menu').removeClass('active');
		$('.site-header-nav-toggle_menu').removeClass('z-index10');
		setTimeout(function() { 
			$('.form_container').removeClass('isDisplay');
			$('.overlay').removeClass('isDisplay');
			$('.site-header-nav-ul_handheld').removeClass('isDisplay'); 
		}, 410);
	}

	//Закрытие модального окна при нажатии на крестик
	$(".form_container-callback-close").on('click', function() {
		close();
	});

	//Закрытия модального окна при нажатии на оверлей (затемнение фона)
	$('.overlay').on('click', function(e) {
		var clicked = $(e.target);
		if (clicked.is('.form_container, .site-header-nav-toggle_menu') || clicked.parents().is('.site-header-nav-toggle_menu, .form_container, .form_container-callback')) {
			return; 
		} else { 
			close();
		}
	});

	//Открытие мобильного модального окна формы обратной связи при нажатии на кнопку в шапке
	$('.site-header-nav-handheld_form').on('click', function() {
		var scrollPosition = $(window).scrollTop() * -1,
				topCoord = $(document).scrollTop(),
				wOuterHeight = $(window).outerHeight();
	
		// topCoord += new_wHeight*0.15;
		// $(".form_container").css('height', 'auto');
		

		 if (wWidth < 480 && $(window).width() < $(window).height()) {
			$(".form_container").css('height', wOuterHeight + 'px');
		} else {
			topCoord += $(window).height()*0.15;
			$(".form_container").css('height', 'auto');
		}

		$(".overlay").height($(document).outerHeight());
		
		$('.form_container').css('top', topCoord);
		$('.form_container').addClass('isDisplay');

		$('.overlay').addClass('isDisplay');
		$('.site-header-nav-ul_handheld').removeClass('appear');
		$('.site-header-nav-toggle_menu').removeClass('active');
		setTimeout(function() { 
			$('.form_container').addClass('appear'); 
			$('.overlay').addClass('appear');
			$('.site-header').removeClass('z-index10');
			
			$('.site-header-nav-ul_handheld').removeClass('isDisplay');
		}, 10);
	});


	//Открытие модального окна формы обратной связи при нажатии на кнопку "Задать вопрос"
	$('.site-header-nav-form').on('click', function() {
		if ($('.form_container').hasClass('appear')) {
			$('.form_container').removeClass('appear');
			setTimeout(function() { $('.form_container').removeClass('isDisplay'); }, 410);
		} else {
			$('.form_container').addClass('isDisplay');
			setTimeout(function() { $('.form_container').addClass('appear'); }, 10)
		}
	});


	//Открытие мобильного меню при нажатии на кнопку "бургера" в шапке
	$('.site-header-nav-toggle_menu').on('click', function() {
		if ($('.site-header-nav-ul_handheld').hasClass('appear')) {
			$('.site-header-nav-ul_handheld').removeClass('appear');
			$('.overlay').removeClass('appear');
			$('.site-header-nav-toggle_menu').removeClass('active');
			$('.site-header').removeClass('z-index10');
			setTimeout(function() { 
				$('.handheld-nav-ul').removeClass('isDisplay'); 
				$('.overlay').removeClass('isDisplay');
			}, 410);
		} else {
			$(".overlay").height($(document).outerHeight());
			$('.site-header-nav-toggle_menu').addClass('active');
			$('.site-header-nav-ul_handheld').addClass('isDisplay');
			$('.overlay').addClass('isDisplay');
			$('.site-header').addClass('z-index10');
			setTimeout(function() { 
				$('.site-header-nav-ul_handheld').addClass('appear');
				$('.overlay').addClass('appear'); 
			}, 10);
		}
	});

	
});
