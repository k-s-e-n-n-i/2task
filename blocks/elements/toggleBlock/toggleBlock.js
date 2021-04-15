import $ from "jquery"

$(function() {
  $('.toggle-block__input-label').on('click', function(e) {
    if ($(this).hasClass('off')){
      $(this).closest('.toggle-block__toggle').css('border-color','rgba(31, 32, 65, 0.25)');
    }
    if ($(this).hasClass('on')){
      $(this).closest('.toggle-block__toggle').css('border-color','#BC9CFF');
    }
  });
});