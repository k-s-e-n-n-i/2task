import 'air-datepicker';
import './datepicker.scss';
import './datepicker-config.scss';
import './cell.scss';
import './navigation.scss';

$(function () {
  const mainOptions = {
    range: true,
    clearButton: true,
    todayButtonL: true,
    prevHtml: '<span class="datepicker--nav-action-prev"></span>',
    nextHtml: '<span class="datepicker--nav-action-next"></span>',
    button: '<span class="datepicker--button" data-action="#{action}">#{label}</span><span class="datepicker--button-ok">Применить</span>',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
  }

  let datepicker = $('.dropdown .datepicker-here').datepicker(
    $.extend(
      mainOptions,
      {
        onSelect: function onSelect(formattedDate, date, inst) {
          let dates = formattedDate.split(',');

          if ((dates[0] != undefined) && (dates[1] != undefined)){
            let date1 = date[0].getDate() + ' ' + mainOptions.monthsShort[date[0].getMonth()];
            let date2 = date[1].getDate() + ' ' + mainOptions.monthsShort[date[1].getMonth()];

            inst.$datepicker.closest('.dropdown').find('.dropdown__dropdown').html(date1 + ' - ' +date2);
          } else {
            inst.$datepicker.closest('.dropdown').find('.dropdown__dropdown').html('Выберите диапазон дат...');
          }
        }
      }
    )
  );

  let datepickerDates = $('.dropdown-dates .datepicker-here').datepicker(
    $.extend(
      mainOptions,
      {
        onSelect: function onSelect(formattedDate, date, inst) {
          let dates = formattedDate.split(',');

          if ((dates[0] != undefined) && (dates[0] != '')){
            inst.$datepicker.closest('.dropdown-dates').find('.dropdown__dropdown:first').html(dates[0]);
          } else {
            inst.$datepicker.closest('.dropdown-dates').find('.dropdown__dropdown:first').html('ДД.ММ.ГГГГ');
          }

          if ((dates[1] != undefined) && (dates[1] != '')){
            inst.$datepicker.closest('.dropdown-dates').find('.dropdown__dropdown:last').html(dates[1]);
          } else {
            inst.$datepicker.closest('.dropdown-dates').find('.dropdown__dropdown:last').html('ДД.ММ.ГГГГ');
          }
        }
      }
    )
  );

  $('.ui-kit-cards__calendar-block .datepicker-here').datepicker(mainOptions);


  $('.dropdown[name=date] .dropdown__dropdown').on('click', handleDateDropdownClick);

  function handleDateDropdownClick() {
    const block_calendar, dpic;

    if ($(this).closest('.dropdown-dates').length != 0){
      block_calendar = $(this).closest('.dropdown-dates').find('.datepicker-here');
      dpic = datepickerDates;
    }else{
      if ($(this).closest('.dropdown').length != 0){
        block_calendar = $(this).closest('.dropdown').find('.datepicker-here');
        dpic = datepicker;
      }
    }

    if (block_calendar.hasClass('datepicker-here_hide')){
      block_calendar.removeClass('datepicker-here_hide').addClass('datepicker-here_open');
      dpic.show();
    }else{
      block_calendar.addClass('datepicker-here_hide').removeClass('datepicker-here_open');
      dpic.hide();
    }
  }

  $(document).on('click', closeCalendar);

  function closeCalendar(e){
    const thisClick = $(e.target);
    const elDropdown = thisClick.hasClass('dropdown__dropdown') == true;
    const open = $('.datepicker-here').hasClass('datepicker-here_open');

    if (!elDropdown && open){
      const itCalendar = ((thisClick.closest('.datepicker').length != 0) || (thisClick.hasClass('datepicker-here_open')));
      const cell = thisClick.hasClass('datepicker--cell');
      const navDate = (thisClick.hasClass('datepicker--nav-title') || (thisClick.closest('.datepicker--nav-title').length != 0));
      const nav = (thisClick.hasClass('datepicker--nav-action-prev') || thisClick.hasClass('datepicker--nav-action-next'));

      if (!itCalendar && !cell && !nav && !navDate){
        if ($('.datepicker-here_open').closest('.dropdown-dates').length != 0){
          $('.datepicker-here_open').closest('.dropdown-dates').find('.dropdown__dropdown:first').trigger('click');
        }
        if ($('.datepicker-here_open').closest('.dropdown').length != 0){
          $('.datepicker-here_open').closest('.dropdown').find('.dropdown__dropdown').trigger('click');
        }
      }
    }
  }

  
  $('.datepicker--buttons').append('<span class="datepicker--button-ok">Применить</span>');

  $('.datepicker--button-ok').on('click', handleDateBtnOkClick);
  
  function handleDateBtnOkClick() {
    if ($(this).closest('.dropdown-dates').length != 0){
      $(this).closest('.dropdown-dates').find('.dropdown__dropdown:first').trigger('click');
    }else{
      if ($(this).closest('.dropdown').length != 0){
        $(this).closest('.dropdown').find('.dropdown__dropdown').trigger('click');
      }
    }
  }
});

