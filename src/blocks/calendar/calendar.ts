import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import '@Blocks/calendar/cell.scss';
import '@Blocks/calendar/datepicker-config.scss';
import '@Blocks/calendar/datepicker.scss';
import '@Blocks/calendar/navigation.scss';
import { CalendarDropdown } from './calendar-dropdown.class';
import { CalendarDropdownDates } from './calendar-dropdown-dates.class';
import { CalendarBlank } from './calendar-blank.class';

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

$(function () {
  $('.js-dropdown .js-datepicker-here').each((i, item) => {
    new CalendarDropdown($(item));
  });

  $('.js-dropdown-dates .js-datepicker-here').each((i, item) => {
    new CalendarDropdownDates($(item));
  });

  $('.js-ui-kit-cards__calendar-block .js-datepicker-here').each((i, item) => {
    new CalendarBlank($(item));
  });
});

export { mainOptions };
