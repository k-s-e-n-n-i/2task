console.log('Я TS!');

export function pow(x : number, n : number) : number {
  return 8;
}

import {Model, View, Controller} from '/blocks/demoSlider/demoSlider_MVC.ts';


class slider {

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
		console.log('option',dataSlider, thisSlider);

		controller.checkMinMaxStart(dataSlider);//определили текущие мин и мах
		controller.configCheckStart(thisSlider, dataSlider, model);//min-max value

		view.type(thisSlider, dataSlider, model);
		view.scale(thisSlider, dataSlider, model);
		view.orientation(thisSlider, dataSlider, model);
		view.value(thisSlider, dataSlider, model);


		view.range(thisSlider, dataSlider, model);
		controller.clickSlider(thisSlider, dataSlider, model, controller);
		controller.configCheck(thisSlider, dataSlider, model);
		model.rangeLeft(thisSlider, dataSlider.idElement).onmousedown = function(e) {
			controller.movie(thisSlider, dataSlider, model.rangeLeft(thisSlider, dataSlider.idElement), e, 'left', model, controller);
		};

		model.rangeRight(thisSlider, dataSlider.idElement).onmousedown = function(e) {
			controller.movie(thisSlider, dataSlider, model.rangeRight(thisSlider, dataSlider.idElement), e, 'right', model, controller);
		};
	};

}


//----------------------------------------------------------------------
//Объявнение слайдеров

const slider_1 = new slider();
slider_1.slider({
	element : document.querySelector('.searchRoom2 .slider1'),
	idElement : 'idPrice1',
	type : 'interval',
	min : 10,
	max : 200,
	minStart : 50,
	maxStart : 100,
	step : 20,
	orientation : 'horizontal',
	value : 'on',
	scale : 'on',
	scaleStep : 20
});
const slider_2 = new slider();
slider_2.slider({
	element : document.querySelector('.searchRoom2 .slider2'),
	idElement : 'idPrice2',
	type : 'from0to',
	min : 0,
	max : 10,
	minStart : 5,
	maxStart : 7,
	step : 5,
	orientation : 'horizontal',//'vertical',
	value : 'on',
	scale : 'off',
	scaleStep : 10
});
const slider_3 = new slider();
slider_3.slider({
	element : document.querySelector('.searchRoom2 .slider3'),
	idElement : 'idPrice3',
	min : 100,
	max : 40000,
	value : 'off',
	scale : 'on',
});
const slider_4 = new slider();
slider_4.slider({
	element : document.querySelector('.searchRoom2 .slider4'),
	idElement : 'idPrice4',
	type : 'one',
	min : 0,
	max : 5000,
	maxStart : 2000,
});
const slider_5 = new slider();
slider_5.slider({
	element : document.querySelector('.searchRoom2 .slider5'),
	idElement : 'idPrice5',
});



//----------------------------------------------------------------------
//Тесты:


/*let obj = {
		idElement : 'idPrice1',
		type : 'interval',
		min : 0,
		max : 200,
		minStart : 50,
		maxStart : 150,
		step : 1,
		orientation : 'horizontal',
		value : 'on',
		scale : 'on',
		scaleStep : 10
	};
const model = new Model();
console.log('1. model.width см сладер '+'idPrice5'+' :\t\t\t',
	model.width(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('2. model.sliderBlock см сладер '+obj.idElement+' :\t',
	model.sliderBlock(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('3. model.slider см сладер '+obj.idElement+' :\t\t',
	model.slider(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('4. model.height см сладер '+obj.idElement+' :\t\t',
	model.height(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('5. model.ind см сладер '+obj.idElement+' :\t\t',
	model.ind(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('6. model.indWidth см сладер '+obj.idElement+' :\t\t',
	model.indWidth(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('7. model.rangeLeft см сладер '+obj.idElement+' :\t',
	model.rangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('8. model.posRangeLeft см сладер '+obj.idElement+' :\t',
	model.posRangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('9. model.rangeRight см сладер '+obj.idElement+' :',
	model.rangeRight(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('10. model.posRangeRight см сладер '+obj.idElement+' :',
	model.posRangeRight(document.querySelector('.searchRoom2 .slider1'), obj.idElement));
console.log('11. model.valueMin см сладер '+obj.idElement+' :\t',
	model.valueMin(document.querySelector('.searchRoom2 .slider1')));
console.log('12. model.valueMax см сладер '+obj.idElement+' :\t',
	model.valueMax(document.querySelector('.searchRoom2 .slider1')));

console.log('-------------------------------------------');

const view = new View();

console.log('1. view.range, см слайдер idPrice2 :\t\t', view.range(document.querySelector('.searchRoom2 .slider1'),obj, model)
);
console.log('2. view.type, см слайдер idPrice2 :\t\t\t', view.type(document.querySelector('.searchRoom2 .slider1'),obj, model)
);
console.log('3. view.scale, см слайдер idPrice2 :\t\t', view.scale(document.querySelector('.searchRoom2 .slider1'),obj, model)
);
console.log('4. view.orientation, см слайдер idPrice2 :\t', view.orientation(document.querySelector('.searchRoom2 .slider1'),obj, model)
);
console.log('5. view.value, см слайдер idPrice2 :\t\t', view.value(document.querySelector('.searchRoom2 .slider1'),obj, model)
);

console.log('-------------------------------------------');

const controller = new Controller();
console.log('1. controller.checkOrientation, см слайдер '+obj.idElement+' :\t', 
	controller.checkOrientation(obj.orientation));
console.log('2.1. controller.movingRange, см слайдер '+obj.idElement+' :\t\t', 
	controller.movingRange(document.querySelector('.searchRoom2 .slider1'), obj, 'left', 0, 30, 2000, model, controller));
console.log('2.2. controller.movingRange, см слайдер '+obj.idElement+' :\t\t', 
	controller.movingRange(document.querySelector('.searchRoom2 .slider1'), obj, 'right', 270, 250, 240, model, controller));
console.log('3. controller.clickSlider '+obj.idElement+' :\t\t\t\t\t', 
	controller.clickSlider(document.querySelector('.searchRoom2 .slider1'), obj, model, controller));
console.log('4. controller.masScale, см слайдер '+obj.idElement+' :\t\t\t', 
	controller.masScale(document.querySelector('.searchRoom2 .slider1'), obj, model));
console.log('5. controller.checkRangeThisStep, см слайдер '+obj.idElement+' :\t', 
	controller.checkRangeThisStep(document.querySelector('.searchRoom2 .slider1'), obj, 300, model, controller));
console.log('6.1. controller.checkDataSliderMin '+obj.idElement+' :\t\t\t', 
	controller.checkDataSliderMin(obj, 123), obj);
console.log('6.2. controller.checkDataSliderMax '+obj.idElement+' :\t\t\t', 
	controller.checkDataSliderMax(obj, 456), obj);
console.log('7.1. controller.configMinChange, см слайдер '+obj.idElement+' :\t', 
	controller.configMinChange(document.querySelector('.searchRoom2 .slider1'), obj, 2));
console.log('7.2. controller.configMaxChange '+obj.idElement+' :\t\t\t\t', 
	controller.configMaxChange(document.querySelector('.searchRoom2 .slider1'), obj, 3000));

/*let obj = {
	idElement : 'idPrice2',
	min : 0,
	max : 10,
	minStart : -15,
	maxStart : -17,
}*/
/*console.log('8. controller.checkMinMaxStart :\t\t\t\t\t\t', controller.checkMinMaxStart(obj), obj);
//console.log('9. controller.configCheckStart, см слайдер '+obj.idElement+' :\t', 
//	controller.configCheckStart(document.querySelector('.searchRoom2 .slider5'), obj));
console.log('10. controller.configCheck, см слайдер '+obj.idElement+' :\t\t', 
	controller.configCheck(document.querySelector('.searchRoom2 .slider5'), obj));
	
console.log('11. controller.configCheck, см слайдер '+obj.idElement+' :\t\t');
/*model.rangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement).onmousedown = function(e) {
	controller.movie(document.querySelector('.searchRoom2 .slider1'), obj, 
		model.rangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement), e, 'left', model, controller);
};

model.rangeRight(document.querySelector('.searchRoom2 .slider5'), obj.idElement).onmousedown = function(e) {
	controller.movie(document.querySelector('.searchRoom2 .slider1'), obj, 
		model.rangeRight(document.querySelector('.searchRoom2 .slider1'), obj.idElement), e, 'right', model, controller);
};*/
