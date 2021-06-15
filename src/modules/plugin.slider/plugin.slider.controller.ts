import $ from 'jquery';
import { Options } from '../../modules/plugin.slider/plugin.slider';

interface Coords {
  top: number;
  left: number;
}

export class Controller {
  model: any;
  view: any;
  thisSlider: any;
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

  constructor(option: Options, model: any, view: any) {
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

  moveAt(range: any, e: any, side: string): void {
    document.body.classList.add('moving-slider');

    let startPos: number = parseInt(range.style.left),
      widthRange: number = this.model.getWidthRange();
    switch (
      side //чтобы сверху был ползунок, который перемещали последним (если друг на друга наедут)
    ) {
      case 'left': {
        this.model.rangeLeft.style.zindex = 15;
        this.model.rangeRight.style.zindex = 10;
        break;
      }
      case 'right': {
        this.model.rangeRight.style.zindex = 15;
        this.model.rangeLeft.style.zindex = 10;
        break;
      }
    }

    let thisClick: any = this.thisSlider,
      contr = this;

    thisClick.onmousemove = function (e: any) {
      document.onmousemove = function (e: any) {
        let pos: number, tempPos: number, masScale: number[];
        switch (contr.defineOrientation(contr.orientation)) {
          case 'x': {
            if (contr.step == 1) {
              pos = e.pageX - parseInt(contr.model.slider.offsetLeft);
              contr.movingRange(side, startPos, pos, widthRange);
            } else {
              masScale = contr.masStepsForMoving();
              tempPos = e.pageX - parseInt(contr.model.slider.offsetLeft);
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

    document.onmouseup = function (e: any) {
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
          step = startPos - pos; //длина перемещения левого указателя
          this.model.rangeLeft.style.left = pos + 'px'; //позиция указателей
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
    function calcValue(pos: number, conrtThis: any): number {
      let percent: number = pos / conrtThis.model.getWidth(),
        price: number = ((conrtThis.max - conrtThis.min) * percent + conrtThis.min).toFixed();
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
    this.thisSlider.querySelector(
      `.slider-config .slider-config__block .input-text #inputTextminStart` + this.idElement.substr(-1)
    ).value = val;
  }
  changeConfigInputMax(val: number): void {
    if (val > this.max) {
      val = this.max;
    }
    this.thisSlider.querySelector(
      `.slider-config .slider-config__block .input-text #inputTextmaxStart` + this.idElement.substr(-1)
    ).value = val;
  }

  moveRangeOnclickSlider(): void {
    let thisClickSlider: any = this.model.slider,
      thisClickRange: any = this.model.range,
      contr: any = this;

    thisClickSlider.addEventListener('mousedown', function (e: any) {
      let pos: number, startPos: number;

      if (e.target != thisClickSlider) {
        if (e.target != thisClickRange) {
          return;
        }
      }

      switch (contr.defineOrientation(contr.orientation)) {
        case 'x': {
          pos = e.pageX - parseInt(contr.model.slider.offsetLeft);
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
    });
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
      widthOneDivision: number = this.model.getWidth() / (this.max - this.min), //одно деление
      widthStep: number = widthOneDivision * this.step, //длина шага
      masScale: number[] = [];

    for (let i = 0; i <= qtyDivision; i++) {
      masScale[i] = widthStep * i; //parseInt(w*i); //без parseInt, чтобы точность стоимости была выше
    }

    return masScale;
  }

  applyConfig(): void {
    let thisClick: any = this.model.checkboxSettings,
      contr: any = this;

    thisClick.onclick = function (e: any) {
      if (thisClick.checked == true) {
        contr.model.settingsBlock.style.display = 'block';
      } else {
        contr.model.settingsBlock.style.display = 'none';
      }

      let inputS: any = contr.thisSlider.getElementsByClassName('input-text__input');
      for (var i = 0; i < inputS.length; i++) {
        inputS[i].onblur = function () {
          let idInput = this.id,
            id: number = contr.idElement.substr(-1),
            min: number,
            max: number,
            minStart: number,
            maxStart: number,
            step: number,
            scaleStep: number;

          if (idInput.indexOf('min', 0) != -1 && idInput.indexOf('minStart', 0) == -1) {
            min = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            contr.min = min;
            contr.view.min = min;
          }
          if (idInput.indexOf('max', 0) != -1 && idInput.indexOf('maxStart', 0) == -1) {
            max = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            contr.max = max;
            contr.view.max = max;
          }
          if (idInput.indexOf('minStart', 0) != -1) {
            minStart = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            if (minStart <= contr.maxStart) {
              contr.minStart = minStart;
              contr.view.minStart = minStart;
            }
          }
          if (idInput.indexOf('maxStart', 0) != -1) {
            maxStart = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            if (maxStart >= contr.minStart) {
              contr.maxStart = maxStart;
              contr.view.maxStart = maxStart;
            }
          }
          if (idInput.indexOf('scaleStep', 0) != -1) {
            scaleStep = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            contr.scaleStep = scaleStep;
            contr.view.scaleStep = scaleStep;
          }
          if (idInput.indexOf('step', 0) != -1) {
            step = Number.parseInt(this.value);
            clear(contr.thisSlider, id);
            contr.step = step;
            contr.view.step = step;
          }

          contr.checkMinMaxStart();
          contr.view.drawType();
          contr.view.drawScale();
          contr.view.drawRange();
          contr.view.drawValue();
          if (contr.settings == 'on') {
            contr.writeDataInConfig();
          }
        };
      }

      let radioS: any = contr.thisSlider.getElementsByClassName('radiogroup__input');
      for (var i = 0; i < radioS.length; i++) {
        radioS[i].onclick = function () {
          let id: number = contr.idElement.substr(-1),
            idStr: string = this.name,
            type: string,
            orientation: string,
            value: string,
            scale: string,
            typeId: string,
            orientationID: string,
            valueID: string,
            scaleID: string;

          if (idStr.indexOf('Type', 0) != -1) {
            typeId = this.id.substr(-1);
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
            orientationID = this.id.substr(-1);
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
            valueID = this.id.substr(-1);
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
            scaleID = this.id.substr(-1);
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
        };
      }
    };

    function clear(thisSlider: any, id: number) {
      let blocksScale: any = thisSlider.querySelectorAll(
        '.range-slider#idSlider' + id + ' .range-slider__slider .range-slider__scale'
      );
      for (let i = 0; i < blocksScale.length; i++) {
        blocksScale[i].remove();
      }

      thisSlider.querySelector('.range-slider#idSlider' + id + ' .range-slider__left').style.opacity = 1;
      thisSlider.querySelector('.range-slider#idSlider' + id + ' .range-slider__range').style.opacity = 1;
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

    let configItemMin: string = `.slider-config .slider-config__block .input-text #inputTextmin`,
      configItemMax: string = `.slider-config .slider-config__block .input-text #inputTextmax`,
      configItemMinStart: string = `.slider-config .slider-config__block .input-text #inputTextminStart`,
      configItemMaxStart: string = `.slider-config .slider-config__block .input-text #inputTextmaxStart`,
      configItemStep: string = `.slider-config .slider-config__block .input-text #inputTextstep`,
      configItemScaleStep: string = `.slider-config .slider-config__block .input-text #inputTextscaleStep`;

    this.thisSlider.querySelector(configItemMin + id).value = this.min;
    this.thisSlider.querySelector(configItemMax + id).value = this.max;
    this.thisSlider.querySelector(configItemMinStart + id).value = this.minStart;
    this.thisSlider.querySelector(configItemMaxStart + id).value = this.maxStart;
    this.thisSlider.querySelector(configItemStep + id).value = this.step;
    this.thisSlider.querySelector(configItemScaleStep + id).value = this.scaleStep;
    this.thisSlider.querySelector(
      `.radiogroup__input[name=rbGroopType${id}]#rbrbGroopType${id}${id}${typeID}`
    ).checked = true;
    this.thisSlider.querySelector(
      `.radiogroup__input[name=rbGroopOrientation${id}]#rbrbGroopOrientation${id}${id}${orientationID}`
    ).checked = true;
    this.thisSlider.querySelector(
      `.radiogroup__input[name=rbGroopValue${id}]#rbrbGroopValue${id}${id}${valueID}`
    ).checked = true;
    this.thisSlider.querySelector(
      `.radiogroup__input[name=rbGroopScale${id}]#rbrbGroopScale${id}${id}${scaleID}`
    ).checked = true;
  }
}
