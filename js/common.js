head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	//menu mob
	$('.js-menu-btn').on('click', function() {
		$('.js-menu').toggleClass('is-active');
		return false;
	});

	//select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });

    //feedback
    $('.js-feedback').each(function() {
        $('.js-feedback-btn').on('click', function() {
            $(this).parents('.js-feedback').toggleClass('is-active');
            return false;
        });
        $('body').on('click', function() {
            $('.js-feedback').removeClass('is-active');
        });
        $('.js-feedback-close').on('click', function() {
            $('.js-feedback').removeClass('is-active');
        });
        $(this).on('click', function(event) {
            event.stopPropagation();
        });
    });
    //tooltip
    $('.js-tooltip').on('click', function() {
        tooltip = $(this).offset();
        tooltipblock = $('.js-tooltip-block').offset();
        tooltipbox = $('.js-tooltip-box');
        tooltipbox.css('top', tooltip.top - tooltipblock.top);   
        var text = $(this).attr('data-tooltip');
        tooltipbox.find('.help__body p').html(text);         
    });
    //field dropdown
    $('.js-field').each(function() {
        $('.js-field-input').on('click', function() {
            $(this).parents('.js-field').find('.js-field-drop').addClass('is-active');
        });        
        $('body').on('click', function() {
            $('.js-field-drop').removeClass('is-active');
        });
        $(this).on('click', function(event) {
            event.stopPropagation();
        });
    });
    //regions
    $('.js-region').each(function() {
        $(this).find('.checkbox').on('click', function () {
            $(this).parents('.js-region').find('.input').val($(this).text());
        });
    });
    //validate
    $(".js-form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            description: {
                required: true,
                minlength: 100,
                maxlength: 4000
            },
            heading: {
                required: true,
                minlength: 1
            },
            category: {
                required: true,
                minlength: 1
            },
            region: {
                required: true,
                minlength: 1
            },
            email: {
                required: true,
                minlength: 1
            },
            email: {
                required: true,
                minlength: 1
            },
            agree: "required"
        },
        messages: {
            heading: {
                required: "Ошибка: Вашему объявлению нужен заголовок",
                minlength: "Ошибка: Вашему объявлению нужен заголовок"
            },
            price: {
                required: "Ошибка: Введите сумму",
                minlength: "Ошибка: Введите сумму"
            },
            category: {
                required: "Ошибка: Выберите категорию",
                minlength: "Ошибка: Выберите категорию"
            },
            description: {
                required: "Ошибка: Ваше объявление нуждается в описании",
                minlength: "Ошибка: Ваше объявление нуждается в описании"
            },
            region: {
                required: "Ошибка: Выберите регион",
                minlength: "Ошибка: Выберите регион"
            },
            email: {
                required: "Ошибка: Введите свой email",
                minlength: "Ошибка: Введите свой email"
            },
            email: "Ошибка: Введите свой email",
            agree: "Please accept our policy"
        }
    });

    //drop arr
    $('.js-drop-left').on('click', function () {
        $('.js-drop-block').animate({ "left": "+=33%" });
        // if ($('.js-drop-block').offset().left >=! '0%') {
        //     $('.js-drop-left').hide();
        // };
        // if ($('.js-drop-block').offset().left < '0') {
        //     $('.js-drop-right').show();
        // };
        num = $(".field__list").length;
        left = $('.js-drop-block').css('left');
        width = $('.field__list:first-child').width();
         $('.js-drop-right').show();
        if (num + parseInt(left)/width < 5) {
            $('.js-drop-left').show();
        }
        else {
            $('.js-drop-left').hide();
        };
        return false;
    });
    $('.js-drop-right').on('click', function () {
        num = $(".field__list").length;
        left = $('.js-drop-block').css('left');
        width = $('.field__list:first-child').width();
         $('.js-drop-left').show();
        $('.js-drop-block').animate({ "left": "-=33%" });
        if (num + parseInt(left)/width > 5) {
            $('.js-drop-right').show();
        }
        else {
            $('.js-drop-right').hide();
        };
        return false;
    });

    //statistics
    $('.s-item__call').on('click', function() {
        if ($(this).hasClass('is-active')) {
            $(this).parents('.s-item').find('.s-item__call').removeClass('is-active');
        }
        else {
            $(this).parents('.s-item').find('.s-item__call').removeClass('is-active');
            $(this).addClass('is-active');
        };
        return false;
    });
    //login
    $('.js-login-btn').on('click', function() {
        $('.js-login').toggleClass('is-active');
        return false;
    });
    $('.js-popup-close').on('click', function() {
        $('.js-login').removeClass('is-active');
        return false;
    });
    $('.js-login').each(function() {
    	$('body').on('click', function() {
    		$('.js-login').removeClass('is-active');
    	});	
    	$('.popup').on('click', function(event) {
    		event.stopPropagation();
    	});
    });

    $('.js-market-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true
    });

    $('.js-section-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 510,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('body').click(function() {
        $('.js-drop').removeClass('is-active');
        return false;
    });

    $('.js-reg-btn').click(function() {
        $('js-register').toggleClass('is-active');
        return false;
    });

    $('.js-popup-close').click(function() {
        $('.js-register').removeClass('is-active');
        return false;
    });

    $('.js-register').each(function() {
        $('body').click(function() {
            $('.js-register').removeClass('is-active');
        }); 
        $('.popup').click(function(event) {
            event.stopPropagation();
        });
    });

    $('.js-btn-nav').click(function(){
        $(this).toggleClass('is-active');
        $('.js-nav').toggleClass('is-open');
    });

    $('.js-search-mob').click(function() {
        $(this).parent().toggleClass('is-search');
        $('.js-search').toggleClass('is-active');
    });

    $('.js-menu-mob').click(function() {
        $(this).toggleClass('is-active');
        $(this).parent().toggleClass('is-tools');
        $('.js-tools-mob').toggleClass('is-active');
    });

});