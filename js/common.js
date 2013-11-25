$(document).ready(function() {

	$('.js-select').selectmenu();

	$('input, textarea').placeholder();

	$('.box_slide > .box__headline').click(function (event) {
		jQuery('.box_slide > .box__content').slideToggle();
		jQuery('.box_slide').toggleClass('is-active');
		return false;
	});


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

	$(".js-navbar a").click(function() {
		var navbar_nav = $(this).attr("href");

		$(".js-navbar li").removeClass('is-active');
		$(this).parent().addClass('is-active');

		$("html, body").animate({
			scrollTop: $(navbar_nav).offset().top
		}, 500);
		return false;
	});

	function nav() {
		$(".js-nav-section").each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			//console.log("."+id);
			if ($(window).scrollTop() >= pos) {
				$(".js-navbar li").removeClass("is-active");
				$('[href = #'+id+']').parent().addClass('is-active');
			}
		});
	}

	function fixed_nav() {
		var nav_pos = $(".js-navbar").offset().top;
		console.log("nav "+nav_pos);
		var scroll_pos = $(window).scrollTop();
		console.log("scroll "+scroll_pos);
		if (scroll_pos >= nav_pos) {
			$("body").addClass("is-navbar-fixed");
			$(".js-navbar").addClass("is-fixed");
		}
		else {
			$("body").removeClass("is-navbar-fixed");
			$(".js-navbar").removeClass("is-fixed");
		}
	}

	if ($(".js-navbar").length > 0) {
		nav();
		fixed_nav();
	} 

	$(window).scroll(function(){
		if ($(".js-navbar").length > 0) {
			nav();
			fixed_nav();
		}
	});


	if ($(".star").length > 0) {
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
	}

});