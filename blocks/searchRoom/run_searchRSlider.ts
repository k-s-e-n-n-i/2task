//Объявнение слайдеров

import {slider} from '/blocks/demoSlider/demoSlider_ts.ts';

const slider_101 = new slider();
slider_101.slider({
  element : document.querySelector('.searchRoom .slider101'),
  idElement : 'idPrice0',
  width : 266,
  type : 'interval',
  min : 0,
  max : 15800,
  minStart : 5000,
  maxStart : 10000,
  step : 1,
  orientation : 'horizontal',
  value : 'on',
  scale : 'off',
  scaleStep : 2,
  settings : 'off'
});