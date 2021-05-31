import 'pg-calendar';
//import './i18n.js';

let dateGlobal;

$(function() {
  $('.dropdown-dates .calendar').pignoseCalendar({     
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
        console.log(context.context.settings.controls.ok);

        if ((date[0] != null) && (date[0]._i != undefined)){
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = date[0].format('DD.MM.YYYY');
        }else{
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = 'ДД.ММ.ГГГГ';
        }
        if ((date[1] != null) && (date[1]._i != undefined)){
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = date[1].format('DD.MM.YYYY');
        }else{
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = 'ДД.ММ.ГГГГ';
        }
      }
  });

  //$('.pignose-calendar-button-cancel').html('Очистить');
  //$('.pignose-calendar-button-apply').html('Применить');


  $('.dropdown-dates .dropdown-block__dropdown').on('click', handleCalendarblockClick);

  function handleCalendarblockClick(){
    const block_calendar = $(this).closest('.dropdown-dates').find('.calendar-block');

    if (block_calendar.hasClass('calendar-block_hide')){
      block_calendar.removeClass('calendar-block_hide');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_calendar.addClass('calendar-block_hide');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
  }


  $('.pignose-calendar-button-cancel').on('click', handleDropdownCleanClick);

  function handleDropdownCleanClick(e){
    e.preventDefault();
    $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = 'ДД.ММ.ГГГГ';
    $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = 'ДД.ММ.ГГГГ';
    $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
  }


  $(document).on('click', closeCalendar);

  function closeCalendar(e){
    const thisClick = $(e.target),
        elDropdown = thisClick.hasClass('dropdown-block__dropdown') == true,
        open = !$('.dropdown-dates .calendar-block').hasClass('calendar-block_hide');

    if (!elDropdown && open){
      const itCalendar = ((thisClick.closest('.calendar-block').length != 0) || (thisClick.hasClass('calendar-block')));

      if (!itCalendar){
        $('.dropdown-dates .dropdown-block__dropdown:first').trigger('click');
      }
    }    
  }
  
});


$(function() {
  $('.dropdown-block .calendar').pignoseCalendar({     
    week: 1,
    lang: 'ru',
    multiple: true,
    buttons: true,
    format: 'DD.MM.YYYY',

    apply: function(date, context) { 
      $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').trigger('click');
    },

    select: function(date, context) {
      if ((date[0] != null) && (date[0]._i != undefined) && (date[1] != null) && (date[1]._i != undefined)){
        const month1 = context.context.settings.months[date[0].format('M')-1];
        const month2 = context.context.settings.months[date[1].format('M')-1];
        
        $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html(`${date[0].format('D')} ${month1} - ${date[1].format('D')} ${month2}`);
      }else{
        $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html('Выберите даты...');
      }
    }
  });


  $('.dropdown-block .dropdown-block__dropdown').on('click', handleCalendarblockClick);

  function handleCalendarblockClick(){
    const block_calendar = $(this).closest('.dropdown-block').find('.calendar-block');

    if (block_calendar.hasClass('calendar-block_hide')){
      block_calendar.removeClass('calendar-block_hide');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_calendar.addClass('calendar-block_hide');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
  }


  $('.pignose-calendar-button-cancel').on('click', handleDropdownCleanClick);

  function handleDropdownCleanClick(e){
    e.preventDefault();
    $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html('Выберите даты...');
    $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').trigger('click');
  }


  $(document).on('click', closeCalendar);

  function closeCalendar(e){
    const thisClick = $(e.target),
        elDropdown = thisClick.hasClass('dropdown-block__dropdown') == true,
        open = !$('.dropdown-block .calendar-block').hasClass('calendar-block_hide');

    console.log(open)
    if (!elDropdown && open){
      const itCalendar = ((thisClick.closest('.calendar-block').length != 0) || (thisClick.hasClass('calendar-block')));

      if (!itCalendar){
        $('.dropdown-block .dropdown-block__dropdown').trigger('click');
      }
    }    
  }
});