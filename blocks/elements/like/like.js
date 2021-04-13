import $ from "jquery"

$(function() {
  $('.like').on('click', function(e) {
    var sum = parseInt($(this).find('.like__sum').html());
    
    if ($(this).hasClass('like_liked')){
      $(this).removeClass('like_liked');
      $(this).find('.like__ico').removeClass('like__ico_liked');	
      $(this).find('.like__sum').removeClass('like__sum_liked');
      $(this).find('.like__sum').html(sum - 1);
    }else{
      $(this).addClass('like_liked');
      $(this).find('.like__ico').addClass('like__ico_liked');	
      $(this).find('.like__sum').addClass('like__sum_liked');
      $(this).find('.like__sum').html(sum + 1);	
    }
  });	
});