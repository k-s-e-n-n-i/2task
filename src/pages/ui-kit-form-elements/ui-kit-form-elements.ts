import '@Blocks/button/button.scss';
import '@Blocks/checkbox-list/checkbox-list.scss';
import '@Blocks/checkbox-list-expandable/checkbox-list-expandable.scss';
import '@Blocks/checkbox-list-expandable/checkbox-list-expandable';
import '@Blocks/comment-block/comment-block.scss';
import '@Blocks/dropdown/dropdown.scss';
import '@Blocks/dropdown/dropdown';
import '@Blocks/dropdown-dates/dropdown-dates.scss';
import '@Blocks/info-block/info-block.scss';
import '@Blocks/input-text/input-text.scss';
import '@Blocks/input-text/input-text';
import '@Blocks/like/like.scss';
import '@Blocks/like/like';
import '@Blocks/link/link.scss';
import '@Blocks/list-block/list-block.scss';
import '@Blocks/pagination/pagination.scss';
import '@Blocks/radiogroup/radiogroup.scss';
import '@Blocks/range-slider/range-slider.scss';
import '@Blocks/rate-btn/rate-btn.scss';
import '@Blocks/rate-btn/rate-btn';
import '@Blocks/toggle-block/toggle-block.scss';
import '@Blocks/toggle-block/toggle-block';
import '@Blocks/topic-label/topic-label.scss';

import '@Blocks/calendar/calendar';

import '@Pages/ui-kit-form-elements/ui-kit-form-elements.scss';
import '@Pages/ui-kit-form-elements/range-slider';

import { Dropdown } from '../../blocks/dropdown/dropdown';

new Dropdown({
  dropdown: document.getElementById('uiFormElem11'),
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

new Dropdown({
  dropdown: document.getElementById('uiFormElem121'),
  hasButtons: false,
  valueDefault: 'Сколько гостей',
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

new Dropdown({
  dropdown: document.getElementById('uiFormElem12'),
  hasButtons: false,
  valueDefault: 'Сколько гостей',
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

new Dropdown({
  dropdown: document.getElementById('uiFormElem22'),
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

new Dropdown({
  dropdown: document.getElementById('uiFormElem32'),
  hasButtons: true,
  valueDefault: 'Сколько гостей',
  maxSum: 10,
  countSum: true,
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
      number: 1,
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
