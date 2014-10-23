$(document).ready(function() {

	$('.js-select').selectmenu();

	$('input, textarea').placeholder();

	$('.box_slide > .box__headline').click(function (event) {
		jQuery('.box_slide > .box__content').slideToggle();
		jQuery('.box_slide').toggleClass('is-active');
		return false;
	});


	// tabs
	$(".js-tabs-pane").removeClass("is-visible");
	$(".js-tabs-nav li:first").addClass("is-active");
	$(".js-tabs-pane:first").addClass("is-visible");

	$(".js-tabs-nav li").click(function() {
		$(".js-tabs-nav li").removeClass("is-active");
		$(this).addClass("is-active");
		$(".js-tabs-pane").removeClass("is-visible");
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).addClass("is-visible");
		return false;
	});

	// //scroll to navbar
	// var nav = $('.js-navbar');
	// var top = nav.offset().top;

	// $(".js-navbar a").click(function (){
	// 	var page = $(this).attr("href");

	// 	$('html, body').animate({
	// 		scrollTop: $(page).offset().top - nav.outerHeight()
	// 	}, 500);
	// 	return false;
	// });

	// $(window).scroll(function(){
	// 			var windowpos = $(window).scrollTop();

	// 			if(windowpos < top) {
	// 				nav.removeClass('is-fixed');
	// 				$('body').removeClass('is-navbar-fixed');
	// 			} else {
	// 				nav.addClass('is-fixed');
	// 				$('body').addClass('is-navbar-fixed');
	// 			}
	// });

	

	// $('.star').raty();







	// popup
	jQuery('.profile__login').click(function(event) {
		jQuery('.popup').addClass('is-active');
		jQuery('.overlay').addClass('is-active');
		return false;
	});
	jQuery('.popup__close, .overlay').click(function(event) {
		jQuery('.popup').removeClass('is-active');
		jQuery('.overlay').removeClass('is-active');
		return false;
	});

		
	//select
	function select() {
		var el = $('.js-select-other');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.bind("click",function(event){
			tooltip();
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
				$(this).parent().parent().parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$('.row').removeClass('is-open')
				$(this).parent().addClass('is-open');
				$(this).parent().parent().parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.bind("click",function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).html();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select-other").find(".js-select-text").html(text);
			$(this).parents(".js-select-other").find(".js-select-input").val(id);
	 });
		item.click(function(){
			$(this).parent().parent().parent().addClass("is-select");
		})
	};
	select();

	// if($(".js-select-input").val("change")){
	// 	$(this).parent().addClass("is-select");
	// };

	//click document
	$(document).click(function() {
		$('.js-select-other').removeClass('is-open');
		$(".search__form").removeClass("is-active");
	});

	// for tag
	$('.tag .icon_cross').click(function() {
	  $(this).parent().fadeOut(100);
	})

	if($('#slider-range-min').length>1){
		  $( "#slider-range-min" ).slider({
		    range: "min",
		    value: 173,
		    min: 0,
		    max: 1000,
		    slide: function( event, ui ) {
		      $( "#amount" ).val(ui.value + " грн");
		    }
		  });
		  $( "#amount" ).val($( "#slider-range-min" ).slider( "value" ) + " грн");
	  }

	function tooltip() {
		var btn = $('.js-tooltip');
		var box = $('.js-tooltip-box');
		var box_content = box.find('.box__content');		
		btn.bind('click', function(){
			var text = $(this).attr('data-tooltip');
			box_content.html(text);
			//slide
			var pos_top = $(this).position().top;
			box.css('top', pos_top);
		});
	}
	tooltip();


	$('.star').raty({
		path      : 'img/icons',
		// size      : 24,
		starHalf  : 'star-on.png',
		starOff   : 'star-off.png',
		starOn    : 'star-on.png',
		// target    : '#function-hint',
		cancel    : false,
		targetKeep: true,
		precision : true
	});

	$(".search__input").focus(function (){
		$(this).parent().parent().addClass("is-active");
	});
		
	$( ".search__form" ).click(function( event ) {
	  event.stopPropagation();
	});
	$(".js-theme").on('click', function(){
		$(".js-theme").removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-popup-overlay').addClass('is-active');
	});
	$('#mysite-form').validate();
	// $('#site-email, #site-name').on('change', function (){
	// 	$('#js-btn-mysite').removeAttr("disabled");
	// });
	function buttondisabled() {
		$('#site-email, #site-name').on('input', function (){
			var nameLength = $('#site-name').val().length;
			var emailLength = $('#site-email').val().length;
			if ((nameLength || emailLength) > 0) {
				$('#js-btn-mysite').removeAttr("disabled");
			};
		});
	}
	buttondisabled();
});
