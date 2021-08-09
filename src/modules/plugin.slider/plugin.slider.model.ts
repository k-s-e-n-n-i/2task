import { Options } from '../../modules/plugin.slider/plugin.slider';

export class Model {
  thisSlider: HTMLElement;
  idElement: string;
  rangeSlider: HTMLElement;
  slider: HTMLElement;
  range: HTMLElement;
  rangeLeft: HTMLElement;
  rangeRight: HTMLElement;
  elemValueMin: HTMLElement;
  elemValueMax: HTMLElement;
  checkboxSettings: HTMLElement;
  settingsBlock: HTMLElement;
  labelBlock: HTMLElement;
  labelMin: HTMLElement;
  labelDash: HTMLElement;
  labelMax: HTMLElement;
  blockScaleVals: object;

  constructor(option: Options) {
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.rangeSlider = option.element.querySelector('.range-slider#' + this.idElement) as HTMLElement;
    this.slider = this.rangeSlider.querySelector('.range-slider__slider') as HTMLElement;
    this.range = this.slider.querySelector('.range-slider__range') as HTMLElement;
    this.rangeLeft = this.slider.querySelector('.range-slider__left') as HTMLElement;
    this.rangeRight = this.slider.querySelector('.range-slider__right') as HTMLElement;
    this.elemValueMin = this.thisSlider.querySelector('.range-slider__label-min') as HTMLElement;
    this.elemValueMax = this.thisSlider.querySelector('.range-slider__label-max') as HTMLElement;
    this.checkboxSettings = this.thisSlider.querySelector(
      '.slider-config .checkbox-list__input'
    ) as HTMLElement;
    this.settingsBlock = this.thisSlider.querySelector('.slider-config .slider-config__block') as HTMLElement;
    this.labelBlock = this.rangeSlider.querySelector('.range-slider__label-block') as HTMLElement;
    this.labelMin = this.rangeSlider.querySelector('span.range-slider__label-min') as HTMLElement;
    this.labelDash = this.rangeSlider.querySelector('span.range-slider__label-dash') as HTMLElement;
    this.labelMax = this.rangeSlider.querySelector('span.range-slider__label-max') as HTMLElement;
    this.blockScaleVals = this.slider.querySelectorAll('.range-slider__scale-val');
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
