import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import '@Blocks/calendar/cell.scss';
import '@Blocks/calendar/datepicker-config.scss';
import '@Blocks/calendar/datepicker.scss';
import '@Blocks/calendar/navigation.scss';
import { mainOptions } from './calendar';

class CalendarDropdown {
  datepicker: JQuery<HTMLElement>;
  dropdown: JQuery<HTMLElement> | null = null;
  field: JQuery<HTMLElement> | null = null;

  constructor(datepicker: JQuery<HTMLElement>) {
    this.datepicker = datepicker;
    this.init();
  }

  init(): void {
    this.dropdown = this.datepicker.closest('.dropdown');
    this.field = this.dropdown.find('.dropdown__field');

    const { datepicker, field } = this;

    datepicker.datepicker(
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

            field?.html(`${date1} - ${date2}`);
          } else {
            field?.html('Выберите диапазон дат...');
          }
        },
      })
    );

    datepicker
      .find('.datepicker--buttons')
      .append('<span class="datepicker--button js-datepicker--button-ok">Применить</span>');

    const buttonOk = datepicker.find('.js-datepicker--button-ok');

    field.on('click', () => {
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
    this.field?.trigger('click');
  }

  closeCalendar(event: JQuery.ClickEvent): void {
    const { datepicker, dropdown, field } = this;
    const eventElementClass = $(event.target).attr('class');
    const clickInField = field?.find(`.${eventElementClass}`).length != 0;

    if (clickInField) {
      return;
    }

    const clickToField = $(event.target).hasClass('dropdown__field');

    if (clickToField) {
      return;
    }

    const eventFirstClass = eventElementClass?.split(' ')[0];
    const clickInDatepicker = dropdown?.find(`.dropdown__calendar .${eventFirstClass}`).length != 0;

    if (clickInDatepicker) {
      return;
    }

    datepicker.removeClass('js-datepicker-here_open').addClass('datepicker-here_hide');
  }
}
export { CalendarDropdown };
