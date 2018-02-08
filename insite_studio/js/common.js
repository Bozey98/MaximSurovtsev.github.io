$(document).ready(function() {
	


var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;

	var wWidth = $(window).width();


	$(".popup").click(function(event){
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
				$('.overlay').data('ycoord',ycoord2);
				$('body').css('position','fixed').css('left','0px').css('right','0px').css('top', ycoord2 + 'px');
			} else {
				$('body').css('overflow','hidden');
			  } 	
 		}

		$(".overlay").addClass("visible");

	});
	
	$('.overlay').on('focusin', '#phone', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1) {
			$('.overlay').toggleClass('scroll');
		}
	});
	
	$('.overlay').on('focusout', '#phone', function(event) {
		if(navigator.userAgent.indexOf('Android') > -1) {
			$('.overlay').toggleClass('scroll');
		}
	});
	

	$(".close").click(function(){
		$(".overlay").removeClass("visible");
		if(wWidth < 1024) {
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
			} else {
					$('body').css('overflow','auto');
			  }
		$(window).scrollTop(-$('.overlay').data('ycoord'));
		}
	});



	$(document).click(function(event) {
		console.log($(event.target));
		if (!$(event.target).closest(".dialog, .popup").length && $(".overlay").hasClass('visible')) {
			$("body").find(".overlay").removeClass("visible");
			if(wWidth < 1024) {
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
					$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
				} else {
					$('body').css('overflow','auto');
				  }
				$(window).scrollTop(-$('.overlay').data('ycoord'));
			}
		}
	});



	$('#phone').mask('+7(999) 999-99-99');
	$('#phone2').mask('+7(999) 999-99-99');
});


