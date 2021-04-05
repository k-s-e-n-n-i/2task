$(function() {
  $('.formReservation').find('.formReservation_block__flexcolumn .blockDropdown_dropdown__date').on('click', function(e) {
    var calendar = $(this).closest('.formReservation').find('.dropdownItemCalendar_block');
    
    if (calendar.hasClass('hide')){
      calendar.removeClass('hide');	
    }else{
      calendar.addClass('hide');
    }
  });
});

function dropdown_expend(expend,block) {
  input = expend.closest('.blockDropdown_dropdown');

    if (block.hasClass('blockDropdown_dropdownItems__hide')){
    block.removeClass('blockDropdown_dropdownItems__hide');
    input.addClass('blockDropdown_dropdown__itemsShow');
  }else{
    block.addClass('blockDropdown_dropdownItems__hide');
    input.removeClass('blockDropdown_dropdown__itemsShow');
  }
}