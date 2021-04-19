import $ from "jquery"

$(function() {
  $('.dropdown-block__dropdown').on('click', handleDropwownClick)

  function handleDropwownClick(){
    var block_list = $(this).closest('.dropdown-block').find('.dropdown-block__dropdown-items');

    if (block_list.hasClass('dropdown-block__dropdown-items_hide')){
      block_list.removeClass('dropdown-block__dropdown-items_hide');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_list.addClass('dropdown-block__dropdown-items_hide');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
  }
});