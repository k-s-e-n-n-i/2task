import 'cleave.js';

let cleave = new Cleave('.input-text__input_date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y'],
});
