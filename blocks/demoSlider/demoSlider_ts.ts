console.log('Я TS!');

export function pow(x : number, n : number) : number {
  return 8;
}


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


export class Model {
	width(thisSlider : any, dataSliderID : string) : number{
		return thisSlider.querySelector('.rangeSlider#'+dataSliderID+' .rangeSlider_slider').clientWidth;
		//return thisSlider.find('.rangeSlider#'+dataSlider.idElement).find('.rangeSlider_slider').width();
	}
	sliderBlock(thisSlider : any, dataSliderID : string) : object{
		return thisSlider.querySelector('.rangeSlider#'+dataSliderID);
		//return thisSlider.find('.rangeSlider#'+dataSlider.idElement);
	}
	slider(thisSlider : any, dataSliderID : string) : object{ 
		return this.sliderBlock(thisSlider, dataSliderID).querySelector('.rangeSlider_slider');
		//return this.sliderBlock(thisSlider : object).find('.rangeSlider_slider');
	}
	height(thisSlider : any, dataSliderID : string) : number{
		//const h = model.sliderBlock(thisSlider).height();
		const h = this.sliderBlock(thisSlider, dataSliderID).clientHeight;
		return h;
	}
	ind(thisSlider : any, dataSliderID : string) : object{ 
		return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_range');
		//return model.slider(thisSlider).find('.rangeSlider_slider_range');//"индикатор"
	}
	indWidth(thisSlider : any, dataSliderID : string) : number{
		return this.ind(thisSlider, dataSliderID).clientWidth;
		//return model.ind(thisSlider).width();
	}
	rangeLeft(thisSlider : any, dataSliderID : string) : object{ 
		return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_left');
		//return model.slider(thisSlider).find('.rangeSlider_slider_left');
	}
	posRangeLeft(thisSlider : any, dataSliderID : string) : number{
		return parseInt(getComputedStyle(this.rangeLeft(thisSlider, dataSliderID)).left);
		//return parseInt((model.rangeLeft(thisSlider)).css('left'));
	}
	rangeRight(thisSlider : any, dataSliderID : string) : object{ 
		return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_right');
		//return model.slider(thisSlider).find('.rangeSlider_slider_right');
	}
	posRangeRight(thisSlider : any, dataSliderID : string) : number{
		return parseInt(getComputedStyle(this.rangeRight(thisSlider, dataSliderID)).left);
		//return parseInt((model.rangeRight(thisSlider)).css('left'));
	}
	valueMin(thisSlider : any) : object{
		return thisSlider.querySelector('.rangeSlider_label__min');
		//return model.rangeLeft(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__min');
	}
	valueMax(thisSlider : any) : object{
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

export class View {
	range(thisSlider : any, dataSlider : object){
		let posLeft : any, posRight : any;
	
		posRight =  ( model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) ) * (dataSlider.maxStart - dataSlider.min);//если мин не 0//model.width(thisSlider) * dataSlider.maxStart / dataSlider.max;
		model.rangeRight(thisSlider, dataSlider.idElement).style.left = posRight +'px';

		switch(dataSlider.type) {
			case 'interval' : {
				//posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
				posLeft = ( model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) ) * (dataSlider.minStart - dataSlider.min);//если мин не 0
				model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
				model.ind(thisSlider, dataSlider.idElement).style.transform = posLeft+'px';// css('transform','translate('+posLeft+'px, 0px)');
				model.ind(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
				model.ind(thisSlider, dataSlider.idElement).style.width = (posRight - posLeft)+'px';
					break;
			}
			case 'from0to' : {
				model.ind(thisSlider, dataSlider.idElement).style.transform = '-5px';// css('transform','translate(-5px, 0px)');
				model.ind(thisSlider, dataSlider.idElement).style.left = '0px';
				model.ind(thisSlider, dataSlider.idElement).style.width = posRight+'px';
				break;
			}
			case 'one' : {
				//posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
				posLeft = ( model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) ) * (dataSlider.minStart - dataSlider.min);//если мин не 0
				model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
				model.ind(thisSlider, dataSlider.idElement).style.transform = posLeft+'px';// css('transform','translate('+posLeft+'px, 0px)');
				model.ind(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
				model.ind(thisSlider, dataSlider.idElement).style.width = (posRight - posLeft)+'px';
				break;
			}
			default : {
				//posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
				posLeft = ( model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) ) * (dataSlider.minStart - dataSlider.min);//если мин не 0
				model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
					model.ind(thisSlider, dataSlider.idElement).style.transform = posLeft+'px';// css('transform','translate('+posLeft+'px, 0px)');
				model.ind(thisSlider, dataSlider.idElement).style.left = posLeft+'px';
				model.ind(thisSlider, dataSlider.idElement).style.width = (posRight - posLeft)+'px';
				break;
			}
		}
	}
			
	type(thisSlider : any, dataSlider : object){
		switch(dataSlider.type) {
			case 'interval' : break;
				model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_slider_left').style.display = 'block';
				model.ind(thisSlider, dataSlider.idElement).style.display = 'block';
				let spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');
				spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
				spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
				break;
			case 'from0to' : {
				model.rangeLeft(thisSlider, dataSlider.idElement).style.display = 'none';
				model.ind(thisSlider, dataSlider.idElement).style.transform = 'translate('+(-5)+'px, 0px)';
				let spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');
				//spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
				//spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
				break;
			}
			case 'one' : {
				model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_slider_left').style.display = 'none';
				model.ind(thisSlider, dataSlider.idElement).style.display = 'none';
				let spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');
				spans.querySelector('span.rangeSlider_label__min').style.display = 'none';
				spans.querySelector('span.rangeSlider_label__dash').style.display = 'none';
				break;
			}
			default : break;
		}
	}

	scale(thisSlider : any, dataSlider : object){
		switch(dataSlider.scale) {
			case 'on' : {
				let scaleKol,
				ch = dataSlider.min,
				ii, shBlock, divBlock;
				if (dataSlider.scaleStep > 0){
					scaleKol = dataSlider.scaleStep;
				}else{
					scaleKol = Math.floor(model.width(thisSlider, dataSlider.idElement)/45);
					dataSlider.scaleStep = scaleKol;
				}

				let scaleWidth = model.width(thisSlider, dataSlider.idElement)/scaleKol;
				
				for(let i = 0; i <= model.width(thisSlider, dataSlider.idElement);){
					ii = Math.floor(i);
					divBlock = `<div class="rangeSlider_slider_scale">
						<div class="rangeSlider_slider_scale_line" id="scale${ii}"></div>
						</div>`;
					model.slider(thisSlider, dataSlider.idElement).insertAdjacentHTML('beforeend', divBlock);
					shBlock = model.slider(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_slider_scale_line#scale'+ii).closest('.rangeSlider_slider_scale');
					shBlock.style.left =ii+'px';
					model.sliderBlock(thisSlider, dataSlider.idElement).style.marginBottom = '35px';
					i = i + scaleWidth;
					shBlock.insertAdjacentHTML('beforeend', 
								'<div class="rangeSlider_slider_scale_val">'+Math.floor(ch)+'</div>');
					ch = ch + (dataSlider.max-dataSlider.min)/scaleKol;
				}
				break;
			}
			case 'off' : break;
			default : break;
		}		
	}

	orientation(thisSlider : any, dataSlider : object){
		switch(dataSlider.orientation) {
			case 'horizontal': {
				model.slider(thisSlider, dataSlider.idElement).style.transform = 'rotate(0deg)';
				model.sliderBlock(thisSlider, dataSlider.idElement).style.height = '53px';
				break;
			}
			case 'vertical': {
				model.slider(thisSlider, dataSlider.idElement).style.transform = 'rotate(90deg) translateX(50%)';
				model.sliderBlock(thisSlider, dataSlider.idElement).style.height = model.width(thisSlider, dataSlider.idElement)+75+'px';
				
				let vals = model.slider(thisSlider, dataSlider.idElement).querySelectorAll('.rangeSlider_slider_scale_val');
				for (let i = 0; i < vals.length; i++){
					vals[i].style.transform = 'rotate(-90deg)';
				}
				break;
			}
			default : {
				model.slider(thisSlider, dataSlider.idElement).style.transform = 'rotate(0deg)';
				model.sliderBlock(thisSlider, dataSlider.idElement).style.height = '53px';
				break;
			}
		}
	}

	value(thisSlider : any, dataSlider : object){
		switch(dataSlider.value) {
			case 'on' : {
				model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block').style.display = 'flex';
				model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__max').innerHTML = dataSlider.maxStart;
				let spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');

				switch(dataSlider.type) {
					case 'interval' : {
						model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
						spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
						spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
						console.log('type=interval', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
						break;
					}
					case 'from0to' : {
						model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.min;
						spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
						spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
						console.log('type=from0to, ', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
						break;
					}
					case 'one' : {
						model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
						spans.querySelector('span.rangeSlider_label__min').style.display = 'none';
						spans.querySelector('span.rangeSlider_label__dash').style.display = 'none';
						console.log('type=one', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
						break;
					}
					default : {//interval
						model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
						spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
						spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
						console.log('type=intervalDEFAULT', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
						break;
					}
				}
				break;
			}
			case 'off' : model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block').css('display','none'); break;
			default : break;
		}
	}
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
	/*$('.searchRoom2 .slider2').slider({
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
	}),*/
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
const view = new View();

console.log('1. model.width :',model.width(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));//.searchRoom2.slider1
console.log('2. model.sliderBlock :',model.sliderBlock(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('3. model.slider :',model.slider(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('4. model.height :',model.height(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('5. model.ind :',model.ind(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('6. model.indWidth :',model.indWidth(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('7. model.rangeLeft :',model.rangeLeft(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('8. model.posRangeLeft :',model.posRangeLeft(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('9. model.rangeRight :',model.rangeRight(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('10. model.posRangeRight :',model.posRangeRight(document.querySelector('.searchRoom2 .slider1'),sliders[0].idElement));
console.log('11. model.valueMin :',model.valueMin(document.querySelector('.searchRoom2 .slider1')));
console.log('12. model.valueMax :',model.valueMax(document.querySelector('.searchRoom2 .slider1')));

console.log('1. view.range :',view.range(document.querySelector('.searchRoom2 .slider2'),{
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
	})
);
console.log('2. view.type :',view.type(document.querySelector('.searchRoom2 .slider2'),{
		idElement : 'idPrice2',
		type : 'from0to',//'interval',//'from0to', one
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 7,
		step : 5,
		orientation : 'horizontal',//'vertical',
		value : 'on',
		scale : 'off',
		scaleStep : 10
	})
);
console.log('3. view.scale :',view.scale(document.querySelector('.searchRoom2 .slider2'),{
		idElement : 'idPrice2',
		type : 'from0to',//'interval',//'from0to', one
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 7,
		step : 5,
		orientation : 'horizontal',//'vertical',
		value : 'on',
		scale : 'on',
		scaleStep : 10
	})
);
console.log('4. view.orientation :',view.orientation(document.querySelector('.searchRoom2 .slider2'),{
		idElement : 'idPrice2',
		type : 'from0to',//'interval',//'from0to', one
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 7,
		step : 5,
		orientation : 'horizontal',//'vertical',horizontal
		value : 'on',
		scale : 'on',
		scaleStep : 10
	})
);
console.log('5. view.value :',view.value(document.querySelector('.searchRoom2 .slider2'),{
		idElement : 'idPrice2',
		type : 'from0to',//'interval',//'from0to', one
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 7,
		step : 5,
		orientation : 'horizontal',//'vertical',horizontal
		value : 'on',
		scale : 'on',
		scaleStep : 10
	})
);

