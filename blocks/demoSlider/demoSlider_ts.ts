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
					////controller.configMinChange(price);
					////controller.checkDataSliderMin(price);
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
					////controller.configMaxChange(price);
					////controller.checkDataSliderMax(price);
					console.log('step:',indWidth, step);	
					model.ind(thisSlider, dataSlider.idElement).style.width = indWidth+step+'px';
				}
			}
		}
		function calc(thisSlider, dataSlider, pos){
			let pr = pos / model.width(thisSlider, dataSlider.idElement),
				price = ((dataSlider.max - dataSlider.min) * pr + dataSlider.min).toFixed();
			return price;
		}
	},
			

			/*clickSlider : function (thisSlider){
				thisSlider.find('.rangeSlider_slider').on('mousedown', function(e) {
				
					thisSlider.find('.rangeSlider_slider').on('mouseup', function(e) {
						console.log('clickkkkk');
				  		let pos = e.pageX - parseInt(model.slider(thisSlider).position().left),
				  			startPos;

				  		if (dataSlider.step != 1){
					  		pos = controller.checkRangeThisStep(thisSlider, pos);
					  	}

				  		switch(dataSlider.type) {
			  				case 'interval' : {
			  					let posL = model.posRangeLeft(thisSlider),
			  						posR = model.posRangeRight(thisSlider);
			  					if (Math.abs(posL - pos) < Math.abs(posR - pos)) {
			  						startPos = model.posRangeLeft(thisSlider);
			  						controller.movingRange(thisSlider, 'left', model.posRangeLeft(thisSlider), pos, model.indWidth(thisSlider));
			  					}else{
			  						startPos = model.posRangeRight(thisSlider);
			  						controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
			  					}
			  					
			  					break;
			  				}
			   				case 'from0to' : {
			   					startPos = model.posRangeRight(thisSlider);
			   					controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
								break;
							}
			   				case 'one' : {
			   					startPos = model.posRangeRight(thisSlider);
			   					controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
			   					break;
			   				}
			   				
			   			}

				  		//controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
				  		thisSlider.find('.rangeSlider_slider').off('mouseup');
				  	});
				});
			},
			checkRangeThisStep : function (thisSlider, pos){
				let p=0, len = model.width(thisSlider);

				masScale = controller.masScale(thisSlider);
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
			},
			masScale : function (thisSlider){
				let sumSegments = (dataSlider.max - dataSlider.min) / dataSlider.step,
					w1 = model.width(thisSlider) / (dataSlider.max - dataSlider.min),//одно деление
					w = w1 * dataSlider.step, //длина шага
					masScale=[];
				//console.log(`model.width=${model.width(thisSlider)}, dataSlider.min=${dataSlider.min}, dataSlider.max=${dataSlider.max}, dataSlider.step=${dataSlider.step}`);
				//console.log(`sumSegments=${sumSegments}, w1=${w1}, w=${w}, masScale=${masScale}`);
				for (let i = 0; i <= sumSegments; i++) {
					masScale[i] = parseInt(w*i);
				}
				//console.log(`masScale=${masScale}`);
				
				return masScale;
			},*/

	writeValueMin(thisSlider, val){
		model.valueMin(thisSlider).innerHTML = val;
	}
	writeValueMax(thisSlider, val){
		model.valueMax(thisSlider).innerHTML = val;
	}

			/*checkDataSliderMin : function (val){
				dataSlider.minStart = val;
			},
			checkDataSliderMax : function (val){
				dataSlider.maxStart = val;
			},

			checkMinMaxStart : function (){
				if (dataSlider.minStart < dataSlider.min){dataSlider.minStart = dataSlider.min;}
				if (dataSlider.maxStart > dataSlider.max){dataSlider.maxStart = dataSlider.max;}
				if (dataSlider.minStart > dataSlider.max){dataSlider.minStart = dataSlider.max;}
				if (dataSlider.maxStart < dataSlider.min){dataSlider.maxStart = dataSlider.min;}
			},

			configCheckStart : function (thisSlider){
				model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.minStart);
				model.sliderBlock(thisSlider).find('.rangeSlider_label__max').html(dataSlider.maxStart);

				let typeID, orientationID, valueID, scaleID,
					id = dataSlider.idElement.substr(-1);

					$(model.configItemMin+id).val(dataSlider.min);
					$(model.configItemMax+id).val(dataSlider.max);
					$(model.configItemMinStart+id).val(dataSlider.minStart);
					$(model.configItemMaxStart+id).val(dataSlider.maxStart);
					$(model.configItemStep +id).val(dataSlider.step);
					$(model.configItemScaleStep +id).val(dataSlider.scaleStep);

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
		   			
					/*$(model.configItemRadiobtn+`.radio_input[name=rbGroopType${id}]#rb${typeID}srb${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopOrientation${id}]#rb${orientationID}orient${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopValue${id}]#rb${valueID}value${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopScale${id}]#rb${scaleID}scale${id}`).prop('checked', true);*/
	/*				thisSlider.find(`.radio_input[name=rbGroopType${id}]#rb${typeID}srb${id}`).prop('checked', true);
					thisSlider.find(`.radio_input[name=rbGroopOrientation${id}]#rb${orientationID}orient${id}`).prop('checked', true);
					thisSlider.find(`.radio_input[name=rbGroopValue${id}]#rb${valueID}value${id}`).prop('checked', true);
					thisSlider.find(`.radio_input[name=rbGroopScale${id}]#rb${scaleID}scale${id}`).prop('checked', true);
			},
			configMinChange : function (val){
				if (val < dataSlider.min){val = dataSlider.min;}
				$(`.searchRoom2 .sliderConf .sliderConf_block 
					.inputText #inputTextminStart`+dataSlider.idElement.substr(-1)).val(val);
			},
			configMaxChange : function (val){
				if (val > dataSlider.max){val = dataSlider.max;}
				$(`.searchRoom2 .sliderConf .sliderConf_block 
					.inputText #inputTextmaxStart`+dataSlider.idElement.substr(-1)).val(val);	
			},

			configCheck : function (thisSlider){
				//console.log('this', thisSlider, dataSlider);
				//$('.searchRoom2 .sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
				thisSlider.find('.sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
					console.log('numSlider:', $(this).attr('id').substr(-1));

					if ($(this).prop('checked')){
						$(this).closest('.sliderConf').find('.sliderConf_block').css('display','block');
					}else{
						$(this).closest('.sliderConf').find('.sliderConf_block').css('display','none');
					}


					//$('.searchRoom2 .sliderConf .sliderConf_block .inputText_input').on('blur', function(e) {
					thisSlider.find('.sliderConf .sliderConf_block .inputText_input').on('blur', function(e) {
						
						let //num = $(this).closest('.searchRoom_filters_diapason').find('.rangeSlider').attr('id').substr(-1),
							idStr = $(this).attr('id'),
							//sliObj = s[num-1],
							id = dataSlider.idElement.substr(-1),
							min,
							max,
							minStart,
							maxStart,
							step,
							scaleStep;

						if (idStr.indexOf('min',0) != -1){
							min = Number.parseInt($(model.configItemMin+id).val());
							clear(id);
							dataSlider.min = min;
						}
						if (idStr.indexOf('max',0) != -1){
							max = Number.parseInt($(model.configItemMax+id).val());
							clear(id);
							dataSlider.max = max;
						}
						if (idStr.indexOf('minStart',0) != -1){
							minStart = Number.parseInt($(model.configItemMinStart+id).val());
							clear(id);
							dataSlider.minStart = minStart;
						}
						if (idStr.indexOf('maxStart',0) != -1){
							maxStart = Number.parseInt($(model.configItemMaxStart+id).val());
							clear(id);
							dataSlider.maxStart = maxStart;
						}
						if (idStr.indexOf('scaleStep',0) != -1){
							scaleStep = Number.parseInt($(model.configItemScaleStep+id).val());
							clear(id);
							dataSlider.scaleStep = scaleStep;
							$('.searchRoom2 .slider'+id).slider(dataSlider);
						}
						if (idStr.indexOf('step',0) != -1){
							step = Number.parseInt($(model.configItemStep+id).val());
							clear(id);
							dataSlider.step = step;
						}
						controller.checkMinMaxStart(thisSlider);
						$('.searchRoom2 .slider'+id).slider(dataSlider);
					});

					//$('.searchRoom2 .sliderConf .sliderConf_block .radio_input').on('click', function(e) {
					thisSlider.find('.sliderConf .sliderConf_block .radio_input').on('click', function(e) {
						let id = dataSlider.idElement.substr(-1);

						let configItemType = model.configItemRadiobtn+`.radio_input[name=rbGroopType${id}]:checked`,
							configItemOrientation = model.configItemRadiobtn+`.radio_input[name=rbGroopOrientation${id}]:checked`,
							configItemValue = model.configItemRadiobtn+`.radio_input[name=rbGroopValue${id}]:checked`,
							configItemScale = model.configItemRadiobtn+`.radio_input[name=rbGroopScale${id}]:checked`;

						let	idStr = $(this).attr('name'),
							type, orientation, value, scale,
							typeId, orientationID, valueID, scaleID;

						if (idStr.indexOf('Type',0) != -1){
							typeId = $(configItemType).attr('id').substr(2,1);

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
							clear(id);
							dataSlider.type = type;
						}
						if (idStr.indexOf('Orientation',0) != -1){
							orientationID = $(configItemOrientation).attr('id').substr(2,1);

							switch(orientationID) {
				  				case '1': orientation = 'horizontal'; break;
				   				case '2': orientation = 'vertical'; break;
				   				default : orientation = 'horizontal';
				   			}
							clear(id);
							dataSlider.orientation = orientation;
						}
						if (idStr.indexOf('Value',0) != -1){
							valueID = $(configItemValue).attr('id').substr(2,1);

							switch(valueID) {
				  				case '1': value = 'on'; break;
				   				case '2': value = 'off'; break;
				   				default : value = 'on';
				   			}
							clear(id);
							dataSlider.value = value;
						}
						if (idStr.indexOf('Scale',0) != -1){
							scaleID = $(configItemScale).attr('id').substr(2,1);

							switch(scaleID) {
				  				case '1': scale = 'on'; break;
				   				case '2': scale = 'off'; break;
				   				default : scale = 'on';
				   			}
							clear(id);
							dataSlider.scale = scale;
						}
						//$('.searchRoom2 .slider'+id).slider(dataSlider);
						thisSlider.slider(dataSlider);
					});
					
				});	

				function clear(id){
					let x = $('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider .rangeSlider_slider_scale')
					x.remove();

					$('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider_left').css('display','inline-block');
					$('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider_range').css('display','inline-block');

				}
			},
			

		}*/
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

const view = new View();
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

const controller = new Controller();
console.log('1. controller.checkOrientation :', controller.checkOrientation(sliders[0].orientation));
console.log('2.1. controller.movingRange :', controller.movingRange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 'left', 0, 30, 2000));
console.log('2.2. controller.movingRange :', controller.movingRange(document.querySelector('.searchRoom2 .slider1'), sliders[0], 'right', 270, 250, 240));