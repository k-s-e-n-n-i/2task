import * as $ from "jquery"
//import {Model} from '/modules/plugin.slider/plugin.slider.model.ts';
//import {View} from '/modules/plugin.slider/plugin.slider.view.ts';
//import {Controller} from '/modules/plugin.slider/plugin.slider.controller.ts';
declare let jQuery: any;

(function( $ ) {
	$.fn.slider = function(options : object) {

    class Slider {
      public element : any;
      public idElement : string;
      public width : number;
      public type : string = 'interval';
      public min : number;
      public max : number;
      public minStart : number;
      public maxStart : number;
      public step : number;
      public orientation : string = 'horizontal';
      public value : string = 'on';
      public scale : string = 'on';
      public scaleStep : number;
      public settings : string = 'on';
      public dataSlider : object = {};

      constructor(elementObj : object,
        idElementObj : string,
        widthObj : number,
        typeObj : string,
        minObj : number,
        maxObj : number,
        minStartObj : number,
        maxStartObj : number,
        stepObj : number,
        orientationObj : string,
        valueObj : string,
        scaleObj : string,
        scaleStepObj : number,
        settingsObj : string,){

          this.element = elementObj;
          this.idElement = idElementObj;
          this.width = widthObj || 400;
          this.type = typeObj || 'interval';
          this.min = minObj || 0;
          this.max = maxObj || 1000;
          this.minStart = minStartObj || 0;
          this.maxStart = maxStartObj || 500;
          this.step = stepObj || 1;
          this.orientation = orientationObj || 'horizontal';
          this.value = valueObj || 'on';
          this.scale = scaleObj || 'on';
          this.scaleStep = scaleStepObj ||10;
          this.settings = settingsObj || 'on';

          this.dataSlider = {
            element : elementObj,
            idElement : idElementObj,
            width : widthObj || 400,
            type : typeObj || 'interval',
            min : minObj || 0,
            max : maxObj || 1000,
            minStart : minStartObj || 0,
            maxStart : maxStartObj || 500,
            step : stepObj || 1,
            orientation : orientationObj || 'horizontal',
            value : valueObj || 'on',
            scale : scaleObj || 'on',
            scaleStep : scaleStepObj ||10,
            settings : settingsObj || 'on',
          };
      }
 
      runSlider(){
        const model = new Model(this.dataSlider);
        const view = new View(this.dataSlider, model);
        const controller = new Controller(this.dataSlider, model, view);
    
        model.rangeSlider.style.width = this.width +'px';
        
        controller.checkMinMaxStart();
        if (this.settings == 'on'){
          controller.writeDataInConfig();
        }
        view.drawRange();
    
        controller.moveRangeOnclickSlider();
        if (this.settings == 'on'){
          controller.applyConfig();
        }
    
        model.rangeLeft.onmousedown = function(e : any) {
          controller.moveAt(model.rangeLeft, e, 'left');
        };
        model.rangeRight.onmousedown = function(e : any) {
          controller.moveAt(model.rangeRight, e, 'right');
        };
    
        view.drawType();
        view.drawScale();
        view.drawOrientation();
        view.drawValue();
      };
    }

    const slider = new Slider(this.element,
      this.idElement,
      this.width,
      this.type,
      this.min,
      this.max,
      this.minStart,
      this.maxStart,
      this.step,
      this.orientation,
      this.value,
      this.scale,
      this.scaleStep,
      this.settings);
    slider.runSlider();
  }
})(jQuery)