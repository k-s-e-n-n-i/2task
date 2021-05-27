$(function() {
  let kol = $('.card-room .card-room__image').length;
  for(let i = 1; i <= kol; i++){
    $('.card-room').find('#'+i+'.card-room__image').addClass('images'+i);
  }
});