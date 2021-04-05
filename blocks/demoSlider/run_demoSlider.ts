//Объявнение слайдеров
import {slider} from '/blocks/demoSlider/demoSlider_ts.ts';


const slider_1 = new slider();
slider_1.slider({
  element : document.querySelector('.searchRoom2 .slider1'),
  idElement : 'idPrice1',
  width : 400,
  type : 'interval',
  min : 10,
  max : 200,
  minStart : 50,
  maxStart : 100,
  step : 20,
  orientation : 'horizontal',
  value : 'on',
  scale : 'on',
  scaleStep : 20,
  settings : 'on'
});
const slider_2 = new slider();
slider_2.slider({
  element : document.querySelector('.searchRoom2 .slider2'),
  idElement : 'idPrice2',
  width : 400,
  type : 'from0to',
  min : 0,
  max : 10,
  minStart : 5,
  maxStart : 7,
  step : 5,
  orientation : 'horizontal',//'vertical',
  value : 'on',
  scale : 'off',
  scaleStep : 10,
  settings : 'on'
});
const slider_3 = new slider();
slider_3.slider({
  element : document.querySelector('.searchRoom2 .slider3'),
  idElement : 'idPrice3',
  width : 600,
  min : 100,
  max : 40000,
  value : 'off',
  scale : 'on',
  settings : 'on'
});
const slider_4 = new slider();
slider_4.slider({
  element : document.querySelector('.searchRoom2 .slider4'),
  idElement : 'idPrice4',
  type : 'one',
  min : 0,
  max : 5000,
  maxStart : 2000,
  settings : 'on'
});
const slider_5 = new slider();
slider_5.slider({
  element : document.querySelector('.searchRoom2 .slider5'),
  idElement : 'idPrice5',
  settings : 'on'
});