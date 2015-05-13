$(function(){

	$('#readguide').popover('show');

	// Done read
	$('#read li').on('click',function(){
		$(this).addClass('done');
		$('#readguide').popover('hide');
	});

	// Read
	$('.filter a').on('click',function(){
		var lang = $(this).data('lang');
		console.log(lang);

		var display = $('#read');

		if(!display.hasClass(lang)){
			display.attr('class','');
			display.addClass(lang);
		}

	});

	// About
	$('#btnAbout').on('click',function(){
		$('#about').modal('show');
	});

});