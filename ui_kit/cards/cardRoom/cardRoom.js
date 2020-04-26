

$(function() {

	kol = $('.cardRoom .cardRoom_image').length;
	for(i=1;i<=kol;i++){
		$('.cardRoom').find('#'+i+'.cardRoom_image').addClass('images'+i);
	}
	



});