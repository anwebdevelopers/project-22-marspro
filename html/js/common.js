$(function() {

	//Поиск
	$('.header__top-line-search-button').click(function(){
	      $('.header__top-line-search-form').slideDown(200);
	      $('.header__top-line-search-button').fadeOut(200);
		  return false;
	    });
	$(document).on('click', function(e) {
	  if (!$(e.target).closest(".header__top-line-search-form").length) {
		  $('.header__top-line-search-form').slideUp(200);
		  $('.header__top-line-search-button').fadeIn(200);
	  }
	  e.stopPropagation();
	});


	//Календарь

	$("#myCalendar").ionCalendar({
	    lang: "ru",                     // язык календаря
	    sundayFirst: false,             // первый день недели
	    years: "2016-2030",                    // диапазон лет
	    format: "DD.MM.YYYY",           // формат возвращаемой даты

	});

	//Адаптивный слайдер

	$(".main__slider").owlCarousel({
		autoplay : true,
		loop : true,
		items : 1,
		nav : true,
		navText : '',
	});

	$(".popular__slider").owlCarousel({
		autoplay : true,
		loop : true,
		nav : true,
		navText : '',
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,

			},
			768 : {
				items: 3,
			},
			992 : {
				items: 4,
			}
		}
	});


	//Выравнивание блоков по высоте

	$(".popular__slider-item-title h3").equalHeights();


	//Мобильное меню

    $('.header__nav-button').click(function() {
        if ($('.header__nav ul').is(':visible')) {
            $('.header__nav-button i').removeClass('icon-cancel');
            $('.header__nav-button i').addClass('icon-menu');
        } else {
            $('.header__nav-button i').removeClass('icon-menu');
            $('.header__nav-button i').addClass('icon-cancel');
        };
        $('.header__nav ul').slideToggle(200);
        return false;
    })
    $(document).on('click', function(e) {
        var w = $(window).width();
        if(w < 992) {
            if (!$(e.target).closest(".header__nav-button").length) {
                if ($('.header__nav ul').is(':visible')) {
                    $('.header__nav ul').slideUp(200);
                    $('.header__nav-button i').removeClass('icon-cancel');
                    $('.header__nav-button i').addClass('icon-menu');
                }
            }
            e.stopPropagation();
        }

    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 992 && $(".header__nav ul").is(':hidden')) {
            $('.header__nav ul').removeAttr('style');
        }
    });

	// Разворачивающиеся итемы на странице вакансий

	$('.vacancy__opened-item').on('click', '.vacancy__opened-item-title', function() {
      $(this).parent('.vacancy__opened-item').toggleClass('open').children('.vacancy__opened-item-box').slideToggle(200);
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
