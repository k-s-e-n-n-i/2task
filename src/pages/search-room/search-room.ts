import '@Blocks/button/button.scss';
import '@Blocks/checkbox-list/checkbox-list.scss';
import '@Blocks/checkbox-list-expandable/checkbox-list-expandable.scss';
import '@Blocks/checkbox-list-expandable/checkbox-list-expandable';
import '@Blocks/dropdown/dropdown.scss';
import '@Blocks/dropdown/dropdown';
import '@Blocks/dropdown-dates/dropdown-dates.scss';
import '@Blocks/input-text/input-text.scss';
import '@Blocks/link/link.scss';
import '@Blocks/pagination/pagination.scss';
import '@Blocks/range-slider/range-slider.scss';
import '@Blocks/rate-btn/rate-btn.scss';
import '@Blocks/rate-btn/rate-btn';
import '@Blocks/topic-label/topic-label.scss';
import '@Blocks/social/social.scss';

import '@Blocks/calendar/calendar';
import '@Blocks/card-room/card-room.scss';
import '@Blocks/card-room/card-room';
import '@Blocks/footer/footer.scss';
import '@Blocks/header/header.scss';
import '@Blocks/header/header';

import '@Pages/search-room/search-room.scss';
import '@Pages/search-room/range-slider';

import { Dropdown } from '../../blocks/dropdown/dropdown';

new Dropdown({
  dropdown: document.getElementById('dropdownSearchRoomGuests'),
  valueDefault: 'Сколько гостей',
  wordsFormSum: ['гость', 'гостя', 'гостей'],
  items: [
    {
      text: 'взрослые',
      number: 2,
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
      number: 1,
      countAdditionally: true,
      wordsForm: ['младенец', 'младенца', 'младенцев'],
    },
  ],
});

new Dropdown({
  dropdown: document.getElementById('dropdownSearchRoomComfort'),
  hasButtons: false,
  valueDefault: 'Выберите удобства',
  maxSum: 15,
  countSum: false,
  wordsFormSum: [],
  items: [
    {
      text: 'спальни',
      number: 2,
      countAdditionally: false,
      wordsForm: ['спальня', 'спальни', 'спален'],
    },
    {
      text: 'кровати',
      number: 2,
      countAdditionally: false,
      wordsForm: ['кровать', 'кровати', 'кроватей'],
    },
    {
      text: 'ванные комнаты',
      number: 0,
      countAdditionally: true,
      wordsForm: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    },
  ],
});
