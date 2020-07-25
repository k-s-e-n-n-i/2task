$(function() {
	$('body').slider();


});



(function( $ ) {
$.fn.slider = function() {

		let dataSlider = {
			min : 0,
			max : 500000,
			width : 256,
			idElement : 'idPrice',
			step : 'no'
		}

		let dataSlider2 = {
			min : 0,
			max : 10,
			width : 100,
			idElement : 'idPrice2',
			step : 5
		}

		run(dataSlider);
		run(dataSlider2);


		function run(obj) {

			let sliderBlock = $('.rangeSlider#'+obj.idElement),
				slider = sliderBlock.find('.rangeSlider_slider'),
				ind = slider.find('.rangeSlider_slider_range'),//"индикатор"
				width = obj.width,
				min = obj.min, 
				max = obj.max,
				rangePositionLeft = parseInt(slider.position().left);//позиция бегунка
				
			console.log('width:',width,'\nmin:',min,'\nmax:',max);

			sliderBlock.find('.rangeSlider_label__min').html(min);
			sliderBlock.find('.rangeSlider_label__max').html(max);
			slider.css('width',obj.width);


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
			

			function movie(range,e,cl){
				let startPos = parseInt(range.css('left')),
					indWidth = ind.width();

				moveAt(e);
			
				$(document).on('mousemove', function(e) {
			  		moveAt(e);
				});

				$(document).on('mouseup', function(e) {
			  		$(document).off('mousemove');
			  		$(document).off('mouseup');
				});
				
				function moveAt(e) {
					pos = e.pageX - rangePositionLeft;

					if ((pos >= 0) && (pos <= width)){
						


						if (cl == 'left'){
							rigth = parseInt(rangeRight.css('left'));
							if (rigth >= pos){
								price = calc(range);

								if (obj.step == 'no'){
									step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя	
									console.log('step:',step);
									ind.css('transform','translate('+pos+'px, -1px)');
									range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
								}else{
									step = startPos - parseInt(range.css('left'));
									//step = steped(step);

									//console.log('step:',step,'\npos:',pos);
									//pos = rounding(pos,obj.step);

									ind.css('transform','translate('+pos+'px, -1px)');
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

			

		}

	};
})(jQuery);