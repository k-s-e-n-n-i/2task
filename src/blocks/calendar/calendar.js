import 'pg-calendar';

$(document).ready(function() {
  $('.calendar').pignoseCalendar({     
      week: 1,
      lang: 'ru',
      multiple: true,
      buttons: true,
      format: 'DD.MM.YYYY',
      controls: {
        ru: {
          cancel: "Очистить",
          ok: "Применить"
        }
      },
      apply: function(date, context) {
        

        
        $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
      },
      select: function(date, context) {
        console.log(context);//, context.context.settings.format)

        console.log(date[0], date[1]);
        //console.log(date[0]._i, date[1]._i);

        console.log(date[0], date[1]);
        if ((date[0] != null) && (date[0]._i != undefined)){
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = date[0]._i;
        }else{
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = 'ДД.ММ.ГГГГ';
        }
        if ((date[1] != null) && (date[1]._i != undefined)){
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = date[1]._i;
        }else{
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = 'ДД.ММ.ГГГГ';
        }
      }
  });

  //$('.pignose-calendar-button-cancel').html('Очистить');
  //$('.pignose-calendar-button-apply').html('Применить');
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


  //$('.pignose-calendar-button-apply').on('click', handleDropdownOkClick);
  $('.pignose-calendar-button-cancel').on('click', handleDropdownCleanClick);

  /*function handleDropdownOkClick(e){
    e.preventDefault();
    $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
  }*/

  function handleDropdownCleanClick(e){
    e.preventDefault();
  }


  $(document).on('click', closeCalendar);

  function closeCalendar(e){
    const thisClick = $(e.target),
        elDropdown = thisClick.hasClass('dropdown-block__dropdown') == true,
        open = !$('.calendar-block').hasClass('calendar-block_hide');

    if (!elDropdown && open){
      const itCalendar = ((thisClick.closest('.calendar-block').length != 0) || (thisClick.hasClass('calendar-block')));

      if (!itCalendar){
        $('.dropdown-dates .dropdown-block__dropdown:first').trigger('click');
      }
    }    
  }
  
});