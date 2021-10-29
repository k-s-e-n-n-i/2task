import { Dropdown } from '../../blocks/dropdown/dropdown';

new Dropdown({
  dropdown: document.getElementById('dropdownFormSearchRoom'),
  hasButtons: true,
  valueDefault: 'Сколько гостей',
  maxSum: 10,
  countSum: true,
  wordsFormSum: ['гость', 'гостя', 'гостей'],
  items: [
    {
      text: 'взрослые',
      number: 0,
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
