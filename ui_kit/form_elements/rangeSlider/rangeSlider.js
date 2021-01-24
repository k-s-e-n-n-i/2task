//import {exp1} from '/blocks/demoSlider/sliderM.js'
//import {exp2} from '/blocks/demoSlider/sliderV.js'
//import {exp3} from '/blocks/demoSlider/sliderC.js'


(function( $ ) {
	$.fn.slider = function(options) {

		/** Как настроить слайдер
		  	let obj = { //объект с параметрами слайдера
				idElement : 'idPrice', //задается id элемента, который должен являться слайдером
				type : 'interval', //три типа: 'interval' (выбирается диапазон), 'from0to' (от 0 до выбранного), 'one' (вибирается одно значение)
				min : 0, //задается числовой минимум
				max : 500000, //задается числовой максимум
				minStart : 50, //непонятно зачем
				maxStart : 100, //непонятно зачем
				step : 'no', //задается числовой шаг, либо значение 'no' (нет шага)
				orientation : 'horizontal', //два типа: 'horizontal', 'vertical'
				value : 'on', // отображать числовой диапазон над слайдером - 'on', не отображать - 'off'
				scale : 'on', // отображать шкалу - 'on', не отображать - 'off'
				scaleStep : 10 // задается числовое количество делений на шкале, либо значение 'default'
		 	}
		 	run(obj); //запуск слайдера с заданными параметрами в объекте

		 	//при type : 'one' нет минимального значения, работает по максимальному
		 */

			
		let dataSlider = $.extend({//в blocks/searchRoom/searchRoom.pug //значения по умолчанию //model
			idElement : 'idPrice',
			type : 'interval',
			min : 0,
			max : 1000,
			minStart : 150,
			maxStart : 5000,
			step : 1,//шаг
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 10//деления
		}, options);
		

		let model = {
			width : function (){
				return $('.rangeSlider#'+dataSlider.idElement).find('.rangeSlider_slider').width();
			},
			sliderBlock : function (){ 
				return $('.rangeSlider#'+dataSlider.idElement);
			},
			slider : function (){ 
				return model.sliderBlock().find('.rangeSlider_slider');
			},
			ind : function (){ 
				return model.slider().find('.rangeSlider_slider_range');//"индикатор"
			},
			indWidth : function (){
				return model.ind().width();
			},
			rangeLeft : function (){ 
				return model.slider().find('.rangeSlider_slider_left');
			},
			posRangeLeft : function (){
				return parseInt((model.rangeLeft()).css('left'));
			},
			rangeRight : function (){ 
				return model.slider().find('.rangeSlider_slider_right');
			},
			posRangeRight : function (){
				return parseInt((model.rangeRight()).css('left'));
			},
			valueMin : function (){
				return model.rangeLeft().closest('.rangeSlider').find('.rangeSlider_label__min');
			},
			valueMax : function (){
				return model.rangeRight().closest('.rangeSlider').find('.rangeSlider_label__max');
			},
			configItemMin : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin`,
			configItemMax : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax`,
			configItemMinStart : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart`,
			configItemMaxStart : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart`,
			configItemStep : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextstep`,
			configItemScaleStep : `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep`,
			configItemRadiobtn : `.searchRoom2 .sliderConf .sliderConf_block .sliderConf_block_item
						.sliderConf_block_item_option .radio `,
			
		}

		let view = {
			range : function (){
				let posLeft, posRight;

				posRight = model.width() * dataSlider.maxStart / dataSlider.max;
				model.rangeRight().css('left', posRight +'px');

				switch(dataSlider.type) {
	  				case 'interval' : {
	  					posLeft = model.width() * dataSlider.minStart / dataSlider.max;
						model.rangeLeft().css('left', posLeft +'px');
	  					model.ind().css('transform','translate('+posLeft+'px, 0px)');
						model.ind().css('left', posLeft+'px');
						model.ind().css('width',(posRight - posLeft)+'px');
	  					break;
	  				}
	   				case 'from0to' : {
	   					model.ind().css('transform','translate(-5px, 0px)');
						model.ind().css('left', '0px');
						model.ind().css('width',posRight+'px');
						break;
					}
	   				case 'one' : {
	   					posLeft = model.width() * dataSlider.minStart / dataSlider.max;
						model.rangeLeft().css('left', posLeft +'px');
	   					model.ind().css('transform','translate('+posLeft+'px, 0px)');
						model.ind().css('left', posLeft+'px');
						model.ind().css('width',(posRight - posLeft)+'px');
	   					break;
	   				}
	   				default : {
	   					posLeft = model.width() * dataSlider.minStart / dataSlider.max;
						model.rangeLeft().css('left', posLeft +'px');
	  					model.ind().css('transform','translate('+posLeft+'px, 0px)');
						model.ind().css('left', posLeft+'px');
						model.ind().css('width',(posRight - posLeft)+'px');
	   					break;
	   				}
	   			}
			},
			
			type : function (){
				switch(dataSlider.type) {
	  				case 'interval' : break;
	   				case 'from0to' : {
	   					model.rangeLeft().css('display','none');
						model.ind().css('transform','translate('+(-5)+'px, 0px)');
						//dataSlider.minStart = dataSlider.min;
						//model.rangeLeft().css('transform','translate(0px, 0px)');
						//controller.writeValueMin(dataSlider.min);
						break;
					}
	   				case 'one' : {
	   					model.sliderBlock().find('.rangeSlider_slider_left').css('display','none');
						model.ind().css('display','none');
						let spans = model.sliderBlock().find('.rangeSlider_label_Block');
						spans.find('span.rangeSlider_label__min').css('display','none');
						spans.find('span.rangeSlider_label__dash').css('display','none');
	   					break;
	   				}
	   				default : break;
	   			}
	   		},
	   		scale : function (){
	   			switch(dataSlider.scale) {
	  				case 'on' : {
	  					let scaleKol,
							ch = dataSlider.min,
							ii, shBlock;
						if (dataSlider.scaleStep > 0){
							scaleKol = dataSlider.scaleStep;
						}else{
							scaleKol = Math.floor(model.width()/45);
						}

						let scaleWidth = model.width()/scaleKol;
						
						for(let i=0;i<=model.width();){
							ii = Math.floor(i);
							model.slider().append(`<div class="rangeSlider_slider_scale">
								<div class="rangeSlider_slider_scale_line" id="scale${ii}"></div>
								<div class="rangeSlider_slider_scale_val"></div>
								</div>`);
							shBlock = model.slider().find('.rangeSlider_slider_scale_line#scale'+ii).closest('.rangeSlider_slider_scale');
							shBlock.css('left',ii+'px');
							model.sliderBlock().css('margin-bottom','35px');
							i = i+scaleWidth;

							shBlock.find('.rangeSlider_slider_scale_val').html(ch);
							ch = ch + Math.floor((dataSlider.max-dataSlider.min)/scaleKol);
						}
	  					break;
	  				}
	   				case 'off' : break;
	   				default : break;
	   			}		
			},
			orientation : function (){
				switch(dataSlider.orientation) {
	  				case 'horizontal': break;
	   				case 'vertical': model.slider().css('transform','rotate(90deg)'); break;
	   				default : break;
	   			}
			},
			value : function (){
				switch(dataSlider.value) {
	  				case 'on' : {
	  					model.sliderBlock().find('.rangeSlider_label_Block').css('display','flex');
						
						model.sliderBlock().find('.rangeSlider_label__max').html(dataSlider.maxStart);

						let spans = model.sliderBlock().find('.rangeSlider_label_Block');


	  					switch(dataSlider.type) {
			  				case 'interval' : {
			  					model.sliderBlock().find('.rangeSlider_label__min').html(dataSlider.minStart);
			  					spans.find('span.rangeSlider_label__min').css('display','block');
								spans.find('span.rangeSlider_label__dash').css('display','block');
								console.log('type=interval', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
			  					break;
			  				}
			   				case 'from0to' : {
			   					model.sliderBlock().find('.rangeSlider_label__min').html(dataSlider.min);
			   					spans.find('span.rangeSlider_label__min').css('display','block');
								spans.find('span.rangeSlider_label__dash').css('display','block');
								console.log('type=from0to, ', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
								break;
							}
			   				case 'one' : {
			   					model.sliderBlock().find('.rangeSlider_label__min').html(dataSlider.minStart);
			   					spans.find('span.rangeSlider_label__min').css('display','none');
								spans.find('span.rangeSlider_label__dash').css('display','none');
								console.log('type=one', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
			   					break;
			   				}
			   				default : {//interval
			  					model.sliderBlock().find('.rangeSlider_label__min').html(dataSlider.minStart);
			  					spans.find('span.rangeSlider_label__min').css('display','block');
								spans.find('span.rangeSlider_label__dash').css('display','block');
								console.log('type=intervalDEFAULT', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
			  					break;
			  				}
			   			}
	  					break;
	  				}
	   				case 'off' : model.sliderBlock().find('.rangeSlider_label_Block').css('display','none'); break;
	   				default : break;
	   			}
			},
		}


		let controller = {
			checkOrientation : function (){
				if (dataSlider.orientation == 'horizontal') {
					return 'x';
				}
				return 'y';
			},
			movie : function (range, e, lr){
				let startPos = parseInt(range.css('left'));
				let indWidth = model.indWidth();

				controller.moveAt(startPos, lr, e, indWidth);	
			
				$(document).on('mousemove', function(e) {
			  		//console.log('e=',e);
			  		controller.moveAt(startPos, lr, e, indWidth);	
				});

				$(document).on('mouseup', function(e) {
			  		$(document).off('mousemove');
			  		$(document).off('mouseup');
				});
			},
			moveAt : function (startPos, lr, e, indWidth){
				let pos;

				switch(controller.checkOrientation()) {
	  				case 'x': {
	  					if (dataSlider.step == 1){
							pos = e.pageX - parseInt(model.slider().position().left);//позиция бегунка
							movingRange(lr, startPos, pos, indWidth);
						}else{
							let sumSegments = (dataSlider.max - dataSlider.min) / dataSlider.step,
								w1 = model.width / (dataSlider.max - dataSlider.min),//одно деление
								w = w1 * dataSlider.step, //длина шага
								masScale=[];
							for (var i = 0; i <= sumSegments; i++) {
								masScale[i] = parseInt(w*i);
							}
						
							p = e.pageX - parseInt(model.slider().position().left);//позиция бегунка
							if ($.inArray(p, masScale) != -1){
								pos = e.pageX - parseInt(model.slider().position().left);//позиция бегунка
							}else{
								pos = startPos;
							}
						}
	  					break;
	  				}
	   				case 'y': {
	   					pos = e.pageY - parseInt(slider.position().top) - 93;//? подобрано число, пока не поняла что это
	   					break;
	   				}
	   				default : break;
	   			}
					
				return pos;

				function movingRange(lr, startPos, pos, indWidth){
					let price, step=0;
					if ((pos >= 0) && (pos <= model.width())){
						if (lr == 'left'){							
							if ((model.posRangeRight() >= pos)&&(dataSlider.type != 'from0to')){
								step = startPos - model.posRangeLeft();//длина перемещения левого указателя	
								price = calc(pos);
								model.rangeLeft().css('left', pos+'px');//позиция указателей
								model.ind().css('transform','translate('+pos+'px, 0px)');
								startPos = pos;
								controller.writeValueMin(price);
								controller.configMinChange(price);
								controller.checkDataSliderMin(price);
							}
						}

						if (lr == 'right'){
							if (model.posRangeLeft() <= pos){
								step = model.posRangeRight() - startPos;//длина перемещения правого указателя
								price = calc(pos);
								model.rangeRight().css('left', pos+'px');//позиция указателей
								controller.writeValueMax(price);
								controller.configMaxChange(price);
								controller.checkDataSliderMax(price);
							}
						}
						model.ind().css('width', indWidth+step+'px');//ширина индикатора
					}
				}
				function calc(pos){
					let pr = pos / model.width(),
						price = ((dataSlider.max - dataSlider.min) * pr + dataSlider.min).toFixed();
					return price;
				}
			},

			writeValueMin : function (val){
				model.valueMin().html(val);
			},
			writeValueMax : function (val){
				model.valueMax().html(val);
			},

			checkDataSliderMin : function (val){
				dataSlider.minStart = val;
			},
			checkDataSliderMax : function (val){
				dataSlider.maxStart = val;
			},

			checkMinMaxStart : function (){
				if (dataSlider.minStart < dataSlider.min){dataSlider.minStart = dataSlider.min;}
				if (dataSlider.maxStart > dataSlider.max){dataSlider.maxStart = dataSlider.max;}
			},

			configCheckStart : function (){
				model.sliderBlock().find('.rangeSlider_label__min').html(dataSlider.minStart);
				model.sliderBlock().find('.rangeSlider_label__max').html(dataSlider.maxStart);

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
		   			
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopType${id}]#rb${typeID}srb${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopOrientation${id}]#rb${orientationID}orient${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopValue${id}]#rb${valueID}value${id}`).prop('checked', true);
					$(model.configItemRadiobtn+`.radio_input[name=rbGroopScale${id}]#rb${scaleID}scale${id}`).prop('checked', true);
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

			configCheck : function (){
				$('.searchRoom2 .sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
					console.log('numSlider:', $(this).attr('id').substr(-1));

					if ($(this).prop('checked')){
						$(this).closest('.sliderConf').find('.sliderConf_block').css('display','block');
					}else{
						$(this).closest('.sliderConf').find('.sliderConf_block').css('display','none');
					}


					$('.searchRoom2 .sliderConf .sliderConf_block .inputText_input').on('blur', function(e) {
						
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
						console.log(dataSlider,'што тут происходит');
						$('.searchRoom2 .slider'+id).slider(dataSlider);
						console.log(dataSlider,'што тут происходит');
					});

					$('.searchRoom2 .sliderConf .sliderConf_block .radio_input').on('click', function(e) {
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
				   				case '2': type = 'from0to'; break;
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
						$('.searchRoom2 .slider'+id).slider(dataSlider);
					});
					
				});	

				function clear(id){
					let x = $('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider .rangeSlider_slider_scale')
					x.remove();

					$('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider_left').css('display','inline-block');
					$('.searchRoom2 .rangeSlider#idPrice'+id+' .rangeSlider_slider_range').css('display','inline-block');

				}
			},
			

		}

		view.type();
		view.scale();
		view.orientation();
		view.value();

		controller.checkMinMaxStart();//определили текущие мин и мах
		controller.configCheckStart();//min-max value

		view.range();
		controller.configCheck();


		//fillConfigStart();
		
		
		model.rangeLeft().on('mousedown', function(e) {
			controller.movie(model.rangeLeft(),e,'left');
		});

		model.rangeRight().on('mousedown', function(e) {
			controller.movie(model.rangeRight(),e,'right');
		});
		

		return this.each(function() {

		}), dataSlider;









		function fillConfigStart(){
			let sliObj, min, typeID, orientationID, valueID, scaleID;

			//for (var i=1; i<=5; i++) {
				sliObj = s[i-1];
				$(configItemMin+i).val(sliObj.min);
				$(configItemMax+i).val(sliObj.max);
				$(configItemMinStart+i).val(sliObj.minStart);
				$(configItemMaxStart+i).val(sliObj.maxStart);
				$(configItemStep +i).val(sliObj.step);
				$(configItemScaleStep +i).val(sliObj.scaleStep);

				switch(sliObj.type) {
	  				case 'interval'	: typeID = '1'; break;
	   				case 'from0to'	: typeID = '2'; break;
	   				case 'one'		: typeID = '3'; break;
	   				default 		: typeID = '1';
	   			}
	   			switch(sliObj.orientation) {
	  				case 'horizontal': orientationID = '1'; break;
	   				case 'vertical': orientationID = '2'; break;
	   				default : orientationID = '1';
	   			}
				switch(sliObj.value) {
	  				case 'on': valueID = '1'; break;
	   				case 'off': valueID = '2'; break;
	   				default : valueID = '1';
	   			}

				switch(sliObj.scale) {
	  				case 'on': scaleID = '1'; break;
	   				case 'off': scaleID = '2'; break;
	   				default : scaleID = '1';
	   			}
	   			
				$(configItemRadiobtn+`.radio_input[name=rbGroopType${i}]#rb${typeID}srb${i}`).prop('checked', true);
				$(configItemRadiobtn+`.radio_input[name=rbGroopOrientation${i}]#rb${orientationID}orient${i}`).prop('checked', true);
				$(configItemRadiobtn+`.radio_input[name=rbGroopValue${i}]#rb${valueID}value${i}`).prop('checked', true);
				$(configItemRadiobtn+`.radio_input[name=rbGroopScale${i}]#rb${scaleID}scale${i}`).prop('checked', true);
			//}
		}
	};

})(jQuery);


$(function() {

	let s = [ $('.searchRoom2 .slider1').slider({
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

});