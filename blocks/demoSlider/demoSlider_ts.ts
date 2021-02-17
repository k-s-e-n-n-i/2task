console.log('Я TS!');

interface dataSlider {
	idElement : string
	type : string
	min : number
	max : number
	minStart : number
	maxStart : number
	step : number
	orientation : string
	value : boolean //on/off
	scale : boolean //on/off
	scaleStep : number
}


class Model {
	width(thisSlider : any, dataSlider : object) : number{
		return thisSlider.querySelector('.rangeSlider#'+dataSlider.idElement+' .rangeSlider_slider').clientWidth;
		//return thisSlider.find('.rangeSlider#'+dataSlider.idElement).find('.rangeSlider_slider').width();
	}
	sliderBlock(thisSlider : any, dataSlider : object) : object{
		return thisSlider.querySelector('.rangeSlider#'+dataSlider.idElement);
		//return thisSlider.find('.rangeSlider#'+dataSlider.idElement);
	}
	slider(thisSlider : any, dataSlider : object) : object{ 
		return this.sliderBlock(thisSlider, dataSlider).querySelector('.rangeSlider_slider');
		//return this.sliderBlock(thisSlider : object).find('.rangeSlider_slider');
	}
	height(thisSlider : any, dataSlider : object) : number{
		//const h = model.sliderBlock(thisSlider).height();
		const h = this.sliderBlock(thisSlider, dataSlider).clientHeight;
		return h;
	}
	ind(thisSlider : any, dataSlider : object) : object{ 
		return this.slider(thisSlider, dataSlider).querySelector('.rangeSlider_slider_range');
		//return model.slider(thisSlider).find('.rangeSlider_slider_range');//"индикатор"
	}
	indWidth(thisSlider : any, dataSlider : object) : number{
		return this.ind(thisSlider, dataSlider).clientWidth;
		//return model.ind(thisSlider).width();
	}
	rangeLeft(thisSlider : any, dataSlider : object) : object{ 
		return this.slider(thisSlider, dataSlider).querySelector('.rangeSlider_slider_left');
		//return model.slider(thisSlider).find('.rangeSlider_slider_left');
	}
	posRangeLeft(thisSlider : any, dataSlider : object) : number{
		return parseInt(getComputedStyle(this.rangeLeft(thisSlider, dataSlider)).left);
		//return parseInt((model.rangeLeft(thisSlider)).css('left'));
	}
	rangeRight(thisSlider : any, dataSlider : object) : object{ 
		return this.slider(thisSlider, dataSlider).querySelector('.rangeSlider_slider_right');
		//return model.slider(thisSlider).find('.rangeSlider_slider_right');
	}
	posRangeRight(thisSlider : any, dataSlider : object) : number{
		return parseInt(getComputedStyle(this.rangeRight(thisSlider, dataSlider)).left);
		//return parseInt((model.rangeRight(thisSlider)).css('left'));
	}
	valueMin(thisSlider : any, dataSlider : object) : object{
		return thisSlider.querySelector('.rangeSlider_label__min');
		//return model.rangeLeft(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__min');
	}
	valueMax(thisSlider : any, dataSlider : object) : object{
		return thisSlider.querySelector('.rangeSlider_label__max');
		//return model.rangeRight(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__max');
	}
			masScaleStep : number[] = [],
			configItemMin : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin`,
			configItemMax : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax`,
			configItemMinStart : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart`,
			configItemMaxStart : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart`,
			configItemStep : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextstep`,
			configItemScaleStep : string = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep`,
			configItemRadiobtn : string = `.searchRoom2 .sliderConf .sliderConf_block .sliderConf_block_item
						.sliderConf_block_item_option .radio `,
	
}



//----------------------------------------------------------------------

const sliders : dataSlider[] =
	[ $('.searchRoom2 .slider1').slider({
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
	}),
	$('.searchRoom2 .slider2').slider({
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
	}),
	$('.searchRoom2 .slider3').slider({
		idElement : 'idPrice3',
		min : 100,
		max : 40000,
		value : 'off',
		scale : 'on',
	}),

	$('.searchRoom2 .slider4').slider({
		idElement : 'idPrice4',
		type : 'one',
		min : 0,
		max : 5000,
		maxStart : 2000,
	}),
	$('.searchRoom2 .slider5').slider({
		idElement : 'idPrice5',
	}) ];



console.log(sliders);

const model = new Model();

console.log('1. model.width :',model.width(document.querySelector('.searchRoom2 .slider1'),sliders[0]));//.searchRoom2.slider1
console.log('2. model.sliderBlock :',model.sliderBlock(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('3. model.slider :',model.slider(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('4. model.height :',model.height(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('5. model.ind :',model.ind(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('6. model.indWidth :',model.indWidth(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('7. model.rangeLeft :',model.rangeLeft(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('8. model.posRangeLeft :',model.posRangeLeft(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('9. model.rangeRight :',model.rangeRight(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('10. model.posRangeRight :',model.posRangeRight(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('11. model.valueMin :',model.valueMin(document.querySelector('.searchRoom2 .slider1'),sliders[0]));
console.log('12. model.valueMax :',model.valueMax(document.querySelector('.searchRoom2 .slider1'),sliders[0]));