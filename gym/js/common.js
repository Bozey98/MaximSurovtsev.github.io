(function($) {
	
	
	


	$(window).on('load', function() { 
		$(".loaderInner").fadeOut(); 
		$(".loader").delay(20).fadeOut("slow");

	});


	$(document).ready(function() {
		
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		
		function heightDetect() {
			$("body, .wrapper, .fix").css("height", $(window).height());

		};

		heightDetect();
		
		if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
			$(window).resize(function() {
				heightDetect();
			});
		}

		try {
			$.browserSelector();
			if($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
		} catch(err) {

		};

		$(".scroll").on("click", function(e) { 

			e.preventDefault();
			$("html, body").animate({ scrollTop: $(".second, .gallery-container, .content, .store, .contact-container, .card").offset().top }, 800);
			return false;

		});

		$('.toggle-menu').on("click", function() {

			$('body').toggleClass('menu-show');
			$('.toggle-menu').toggleClass('open');

		});
		});
})(jQuery);

		$('.img-container').each( function() {

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
		


		var mySwiper = new Swiper ('.galleryTop', {
			
			speed: 500,
			   
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },

			spaceBetween: 10,

			nested: true,

			setWrapperSize: true,

			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			},
		  
		});

			var galleryThumbs = new Swiper('.gallery-thumbs', {
				speed: 500,
				nested: true,
				spaceBetween: 10,
				centeredSlides: true,
				slidesPerView: 'auto',
				touchRatio: 0.2,
				slideToClickedSlide: true,
			});
			mySwiper.controller.control = galleryThumbs;
			galleryThumbs.controller.control = mySwiper;


		

	
