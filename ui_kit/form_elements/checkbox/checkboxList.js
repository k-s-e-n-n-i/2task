

$(function() {

	$('.checkboxList_expand').on('click', function(e) {
		var block_list = $(this).closest('.checkboxList').find('.checkbox');
		dropdown_expend($(this),block_list);
	});	

	
});

function dropdown_expend(expend,block) {

    if (block.hasClass('checkbox__hide')){
		block.removeClass('checkbox__hide');
		expend.css('transform','rotate(180deg)');
	}else{
		block.addClass('checkbox__hide');
		expend.css('transform','rotate(360deg)');
	}
}