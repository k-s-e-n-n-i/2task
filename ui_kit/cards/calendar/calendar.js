import $ from 'jquery';
import 'pg-calendar';

  $(document).ready(function() {
    $('.calendar').pignoseCalendar({
      week: 1,
      lang: 'ru',
      multiple: true,
    });
  });