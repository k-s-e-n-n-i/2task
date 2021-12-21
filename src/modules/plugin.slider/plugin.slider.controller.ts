import { Options } from '../../modules/plugin.slider/plugin.slider';
import { Model } from '../../modules/plugin.slider/plugin.slider.model';
import { View } from '../../modules/plugin.slider/plugin.slider.view';

import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';

interface Coords {
  top: number;
  left: number;
}

class Controller {
  model: Model;
  view: View;
  thisSlider: HTMLElement;
  idElement: string;
  min: number;
  max: number;
  minStart: number;
  maxStart: number;
  step: number;
  type: string;
  orientation: string;
  scale: string;
  scaleStep: number;
  value: string;
  settings: string;

  constructor(option: Options, model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.thisSlider = option.element;
    this.idElement = option.idElement;
    this.min = option.min;
    this.max = option.max;
    this.minStart = option.minStart;
    this.maxStart = option.maxStart;
    this.step = option.step;
    this.type = option.type;
    this.orientation = option.orientation;
    this.scale = option.scale;
    this.scaleStep = option.scaleStep;
    this.value = option.value;
    this.settings = option.settings;
  }

  defineOrientation(dataSliderOrientation: string): string {
    if (dataSliderOrientation == 'horizontal') {
      return 'x';
    }
    return 'y';
  }

  moveAt(range: HTMLElement, side: string): void {
    document.body.classList.add('moving-slider');

    let startPos: number = parseInt(range.style.left),
      widthRange: number = this.model.getWidthRange();
    switch (
      side // чтобы сверху был ползунок, который перемещали последним (если друг на друга наедут)
    ) {
      case 'left': {
        this.model.rangeLeft.style.zIndex = '15';
        this.model.rangeRight.style.zIndex = '10';
        break;
      }
      case 'right': {
        this.model.rangeRight.style.zIndex = '15';
        this.model.rangeLeft.style.zIndex = '10';
        break;
      }
    }

    let thisClick: HTMLElement = this.thisSlider,
      contr = this;

    thisClick.onmousemove = function () {
      document.onmousemove = function (e: MouseEvent) {
        let pos: number, tempPos: number, masScale: number[];
        switch (contr.defineOrientation(contr.orientation)) {
          case 'x': {
            if (contr.step == 1) {
              pos = e.pageX - contr.model.slider.offsetLeft;
              contr.movingRange(side, startPos, pos, widthRange);
            } else {
              masScale = contr.masStepsForMoving();
              tempPos = e.pageX - contr.model.slider.offsetLeft;
              if (masScale.indexOf(tempPos) != -1) {
                pos = tempPos;
                contr.movingRange(side, startPos, pos, widthRange);
              } else {
                pos = startPos;
              }
            }
            break;
          }
          case 'y': {
            let coords: Coords = contr.getCoords(contr.model.slider);
            if (contr.step == 1) {
              pos = e.pageY - coords.top;
              contr.movingRange(side, startPos, pos, widthRange);
            } else {
              masScale = contr.masStepsForMoving();
              tempPos = e.pageY - coords.top;
              if (masScale.indexOf(tempPos) != -1) {
                pos = tempPos;
                contr.movingRange(side, startPos, pos, widthRange);
              } else {
                pos = startPos;
              }
            }
            break;
          }
          default:
            break;
        }
      };
    };

    document.onmouseup = function () {
      thisClick.onmousemove = null;
      thisClick.onmouseup = null;
      document.onmousemove = null;
      document.onmouseup = null;
      document.body.classList.remove('moving-slider');
    };
  }
  getCoords(elem: HTMLElement): Coords {
    // https://learn.javascript.ru/coordinates-document
    let box: Coords = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  }

  movingRange(side: string, startPos: number, pos: number, widthRange: number): void {
    let price: number,
      step: number = 0;

    if (pos < 0) {
      pos = 0;
    }
    if (pos > this.model.getWidth()) {
      pos = this.model.getWidth();
    }
    if (pos >= 0 && pos <= this.model.getWidth()) {
      if (side == 'left') {
        if (this.model.getPosRangeRight() >= pos && this.type != 'from0to') {
          price = calcValue(pos, this);
          step = startPos - pos;
          this.model.rangeLeft.style.left = pos + 'px';
          this.model.range.style.transform = 'translate(' + pos + 'px, 0px)';
        } else {
          price = this.maxStart;
          step = startPos - this.model.getPosRangeRight();
          this.model.rangeLeft.style.left = this.model.getPosRangeRight() + 'px';
          this.model.range.style.transform = 'translate(' + this.model.getPosRangeRight() + 'px, 0px)';
        }

        this.drawValueMin(price);
        if (this.settings == 'on') {
          this.changeConfigInputMin(price);
        }
        this.writeDataSliderMin(price);
        this.model.range.style.width = widthRange + step + 'px';
      }

      if (side == 'right') {
        if (this.model.getPosRangeLeft() <= pos) {
          price = calcValue(pos, this);
          step = pos - startPos;
          this.model.rangeRight.style.left = pos + 'px';
        } else {
          price = this.minStart;
          step = this.model.getPosRangeLeft() - startPos;
          this.model.rangeRight.style.left = this.model.getPosRangeLeft() + 'px';
        }

        this.drawValueMax(price);
        if (this.settings == 'on') {
          this.changeConfigInputMax(price);
        }
        this.writeDataSliderMax(price);
        this.model.range.style.width = widthRange + step + 'px';
      }
    }
    function calcValue(pos: number, conrtThis: Controller): number {
      let percent: number = pos / conrtThis.model.getWidth(),
        price: number = parseInt(((conrtThis.max - conrtThis.min) * percent + conrtThis.min).toFixed());
      return price;
    }
  }

  drawValueMin(val: number): void {
    this.model.elemValueMin.innerHTML = new Intl.NumberFormat('ru-RU').format(val);
  }
  drawValueMax(val: number): void {
    this.model.elemValueMax.innerHTML = new Intl.NumberFormat('ru-RU').format(val);
  }

  writeDataSliderMin(val: number): void {
    this.minStart = val;
    this.view.minStart = val;
  }
  writeDataSliderMax(val: number): void {
    this.maxStart = val;
    this.view.maxStart = val;
  }

  changeConfigInputMin(val: number): void {
    if (val < this.min) {
      val = this.min;
    }
    let inputElemMinStart: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextminStart` + this.idElement.substr(-1)
    );
    inputElemMinStart.value = val.toString();
  }
  changeConfigInputMax(val: number): void {
    if (val > this.max) {
      val = this.max;
    }
    let inputElemMaxStart: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextmaxStart` + this.idElement.substr(-1)
    );
    inputElemMaxStart.value = val.toString();
  }

  moveRangeOnclickSlider(): void {
    let thisClickSlider: HTMLElement = this.model.slider,
      contr: Controller = this;

    if (contr.step != 1) {
      thisClickSlider.onmousedown = function () {
        thisClickSlider.onmouseup = function (e: MouseEvent) {
          onclickSlider(e);
        };
      };
    } else {
      thisClickSlider.addEventListener('mousedown', function (e: MouseEvent) {
        onclickSlider(e);
      });
    }
    function onclickSlider(e: MouseEvent) {
      let pos: number, startPos: number;

      switch (contr.defineOrientation(contr.orientation)) {
        case 'x': {
          pos = e.pageX - contr.model.slider.offsetLeft;
          if (contr.step != 1) {
            pos = contr.definePosStepClosestClick(pos);
          }
          break;
        }
        case 'y': {
          pos = e.pageY - contr.getCoords(contr.model.slider).top;
          if (contr.step != 1) {
            pos = contr.definePosStepClosestClick(pos);
          }
          break;
        }
        default: {
          pos = 0;
        }
      }

      switch (contr.type) {
        case 'interval': {
          let posL: number = contr.model.getPosRangeLeft(),
            posR: number = contr.model.getPosRangeRight();

          if (Math.abs(posL - pos) < Math.abs(posR - pos)) {
            startPos = contr.model.getPosRangeLeft();
            contr.movingRange('left', contr.model.getPosRangeLeft(), pos, contr.model.getWidthRange());
          } else {
            if (Math.abs(posL - pos) == Math.abs(posR - pos) && pos < posL) {
              startPos = contr.model.getPosRangeLeft();
              contr.movingRange('left', contr.model.getPosRangeLeft(), pos, contr.model.getWidthRange());
            } else {
              startPos = contr.model.getPosRangeRight();
              contr.movingRange('right', contr.model.getPosRangeRight(), pos, contr.model.getWidthRange());
            }
          }
          break;
        }
        case 'from0to': {
          startPos = contr.model.getPosRangeRight();
          contr.movingRange('right', contr.model.getPosRangeRight(), pos, contr.model.getWidthRange());
          break;
        }
        case 'one': {
          startPos = contr.model.getPosRangeRight();
          contr.movingRange('right', contr.model.getPosRangeRight(), pos, contr.model.getWidthRange());
          break;
        }
      }
    }
  }
  definePosStepClosestClick(pos: number): number {
    let finalPos: number = 0,
      masScale: number[],
      len: number = this.model.getWidth(),
      lenL: number,
      lenR: number;

    masScale = this.masStepsForMoving();

    for (let i = 0; i < masScale.length; i++) {
      lenL = Math.abs(masScale[i] - pos);
      lenR = Math.abs(masScale[i + 1] - pos);

      if (lenL < len) {
        finalPos = masScale[i];
        len = lenL;
      } else if (lenR < len) {
        finalPos = masScale[i + 1];
        len = lenR;
      }
    }

    return finalPos;
  }
  masStepsForMoving(): number[] {
    let qtyDivision: number = (this.max - this.min) / this.step,
      widthOneDivision: number = this.model.getWidth() / (this.max - this.min),
      widthStep: number = widthOneDivision * this.step,
      masScale: number[] = [];

    for (let i = 0; i <= qtyDivision; i++) {
      masScale[i] = widthStep * i; // parseInt(w*i); // без parseInt, чтобы точность стоимости была выше
    }

    return masScale;
  }

  applyConfig(): void {
    let contr: Controller = this,
      thisClick: HTMLInputElement,
      settingsBlock: HTMLElement;

    if (this.settings == 'on') {
      thisClick = contr.getElementInputBySelector(contr.thisSlider, '.slider-config .checkbox-list__input');
      settingsBlock = getElementBySelector(contr.thisSlider, '.slider-config .slider-config__block');

      thisClick.onclick = function () {
        if (thisClick.checked == true) {
          settingsBlock.style.display = 'block';
        } else {
          settingsBlock.style.display = 'none';
        }

        let inputS: HTMLCollection = contr.thisSlider.getElementsByClassName('input-text__input');

        for (let i = 0; i < inputS.length; i++) {
          inputS[i].addEventListener('blur', (e) => {
            const elemBlur = <HTMLInputElement>e.target,
              idInput = elemBlur.id,
              id: number = parseInt(contr.idElement.substr(-1));
            let min: number, max: number, minStart: number, maxStart: number, step: number, scaleStep: number;

            if (idInput.indexOf('min', 0) != -1 && idInput.indexOf('minStart', 0) == -1) {
              min = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              contr.min = min;
              contr.view.min = min;
            }
            if (idInput.indexOf('max', 0) != -1 && idInput.indexOf('maxStart', 0) == -1) {
              max = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              contr.max = max;
              contr.view.max = max;
            }
            if (idInput.indexOf('minStart', 0) != -1) {
              minStart = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              if (minStart <= contr.maxStart) {
                contr.minStart = minStart;
                contr.view.minStart = minStart;
              }
            }
            if (idInput.indexOf('maxStart', 0) != -1) {
              maxStart = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              if (maxStart >= contr.minStart) {
                contr.maxStart = maxStart;
                contr.view.maxStart = maxStart;
              }
            }
            if (idInput.indexOf('scaleStep', 0) != -1) {
              scaleStep = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              contr.scaleStep = scaleStep;
              contr.view.scaleStep = scaleStep;
            }
            if (idInput.indexOf('step', 0) != -1) {
              step = Number.parseInt(elemBlur.value);
              clear(contr.thisSlider, id);
              contr.step = step;
            }
            contr.checkMinMaxStart();
            contr.view.drawType();
            contr.view.drawScale();
            contr.view.drawRange();
            contr.view.drawValue();
            if (contr.settings == 'on') {
              contr.writeDataInConfig();
            }
          });
        }

        let radioS: HTMLCollection = contr.thisSlider.getElementsByClassName('radiogroup__input');
        for (let i = 0; i < radioS.length; i++) {
          radioS[i].addEventListener('click', (e) => {
            const elemClick = <HTMLInputElement>e.target,
              id: number = parseInt(contr.idElement.substr(-1)),
              idStr: string = elemClick.name;
            let type: string,
              orientation: string,
              value: string,
              scale: string,
              typeId: string,
              orientationID: string,
              valueID: string,
              scaleID: string;

            if (idStr.indexOf('Type', 0) != -1) {
              typeId = elemClick.id.substr(-1);
              switch (typeId) {
                case '1':
                  type = 'interval';
                  break;
                case '2': {
                  type = 'from0to';
                  contr.minStart = contr.min;
                  break;
                }
                case '3': {
                  type = 'one';
                  contr.minStart = contr.min;
                  break;
                }
                default:
                  type = 'interval';
              }
              clear(contr.thisSlider, id);
              contr.type = type;
              contr.view.type = type;
            }
            if (idStr.indexOf('Orientation', 0) != -1) {
              orientationID = elemClick.id.substr(-1);
              switch (orientationID) {
                case '1':
                  orientation = 'horizontal';
                  break;
                case '2':
                  orientation = 'vertical';
                  break;
                default:
                  orientation = 'horizontal';
              }
              clear(contr.thisSlider, id);
              contr.orientation = orientation;
              contr.view.orientation = orientation;
            }
            if (idStr.indexOf('Value', 0) != -1) {
              valueID = elemClick.id.substr(-1);
              switch (valueID) {
                case '1':
                  value = 'on';
                  break;
                case '2':
                  value = 'off';
                  break;
                default:
                  value = 'on';
              }
              clear(contr.thisSlider, id);
              contr.value = value;
              contr.view.value = value;
            }
            if (idStr.indexOf('Scale', 0) != -1) {
              scaleID = elemClick.id.substr(-1);
              switch (scaleID) {
                case '1':
                  scale = 'on';
                  break;
                case '2':
                  scale = 'off';
                  break;
                default:
                  scale = 'on';
              }
              clear(contr.thisSlider, id);
              contr.scale = scale;
              contr.view.scale = scale;
            }

            contr.checkMinMaxStart();
            contr.view.drawType();
            contr.view.drawScale();
            contr.view.drawOrientation();
            contr.view.drawValue();
            contr.view.drawRange();
            if (contr.settings == 'on') {
              contr.writeDataInConfig();
            }
          });
        }
      };
    }

    function clear(thisSlider: HTMLElement, id: number) {
      const blocksScale: NodeListOf<Element> = thisSlider.querySelectorAll(
        '.range-slider#idSlider' + id + ' .range-slider__slider .range-slider__scale'
      );
      for (let i = 0; i < blocksScale.length; i++) {
        blocksScale[i].remove();
      }

      const rangeLeftElem: HTMLElement = getElementBySelector(
        thisSlider,
        '.range-slider#idSlider' + id + ' .range-slider__left'
      );
      rangeLeftElem.style.opacity = '1';
      const rangeElem: HTMLElement = getElementBySelector(
        thisSlider,
        '.range-slider#idSlider' + id + ' .range-slider__range'
      );
      rangeElem.style.opacity = '1';
    }
  }

  checkMinMaxStart(): void {
    if (this.minStart < this.min) {
      this.minStart = this.min;
      this.view.minStart = this.min;
    }
    if (this.maxStart > this.max) {
      this.maxStart = this.max;
      this.view.maxStart = this.max;
    }
    if (this.minStart > this.max) {
      this.minStart = this.max;
      this.view.minStart = this.max;
    }
  }

  writeDataInConfig(): void {
    this.model.elemValueMin.innerHTML = new Intl.NumberFormat('ru-RU').format(this.minStart);
    this.model.elemValueMax.innerHTML = new Intl.NumberFormat('ru-RU').format(this.maxStart);

    let typeID: string,
      orientationID: string,
      valueID: string,
      scaleID: string,
      id: string = this.idElement.substr(-1);

    switch (this.type) {
      case 'interval':
        typeID = '1';
        break;
      case 'from0to': {
        typeID = '2';
        this.writeDataSliderMin(this.min);
        break;
      }
      case 'one': {
        typeID = '3';
        this.writeDataSliderMin(this.min);
        break;
      }
      default:
        typeID = '1';
    }
    switch (this.orientation) {
      case 'horizontal':
        orientationID = '1';
        break;
      case 'vertical':
        orientationID = '2';
        break;
      default:
        orientationID = '1';
    }
    switch (this.value) {
      case 'on':
        valueID = '1';
        break;
      case 'off':
        valueID = '2';
        break;
      default:
        valueID = '1';
    }
    switch (this.scale) {
      case 'on':
        scaleID = '1';
        break;
      case 'off':
        scaleID = '2';
        break;
      default:
        scaleID = '1';
    }

    const configInputElemMin: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextmin${id}`
    );
    configInputElemMin.value = this.min.toString();

    const configInputElemMax: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextmax${id}`
    );
    configInputElemMax.value = this.max.toString();

    const configInputElemMinStart: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextminStart${id}`
    );
    configInputElemMinStart.value = this.minStart.toString();

    const configInputElemMaxStart: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextmaxStart${id}`
    );
    configInputElemMaxStart.value = this.maxStart.toString();

    const configInputElemStep: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextstep${id}`
    );
    configInputElemStep.value = this.step.toString();

    const configInputElemScaleStep: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.slider-config .slider-config__block .input-text #inputTextscaleStep${id}`
    );
    configInputElemScaleStep.value = this.scaleStep.toString();

    const configRadioElemType: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.radiogroup__input[name=rbGroopType${id}]#rbrbGroopType${id}${id}${typeID}`
    );
    configRadioElemType.checked = true;

    const configRadioElemOrientation: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.radiogroup__input[name=rbGroopOrientation${id}]#rbrbGroopOrientation${id}${id}${orientationID}`
    );
    configRadioElemOrientation.checked = true;

    const configRadioElemValue: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.radiogroup__input[name=rbGroopValue${id}]#rbrbGroopValue${id}${id}${valueID}`
    );
    configRadioElemValue.checked = true;

    const configRadioElemScale: HTMLInputElement = this.getElementInputBySelector(
      this.thisSlider,
      `.radiogroup__input[name=rbGroopScale${id}]#rbrbGroopScale${id}${id}${scaleID}`
    );
    configRadioElemScale.checked = true;
  }

  getElementInputBySelector(item: HTMLElement, selector: string): HTMLInputElement {
    const element = item.querySelector(selector);

    if (!(element instanceof HTMLInputElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  }
}
export { Controller };
