$(function() {

	//Инициализация начальных значений вьюпорта
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
		is_safari = navigator.userAgent.indexOf("Safari") > -1,
		wWidth = $(window).width(),
		wHeight = $(window).height(),
		dHeight = $(document).height();

	//Функция инициализации высоты главного экрана и оверлея и отмена перерисовки окна при ширине окна, не превышающей 480 пикселей
	function heightDetect() {
		$("#front-screen").height(wHeight);
		if (wWidth < 480) {
			$(".overlay").height(dHeight);
		}
	};

	heightDetect();
		
	if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
		$(window).resize(function() {
			heightDetect();
		});
	}

		
			
	//Функция закрытия модального окна
	function close() {
		$('.form-container').removeClass('appear');
		$('.overlay').removeClass('appear');
		$('.handheld-nav-ul').removeClass('appear');
		$('.toggle-menu').removeClass('active');
		$('.site-header').removeClass('z-index10');
		setTimeout(function() { 
			$('.form-container').removeClass('isDisplay');
			$('.overlay').removeClass('isDisplay');
			$('.handheld-nav-ul').removeClass('isDisplay'); 
		}, 410);
	}

	//Закрытие модального окна при нажатии на крестик
	$(".close").on('click', function() {
		close();
	});

	//Закрытия модального окна при нажатии на оверлей (затемнение фона)
	$('.overlay').on('click', function(e) {
		var clicked = $(e.target);
		if (clicked.is('.form-container, .toggle-menu') || clicked.parents().is('.toggle-menu, .form-container, .callback')) {
			return; 
		} else { 
			close();
		}
	});

	//Открытие мобильного модального окна формы обратной связи при нажатии на кнопку в шапке
	$('.handheld-form').on('click', function() {
		var scrollPosition = $(window).scrollTop() * -1,
				topCoord = $(document).scrollTop();
		$(".form-container").height($(window).outerHeight());
		$('.form-container').css('top', topCoord);
		$('.form-container').addClass('isDisplay');

		$('.overlay').addClass('isDisplay');
		$('.handheld-nav-ul').removeClass('appear');
		$('.toggle-menu').removeClass('active');
		setTimeout(function() { 
			$('.form-container').addClass('appear'); 
			$('.overlay').addClass('appear');
			$('.site-header').removeClass('z-index10');
			
			$('.handheld-nav-ul').removeClass('isDisplay');
		}, 10);
	});


	//Открытие модального окна формы обратной связи при нажатии на кнопку "Задать вопрос"
	$('.form').on('click', function() {
		if ($('.form-container').hasClass('appear')) {
			$('.form-container').removeClass('appear');
			setTimeout(function() { $('.form-container').removeClass('isDisplay'); }, 410);
		} else {
			$('.form-container').addClass('isDisplay');
			setTimeout(function() { $('.form-container').addClass('appear'); }, 10)
		}
	});


	//Открытие мобильного меню при нажатии на кнопку "бургера" в шапке
	$('.toggle-menu').on('click', function() {
		if ($('.handheld-nav-ul').hasClass('appear')) {
			$('.handheld-nav-ul').removeClass('appear');
			$('.overlay').removeClass('appear');
			$('.toggle-menu').removeClass('active');
			$('.site-header').removeClass('z-index10');
			setTimeout(function() { 
				$('.handheld-nav-ul').removeClass('isDisplay'); 
				$('.overlay').removeClass('isDisplay');
			}, 410);
		} else {
			$('.toggle-menu').addClass('active');
			$('.handheld-nav-ul').addClass('isDisplay');
			$('.overlay').addClass('isDisplay');
			$('.site-header').addClass('z-index10');
			setTimeout(function() { 
				$('.handheld-nav-ul').addClass('appear');
				$('.overlay').addClass('appear'); 
			}, 10);
		}
	});


});
