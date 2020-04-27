

$(function() {

	$('.room_search').find('.filter_guest .expand').on('click', function(e) {
		var block_list = $(this).closest('.filter_guest').find('.dropdown_items');
		dropdown_expend($(this),block_list);
	});	

	$('.room_search').find('.filter_comfort .expand').on('click', function(e) {
		var block_list = $(this).closest('.filter_comfort').find('.dropdown_items');
		dropdown_expend($(this),block_list);
	});

	$('.room_search').find('.filter_additional .expand').on('click', function(e) {
		var block_list = $(this).closest('.filter_additional').find('.checkbox');
		dropdown_expend($(this),block_list);
	});
});

function dropdown_expend(expend,block) {
	input = expend.closest('.dropdown');
	console.log(input);

    if (block.hasClass('hide')){
		block.removeClass('hide');	
		input.addClass('items_show');
		expend.css('transform','rotate(180deg)');
	}else{
		block.addClass('hide');
		input.removeClass('items_show');
		expend.css('transform','rotate(360deg)');
	}
}