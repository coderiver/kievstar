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
        if ($('.js-drop-block').offset().left >=! '0%') {
            $('.js-drop-left').hide();
        };
        if ($('.js-drop-block').offset().left < '0') {
            $('.js-drop-right').show();
        };
        return false;
    });
    $('.js-drop-right').on('click', function () {
        $('.js-drop-block').animate({ "left": "-=33%" });
        if ($('.js-drop-block').offset().left > '0') {
            $('.js-drop-left').show();
        };
        if ($(".field__lists-wrap").offset().left !== $(".field__list:last-child").offset().left) {
            $('.js-drop-right').hide();
        };
        // if ($('.js-drop-block').offset().left < '0') {
        //     $('.js-drop-right').hide();
        // };
        return false;
    });
});