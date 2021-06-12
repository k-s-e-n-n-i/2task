import $ from 'jquery';
import { Options } from '../../modules/plugin.slider/plugin.slider';

export class Model {
  thisSlider: HTMLElement;
  idElement: string;
  rangeSlider: HTMLElement;
  slider: HTMLElement;
  range: HTMLElement;
  rangeLeft: HTMLElement;
  rangeRight: HTMLElement;
  elemValueMin: object;
  elemValueMax: object;
  checkboxSettings: object;
  settingsBlock: object;
  labelBlock: object;
  labelMin: object;
  labelDash: object;
  labelMax: object;
  blockScaleVals: object;

  constructor(option: Options) {
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.rangeSlider = this.thisSlider.querySelector(
      '.range-slider#' + this.idElement
    );
    this.slider = this.rangeSlider.querySelector('.range-slider__slider');
    this.range = this.slider.querySelector('.range-slider__range');
    this.rangeLeft = this.slider.querySelector('.range-slider__left');
    this.rangeRight = this.slider.querySelector('.range-slider__right');
    this.elemValueMin = this.thisSlider.querySelector(
      '.range-slider__label-min'
    );
    this.elemValueMax = this.thisSlider.querySelector(
      '.range-slider__label-max'
    );
    this.checkboxSettings = this.thisSlider.querySelector(
      '.slider-config .checkbox-list__input'
    );
    this.settingsBlock = this.thisSlider.querySelector(
      '.slider-config .slider-config__block'
    );
    this.labelBlock = this.rangeSlider.querySelector(
      '.range-slider__label-block'
    );
    this.labelMin = this.rangeSlider.querySelector(
      'span.range-slider__label-min'
    );
    this.labelDash = this.rangeSlider.querySelector(
      'span.range-slider__label-dash'
    );
    this.labelMax = this.rangeSlider.querySelector(
      'span.range-slider__label-max'
    );
    this.blockScaleVals = this.slider.querySelectorAll(
      '.range-slider__scale-val'
    );
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
