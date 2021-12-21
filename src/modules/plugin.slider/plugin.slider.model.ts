import { Options } from '../../modules/plugin.slider/plugin.slider';

import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';

class Model {
  thisSlider: HTMLElement;
  idElement: string;
  rangeSlider: HTMLElement;
  slider: HTMLElement;
  range: HTMLElement;
  rangeLeft: HTMLElement;
  rangeRight: HTMLElement;
  elemValueMin: HTMLElement;
  elemValueMax: HTMLElement;
  labelBlock: HTMLElement;
  labelMin: HTMLElement;
  labelDash: HTMLElement;
  labelMax: HTMLElement;

  constructor(option: Options) {
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.rangeSlider = getElementBySelector(this.thisSlider, '.range-slider#' + this.idElement);
    this.slider = getElementBySelector(this.rangeSlider, '.range-slider__slider');
    this.range = getElementBySelector(this.slider, '.range-slider__range');
    this.rangeLeft = getElementBySelector(this.slider, '.range-slider__left');
    this.rangeRight = getElementBySelector(this.slider, '.range-slider__right');
    this.elemValueMin = getElementBySelector(this.thisSlider, '.range-slider__label-min');
    this.elemValueMax = getElementBySelector(this.thisSlider, '.range-slider__label-max');
    //this.settingsBlock = this.getElementBySelector(this.thisSlider, '.slider-config .slider-config__block');
    this.labelBlock = getElementBySelector(this.rangeSlider, '.range-slider__label-block');
    this.labelMin = getElementBySelector(this.rangeSlider, 'span.range-slider__label-min');
    this.labelDash = getElementBySelector(this.rangeSlider, 'span.range-slider__label-dash');
    this.labelMax = getElementBySelector(this.rangeSlider, 'span.range-slider__label-max');
  }

  getWidth(): number {
    return this.slider.clientWidth;
  }
  getWidthRange(): number {
    return this.range.clientWidth;
  }
  getPosRangeLeft(): number {
    return parseInt(getComputedStyle(this.rangeLeft).left);
  }
  getPosRangeRight(): number {
    return parseInt(getComputedStyle(this.rangeRight).left);
  }
}
export { Model };
