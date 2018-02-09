$(document).ready(function() {
	


	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;

	var wWidth = $(window).width();
	var wHeight = $(window).height();
		
	function heightDetect() {
		$(".overlay").css("height", $(window).outerHeight());
		if (wWidth < 1024) {
			$(".wrapper").css("height", wHeight);
			if (wWidth < 360) {
				$(".wrapper__case").css("height", wHeight*2.5);
			} else {
				$(".wrapper__case").css("height", wHeight*2.3);
			}
		}
	};

	heightDetect();
		
	if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
		$(window).resize(function() {
			heightDetect();
		});
	}


	$(".case__dialog__button").on('click', function(event){
		var wTop = $(window).scrollTop();
		$(".overlay__case").addClass("visible");
		$('.person-modal').addClass('block');
		$(".dialog .offer").text("Оставьте свои контактные данные"); 
		$('.person-modal').text("И получите бесплатную консультацию о том, как повысить конверсию на Вашем сайте"); 
		if(wWidth < 1024) {
			// if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				var ycoord2 = $(window).scrollTop();
				ycoord2 = ycoord2 * -1;
				$('.dialog').data('ycoord',ycoord2);
				$('body').css('position','fixed').css('left','0px').css('right','0px').css('top', ycoord2 + 'px');
				// if(navigator.userAgent.indexOf('Android') > -1 ){
				// $(".overlay").addClass('chromeHeight');
				// }
			

		}
	});


	$(".popup").on('click', function(event){
		var wTop = $(window).scrollTop();

		if ($(event.target).hasClass('person__button')) {
			
				$('.person-modal').addClass('block');
			
			$(".dialog .offer").text("Получите консультацию специалиста Insite Studio"); 
			
			if ($(event.target).hasClass('ivan')) {
				$('.person-modal').text("Укажите Ваши данные, и Иван свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('max')) {
				$('.person-modal').text("Укажите Ваши данные, и Максим свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('kir')) {
				$('.person-modal').text("Укажите Ваши данные, и Кирилл свяжется с Вами в ближайшее время"); 
			}
		} else if ($(event.target).hasClass('cost')) {
			$(".dialog .offer").text("Заполните форму, чтобы расчитать стоимость"); 
			$('.person-modal').removeClass('block');
		} else if ($(event.target).hasClass('call__button')) {
			$(".dialog .offer").text("Заказать обратный звонок"); 
			$(".overlay").addClass("call_overlay");
			$('.email').addClass('displayNone');
			$('.email-des').addClass('displayNone');
			$('.person-modal').addClass('block');
			$('.person-modal').text("Заполните форму, и мы свяжемся с Вами в ближайшее время и ответим на все интересующие Вас вопросы"); 
		}

		if(wWidth < 1024) {
			// if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				var ycoord2 = $(window).scrollTop();
				ycoord2 = ycoord2 * -1;
				$('.dialog').data('ycoord',ycoord2);
				$('body').css('position','fixed').css('left','0px').css('right','0px').css('top', ycoord2 + 'px');
				// if(navigator.userAgent.indexOf('Android') > -1 ){
					$(".overlay").addClass('chromeHeight');
				// }
			

		}
			// } else {
				// $('body').css('overflow','hidden');
			  // } 	
 		
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
		if($('.overlay__case').hasClass('visible')) {
				$("body").find(".overlay__case").removeClass("visible");
			} else {
				$("body").find(".overlay").removeClass("visible");
			}
		
			$('.email').removeClass('displayNone');
			$('.overlay').removeClass('call__overlay');
			$('.email-des').removeClass('displayNone');
	
		if(wWidth < 1024) {
			// if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
			$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
			$(window).scrollTop(-$('.dialog').data('ycoord'));
			// } else {
			// 		$('body').css('overflow','auto');
			//   }
		}
	});

// $(window).on('focusin', 'input, textarea', function(event) {
// 	if(navigator.userAgent.indexOf('Android') > -1 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
// 		var scroll = $(this).offset() - 50;
// 		$(window).scrollTop(scroll);
// 	}
// });

	$(document).on('click', function(event) {
		console.log($(event.target));
		if (!$(event.target).closest(".dialog, .popup, .case__dialog__button, .pswp, .case__dialog").length && ($(".overlay").hasClass('visible') || $('.overlay__case').hasClass('visible'))) {
			
			if($('.overlay__case').hasClass('visible')) {
				$("body").find(".overlay__case").removeClass("visible");
			} else {
				$("body").find(".overlay").removeClass("visible");
			}
			
				$('.email').removeClass('displayNone');
				$('.email-des').removeClass('displayNone');
				$('.overlay').removeClass('call__overlay')
			
			if(wWidth < 1024) {
				// if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
				$('body').css('position','relative').css('left','auto').css('right','auto').css('top','auto');
				$(window).scrollTop(-$('.dialog').data('ycoord'));
				// } else {
				// 	$('body').css('overflow','auto');
				//   }
			}
		}
	});

	var phone1 = document.getElementById('phone1');
	var phone2 = document.getElementById('phone2');
	var phone3 = document.getElementById('phone3');
	var phoneMask1 = new IMask(phone1, {
		mask: '+{7}(000) 000-00-00',
		lazy: false,  // make placeholder always visible
		placeholderChar: '_'     // defaults to '_'
	});
	var phoneMask2 = new IMask(phone2, {
		mask: '+{7}(000) 000-00-00',
		lazy: false,  // make placeholder always visible
		placeholderChar: '_'     // defaults to '_'
	});
		var phoneMask3 = new IMask(phone3, {
		mask: '+{7}(000) 000-00-00',
		lazy: false,  // make placeholder always visible
		placeholderChar: '_'     // defaults to '_'
	});
	




	$('.gallery').each( function() {

			var $pic     = $(this),
				getItems = function() {
					var items = [];
					$pic.find('a').each(function() {
						var $href   = $(this).attr('href'),
							$size   = $(this).data('size').split('x'),
							$width  = $size[0],
							$height = $size[1];

						var item = {
							src : $href,
							w   : $width,
							h   : $height
						}

						items.push(item);
					});
					return items;
				}

			var items = getItems();

	
			var image = [];
			$.each(items, function(index, value) {
				image[index]     = new Image();
				image[index].src = value['src'];
			});
			var options = {
				   
			};
		
			var $pswp = $('.pswp')[0];
			$pic.on('click', 'figure', function(event) {
				event.preventDefault();
				
				var $index = $(this).index();
				var options = {
					index: $index,
					bgOpacity: 0.7,
					showHideOpacity: false
				}

				var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
				lightBox.init();
			});
		});


});


