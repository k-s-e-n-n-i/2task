import $ from "jquery"

$(function() {
  $('.checkboxList').on('click', function(e) {
    var block_list = $(this).find('.checkbox'),
      expend = $(this).find('.checkboxList_expand');
    
    if (block_list.hasClass('checkbox__hide')){
      block_list.removeClass('checkbox__hide');
      expend.addClass('checkboxList_expand__open');
    }else{
      block_list.addClass('checkbox__hide');
      expend.removeClass('checkboxList_expand__open');
    }
  });
});