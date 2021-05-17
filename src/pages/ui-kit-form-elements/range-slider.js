import "/jquery.global.js";
import $ from 'jquery'
import '/modules/plugin.slider/plugin.slider.ts';

$(function() {
  
  $('.ui-kit-form-elements').slider({
    element : document.querySelector('.ui-kit-form-elements__slider-blk'),
    idElement : 'idSlider2',
    width : 266,
    type : 'interval',
    min : 0,
    max : 15948,
    minStart : 5000,
    maxStart : 10000,
    step : 1,
    orientation : 'horizontal',
    value : 'on',
    scale : 'off',
    scaleStep : 10,
    settings : 'off'
  });

});