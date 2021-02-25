import {pow, Model} from '/blocks/demoSlider/demoSlider_ts.ts';

console.log('----------------------');
console.log(pow(2,5));

describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});

let dataTest = {
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
	},
	elemTest = document.querySelector('.searchRoom2 .slider1');

describe("Ширина слайдера.", function() {

  it("Model.width", function() {
    assert.equal(model.width(elemTest, dataTest), 389);
  });

});
console.log('----------------------');