import { Model } from '../../modules/plugin.slider/plugin.slider.model';
import { View } from '../../modules/plugin.slider/plugin.slider.view';
import { Controller } from '../../modules/plugin.slider/plugin.slider.controller';
declare let jQuery: any;

export interface Options {
  element: HTMLElement;
  idElement: string;
  width: number;
  type: string;
  min: number;
  max: number;
  minStart: number;
  maxStart: number;
  step: number;
  orientation: string;
  value: string;
  scale: string;
  scaleStep: number;
  settings: string;
}

(function ($) {
  $.fn.slider = function (options: Options) {
    class Slider {
      public element: HTMLElement = $('body');
      public idElement: string = 'idSliderStub';
      public width: number = 400;
      public type: string = 'interval';
      public min: number = 0;
      public max: number = 1000;
      public minStart: number = 0;
      public maxStart: number = 500;
      public step: number = 1;
      public orientation: string = 'horizontal';
      public value: string = 'on';
      public scale: string = 'on';
      public scaleStep: number = 10;
      public settings: string = 'on';
      public dataSlider: Options;

      constructor(option: Options) {
        this.dataSlider = {
          element: option.element,
          idElement: option.idElement,
          width: option.width || 400,
          type: option.type || 'interval',
          min: option.min || 0,
          max: option.max || 1000,
          minStart: option.minStart || 0,
          maxStart: option.maxStart || 500,
          step: option.step || 1,
          orientation: option.orientation || 'horizontal',
          value: option.value || 'on',
          scale: option.scale || 'on',
          scaleStep: option.scaleStep || 10,
          settings: option.settings || 'on',
        };
      }

      runSlider() {
        const model = new Model(this.dataSlider);
        const view = new View(this.dataSlider, model);
        const controller = new Controller(this.dataSlider, model, view);
        let settings = this.dataSlider.settings;

        model.rangeSlider.style.width = this.dataSlider.width + 'px';

        controller.checkMinMaxStart();
        if (settings == 'on') {
          controller.writeDataInConfig();
        }
        view.drawRange();

        controller.moveRangeOnclickSlider();
        if (settings == 'on') {
          controller.applyConfig();
        }

        model.rangeLeft.addEventListener('mousedown', function () {
          controller.moveAt(model.rangeLeft, 'left');
        });
        model.rangeRight.addEventListener('mousedown', function () {
          controller.moveAt(model.rangeRight, 'right');
        });

        view.drawType();
        view.drawScale();
        view.drawOrientation();
        view.drawValue();
      }
    }

    const slider = new Slider(options);
    slider.runSlider();
  };
})(jQuery);
