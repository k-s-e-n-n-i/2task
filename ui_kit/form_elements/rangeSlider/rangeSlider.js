
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

		let dataSlider = $.extend({//в blocks/searchRoom/searchRoom.pug //значения по умолчанию
			idElement : 'idPrice',
			type : 'interval',
			min : 0,
			max : 1000,
			minStart : 150,
			maxStart : 500,
			step : 1,
			orientation : 'horizontal',
			value : 'on',
			scale : 'on',
			scaleStep : 10
		}, options);

		return this.each(function() {

			

			//writeObjSlider(dataSlider1);

			run(dataSlider);
			
			function run(obj) {

				let sliderBlock = $('.rangeSlider#'+obj.idElement),
					slider = sliderBlock.find('.rangeSlider_slider'),
					ind = slider.find('.rangeSlider_slider_range'),//"индикатор"
					width = slider.width(),//obj.width,
					min = obj.min, 
					max = obj.max;
					//rangePositionLeft = parseInt(slider.position().left);//позиция бегунка

					if (obj.minStart < min){obj.minStart = min;}
					if (obj.maxStart > max){obj.maxStart = max;}
					
				
				checkType(sliderBlock);
				checkValue(sliderBlock);
				checkScale();
				checkOrientation();
					
				console.log('width=',width);	

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
				
				checkStart(rangeLeft,rangeRight,ind);

				function movie(range,e,cl){
					let startPos = parseInt(range.css('left')),
						indWidth = ind.width(),
						width = slider.width();

					moveAt(e);	
									
				
					$(document).on('mousemove', function(e) {
				  		//console.log('e=',e);
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
							if (obj.step == 1){
								pos = e.pageX - parseInt(slider.position().left);//позиция бегунка
								console.log('pos=',e.pageX);
								movingRange();	
							}else{
								let sumSegments = (obj.max - obj.min) / obj.step,
									w1 = width / (obj.max - obj.min),//одно деление
									w = w1 * obj.step, //длина шага
									masScale=[];
								console.log(' ',sumSegments, w1, w);
								for (var i = 0; i <= sumSegments; i++) {
									console.log(' ',obj.min,w,i, w*i);
									masScale[i] = parseInt(w*i);
								}
								console.log(' ',masScale);

								
								//e.pageX = e.pageX - 20;
								p = e.pageX - parseInt(slider.position().left);//позиция бегунка
								console.log('posStep=',p, $.inArray(p, masScale));
								if ($.inArray(p, masScale) != -1){
									pos = e.pageX - parseInt(slider.position().left);//позиция бегунка
									movingRange();
									//startPos = pos;
									console.log('da');
								}else{
									pos = startPos;
									console.log('net');
								}
							}
						}
						
						function movingRange(){

							if ((pos >= 0) && (pos <= width)){

								if (cl == 'left'){
									moveLeft(obj, pos, startPos);
								}

								if (cl == 'right'){
									moveRight(obj, pos);
								}

								ind.css('width', indWidth+step+'px');//ширина индикатора
							}
						}

						function moveLeft(obj, pos, startPos){
							rigth = parseInt(rangeRight.css('left'));
							if ((rigth >= pos)&&(obj.type != 'from0to')){
								price = calc(range);

								if (obj.step == 1){
									step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя	
									console.log('step:',step);
									startPos = pos;

									ind.css('transform','translate('+pos+'px, 0px)');
									
									range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
								}else{
									step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя	
									console.log('step:',step);
									startPos = pos;

									ind.css('transform','translate('+pos+'px, 0px)');
									
									range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
									console.log('step:',step,'\npos:',pos);
								}
							}
							presentValueL(obj, price);
						}
						function moveRight(obj, pos){
							left = parseInt(rangeLeft.css('left'));
							if (left <= pos){
								price = calc(range);

								step = parseInt(range.css('left')) - startPos;//длина перемещения правого указателя
								range.closest('.rangeSlider').find('.rangeSlider_label__max').html(price);
							}
							presentValueR(obj, price);
						}

						function calc(range){
							range.css('left', pos+'px');//позиция указателей

							pr = pos / width,
							price = ((max - min) * pr + min).toFixed();
							//console.log(price,'??????????????????');
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
						sliderBlock.find('.rangeSlider_label_Block').css('display','flex');
						if (obj.type != 'from0to'){
							sliderBlock.find('.rangeSlider_label__min').html(obj.minStart);//меняю min/max на чтобы в подписи указывались стартовые позиции крайних точек
						}else{
							sliderBlock.find('.rangeSlider_label__min').html(obj.min);
						}
						sliderBlock.find('.rangeSlider_label__max').html(obj.maxStart);

						//spans = sliderBlock.find('.rangeSlider_label_Block').find('span');
						//console.log(spans[0].hasClass('rangeSlider_label__min'),'span');
						spans = sliderBlock.find('.rangeSlider_label_Block');
						if (obj.type == 'one'){
							console.log(spans.is('span.rangeSlider_label__min'), 'есть тут минимум? ТУТ ЕДИНИЧНОЕ');
							spans.find('span.rangeSlider_label__min').css('display','none');//.remove();
							spans.find('span.rangeSlider_label__dash').css('display','none');//.remove();
						}else{
							spans.find('span.rangeSlider_label__min').css('display','block');//.remove();
							spans.find('span.rangeSlider_label__dash').css('display','block');//.remove();
							//if (spans.is('.rangeSlider_label__min') == false){
							/*	console.log(spans.is('.rangeSlider_label__min'), 'есть тут минимум?? ТУТ ИНТЕРВАЛ');
								sliderBlock.find('.rangeSlider_label_Block').prepend(`<span class="rangeSlider_label__min">
									${obj.minStart}</span><span class="rangeSlider_label__dash">₽ - </span>`);	
							*///}
						}
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
						spans = sliderBlock.find('.rangeSlider_label_Block');
						spans.find('span.rangeSlider_label__min').css('display','none');//.remove();
						spans.find('span.rangeSlider_label__dash').css('display','none');//.remove();
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
							//console.log(width, ii);
							i = i+scaleWidth;

							shBlock.find('.rangeSlider_slider_scale_val').html(ch);
							ch = ch + Math.floor((obj.max-obj.min)/scaleKol);
						}
					}
				}

				function checkStart(left,right,ind){
					if (obj.type != 'from0to'){
						posLeft = width * obj.minStart / obj.max;
						left.css('left', posLeft +'px');
					}

					posRight = width * obj.maxStart / obj.max;
					right.css('left', posRight +'px');

					//sliderBlock.find('.rangeSlider_slider_left').css('display','none');
					if (obj.type != 'from0to'){
						ind.css('transform','translate('+posLeft+'px, 0px)');
						ind.css('left', posLeft+'px');
						ind.css('width',(posRight - posLeft)+'px');
					}else{
						ind.css('transform','translate(-5px, 0px)');
						ind.css('left', '0px');
						ind.css('width',posRight+'px');
					}
				}

				

			}

			function writeObjSlider(obj){
				obj.min = $('.searchRoom2 .sliderConf .sliderConf_block .inputText_input#inputTextmin').val();
				console.log(dataSlider1);
			}


			function presentValueL(obj, val){
				if (val < obj.min){val = obj.min;}
				$(`.searchRoom2 .sliderConf .sliderConf_block 
					.inputText #inputTextminStart`+obj.idElement.substr(-1)).val(val);
			}
			function presentValueR(obj, val){
				if (val > obj.max){val = obj.max;}
				$(`.searchRoom2 .sliderConf .sliderConf_block 
					.inputText #inputTextmaxStart`+obj.idElement.substr(-1)).val(val);	
			}

		}), dataSlider;
	};


})(jQuery);