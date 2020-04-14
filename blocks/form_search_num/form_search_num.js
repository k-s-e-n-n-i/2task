

$(function() {
	$('.form_search_num').find('.block_dropdown .date .expand').on('click', function(e) {
		var calendar = $(this).closest('.form_search_num').find('.block_calendar');
		
		if (calendar.hasClass('hide')){
			calendar.removeClass('hide');	
		}else{
			calendar.addClass('hide');
		}
	});	

	$('.form_search_num').find('.filter_guest .expand').on('click', function(e) {
		var block_list = $(this).closest('.filter_guest').find('.dropdown_items');
		//expend = $(this).closest('.flex').find('.expend');
		dropdown_expend($(this),block_list);
		

	});	
});

function dropdown_expend(expend,block) {
	input = expend.closest('.dropdown');
	//console.log(expend);

	if (block.hasClass('hide')){
		//console.log(input);
		block.removeClass('hide');	
		input.addClass('items_show');
		expend.css('transform','rotate(180deg)');
	}else{
		//console.log('4');
		block.addClass('hide');
		input.removeClass('items_show');
		expend.css('transform','rotate(360deg)');
	}    
}