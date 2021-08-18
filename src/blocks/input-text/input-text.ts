import Cleave from 'cleave.js';

new Cleave('.input-text__input_date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y'],
});
