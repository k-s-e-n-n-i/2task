import $ from "jquery"

$(function() {
  $('.formSearchNum').find('.dropdown-dates .dropdown-block__dropdown_date').on('click', function(e) {
    var calendar = $(this).closest('.formSearchNum').find('.dropdownItemCalendar_block');
    
    if (calendar.hasClass('hide')){
      calendar.removeClass('hide');	
    }else{
      calendar.addClass('hide');
    }
  });	
});

function dropdown_expend(expend,block) {
  input = expend.closest('.dropdown-block__dropdown');

    if (block.hasClass('dropdown-block__dropdown-items_hide')){
    block.removeClass('dropdown-block__dropdown-items_hide');
    input.addClass('dropdown-block__dropdown_items-show');
  }else{
    block.addClass('dropdown-block__dropdown-items_hide');
    input.removeClass('dropdown-block__dropdown_items-show');
  }
}