import { Options } from '../../modules/plugin.slider/plugin.slider';
import { Model } from '../../modules/plugin.slider/plugin.slider.model';

export class View {
  model: Model;
  dataSlider: object;
  thisSlider: HTMLElement;
  idElement: string;
  min: number;
  max: number;
  minStart: number;
  maxStart: number;
  type: string;
  orientation: string;
  scale: string;
  scaleStep: number;
  value: string;

  constructor(option: Options, model: Model) {
    this.model = model;
    this.dataSlider = option;
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.min = option.min;
    this.max = option.max;
    this.minStart = option.minStart;
    this.maxStart = option.maxStart;
    this.type = option.type;
    this.orientation = option.orientation;
    this.scale = option.scale;
    this.scaleStep = option.scaleStep;
    this.value = option.value;
  }

  drawRange(): void {
    let posLeft: number, posRight: number;

    posRight = (this.model.getWidth() / (this.max - this.min)) * (this.maxStart - this.min);
    this.model.rangeRight.style.left = posRight + 'px';

    switch (this.type) {
      case 'from0to' || 'one': {
        this.model.rangeLeft.style.left = '0px';
        this.model.range.style.transform = 'translateX(-5px)';
        this.model.range.style.left = '0px';
        this.model.range.style.width = posRight + 'px';
        break;
      }
      default: {
        posLeft = (this.model.getWidth() / (this.max - this.min)) * (this.minStart - this.min); // если мин не 0
        this.model.rangeLeft.style.left = posLeft + 'px';
        this.model.range.style.transform = 'translateX(' + posLeft + 'px)';
        this.model.range.style.left = posLeft + 'px';
        this.model.range.style.width = posRight - posLeft + 'px';
        break;
      }
    }
  }

  drawType(): void {
    switch (this.type) {
      case 'interval':
        break;
      case 'from0to': {
        this.model.rangeLeft.style.opacity = '0';
        this.model.range.style.transform = 'translate(' + -5 + 'px, 0px)';
        this.model.range.style.width = this.model.getPosRangeRight().toString();
        break;
      }
      case 'one': {
        this.model.rangeLeft.style.opacity = '0';
        this.model.range.style.opacity = '0';
        this.model.range.style.transform = 'translate(' + -5 + 'px, 0px)';
        this.model.labelMin.style.opacity = '0';
        this.model.labelDash.style.opacity = '0';
        break;
      }
      default:
        break;
    }
  }

  drawScale(): void {
    switch (this.scale) {
      case 'on': {
        let qtyDivision: number,
          valDivision: number = this.min,
          posDivision: number,
          stepWidth: number,
          elemScaleLine: HTMLElement,
          elemDivision: HTMLElement,
          blockScale: string;

        if (this.scaleStep > 0) {
          qtyDivision = this.scaleStep;
        } else {
          qtyDivision = Math.floor(this.model.getWidth() / 45);
          this.scaleStep = qtyDivision;
        }

        stepWidth = this.model.getWidth() / qtyDivision;

        for (let i = 0; i <= this.model.getWidth(); ) {
          posDivision = Math.floor(i);
          blockScale = `<div class="range-slider__scale">
            <div class="range-slider__scale-line" id="scale${posDivision}"></div>
            </div>`;
          this.model.slider.insertAdjacentHTML('beforeend', blockScale);
          elemScaleLine = this.getElementBySelector(
            this.model.slider,
            '.range-slider__scale-line#scale' + posDivision
          );
          elemDivision = this.getElementClosest(elemScaleLine, '.range-slider__scale');
          elemDivision.style.left = posDivision + 'px';
          this.model.rangeSlider.style.marginBottom = '35px';
          i = i + stepWidth;
          elemDivision.insertAdjacentHTML(
            'beforeend',
            '<div class="range-slider__scale-val">' + Math.floor(valDivision) + '</div>'
          );
          valDivision = valDivision + (this.max - this.min) / qtyDivision;
        }
        break;
      }
      case 'off':
        break;
      default:
        break;
    }
  }

  drawOrientation(): void {
    let blockVals: NodeList;
    switch (this.orientation) {
      case 'horizontal': {
        this.model.slider.style.transform = 'translate(5px, 0) rotate(0deg)';
        break;
      }
      case 'vertical': {
        this.model.slider.style.transform = 'translate(5px, 0) rotate(90deg) translateX(50%)';
        this.model.rangeSlider.style.height = this.model.getWidth() + 75 + 'px';

        blockVals = this.model.slider.querySelectorAll('.range-slider__scale-val');
        for (let i = 0; i < blockVals.length; i++) {
          const valElem: HTMLElement = <HTMLElement>blockVals[i];
          valElem.style.transform = 'translate(-30%, 10px) rotate(-90deg)';
        }
        break;
      }
      default: {
        this.model.slider.style.transform = 'translate(5px, 0) rotate(0deg)';
        break;
      }
    }
  }

  drawValue(): void {
    switch (this.value) {
      case 'on': {
        this.model.labelBlock.style.opacity = '1';
        this.model.labelMax.innerHTML = new Intl.NumberFormat('ru-RU').format(this.maxStart);

        switch (this.type) {
          case 'interval': {
            this.model.labelMin.innerHTML = new Intl.NumberFormat('ru-RU').format(this.minStart);
            this.model.labelMin.style.opacity = '1';
            this.model.labelDash.style.opacity = '1';
            break;
          }
          case 'from0to': {
            this.model.labelMin.innerHTML = new Intl.NumberFormat('ru-RU').format(this.min);
            this.model.labelMin.style.opacity = '1';
            this.model.labelDash.style.opacity = '1';
            break;
          }
          case 'one': {
            this.model.labelMin.innerHTML = new Intl.NumberFormat('ru-RU').format(this.minStart);
            this.model.labelMin.style.opacity = '0';
            this.model.labelDash.style.opacity = '0';
            break;
          }
          default: {
            // interval
            this.model.labelMin.innerHTML = new Intl.NumberFormat('ru-RU').format(this.minStart);
            this.model.labelMin.style.opacity = '1';
            this.model.labelDash.style.opacity = '1';
            break;
          }
        }
        break;
      }
      case 'off': {
        this.model.labelBlock.style.opacity = '0';
        break;
      }
      default:
        break;
    }
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

  getElementClosest(item: HTMLElement, selector: string): HTMLElement {
    const element = item.closest(selector);

    if (!(element instanceof HTMLElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  }
}
