$(function(){

	$('#readguide').popover('show');

	$('html,body').on('click',function(){
		$('#readguide').popover('hide');
	});

	setTimeout(function(){
		$('#readguide').popover('hide');
	},5000);

	// Done read
	$('#read li').on('click',function(){
		$(this).addClass('done');
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