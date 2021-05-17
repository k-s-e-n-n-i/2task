import $ from "jquery"

$(function() {
  $('.toggle-block__input-label').on('click', handleToggleClick);

  function handleToggleClick(){
    if ($(this).hasClass('toggle-block__input-label_off')){
      $(this).closest('.toggle-block__toggle').css('border-color','rgba(31, 32, 65, 0.25)');
    }
    if ($(this).hasClass('toggle-block__input-label_on')){
      $(this).closest('.toggle-block__toggle').css('border-color','#BC9CFF');
    }
  }
});