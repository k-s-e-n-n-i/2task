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


class model {
	/*width(thisSlider : any, dataSlider : object) : number{
		return thisSlider.find('.rangeSlider#'+dataSlider.idElement).find('.rangeSlider_slider').width();
	}
	sliderBlock(thisSlider : object) : object{ 
		return thisSlider.find('.rangeSlider#'+dataSlider.idElement);
	}
	slider(thisSlider : object) : object{ 
		return this.sliderBlock(thisSlider : object).find('.rangeSlider_slider');
	},
	height(thisSlider : object) : number{
		const h = model.sliderBlock(thisSlider).height();
		return h;
	},
	ind(thisSlider : object) : object{ 
		//console.log('12345-4');
		return model.slider(thisSlider).find('.rangeSlider_slider_range');//"индикатор"
	},
	indWidth(thisSlider : object) : object{
		//console.log('12345-5');
		return model.ind(thisSlider).width();
	},
	rangeLeft(thisSlider : object) : object{ 
		//console.log('12345-6');
		return model.slider(thisSlider).find('.rangeSlider_slider_left');
	},
	posRangeLeft(thisSlider : object) : object{
		//console.log('12345-7');
		return parseInt((model.rangeLeft(thisSlider)).css('left'));
	},
	rangeRight(thisSlider : object) : object{ 
		//console.log('12345-8');
		return model.slider(thisSlider).find('.rangeSlider_slider_right');
	},
	posRangeRight(thisSlider : object) : object{
		//console.log('12345-9');
		return parseInt((model.rangeRight(thisSlider)).css('left'));
	},
	valueMin : function (thisSlider){
		//console.log('12345-10');
		return model.rangeLeft(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__min');
	},
	valueMax : function (thisSlider){
		//console.log('12345-11');
		return model.rangeRight(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__max');
	},
			masScaleStep : [],
			configItemMin : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin`,
			configItemMax : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax`,
			configItemMinStart : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart`,
			configItemMaxStart : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart`,
			configItemStep : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextstep`,
			configItemScaleStep : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep`,
			configItemRadiobtn : `.searchRoom2 .sliderConf .sliderConf_block .sliderConf_block_item
						.sliderConf_block_item_option .radio `,
	constructor(argument) {
		// code...
	}*/
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