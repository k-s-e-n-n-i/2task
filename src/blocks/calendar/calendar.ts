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

  class CalendarDropdown {
    datepicker: JQuery<HTMLElement>;
    dropdown: JQuery<HTMLElement>;
    field: JQuery<HTMLElement>;

    constructor(datepicker: JQuery<HTMLElement>) {
      this.datepicker = datepicker;
      this.dropdown = datepicker.closest('.dropdown');
      this.field = this.dropdown.find('.dropdown__field');
    }

    init() {
      this.datepicker.datepicker(
        $.extend(mainOptions, {
          onSelect: (formattedDate: string) => {
            const dates = formattedDate.split(',');

            if (dates[0] != undefined && dates[1] != undefined) {
              const date1 = `${parseInt(dates[0].substr(0, 2))} ${
                mainOptions.monthsShort[parseInt(dates[0].substr(3, 2))]
              }`;
              const date2 = `${parseInt(dates[1].substr(0, 2))} ${
                mainOptions.monthsShort[parseInt(dates[1].substr(3, 2))]
              }`;

              this.field.html(`${date1} - ${date2}`);
            } else {
              this.field.html('Выберите диапазон дат...');
            }
          },
        })
      );

      this.datepicker
        .find('.datepicker--buttons')
        .append('<span class="datepicker--button js-datepicker--button-ok">Применить</span>');

      const buttonOk = this.datepicker.find('.js-datepicker--button-ok');

      this.field.on('click', () => {
        this.handleDateDropdownClick();
      });

      buttonOk.on('click', () => {
        this.handleDateBtnOkClick();
      });

      $(document).on('click', (event) => {
        this.closeCalendar(event);
      });
    }

    handleDateDropdownClick() {
      this.datepicker.toggleClass('datepicker-here_hide js-datepicker-here_open');
    }

    handleDateBtnOkClick() {
      this.field.trigger('click');
    }

    closeCalendar(event: JQuery.ClickEvent) {
      const eventElementClass = $(event.target).attr('class');
      const clickInField = this.field.find(`.${eventElementClass}`).length != 0;

      if (clickInField) {
        return;
      }

      const clickToField = $(event.target).hasClass('dropdown__field');

      if (clickToField) {
        return;
      }

      const eventFirstClass = eventElementClass?.split(' ')[0];
      const clickInDatepicker = this.dropdown.find(`.dropdown__calendar .${eventFirstClass}`).length != 0;

      if (clickInDatepicker) {
        return;
      }

      this.datepicker.removeClass('js-datepicker-here_open').addClass('datepicker-here_hide');
    }
  }

  class CalendarDropdownDates {
    datepicker: JQuery<HTMLElement>;
    dropdownDates: JQuery<HTMLElement>;
    dropdownFirst: JQuery<HTMLElement>;
    dropdownLast: JQuery<HTMLElement>;
    fields: JQuery<HTMLElement>;

    constructor(datepicker: JQuery<HTMLElement>) {
      this.datepicker = datepicker;
      this.dropdownDates = datepicker.closest('.dropdown-dates');
      this.fields = this.dropdownDates.find('.js-dropdown-dates__dropdown');
      this.dropdownFirst = this.fields.first();
      this.dropdownLast = this.fields.last();
    }

    init() {
      this.datepicker.datepicker(
        $.extend(mainOptions, {
          onSelect: (formattedDate: string) => {
            const dates = formattedDate.split(',');

            if (dates[0] != undefined && dates[0] != '') {
              this.dropdownFirst.html(dates[0]);
            } else {
              this.dropdownFirst.html('ДД.ММ.ГГГГ');
            }

            if (dates[1] != undefined && dates[1] != '') {
              this.dropdownLast.html(dates[1]);
            } else {
              this.dropdownLast.html('ДД.ММ.ГГГГ');
            }
          },
        })
      );

      this.datepicker
        .find('.datepicker--buttons')
        .append('<span class="datepicker--button js-datepicker--button-ok">Применить</span>');

      const buttonOk = this.datepicker.find('.js-datepicker--button-ok');

      this.fields.on('click', () => {
        this.handleDateDropdownClick();
      });

      buttonOk.on('click', () => {
        this.handleDateBtnOkClick();
      });

      $(document).on('click', (event) => {
        this.closeCalendar(event);
      });
    }

    handleDateDropdownClick() {
      this.datepicker.toggleClass('datepicker-here_hide js-datepicker-here_open');
    }

    handleDateBtnOkClick() {
      this.dropdownFirst.trigger('click');
    }

    closeCalendar(event: JQuery.ClickEvent) {
      const eventElementClass = $(event.target).attr('class');
      const clickInFields =
        this.dropdownFirst.find(`.${eventElementClass}`).length != 0 ||
        this.dropdownLast.find(`.${eventElementClass}`).length != 0;

      if (clickInFields) {
        return;
      }

      const clickToField = $(event.target).hasClass('dropdown-dates__dropdown');

      if (clickToField) {
        return;
      }

      const eventFirstClass = eventElementClass?.split(' ')[0];
      const clickInDatepicker =
        this.dropdownDates.find(`.dropdown-dates__calendar .${eventFirstClass}`).length != 0;

      if (clickInDatepicker) {
        return;
      }

      this.datepicker.removeClass('js-datepicker-here_open').addClass('datepicker-here_hide');
    }
  }

  class CalendarBlank {
    datepicker: JQuery<HTMLElement>;

    constructor(datepicker: JQuery<HTMLElement>) {
      this.datepicker = datepicker;
    }

    init() {
      this.datepicker.datepicker(mainOptions);
    }
  }

  $('.js-dropdown .js-datepicker-here').each((i, item) => {
    new CalendarDropdown($(item)).init();
  });

  $('.js-dropdown-dates .js-datepicker-here').each((i, item) => {
    new CalendarDropdownDates($(item)).init();
  });

  $('.js-ui-kit-cards__calendar-block .js-datepicker-here').each((i, item) => {
    new CalendarBlank($(item)).init();
  });
});
