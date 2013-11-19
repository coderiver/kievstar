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

	// qj slider UI
	// $(function() {
	//     $( "#slider-range-min" ).slider({
	//       range: "min",
	//       min: 0,
	//       max: 1000,
	//       value: 173,
	//       slide: function( event, ui ) {
	//         $( "#amount" ).text( "$" + ui.value );
	//         $(this).find('.ui-slider-handle').text(ui.value);
	//       }
	//     });

	//     $( ".ui-slider-handle" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
	//   });

	$(function(){
    $("#slider-range-min").slider({
      range: "min",
      min: 0,
      max: 1000,
      value: 173,

        // var handle2 = handle1.next();
        // handle2.append('<span class="sidecar2"></span>');


      slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
          $(this).find('.ui-slider-handle').text(ui.value);
      },
      create: function(event, ui) {
          var v=$(this).slider('value');
          $(this).find('.ui-slider-handle').text(v);
      }



    });  
	});

});
