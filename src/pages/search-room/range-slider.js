import '@/modules/plugin.slider/plugin.slider';

$(function () {
  $('.js-search-room').slider({
    element: document.querySelector('.search-room__range-slider'),
    idElement: 'idSlider1',
    width: 266,
    type: 'interval',
    min: 0,
    max: 15948,
    minStart: 5000,
    maxStart: 10000,
    step: 1,
    orientation: 'horizontal',
    value: 'on',
    scale: 'off',
    scaleStep: 10,
    settings: 'off',
  });
});
