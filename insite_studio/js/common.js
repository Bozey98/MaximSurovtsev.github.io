$(document).ready(function() {
	


	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;

	var wWidth = $(window).width();
	var wHeight = $(window).height();
		
	function heightDetect() {
		$(".overlay").css("height", $(window).outerHeight());
		$(".wrapper").css("height", wHeight);
		// $(".close").css("top", $(window).height()*0.14);
	};

	heightDetect();
		
	if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
		$(window).resize(function() {
			heightDetect();
		});
	}

	$(".popup").on('click', function(event){
		var wTop = $(window).scrollTop();

		if ($(event.target).hasClass('person__button')) {
			
			$(".dialog .offer").text("Получите консультацию специалиста Insite Studio"); 
			if(!$('.person-modal').hasClass('block')) {
				$('.person-modal').addClass('block');
			}
			if ($(event.target).hasClass('ivan')) {
				$('.person-modal').text("Укажите Ваши данные, и Иван свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('max')) {
				$('.person-modal').text("Укажите Ваши данные, и Максим свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('kir')) {
				$('.person-modal').text("Укажите Ваши данные, и Кирилл свяжется с Вами в ближайшее время"); 
			}
		}

		if ($(event.target).hasClass('cost')) {
			$(".dialog .offer").text("Заполните форму, чтобы расчитать стоимость"); 
			$('.person-modal').removeClass('block');
		}

		if ($(event.target).hasClass('call__button')) {
			$(".dialog .offer").text("Заказать обратный звонок"); 
			if(!$('.person-modal').hasClass('block')) {
				$('.person-modal').addClass('block');
			}
			$('.person-modal').text("Заполните форму, и мы свяжемся с Вами в ближайшее время и ответим на все интересующие Вас вопросы"); 
		}

		if(wWidth < 1024) {
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				var ycoord2 = $(window).scrollTop();
				ycoord2 = ycoord2 * -1;
				$('.dialog').data('ycoord',ycoord2);
				$('body').css('position','fixed').css('left','0px').css('right','0px').css('top', ycoord2 + 'px');
			} else {
				$('body').css('overflow','hidden');
			  } 	
 		}

		$(".overlay").addClass("visible");

	});
	
	$('.callback').on('focusin', '#phone', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('.wrapper').toggleClass('scroll-phone');
		}
	});
	
	$('.callback').on('focusout', '#phone', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('.wrapper').toggleClass('scroll-phone');
		}
	});
		$('.callback').on('focusin', '.email', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('.wrapper').toggleClass('scroll-name');
		}
	});
	
	$('.callback').on('focusout', '.email', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('.wrapper').toggleClass('scroll-name');
		}
	});

	$(".close").on('click', function(){
		$(".overlay").removeClass("visible");
		if(wWidth < 1024) {
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
				$(window).scrollTop(-$('.dialog').data('ycoord'));
			} else {
					$('body').css('overflow','auto');
			  }
		
		}
	});



	$(document).on('click', function(event) {
		console.log($(event.target));
		if (!$(event.target).closest(".dialog, .popup").length && $(".overlay").hasClass('visible')) {
			$("body").find(".overlay").removeClass("visible");
			if(wWidth < 1024) {
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
					$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
					$(window).scrollTop(-$('.dialog').data('ycoord'));
				} else {
					$('body').css('overflow','auto');
				  }
				
			}
		}
	});



	$('#phone').mask('+7(999) 999-99-99');
	$('#phone2').mask('+7(999) 999-99-99');
});


