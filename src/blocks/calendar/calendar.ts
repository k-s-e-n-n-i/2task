import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import '@Blocks/calendar/cell.scss';
import '@Blocks/calendar/datepicker-config.scss';
import '@Blocks/calendar/datepicker.scss';
import '@Blocks/calendar/navigation.scss';

$(function () {
  const mainOptions = {
    range: true,
    clearButton: true,
    todayButtonL: true,
    prevHtml: `<span class="datepicker--nav-action-prev"></span>`,
    nextHtml: `<span class="datepicker--nav-action-next"></span>`,
    button: `<span class="datepicker--button" data-action="#{action}">#{label}</span> <span class="datepicker--button-ok">Применить</span>`,
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  };

  const datepickerDropdown = $('.js-dropdown .js-datepicker-here').datepicker(
    $.extend(mainOptions, {
      onSelect: function onSelect(formattedDate: string) {
        let dates = formattedDate.split(',');

        if (dates[0] != undefined && dates[1] != undefined) {
          let date1 =
            parseInt(dates[0].substr(0, 2)) + ' ' + mainOptions.monthsShort[parseInt(dates[0].substr(3, 2))];
          let date2 =
            parseInt(dates[1].substr(0, 2)) + ' ' + mainOptions.monthsShort[parseInt(dates[1].substr(3, 2))];

          datepickerDropdown
            .closest('.dropdown')
            .find('.dropdown__field')
            .html(date1 + ' - ' + date2);
        } else {
          datepickerDropdown.closest('.dropdown').find('.dropdown__field').html('Выберите диапазон дат...');
        }
      },
    })
  );

  const datepickerDropdownDates = $('.js-dropdown-dates .js-datepicker-here').datepicker(
    $.extend(mainOptions, {
      onSelect: function onSelect(formattedDate: string) {
        let dates = formattedDate.split(',');

        if (dates[0] != undefined && dates[0] != '') {
          datepickerDropdownDates
            .closest('.dropdown-dates')
            .find('.dropdown-dates__dropdown:first')
            .html(dates[0]);
        } else {
          datepickerDropdownDates
            .closest('.dropdown-dates')
            .find('.dropdown-dates__dropdown:first')
            .html('ДД.ММ.ГГГГ');
        }

        if (dates[1] != undefined && dates[1] != '') {
          datepickerDropdownDates
            .closest('.dropdown-dates')
            .find('.dropdown-dates__dropdown:last')
            .html(dates[1]);
        } else {
          datepickerDropdownDates
            .closest('.dropdown-dates')
            .find('.dropdown-dates__dropdown:last')
            .html('ДД.ММ.ГГГГ');
        }
      },
    })
  );

  $('.js-ui-kit-cards__calendar-block .js-datepicker-here').datepicker(mainOptions);

  $('.js-dropdown[name=date] .js-dropdown__field').on('click', handleDateDropdownClick);
  $('.js-dropdown-dates .js-dropdown-dates__dropdown').on('click', handleDateDropdownClick);

  function handleDateDropdownClick(this: HTMLElement) {
    let calendarBlock;

    if ($(this).closest('.dropdown-dates').length != 0) {
      calendarBlock = $(this).closest('.dropdown-dates').find('.datepicker-here');
    } else {
      if ($(this).closest('.dropdown').length != 0) {
        calendarBlock = $(this).closest('.dropdown').find('.datepicker-here');
      }
    }

    if (calendarBlock != undefined) {
      if (calendarBlock.hasClass('datepicker-here_hide')) {
        calendarBlock.removeClass('datepicker-here_hide').addClass('js-datepicker-here_open');
        calendarBlock.show();
      } else {
        calendarBlock.addClass('datepicker-here_hide').removeClass('js-datepicker-here_open');
        calendarBlock.hide();
      }
    }
  }

  $(document).on('click', closeCalendar);

  function closeCalendar(e: JQuery.ClickEvent) {
    const thisClick = $(e.target);
    const elDropdown =
      thisClick.hasClass('dropdown__field') == true || thisClick.hasClass('dropdown-dates__dropdown') == true;
    const open = $('.js-datepicker-here').hasClass('js-datepicker-here_open');

    if (!elDropdown && open) {
      const itCalendar =
        thisClick.closest('.datepicker').length != 0 || thisClick.hasClass('js-datepicker-here_open');
      const cell = thisClick.hasClass('datepicker--cell');
      const navDate =
        thisClick.hasClass('datepicker--nav-title') ||
        thisClick.closest('.datepicker--nav-title').length != 0;
      const nav =
        thisClick.hasClass('datepicker--nav-action-prev') ||
        thisClick.hasClass('datepicker--nav-action-next');
      const itCalendarOpen = $('.js-datepicker-here_open');

      const clickedNotCalendar = !itCalendar && !cell && !nav && !navDate;

      if (clickedNotCalendar) {
        if (itCalendarOpen.closest('.dropdown-dates').length != 0) {
          itCalendarOpen.closest('.dropdown-dates').find('.dropdown-dates__dropdown:first').trigger('click');
        }
        if (itCalendarOpen.closest('.dropdown').length != 0) {
          itCalendarOpen.closest('.dropdown').find('.dropdown__field').trigger('click');
        }
      }
    }
  }

  $('.datepicker--buttons').append(
    '<span class="datepicker--button js-datepicker--button-ok">Применить</span>'
  );

  $('.js-datepicker--button-ok').on('click', handleDateBtnOkClick);

  function handleDateBtnOkClick(this: HTMLElement) {
    if ($(this).closest('.dropdown-dates').length != 0) {
      $(this).closest('.dropdown-dates').find('.dropdown-dates__dropdown:first').trigger('click');
    } else {
      if ($(this).closest('.dropdown').length != 0) {
        $(this).closest('.dropdown').find('.dropdown__field').trigger('click');
      }
    }
  }
});
