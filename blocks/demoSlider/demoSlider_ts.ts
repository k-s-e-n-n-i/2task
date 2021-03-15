console.log('Я TS!');

export function pow(x : number, n : number) : number {
  return 8;
}

import {Model, View, Controller} from '/blocks/demoSlider/demoSlider_MVC.ts';


export class slider {

	slider(option) {
		let dataSlider = Object.assign({
			element : document.querySelector('.searchRoom2 .slider1'),
			idElement : 'idPrice',
			type : 'interval',
			min : 0,
			max : 1000,
			minStart : 150,
			maxStart : 500,
			step : 1,//шаг
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 10,//12 ??
		}, option);

		
		const model = new Model();
		const view = new View();
		const controller = new Controller();

		let thisSlider = dataSlider.element;

		controller.checkMinMaxStart(dataSlider);//определили текущие мин и мах
		controller.configCheckStart(thisSlider, dataSlider, model, controller);//min-max value

		view.range(thisSlider, dataSlider, model);
		controller.clickSlider(thisSlider, dataSlider, model, controller);
		controller.configCheck(thisSlider, dataSlider, model, controller, view);
		model.rangeLeft(thisSlider, dataSlider.idElement).onmousedown = function(e) {
			controller.movie(thisSlider, dataSlider, model.rangeLeft(thisSlider, dataSlider.idElement), e, 'left', model, controller);
		};

		model.rangeRight(thisSlider, dataSlider.idElement).onmousedown = function(e) {
			controller.movie(thisSlider, dataSlider, model.rangeRight(thisSlider, dataSlider.idElement), e, 'right', model, controller);
		};

		view.type(thisSlider, dataSlider, model);
		view.scale(thisSlider, dataSlider, model);
		view.orientation(thisSlider, dataSlider, model);
		view.value(thisSlider, dataSlider, model);
	};
}
