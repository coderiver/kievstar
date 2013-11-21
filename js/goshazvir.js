$(document).ready(function() {
	//select
	function select() {
		var el = $('.js-select-zvir');
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
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.bind("click",function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select-zvir").find(".js-select-text").text(text);
			$(this).parents(".js-select-zvir").find(".js-select-input").val(id);
	 });
	};
	select();

	//click document
	$(document).click(function() {
		$('.js-select-zvir').removeClass('is-open');
	});

	// for tag
	$('.tag .icon_cross').click(function() {
	  $(this).parent().fadeOut(100);
	})

	$(function() {
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
	});


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

});
