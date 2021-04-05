$(function() {
  $('.blockDropdown_dropdown__whisItems').on('click', function(e) {
    var block_list = $(this).closest('.blockDropdown').find('.blockDropdown_dropdownItems');

    if (block_list.hasClass('blockDropdown_dropdownItems__hide')){
      block_list.removeClass('blockDropdown_dropdownItems__hide');
      $(this).addClass('blockDropdown_dropdown__itemsShow');
    }else{
      block_list.addClass('blockDropdown_dropdownItems__hide');
      $(this).removeClass('blockDropdown_dropdown__itemsShow');
    }
  });	
});