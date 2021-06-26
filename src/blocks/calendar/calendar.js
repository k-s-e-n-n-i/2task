import 'pg-calendar';

$(function() {
  const mainOptions = {
    week: 1,
    lang: 'custom',
    multiple: true,
    buttons: true,
    format: 'DD.MM.YYYY',
    weeks: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthsLong: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    months: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
    controls: {
      cancel: "Очистить",
      ok: "Применить"
    },
  }

  $('.dropdown-dates .calendar').pignoseCalendar(
    $.extend(
      mainOptions,
      { 
        apply: function(date, context) { 
          $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
        },

        select: function(date, context) {
          

          if (date[0] != null){
            $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = date[0].format('DD.MM.YYYY');
            activeUnits($(this));
          }else{
            $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = 'ДД.ММ.ГГГГ';
            activeUnits($(this));
          }
          if (date[1] != null){
            $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = date[1].format('DD.MM.YYYY');
            activeUnits($(this));
          }else{
            $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = 'ДД.ММ.ГГГГ';
            activeUnits($(this));
          }
        }
      }
    )
  );

  $('.dropdown-block .calendar').pignoseCalendar(
    $.extend(
      mainOptions,
      {
        apply: function(date, context) { 
          $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').trigger('click');
        },

        select: function(date, context) {
          if ((date[0] != null) && (date[1] != null)){
            const month1 = context.context.settings.months[date[0].format('M')-1];
            const month2 = context.context.settings.months[date[1].format('M')-1];

            $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html(`${date[0].format('D')} ${month1} - ${date[1].format('D')} ${month2}`);
            activeUnits($(this));
          }else{
            $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html('Выберите диапазон дат...');
            activeUnits($(this));
          }
        }
      }
    )
  );

  $('.ui-kit-cards__calendar-block .calendar').pignoseCalendar(mainOptions);

  function activeUnits (thisClick){
    let calendar = thisClick.closest('.pignose-calendar-body');
    let active_first = calendar.find('.pignose-calendar-unit-first-active');
    let active_second = calendar.find('.pignose-calendar-unit-second-active');

    if ((active_first.length != 0) && (active_second.length != 0)){
      active_first.addClass('active-first');
      active_second.addClass('active-second');
    }else{
      calendar.find('.active-first').removeClass('active-first');
      calendar.find('.active-second').removeClass('active-second');
    }
  }

  $('.dropdown-block[name=date] .dropdown-block__dropdown').on('click', handleDateDropdownClick);
  
  function handleDateDropdownClick(){
    const block_calendar;

    if ($(this).closest('.dropdown-dates').length != 0){
      block_calendar = $(this).closest('.dropdown-dates').find('.calendar-block');
    }else{
      if ($(this).closest('.dropdown-block').length != 0){
        block_calendar = $(this).closest('.dropdown-block').find('.calendar-block');
      }
    }

    if (block_calendar.hasClass('calendar-block_hide')){
      block_calendar.removeClass('calendar-block_hide').addClass('calendar-block_open');
      $(this).addClass('dropdown-block__dropdown_items-show');
    }else{
      block_calendar.addClass('calendar-block_hide').removeClass('calendar-block_open');
      $(this).removeClass('dropdown-block__dropdown_items-show');
    }
    
  }

  $('.pignose-calendar-button-cancel').on('click', handleCalendarCleanClick);

  function handleCalendarCleanClick(e){
    e.preventDefault();
    if ($(this).closest('.dropdown-dates').length != 0){
      $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[0].innerText = 'ДД.ММ.ГГГГ';
      $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown')[1].innerText = 'ДД.ММ.ГГГГ';
      $(this).closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
    }else{
      if ($(this).closest('.dropdown-block').length != 0){
        $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').html('Выберите диапазон дат...');
        $(this).closest('.dropdown-block').find('.dropdown-block__dropdown').trigger('click');
      }
    }
  }

  $(document).on('click', closeCalendar);

  function closeCalendar(e){
    const thisClick = $(e.target);
    const elDropdown = thisClick.hasClass('dropdown-block__dropdown') == true;
    const open = $('.calendar-block').hasClass('calendar-block_open');
    
    if (!elDropdown && open){
      const itCalendar = ((thisClick.closest('.calendar-block_open').length != 0) || (thisClick.hasClass('calendar-block_open')));

      if (!itCalendar){      
        if ($('.calendar-block_open').closest('.dropdown-dates').length != 0){
          $('.calendar-block_open').closest('.dropdown-dates').find('.dropdown-block__dropdown:first').trigger('click');
        }
        if ($('.calendar-block_open').closest('.dropdown-block').length != 0){
          $('.calendar-block_open').closest('.dropdown-block').find('.dropdown-block__dropdown').trigger('click');
        }
      }
    }    
  }

});