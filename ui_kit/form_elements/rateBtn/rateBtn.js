import $ from "jquery"

$(function() {
  $('.rate_star').on('click', function(e) {
    $(this).closest('.rate').find('.rate_star').removeClass('rate_star__active');

    var num = parseInt($(this).attr('id'));

    for(let i=1;i<=num;i++){
      $(this).closest('.rate').find('#'+i).addClass('rate_star__active');
    }
  });	
});