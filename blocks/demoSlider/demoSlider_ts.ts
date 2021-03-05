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
			configItemMin : string = `.sliderConf .sliderConf_block .inputText #inputTextmin`,
			configItemMax : string = `.sliderConf .sliderConf_block .inputText #inputTextmax`,
			configItemMinStart : string = `.sliderConf .sliderConf_block .inputText #inputTextminStart`,
			configItemMaxStart : string = `.sliderConf .sliderConf_block .inputText #inputTextmaxStart`,
			configItemStep : string = `.sliderConf .sliderConf_block .inputText #inputTextstep`,
			configItemScaleStep : string = `.sliderConf .sliderConf_block .inputText #inputTextscaleStep`,
			configItemRadiobtn : string = `.sliderConf .sliderConf_block .sliderConf_block_item
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

export class Controller {
	checkOrientation(dataSliderOrientation : string){
		if (dataSliderOrientation == 'horizontal') {
			return 'x';
		}
		return 'y';
	}

	
			/*movie : function (thisSlider, range, e, lr){
				let startPos = parseInt(range.css('left'));
				let indWidth = model.indWidth(thisSlider);

				switch(lr){
					case 'left' : {
						model.rangeLeft(thisSlider).css('z-index', '15');
						model.rangeRight(thisSlider).css('z-index', '10');
						break;
					}
					case 'right' : {
						model.rangeRight(thisSlider).css('z-index', '15');
						model.rangeLeft(thisSlider).css('z-index', '10');
						break;
					}
				}
				
				controller.moveAt(thisSlider, startPos, lr, e, indWidth);
			
				$(document).on('mousemove', function(e) {
			  		controller.moveAt(thisSlider, startPos, lr, e, indWidth);	
				});

				$(document).on('mouseup', function(e) {
			  		$(document).off('mousemove');
			  		$(document).off('mouseup');
				});
			},
			moveAt : function (thisSlider, startPos, lr, e, indWidth){
				let pos;

				switch(controller.checkOrientation()) {
	  				case 'x': {
	  					if (dataSlider.step == 1){
							pos = e.pageX - parseInt(model.slider(thisSlider).position().left);//позиция бегунка
							controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
						}else{//починить
							masScale = controller.masScale(thisSlider);
							
							p = e.pageX - parseInt(model.slider(thisSlider).position().left);//позиция бегунка
							console.log(`p=${p}`);

							if ($.inArray(p, masScale) != -1){
								pos = e.pageX - parseInt(model.slider(thisSlider).position().left);//позиция бегунка
								controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
							}else{
								pos = startPos;
							}
							console.log(`pos=${pos}`);
							
						}
	  					break;
	  				}
	   				case 'y': {
	   					pos = e.pageY - parseInt(model.slider(thisSlider).offset().top);
	   					controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
	   					break;
	   				}
	   				default : break;
	   			}
					
				return pos;

				
			},*/
	movingRange(thisSlider : any, dataSlider : object, lr : string, startPos : number, pos : number, indWidth : number){
		let price, step = 0;
		if ((pos >= 0) && (pos <= model.width(thisSlider, dataSlider.idElement))){
			if (lr == 'left'){							
				if ((model.posRangeRight(thisSlider, dataSlider.idElement) >= pos)&&(dataSlider.type != 'from0to')){
					step = startPos - pos;//model.posRangeLeft(thisSlider);//длина перемещения левого указателя	
					console.log('step:',indWidth, step);
					price = calc(thisSlider, dataSlider, pos);
					model.rangeLeft(thisSlider, dataSlider.idElement).style.left = pos+'px';//позиция указателей
					model.ind(thisSlider, dataSlider.idElement).style.transform = 'translate('+pos+'px, 0px)';
					startPos = pos;
					controller.writeValueMin(thisSlider, price);
					controller.configMinChange(thisSlider, dataSlider, price);
					controller.checkDataSliderMin(dataSlider, price);
					console.log('step:',indWidth, step);
					model.ind(thisSlider, dataSlider.idElement).style.width = indWidth+step+'px';
				}
			}

			if (lr == 'right'){
				if (model.posRangeLeft(thisSlider, dataSlider.idElement) <= pos){
					step = pos - startPos;//model.posRangeRight(thisSlider) - startPos;//длина перемещения правого указателя
					price = calc(thisSlider, dataSlider, pos);
					model.rangeRight(thisSlider, dataSlider.idElement).style.left = pos+'px';//позиция указателей
					controller.writeValueMax(thisSlider, price);
					controller.configMaxChange(thisSlider, dataSlider, price);
					controller.checkDataSliderMax(dataSlider, price);
					console.log('step:',indWidth, step);	
					model.ind(thisSlider, dataSlider.idElement).style.width = indWidth+step+'px';
				}
			}
		}
		function calc(thisSlider : any, dataSlider : object, pos : number) : number{
			let pr = pos / model.width(thisSlider, dataSlider.idElement),
				price = ((dataSlider.max - dataSlider.min) * pr + dataSlider.min).toFixed();
			return price;
		}
	}
	writeValueMin(thisSlider : any, val : number){
		model.valueMin(thisSlider).innerHTML = val;
	}
	writeValueMax(thisSlider : any, val : number){
		model.valueMax(thisSlider).innerHTML = val;
	}
	checkDataSliderMin(dataSlider : object, val : number){
		dataSlider.minStart = val;
	}
	checkDataSliderMax(dataSlider : object, val : number){
		dataSlider.maxStart = val;
	}
	configMinChange(thisSlider : any, dataSlider : object, val : number){
		if (val < dataSlider.min){val = dataSlider.min;}
		thisSlider.querySelector(`.sliderConf .sliderConf_block .inputText #inputTextminStart`+dataSlider.idElement.substr(-1)).value = val;
		//$(`.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart`+dataSlider.idElement.substr(-1)).val(val);
	}
	configMaxChange(thisSlider : any, dataSlider : object, val : number){
		if (val > dataSlider.max){val = dataSlider.max;}
		thisSlider.querySelector(`.sliderConf .sliderConf_block .inputText #inputTextmaxStart`+dataSlider.idElement.substr(-1)).value = val);
		//$(`.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart`+dataSlider.idElement.substr(-1)).val(val);	
	}
			
	clickSlider(thisSlider : any, dataSlider : object){
		thisSlider.querySelector('.rangeSlider_slider').onmousedown = function(e) {	
			thisSlider.querySelector('.rangeSlider_slider').onmouseup = function(e) {
		  		let pos = e.pageX - parseInt(model.slider(thisSlider, dataSlider.idElement).offsetLeft),
		  			startPos;
		  		if (dataSlider.step != 1){
			  		pos = controller.checkRangeThisStep(thisSlider, dataSlider, pos);
			  	}
		  		switch(dataSlider.type) {
	  				case 'interval' : {
	  					let posL = model.posRangeLeft(thisSlider, dataSlider.idElement),
	  						posR = model.posRangeRight(thisSlider, dataSlider.idElement);
	  					if (Math.abs(posL - pos) < Math.abs(posR - pos)) {
	  						startPos = model.posRangeLeft(thisSlider, dataSlider.idElement);
	  						controller.movingRange(thisSlider, dataSlider, 'left', model.posRangeLeft(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement));
	  					}else{
	  						startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
	  						controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement));
	  					}
	  					break;
	  				}
	   				case 'from0to' : {
	   					startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
	   					controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement));
						break;
					}
	   				case 'one' : {
	   					startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
	   					controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement));
	   					break;
	   				}
	   			}
		  		//thisSlider.querySelector('.rangeSlider_slider').offmouseup;
		  	}
		}
	}
	checkRangeThisStep(thisSlider : any, dataSlider : object, pos : number){
		let p = 0, masScale,
			len = model.width(thisSlider, dataSlider.idElement);
		masScale = controller.masScale(thisSlider, dataSlider);
  		for (let i = 0; i < masScale.length; i++){
  			let lenL = Math.abs(masScale[i] - pos),
  				lenR = Math.abs(masScale[i+1] - pos);
  			
  			if (lenL < len) {
  				p = masScale[i];
  				len = lenL;
  			}else if (lenR < len){
  				p = masScale[i+1];
  				len = lenR;
  			}
  		}
  		return p;
	}
	masScale(thisSlider : any, dataSlider : object){
		let sumSegments = (dataSlider.max - dataSlider.min) / dataSlider.step,
			w1 = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min),//одно деление
			w = w1 * dataSlider.step, //длина шага
			masScale=[];
		//console.log(`model.width=${model.width(thisSlider)}, dataSlider.min=${dataSlider.min}, dataSlider.max=${dataSlider.max}, dataSlider.step=${dataSlider.step}`);
		//console.log(`sumSegments=${sumSegments}, w1=${w1}, w=${w}, masScale=${masScale}`);
		for (let i = 0; i <= sumSegments; i++) {
			masScale[i] = parseInt(w*i);
		}
		//console.log(`masScale=${masScale}`);
		return masScale;
	}

	configCheck(thisSlider : any, dataSlider : object){
		//thisSlider.querySelector('.sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
		thisSlider.querySelector('.sliderConf .checkbox .checkbox_item .checkbox_item_input').onclick = function(e) {
			console.log('numSlider:', this);

			if (this.checked == true){
				console.log(thisSlider.querySelector('.sliderConf .sliderConf_block'));
				thisSlider.querySelector('.sliderConf .sliderConf_block').style.display = 'block';
			}else{
				thisSlider.querySelector('.sliderConf .sliderConf_block').style.display = 'none';
			}

			let inputS = thisSlider.getElementsByClassName('inputText_input');
			for(var i = 0; i < inputS.length; i++) {
				inputS[i].onblur = function (){
					let //num = $(this).closest('.searchRoom_filters_diapason').find('.rangeSlider').attr('id').substr(-1),
						idStr = this.id,
						//sliObj = s[num-1],
						id = dataSlider.idElement.substr(-1),
						min,
						max,
						minStart,
						maxStart,
						step,
						scaleStep;

					console.log(idStr, id, idStr.indexOf('max',0));

					if (idStr.indexOf('min',0) != -1){
						min = Number.parseInt(thisSlider.querySelector(model.configItemMin+id).value);//Number.parseInt(model.configItemMin+id.value);
						clear(thisSlider, id);
						dataSlider.min = min;
					}
					if (idStr.indexOf('max',0) != -1){
						console.log('max');
						max = Number.parseInt(thisSlider.querySelector(model.configItemMax+id).value);
						clear(thisSlider, id);
						dataSlider.max = max;
					}
					if (idStr.indexOf('minStart',0) != -1){
						console.log('minStart');
						minStart = Number.parseInt(thisSlider.querySelector(model.configItemMinStart+id).value);
						clear(thisSlider, id);
						dataSlider.minStart = minStart;
					}
					if (idStr.indexOf('maxStart',0) != -1){
						console.log('maxStart');
						maxStart = Number.parseInt(thisSlider.querySelector(model.configItemMaxStart+id).value);
						clear(thisSlider, id);
						dataSlider.maxStart = maxStart;
					}
					if (idStr.indexOf('scaleStep',0) != -1){
						console.log('scaleStep');
						scaleStep = Number.parseInt(thisSlider.querySelector(model.configItemScaleStep+id).value);
						clear(thisSlider, id);
						dataSlider.scaleStep = scaleStep;
						$('.searchRoom2 .slider'+id).slider(dataSlider);
					}
					if (idStr.indexOf('step',0) != -1){
						console.log('step');
						step = Number.parseInt(thisSlider.querySelector(model.configItemStep+id).value);
						clear(thisSlider, id);
						dataSlider.step = step;
					}
					controller.checkMinMaxStart(thisSlider);
					//return dataSlider;
					$('.searchRoom2 .slider'+id).slider(dataSlider);
				}
			}

			let radioS = thisSlider.getElementsByClassName('radio_input');
			for(var i = 0; i < radioS.length; i++) {
				radioS[i].onclick = function (){
					let id = dataSlider.idElement.substr(-1);

					let configItemType = model.configItemRadiobtn+`.radio_input[name=rbGroopType${id}]:checked`,
						configItemOrientation = model.configItemRadiobtn+`.radio_input[name=rbGroopOrientation${id}]:checked`,
						configItemValue = model.configItemRadiobtn+`.radio_input[name=rbGroopValue${id}]:checked`,
						configItemScale = model.configItemRadiobtn+`.radio_input[name=rbGroopScale${id}]:checked`;

					let	idStr = this.name,
						type, orientation, value, scale,
						typeId, orientationID, valueID, scaleID;

					if (idStr.indexOf('Type',0) != -1){
						typeId = thisSlider.querySelector(configItemType).id.substr(2,1);

						switch(typeId) {
			  				case '1': type = 'interval'; break;
			   				case '2': {
			   					type = 'from0to'; 
			   					dataSlider.minStart = dataSlider.min;
			   					break;
			   				}
			   				case '3': type = 'one'; break;
			   				default : type = 'interval';
			   			}
						clear(thisSlider, id);
						dataSlider.type = type;
					}
					if (idStr.indexOf('Orientation',0) != -1){
						orientationID = thisSlider.querySelector(configItemOrientation).attr('id').substr(2,1);

						switch(orientationID) {
			  				case '1': orientation = 'horizontal'; break;
			   				case '2': orientation = 'vertical'; break;
			   				default : orientation = 'horizontal';
			   			}
						clear(thisSlider, id);
						dataSlider.orientation = orientation;
					}
					if (idStr.indexOf('Value',0) != -1){
						valueID = thisSlider.querySelector(configItemValue).attr('id').substr(2,1);

						switch(valueID) {
			  				case '1': value = 'on'; break;
			   				case '2': value = 'off'; break;
			   				default : value = 'on';
			   			}
						clear(thisSlider, id);
						dataSlider.value = value;
					}
					if (idStr.indexOf('Scale',0) != -1){
						scaleID = thisSlider.querySelector(configItemScale).attr('id').substr(2,1);

						switch(scaleID) {
			  				case '1': scale = 'on'; break;
			   				case '2': scale = 'off'; break;
			   				default : scale = 'on';
			   			}
						clear(thisSlider, id);
						dataSlider.scale = scale;
					}
				
					$('.searchRoom2 .slider'+id).slider(dataSlider);
				}
			};
			
		});	

		function clear(thisSlider : any, id : number){
			let x = thisSlider.querySelectorAll('.rangeSlider#idPrice'+id+' .rangeSlider_slider .rangeSlider_slider_scale');
			for (let i=0; i<x.length; i++){
				x[i].remove();
			}	

			thisSlider.querySelector('.rangeSlider#idPrice'+id+' .rangeSlider_slider_left').style.display = 'inline-block';
			thisSlider.querySelector('.rangeSlider#idPrice'+id+' .rangeSlider_slider_range').style.display = 'inline-block';
		}
	}

	checkMinMaxStart(dataSlider : object): void{
		if (dataSlider.minStart < dataSlider.min){dataSlider.minStart = dataSlider.min;}
		if (dataSlider.maxStart > dataSlider.max){dataSlider.maxStart = dataSlider.max;}
		if (dataSlider.minStart > dataSlider.max){dataSlider.minStart = dataSlider.max;}
		if (dataSlider.maxStart < dataSlider.min){dataSlider.maxStart = dataSlider.min;}
	}
	configCheckStart(thisSlider : any, dataSlider : object){
		model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
		model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__max').innerHTML = dataSlider.maxStart;

		let typeID, orientationID, valueID, scaleID,
			id = dataSlider.idElement.substr(-1);

		thisSlider.querySelector(model.configItemMin+id).value = dataSlider.min;
		thisSlider.querySelector(model.configItemMax+id).value = dataSlider.max;
		thisSlider.querySelector(model.configItemMinStart+id).value = dataSlider.minStart;
		thisSlider.querySelector(model.configItemMaxStart+id).value = dataSlider.maxStart;
		thisSlider.querySelector(model.configItemStep +id).value = dataSlider.step;
		thisSlider.querySelector(model.configItemScaleStep +id).value = dataSlider.scaleStep;

		switch(dataSlider.type) {
			case 'interval'	: typeID = '1'; break;
			case 'from0to'	: typeID = '2'; break;
			case 'one'		: typeID = '3'; break;
			default 		: typeID = '1';
		}
		switch(dataSlider.orientation) {
			case 'horizontal': orientationID = '1'; break;
			case 'vertical': orientationID = '2'; break;
			default : orientationID = '1';
		}
		switch(dataSlider.value) {
			case 'on': valueID = '1'; break;
			case 'off': valueID = '2'; break;
			default : valueID = '1';
		}

		switch(dataSlider.scale) {
			case 'on': scaleID = '1'; break;
			case 'off': scaleID = '2'; break;
			default : scaleID = '1';
		}
			
		thisSlider.querySelector(`.radio_input[name=rbGroopType${id}]#rb${typeID}srb${id}`).checked = true;
		thisSlider.querySelector(`.radio_input[name=rbGroopOrientation${id}]#rb${orientationID}orient${id}`).checked = true;
		thisSlider.querySelector(`.radio_input[name=rbGroopValue${id}]#rb${valueID}value${id}`).checked = true;
		thisSlider.querySelector(`.radio_input[name=rbGroopScale${id}]#rb${scaleID}scale${id}`).checked = true;
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
		type : 'from0to',
		min : 0,
		max : 1000,
		minStart : 150,
		maxStart : 1000,
		step : 1,
		orientation : 'horizontal',
		value : 'on',
		scale : 'on',
		scaleStep : 10
	}) ];


console.log(sliders);

const model = new Model();
console.log('1. model.width см сладер '+sliders[0].idElement+' :\t\t\t',
	model.width(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('2. model.sliderBlock см сладер '+sliders[0].idElement+' :\t',
	model.sliderBlock(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('3. model.slider см сладер '+sliders[0].idElement+' :\t\t',
	model.slider(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('4. model.height см сладер '+sliders[0].idElement+' :\t\t',
	model.height(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('5. model.ind см сладер '+sliders[0].idElement+' :\t\t',
	model.ind(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('6. model.indWidth см сладер '+sliders[0].idElement+' :\t\t',
	model.indWidth(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('7. model.rangeLeft см сладер '+sliders[0].idElement+' :\t',
	model.rangeLeft(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('8. model.posRangeLeft см сладер '+sliders[0].idElement+' :\t',
	model.posRangeLeft(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('9. model.rangeRight см сладер '+sliders[0].idElement+' :',
	model.rangeRight(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('10. model.posRangeRight см сладер '+sliders[0].idElement+' :',
	model.posRangeRight(document.querySelector('.searchRoom2 .slider1'), sliders[0].idElement));
console.log('11. model.valueMin см сладер '+sliders[0].idElement+' :\t',
	model.valueMin(document.querySelector('.searchRoom2 .slider1')));
console.log('12. model.valueMax см сладер '+sliders[0].idElement+' :\t',
	model.valueMax(document.querySelector('.searchRoom2 .slider1')));

console.log('-------------------------------------------');

const view = new View();
console.log('1. view.range, см слайдер idPrice2 :\t\t', view.range(document.querySelector('.searchRoom2 .slider2'),{
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
console.log('2. view.type, см слайдер idPrice2 :\t\t\t', view.type(document.querySelector('.searchRoom2 .slider2'),{
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
console.log('3. view.scale, см слайдер idPrice2 :\t\t', view.scale(document.querySelector('.searchRoom2 .slider2'),{
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
console.log('4. view.orientation, см слайдер idPrice2 :\t', view.orientation(document.querySelector('.searchRoom2 .slider2'),{
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
console.log('5. view.value, см слайдер idPrice2 :\t\t', view.value(document.querySelector('.searchRoom2 .slider2'),{
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

console.log('-------------------------------------------');

const controller = new Controller();
console.log('1. controller.checkOrientation, см слайдер '+sliders[0].idElement+' :\t', 
	controller.checkOrientation(sliders[0].orientation));
console.log('2.1. controller.movingRange, см слайдер '+sliders[0].idElement+' :\t\t', 
	controller.movingRange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 'left', 0, 30, 2000));
console.log('2.2. controller.movingRange, см слайдер '+sliders[0].idElement+' :\t\t', 
	controller.movingRange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 'right', 270, 250, 240));
console.log('3. controller.clickSlider '+sliders[3].idElement+' :\t\t\t\t\t', 
	controller.clickSlider(document.querySelector('.searchRoom2 .slider5'), sliders[3]));
console.log('4. controller.masScale, см слайдер '+sliders[0].idElement+' :\t\t\t', 
	controller.masScale(document.querySelector('.searchRoom2 .slider1'), sliders[0]));
console.log('5. controller.checkRangeThisStep, см слайдер '+sliders[0].idElement+' :\t', 
	controller.checkRangeThisStep(document.querySelector('.searchRoom2 .slider1'), sliders[0], 300));
console.log('6.1. controller.checkDataSliderMin '+sliders[1].idElement+' :\t\t\t', 
	controller.checkDataSliderMin(sliders[1], 123), sliders[1]);
console.log('6.2. controller.checkDataSliderMax '+sliders[1].idElement+' :\t\t\t', 
	controller.checkDataSliderMax(sliders[1], 456), sliders[1]);
console.log('7.1. controller.configMinChange, см слайдер '+sliders[0].idElement+' :\t', 
	controller.configMinChange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 2));
console.log('7.2. controller.configMaxChange '+sliders[0].idElement+' :\t\t\t\t', 
	controller.configMaxChange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 3000));

let obj = {
	idElement : 'idPrice2',
	min : 0,
	max : 10,
	minStart : -15,
	maxStart : -17,
}
console.log('8. controller.checkMinMaxStart :\t\t\t\t\t\t', controller.checkMinMaxStart(obj), obj);
console.log('9. controller.configCheckStart, см слайдер '+sliders[3].idElement+' :\t', controller.configCheckStart(document.querySelector('.searchRoom2 .slider5'), sliders[3]));
console.log('10. controller.configCheck, см слайдер '+sliders[3].idElement+' :\t\t', controller.configCheck(document.querySelector('.searchRoom2 .slider5'), sliders[3]));
	

