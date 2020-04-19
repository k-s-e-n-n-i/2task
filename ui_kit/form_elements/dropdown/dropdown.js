

$(function() {

	$('.blockDropdown_dropdown_expand').on('click', function(e) {
		var block_list = $(this).closest('.blockDropdown').find('.blockDropdown_dropdown_items');
		dropdown_expend($(this),block_list);
	});	

	
});

function dropdown_expend(expend,block) {
	input = expend.closest('.blockDropdown_dropdown');

    if (block.hasClass('blockDropdown_dropdown_items__hide')){
		block.removeClass('blockDropdown_dropdown_items__hide');
		input.addClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(180deg)');
	}else{
		block.addClass('blockDropdown_dropdown_items__hide');

		input.removeClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(360deg)');
	}
}