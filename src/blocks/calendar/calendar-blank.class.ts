import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import '@Blocks/calendar/cell.scss';
import '@Blocks/calendar/datepicker-config.scss';
import '@Blocks/calendar/datepicker.scss';
import '@Blocks/calendar/navigation.scss';
import { mainOptions } from './calendar';

class CalendarBlank {
  datepicker: JQuery<HTMLElement>;

  constructor(datepicker: JQuery<HTMLElement>) {
    this.datepicker = datepicker;
    this.init();
  }

  init(): void {
    this.datepicker.datepicker(mainOptions);
  }
}
export { CalendarBlank };
