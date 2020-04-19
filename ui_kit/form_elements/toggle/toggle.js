$(function() {
	$('.toggle_item_label').on('click', function(e) {
		if ($(this).hasClass('off')){
			$(this).closest('.toggle').css('border-color','rgba(31, 32, 65, 0.25)');
		}
		if ($(this).hasClass('on')){
			$(this).closest('.toggle').css('border-color','#BC9CFF');
		}
	});	
});