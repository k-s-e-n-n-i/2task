

$(function() {
	$('.formSearchNum').find('.formSearchNum_choiceDate .blockDropdown_dropdown__date').on('click', function(e) {
		var calendar = $(this).closest('.formSearchNum').find('.dropdownItemCalendar_block');
		
		if (calendar.hasClass('hide')){
			calendar.removeClass('hide');	
		}else{
			calendar.addClass('hide');
		}
	});	

	/*$('.calendar').on('click', function(e) {
		console.log('active',$('.pignose-calendar-unit-active'));
		if ($('.pignose-calendar-unit-active').length = 1){
			$('.pignose-calendar-unit-active a').css('background','linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)')
		}else{
			$('.pignose-calendar-unit-active a').css('background','linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)')
		}
	});*/

	/*$('.formSearchNum').find('.blockDropdown_dropdown__whisItems').on('click', function(e) {
		var block_list = $(this).closest('.formSearchNum').find('.blockDropdown_dropdownItems');
		dropdown_expend($(this),block_list);
	});*/	
});

function dropdown_expend(expend,block) {
	input = expend.closest('.blockDropdown_dropdown');

    if (block.hasClass('blockDropdown_dropdownItems__hide')){
		block.removeClass('blockDropdown_dropdownItems__hide');
		input.addClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(180deg)');
	}else{
		block.addClass('blockDropdown_dropdownItems__hide');
		input.removeClass('blockDropdown_dropdown__itemsShow');
		//expend.css('transform','rotate(360deg)');
	}
}