
	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		"use strict";
		
		// get current URL path and assign 'active' class
		
	   $('a[href="' + this.location.pathname + '"]').addClass('active');

	
		//Scrolling feature 

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		// Close Navbar when clicked outside
		
		$(window).on('click', function(event){
			var clickOver = $(event.target)
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		});
		
		//	Back Top Link

		var offset = 500;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		//Slick Slider
		
		$('.slider-stage').slick({
			centerMode: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			centerPadding: '120px',
			slidesToShow: 3,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: false
				}
			}]
		});
		$('.slider-1').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 1

		});
		$('.slider-2').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 2,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.slider-3').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-4').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		
		/* Refresh slick slider when inside tab */

	   $("#pills-1-tab").on('click',function(){
          $('.slider-1').slick('refresh');
       });
	   
	   $("#pills-2-tab").on('click',function(){
          $('.slider-1').slick('refresh');
       });
	   
	   $("#pills-3-tab").on('click',function(){
          $('.slider-1').slick('refresh');
       });
	   
	   $("#pills-4-tab").on('click',function(){
          $('.slider-1').slick('refresh');
       });
	   
	   
	   
	   $("#akcija-dobryj-drug").on('click',function(){
          $('.slider-3, .slider-4, .slider-stage').slick('refresh');
       });
	   
	   
	   
	   
	   
		
	  /* init Jarallax */
	  
       jarallax(document.querySelectorAll(".parallax"));
	     
		
	}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).on('load', function(){
	"use strict";

		// Page animations 	
		
		  AOS.refresh();
		  
       // Page animations fix conflict with Slick slider	
		$(function () {
		  AOS.init();
		});

        AOS.init({once: true,duration: 1000});
 
		// Page Preloader 	

		$("#preloader").fadeOut("slow");
		
	   // Magnific Popup

		$('#lightbox-wrap, #lightbox-wrap-1, #lightbox-wrap-2, #lightbox-wrap-3, #lightbox-wrap-4, #lightbox-wrap-5, .image-mp').magnificPopup({
			delegate: 'a', 
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		

		 $('.popup-youtube').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

$('.image-mp').magnificPopup({
  type: 'image'
  // other options
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> загрузить не удалось.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Приют «Пушистый домосед», г.Елец</small>';
			}
		}
	});
});


var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  
  if(!groups[id]) {
    groups[id] = [];
  } 
  
  groups[id].push( this );
});


$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
  
});


// Modal popup ПРОВЕРИТЬ ЧТО-ТО МЕШАЕТ
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});


// Dialog with CSS animation
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});










	}); // end window load function

