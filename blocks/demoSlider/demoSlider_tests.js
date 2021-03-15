import {Model, View, Controller} from '/blocks/demoSlider/demoSlider_MVC.ts';

let obj = {
	element : document.querySelector('.searchRoom2 .slider1'),
	idElement : 'idPrice1',
	width : 400,
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
};

//-------------------------------------------Model---'
const modelTest = new Model();

describe("1. Ширина слайдера.", function() {
  it("Model.width: ", function() {
    assert.equal(modelTest.width(obj.element, obj.idElement), 389);//obj.width-11
  });
});
describe("2. Элемент rangeSliderX.", function() {
  it("Model.sliderBlock: ", function() {
    assert.equal(modelTest.sliderBlock(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider#idPrice1'));
  });
});
describe("3. Элемент rangeSlider_slider.", function() {
  it("Model.slider: ", function() {
    assert.equal(modelTest.slider(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider#idPrice1 .rangeSlider_slider'));
  });
});
describe("4. Высота блока со слайдером и заголовком. Без развернутых настроек всегда 53px", function() {
  it("Model.height: ", function() {
    assert.equal(modelTest.height(obj.element, obj.idElement), 53);
  });
});
describe("5. Элемент ind.", function() {
  it("Model.ind: ", function() {
    assert.equal(modelTest.ind(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider#idPrice1 .rangeSlider_slider .rangeSlider_slider_range'));
  });
});
describe("6. Ширина слайдера.", function() {
  it("Model.indWidth: ", function() {
    assert.equal(modelTest.indWidth(obj.element, obj.idElement), Math.round((389/(200-10)*(100-10))-(389/(200-10)*(50-10))) );
  });
});
describe("7. Элемент rangeLeft.", function() {
  it("Model.rangeLeft: ", function() {
    assert.equal(modelTest.rangeLeft(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider#idPrice1 .rangeSlider_slider .rangeSlider_slider_left'));
  });
});
describe("8. Позиция левого шарика в px.", function() {
  it("Model.posRangeLeft: ", function() {
    assert.equal(modelTest.posRangeLeft(obj.element, obj.idElement), parseInt(389/(200-10)*(50-10)) );
  });
});
describe("9. Элемент rangeRight.", function() {
  it("Model.rangeRight: ", function() {
    assert.equal(modelTest.rangeRight(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider#idPrice1 .rangeSlider_slider .rangeSlider_slider_right'));
  });
});
describe("10. Позиция правого шарика в px.", function() {
  it("Model.posRangeRight: ", function() {
    assert.equal(modelTest.posRangeRight(obj.element, obj.idElement), parseInt(389/(200-10)*(100-10)) );
  });
});
describe("11. Элемент rangeSlider_label__min.", function() {
  it("Model.valueMin: ", function() {
    assert.equal(modelTest.valueMin(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider_label__min'));
  });
});
describe("12. Элемент rangeSlider_label__max.", function() {
  it("Model.valueMax: ", function() {
    assert.equal(modelTest.valueMax(obj.element, obj.idElement), document.querySelector('.searchRoom2 .slider1 .rangeSlider_label__max'));
  });
});

//-------------------------------------------View---
const viewTest = new View();
//не представляю как писать тесты на методы отрисовки, и в целом методы void


//-------------------------------------------Controller---
const contrTest = new Controller();

describe("1. Определение ориентации.", function() {
  it("Controller.checkOrientation: ", function() {
    assert.equal(contrTest.checkOrientation(obj.orientation), 'x' );
  });
});
//2. Controller.movie (void)
//3. Controller.moveAt (void)
/*describe("4. Определение позиции элемента.", function() {//не получается
  it("Controller.getCoords: ", function() {
    //assert.equal(contrTest.getCoords(modelTest.rangeLeft(obj.element, obj.idElement)), {top : 1339, left : parseInt(modelTest.slider(thisSlider, dataSlider.idElement).offsetLeft+parseInt(389/(200-10)*(50-10)),} );
    assert.equal(contrTest.getCoords(modelTest.rangeLeft(obj.element, obj.idElement).left), 1351 );
  });
});*/
console.log('get', modelTest.posRangeLeft(obj.element, obj.idElement), parseInt(389/(200-10)*(50-10)), contrTest.getCoords(modelTest.rangeLeft(obj.element, obj.idElement)));

/*console.log('2.1. controller.movingRange, см слайдер '+obj.idElement+' :\t\t', 
	contrTest.movingRange(document.querySelector('.searchRoom2 .slider1'), obj, 'left', 0, 30, 2000, modelTest, controller));
console.log('2.2. controller.movingRange, см слайдер '+obj.idElement+' :\t\t', 
	contrTest.movingRange(document.querySelector('.searchRoom2 .slider1'), obj, 'right', 270, 250, 240, modelTest, controller));
console.log('3. controller.clickSlider '+obj.idElement+' :\t\t\t\t\t', 
	contrTest.clickSlider(document.querySelector('.searchRoom2 .slider1'), obj, modelTest, controller));
console.log('4. controller.masScale, см слайдер '+obj.idElement+' :\t\t\t', 
	contrTest.masScale(document.querySelector('.searchRoom2 .slider1'), obj, modelTest));
console.log('5. controller.checkRangeThisStep, см слайдер '+obj.idElement+' :\t', 
	contrTest.checkRangeThisStep(document.querySelector('.searchRoom2 .slider1'), obj, 300, modelTest, controller));
console.log('6.1. controller.checkDataSliderMin '+obj.idElement+' :\t\t\t', 
	contrTest.checkDataSliderMin(obj, 123), obj);
console.log('6.2. controller.checkDataSliderMax '+obj.idElement+' :\t\t\t', 
	contrTest.checkDataSliderMax(obj, 456), obj);
console.log('7.1. controller.configMinChange, см слайдер '+obj.idElement+' :\t', 
	contrTest.configMinChange(document.querySelector('.searchRoom2 .slider1'), obj, 2));
console.log('7.2. controller.configMaxChange '+obj.idElement+' :\t\t\t\t', 
	contrTest.configMaxChange(document.querySelector('.searchRoom2 .slider1'), obj, 3000));

/*console.log('8. controller.checkMinMaxStart :\t\t\t\t\t\t', controller.checkMinMaxStart(obj), obj);
//console.log('9. controller.configCheckStart, см слайдер '+obj.idElement+' :\t', 
//	controller.configCheckStart(document.querySelector('.searchRoom2 .slider5'), obj));
console.log('10. controller.configCheck, см слайдер '+obj.idElement+' :\t\t', 
	controller.configCheck(document.querySelector('.searchRoom2 .slider5'), obj));
	
console.log('11. controller.configCheck, см слайдер '+obj.idElement+' :\t\t');
/*modelTest.rangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement).onmousedown = function(e) {
	controller.movie(document.querySelector('.searchRoom2 .slider1'), obj, 
		modelTest.rangeLeft(document.querySelector('.searchRoom2 .slider1'), obj.idElement), e, 'left', modelTest, controller);
};

modelTest.rangeRight(document.querySelector('.searchRoom2 .slider5'), obj.idElement).onmousedown = function(e) {
	controller.movie(document.querySelector('.searchRoom2 .slider1'), obj, 
		modelTest.rangeRight(document.querySelector('.searchRoom2 .slider1'), obj.idElement), e, 'right', modelTest, controller);
};*/