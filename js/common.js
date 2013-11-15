$(document).ready(function() {

	$('.js-select').selectmenu();

	$('input, textarea').placeholder();

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

	//scroll to navbar
	var nav = $('.js-navbar');
	var top = nav.offset().top;

	$(".js-navbar a").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top - nav.outerHeight()
		}, 500);
		return false;
	});

	$(window).scroll(function(){
				var windowpos = $(window).scrollTop();

				if(windowpos < top) {
					nav.removeClass('is-fixed');
					$('body').removeClass('is-navbar-fixed');
				} else {
					nav.addClass('is-fixed');
					$('body').addClass('is-navbar-fixed');
				}
	});

});
