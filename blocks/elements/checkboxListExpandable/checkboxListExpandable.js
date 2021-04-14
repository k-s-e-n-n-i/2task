import $ from "jquery"

$(function() {
  $('.checkbox-list-expandable').on('click', function(e) {
    var block_list = $(this).find('.checkbox-list'),
      expend = $(this).find('.checkbox-list-expandable__expand');
    
    if (block_list.hasClass('checkbox-list_hide')){
      block_list.removeClass('checkbox-list_hide');
      expend.addClass('checkbox-list-expandable__expand_open');
    }else{
      block_list.addClass('checkbox-list_hide');
      expend.removeClass('checkbox-list-expandable__expand_open');
    }
  });
});