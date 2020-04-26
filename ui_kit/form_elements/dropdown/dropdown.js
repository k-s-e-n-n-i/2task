

$(function() {

	$('.blockDropdown_dropdown__whisItems').on('click', function(e) {
		//var block_list = $(this).closest('.blockDropdown').find('.blockDropdown_dropdownItems');
		dropdown_expend($(this));
	});	
	
});

function dropdown_expend(block) {
	items = block.closest('.blockDropdown_dropdown').find('blockDropdown_dropdownItems');

    if (block.hasClass('blockDropdown_dropdownItems__hide')){
		items.removeClass('blockDropdown_dropdownItems__hide');
		block.addClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(180deg)');
	}else{
		block.addClass('blockDropdown_dropdownItems__hide');

		block.removeClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(360deg)');
	}
}