import * as $ from "jquery"
import {Model} from '../../modules/plugin.slider/plugin.slider.model';
import {View} from '../../modules/plugin.slider/plugin.slider.view';
import {Controller} from '../../modules/plugin.slider/plugin.slider.controller';
declare let jQuery: any;

export interface Options {
  element : HTMLElement;
  idElement : string;
  width : number;
  type : string;
  min : number;
  max : number;
  minStart : number;
  maxStart : number;
  step : number;
  orientation : string;
  value : string;
  scale : string;
  scaleStep : number;
  settings : string;
}

(function( $ ) {
  
	$.fn.slider = function(options : Options) {

    class Slider {
      public element : HTMLElement;
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
      public dataSlider : Options;

      constructor(option : Options){
        this.dataSlider = {
          element : option.element,
          idElement : option.idElement,
          width : option.width || 400,
          type : option.type || 'interval',
          min : option.min || 0,
          max : option.max || 1000,
          minStart : option.minStart || 0,
          maxStart : option.maxStart || 500,
          step : option.step || 1,
          orientation : option.orientation || 'horizontal',
          value : option.value || 'on',
          scale : option.scale || 'on',
          scaleStep : option.scaleStep ||10,
          settings : option.settings || 'on',
        };
      }
 
      runSlider(){
        const model = new Model(this.dataSlider);
        const view = new View(this.dataSlider, model);
        const controller = new Controller(this.dataSlider, model, view);
    
        model.rangeSlider.style.width = this.width +'px';
        
        controller.checkMinMaxStart();
        if (this.dataSlider.settings == 'on'){
          controller.writeDataInConfig();
        }
        view.drawRange();
    
        controller.moveRangeOnclickSlider();
        if (this.dataSlider.settings == 'on'){
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

    const slider = new Slider(options);
    slider.runSlider();
  }
})(jQuery)