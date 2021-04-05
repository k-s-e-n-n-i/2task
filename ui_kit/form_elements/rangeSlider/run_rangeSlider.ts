//Объявнение слайдеров

import {slider} from '/blocks/demoSlider/demoSlider_ts.ts';

const slider_100 = new slider();
slider_100.slider({
  element : document.querySelector('.formElements .slider100'),
  idElement : 'idPrice0',
  width : 265,
  type : 'interval',
  min : 0,
  max : 15000,
  minStart : 5000,
  maxStart : 10000,
  step : 1,
  orientation : 'horizontal',
  value : 'on',
  scale : 'off',
  scaleStep : 2,
  settings : 'off'
});