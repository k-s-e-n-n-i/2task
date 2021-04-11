import $ from "jquery"

$(function() {
  $('.like').on('click', function(e) {
    var sum = parseInt($(this).find('.like_sum').html());
    
    if ($(this).hasClass('like__liked')){
      $(this).removeClass('like__liked');
      $(this).find('.like_ico').removeClass('like__liked');	
      $(this).find('.like_sum').removeClass('like__liked');
      $(this).find('.like_sum').html(sum - 1);
    }else{
      $(this).addClass('like__liked');
      $(this).find('.like_ico').addClass('like__liked');	
      $(this).find('.like_sum').addClass('like__liked');
      $(this).find('.like_sum').html(sum + 1);	
    }
  });	
});