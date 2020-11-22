//export let dataSlider1;

//export {exp};
$(function() {
	
	
});


/*$('div.searchRoom_filters_diapason').slider({
	idElement : 'idPrice1',
	type : 'interval',
	min : 0,
	max : 200,
	minStart : 50,
	maxStart : 100,
	step : 'no',
	orientation : 'horizontal',
	value : 'on',
	scale : 'on',
	scaleStep : 20
});
*/

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
	 */

		let dataSlider = $.extend({//в blocks/searchRoom/searchRoom.pug
			idElement : 'idPrice',
			type : 'interval',
			min : 0,
			max : 500000,
			minStart : 50,
			maxStart : 100,
			step : 'no',
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 10
		}, options);

		return this.each(function() {

		/*let dataSlider1 = {
			idElement : 'idPrice1',
			type : 'interval',
			min : 0,
			max : 200,
			minStart : 50,
			maxStart : 100,
			step : 'no',
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 20
		}

		let dataSlider2 = {
			idElement : 'idPrice2',
			type : 'interval',
			min : 0,
			max : 10,
			minStart : 5,
			maxStart : 10,
			step : 5,
			orientation : 'horizontal',//'vertical',
			value : 'on',
			scale : 'on',
			scaleStep : 10
		}

		let dataSlider3 = {
			idElement : 'idPrice3',
			type : 'from0to',
			min : 100,
			max : 40000,
			minStart : 50,
			maxStart : 100,
			step : 'no',
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 10
		}

		let dataSlider4 = {
			idElement : 'idPrice4',
			type : 'one',
			min : 1000,
			max : 25000,
			minStart : 50,
			maxStart : 100,
			step : 'no',
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 8
		}*/

		//writeObjSlider(dataSlider1);

		run(dataSlider);
		/*run(dataSlider1);
		run(dataSlider2);
		run(dataSlider3);
		run(dataSlider4);*/


		function run(obj) {

			let sliderBlock = $('.rangeSlider#'+obj.idElement),
				slider = sliderBlock.find('.rangeSlider_slider'),
				ind = slider.find('.rangeSlider_slider_range'),//"индикатор"
				width = slider.width(),//obj.width,
				min = obj.min, 
				max = obj.max;
				//rangePositionLeft = parseInt(slider.position().left);//позиция бегунка

			
			checkType(sliderBlock);
			checkValue(sliderBlock);
			checkScale();
			checkOrientation();
				
			console.log('width:',width,'\nmin:',min,'\nmax:',max);



			//смена левой границы
			let rangeLeft = slider.find('.rangeSlider_slider_left');
			rangeLeft.on('mousedown', function(e) {
				movie(rangeLeft,e,'left');	
			});

			//смена правой границы
			let rangeRight = slider.find('.rangeSlider_slider_right');
			rangeRight.on('mousedown', function(e) {
				movie(rangeRight,e,'right');		
			});
			
			//checkStart(rangeLeft,rangeRight);

			function movie(range,e,cl){
				let startPos = parseInt(range.css('left')),
					indWidth = ind.width(),
					width = slider.width();

				moveAt(e);	
								
			
				$(document).on('mousemove', function(e) {
			  		moveAt(e);	
				});

				$(document).on('mouseup', function(e) {
			  		$(document).off('mousemove');
			  		$(document).off('mouseup');
				});
				
				function moveAt(e) {
					
					if (obj.orientation == 'vertical'){
						pos = e.pageY - parseInt(slider.position().top) - 93;//? подобрано число, пока не поняла что это
						console.log(parseInt(slider.position().top));//позиция бегунка
					}else{
						pos = e.pageX - parseInt(slider.position().left);//позиция бегунка
					}
					
					

					if ((pos >= 0) && (pos <= width)){
						


						if (cl == 'left'){
							rigth = parseInt(rangeRight.css('left'));
							if (rigth >= pos){
								price = calc(range);

								if (obj.step == 'no'){
									step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя	
									console.log('step:',step);

									ind.css('transform','translate('+pos+'px, 0px)');
									
									range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
								}else{
									step = startPos - parseInt(range.css('left'));
									//step = steped(step);

									//console.log('step:',step,'\npos:',pos);
									//pos = rounding(pos,obj.step);

									ind.css('transform','translate('+pos+'px, 0px)');
									range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
								}
								
								
							}
						}

						if (cl == 'right'){
							left = parseInt(rangeLeft.css('left'));
							if (left <= pos){
								price = calc(range);

								step = parseInt(range.css('left')) - startPos;//длина перемещения правого указателя
								range.closest('.rangeSlider').find('.rangeSlider_label__max').html(price);
							}
						}

						ind.css('width', indWidth+step+'px');//ширина индикатора
					}

					function calc(range){
						range.css('left', pos+'px');//позиция указателей

						pr = pos / width,
						price = ((max - min) * pr + min).toFixed();
						return price;
					}

					function steped(step){
						console.log('func'+(step/obj.step).toFixed()*obj.step);
					}

					function rounding(num,step){
						pos = (num/step).toFixed()*step;
						console.log('check',pos);
					}
				}

			

					
			}

			function checkValue(sliderBlock){
				if (obj.value == 'off'){
					sliderBlock.find('.rangeSlider_label_Block').css('display','none');
				}else{
					sliderBlock.find('.rangeSlider_label__min').html(obj.min);
					sliderBlock.find('.rangeSlider_label__max').html(obj.max);
				}
			}

			function checkOrientation(){
				if (obj.orientation == 'vertical'){
					slider.css('transform','rotate(90deg)');
					//rangePositionLeft = parseInt(slider.position().top);
				}
			}

			function checkType(sliderBlock){
				if (obj.type == 'interval'){
					return true;
				}
				if (obj.type == 'from0to'){
					sliderBlock.find('.rangeSlider_slider_left').css('display','none');
					ind.css('transform','translate('+(-5)+'px, 0px)');
					return true;
				}
				if (obj.type == 'one'){
					sliderBlock.find('.rangeSlider_slider_left').css('display','none');
					ind.css('display','none');
					spans = sliderBlock.find('.rangeSlider_label_Block').find('span');
					spans[0].remove();
					spans[1].remove();
					return true;
				}
			}

			function checkScale(){
				if (obj.scale == 'on'){

					let scaleKol,
						ch = obj.min;
					if (obj.scaleStep != 'default'){
						scaleKol = obj.scaleStep;
					}else{
						scaleKol = Math.floor(width/45);
					}

					let scaleWidth = width/scaleKol;
					
					for(let i=0;i<=width;){
						ii = Math.floor(i);
						slider.append(`<div class="rangeSlider_slider_scale">
							<div class="rangeSlider_slider_scale_line" id="scale${ii}"></div>
							<div class="rangeSlider_slider_scale_val"></div>
							</div>`);
						shBlock = slider.find('.rangeSlider_slider_scale_line#scale'+ii).closest('.rangeSlider_slider_scale');
						shLine = shBlock.find('.rangeSlider_slider_scale_line');
						shVal = shBlock.find('.rangeSlider_slider_scale_val');
						shBlock.css('left',ii+'px');
						sliderBlock.css('margin-bottom','35px');
						console.log(width, ii);
						i = i+scaleWidth;

						shBlock.find('.rangeSlider_slider_scale_val').html(ch);
						ch = ch + Math.floor((obj.max-obj.min)/scaleKol);
					}
				}
			}

			function checkStart(left,right){
				left.css('left', obj.minStart+'px');
				right.css('left', obj.maxStart+'px');

				//sliderBlock.find('.rangeSlider_slider_left').css('display','none');
				ind.css('left', obj.minStart+'px');
				ind.css('width',indWidth+'px');
			}

			

		}

		function writeObjSlider(obj){
			obj.min = $('.searchRoom2 .sliderConf .sliderConf_block .inputText_input#inputTextmin').val();
			console.log(dataSlider1);
		}
		});
	};


})(jQuery);