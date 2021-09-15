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
  labelBlock: HTMLElement;
  labelMin: HTMLElement;
  labelDash: HTMLElement;
  labelMax: HTMLElement;

  constructor(option: Options) {
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.rangeSlider = this.getElementBySelector(this.thisSlider, '.range-slider#' + this.idElement);
    this.slider = this.getElementBySelector(this.rangeSlider, '.range-slider__slider');
    this.range = this.getElementBySelector(this.slider, '.range-slider__range');
    this.rangeLeft = this.getElementBySelector(this.slider, '.range-slider__left');
    this.rangeRight = this.getElementBySelector(this.slider, '.range-slider__right');
    this.elemValueMin = this.getElementBySelector(this.thisSlider, '.range-slider__label-min');
    this.elemValueMax = this.getElementBySelector(this.thisSlider, '.range-slider__label-max');
    //this.settingsBlock = this.getElementBySelector(this.thisSlider, '.slider-config .slider-config__block');
    this.labelBlock = this.getElementBySelector(this.rangeSlider, '.range-slider__label-block');
    this.labelMin = this.getElementBySelector(this.rangeSlider, 'span.range-slider__label-min');
    this.labelDash = this.getElementBySelector(this.rangeSlider, 'span.range-slider__label-dash');
    this.labelMax = this.getElementBySelector(this.rangeSlider, 'span.range-slider__label-max');
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

  getElementBySelector(item: HTMLElement, selector: string): HTMLElement {
    const element = item.querySelector(selector);

    if (!(element instanceof HTMLElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  }
}
