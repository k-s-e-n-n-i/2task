import { Dropdown } from '../../blocks/dropdown/dropdown';

new Dropdown({
  dropdown: document.getElementById('dropdownFormReservation'),
  valueDefault: 'Сколько гостей',
  wordsFormSum: ['гость', 'гостя', 'гостей'],
  items: [
    {
      text: 'взрослые',
      number: 3,
      countAdditionally: false,
      wordsForm: ['взрослый', 'взрослых', 'взрослых'],
    },
    {
      text: 'дети',
      number: 0,
      countAdditionally: false,
      wordsForm: ['ребенок', 'ребенка', 'детей'],
    },
    {
      text: 'младенцы',
      number: 0,
      countAdditionally: true,
      wordsForm: ['младенец', 'младенца', 'младенцев'],
    },
  ],
});
