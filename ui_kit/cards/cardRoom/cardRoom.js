import $ from "jquery"

$(function() {
  let kol = $('.cardRoom .cardRoom_image').length;
  for(let i=1;i<=kol;i++){
    $('.cardRoom').find('#'+i+'.cardRoom_image').addClass('images'+i);
  }
});