




$(function() {
	$('.like').on('click', function(e) {
		
		if ($(this).hasClass('on')){
			console.log('уже голосовали');
		}
		else{
			$(this).css('border-color','#BC9CFF');
			$(this).find('.like_ico').attr('src','ui_kit/form_elements/like/favorite.svg');
			$(this).find('.like_sum').css('color','#BC9CFF');
			$(this).addClass('on');
		}
	});	
});