import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import '@Blocks/calendar/cell.scss';
import '@Blocks/calendar/datepicker-config.scss';
import '@Blocks/calendar/datepicker.scss';
import '@Blocks/calendar/navigation.scss';
import { mainOptions } from './calendar';

class CalendarDropdownDates {
  datepicker: JQuery<HTMLElement>;
  dropdownDates: JQuery<HTMLElement> | null = null;
  dropdownFirst: JQuery<HTMLElement> | null = null;
  dropdownLast: JQuery<HTMLElement> | null = null;
  fields: JQuery<HTMLElement> | null = null;

  constructor(datepicker: JQuery<HTMLElement>) {
    this.datepicker = datepicker;
    this.init();
  }

  init(): void {
    this.dropdownDates = this.datepicker.closest('.dropdown-dates');
    this.fields = this.dropdownDates.find('.js-dropdown-dates__dropdown');
    this.dropdownFirst = this.fields.first();
    this.dropdownLast = this.fields.last();

    const { datepicker, fields, dropdownFirst, dropdownLast } = this;

    datepicker.datepicker(
      $.extend(mainOptions, {
        onSelect: (formattedDate: string) => {
          const dates = formattedDate.split(',');

          if (dates[0] != undefined && dates[0] != '') {
            dropdownFirst?.html(dates[0]);
          } else {
            dropdownFirst?.html('ДД.ММ.ГГГГ');
          }

          if (dates[1] != undefined && dates[1] != '') {
            dropdownLast?.html(dates[1]);
          } else {
            dropdownLast?.html('ДД.ММ.ГГГГ');
          }
        },
      })
    );

    datepicker
      .find('.datepicker--buttons')
      .append('<span class="datepicker--button js-datepicker--button-ok">Применить</span>');

    const buttonOk = datepicker.find('.js-datepicker--button-ok');

    fields.on('click', () => {
      this.handleDateDropdownClick();
    });

    buttonOk.on('click', () => {
      this.handleDateBtnOkClick();
    });

    $(document).on('click', (event) => {
      this.closeCalendar(event);
    });
  }

  handleDateDropdownClick(): void {
    this.datepicker.toggleClass('datepicker-here_hide js-datepicker-here_open');
  }

  handleDateBtnOkClick(): void {
    this.dropdownFirst?.trigger('click');
  }

  closeCalendar(event: JQuery.ClickEvent): void {
    const { datepicker, dropdownDates, dropdownFirst, dropdownLast } = this;
    const eventElementClass = $(event.target).attr('class');
    const clickInFields =
      dropdownFirst?.find(`.${eventElementClass}`).length != 0 ||
      dropdownLast?.find(`.${eventElementClass}`).length != 0;

    if (clickInFields) {
      return;
    }

    const clickToField = $(event.target).hasClass('dropdown-dates__dropdown');

    if (clickToField) {
      return;
    }

    const eventFirstClass = eventElementClass?.split(' ')[0];
    const clickInDatepicker =
      dropdownDates?.find(`.dropdown-dates__calendar .${eventFirstClass}`).length != 0;

    if (clickInDatepicker) {
      return;
    }

    datepicker.removeClass('js-datepicker-here_open').addClass('datepicker-here_hide');
  }
}
export { CalendarDropdownDates };
