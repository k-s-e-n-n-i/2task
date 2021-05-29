import 'pg-calendar';

$(document).ready(function() {
  $('.calendar').pignoseCalendar({
    week: 1,
    lang: 'ru',
    multiple: true,
    buttons: true,
  });

  $('.pignose-calendar-button-cancel').html('Очистить');
  $('.pignose-calendar-button-apply').html('Применить');
});


$(function() {

  $('.dropdown-block__dropdown').on('click', handleCalendarblockClick);

  function handleCalendarblockClick(){
    var block_calendar = $(this).closest('.dropdown-dates').find('.calendar-block');

    if (block_calendar.hasClass('calendar-block_hide')){
      block_calendar.removeClass('calendar-block_hide');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_calendar.addClass('calendar-block_hide');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
  }
});