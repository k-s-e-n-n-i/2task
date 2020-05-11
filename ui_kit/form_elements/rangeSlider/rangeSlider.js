$(function() {



	/*$('.rangeSlider .rangeSlider_range_left').on('click', function(e) {
		let min = 0, max = 10000,
			rangeSlider = $(this).closest('.rangeSlider'),
			rangeSlider_range_left = $(this).closest('.rangeSlider_range'),

			widthStrLen = rangeSlider.css('width').length,
			leftStrLen = rangeSlider_range_left.css('left').length,

			width = Number(rangeSlider.css('width').slice(0,widthStrLen-2)),
			left = Number(rangeSlider_range_left.css('left').slice(0,leftStrLen-2)),
			pr = left / width * 100;



			console.log('min: '+min+'\nmax: '+max+'\nwidth: '+width+'\nleft: '+left+'\n\npr: '+pr+'\n\n');
		//range($(this).closest('.rangeSlider_range'));
	});*/

	

	//узнаем ширину бегунка, мин и макс значения стоимости
	let start = -3,
		width = $('.rangeSlider_slider').width() - $('.rangeSlider_slider .rangeSlider_slider_left').width()-start,
		min = parseInt($('.rangeSlider .rangeSlider_label__min').html()),
		max = parseInt($('.rangeSlider .rangeSlider_label__max').html());
	console.log('width:',width,'\nmin:',min,'\nmax:',max);

	//определяем индикатор
	let ind = $('.rangeSlider_slider .rangeSlider_slider_range');

	//смена левой границы
	let rangeLeft = $('.rangeSlider_slider .rangeSlider_slider_left');
	rangeLeft.on('mousedown', function(e) {
		movie(rangeLeft,e,'left');	
	});

	//смена правой границы
	let rangeRight = $('.rangeSlider_slider .rangeSlider_slider_right');
	rangeRight.on('mousedown', function(e) {
		movie(rangeRight,e,'right');		
	});
	

	function movie(range,e,cl){
		startPos = parseInt(range.css('left'));
		indWidth = ind.width();

		moveAt(e);
	
		$(document).on('mousemove', function(e) {
	  		moveAt(e);
		});

		$(document).on('mouseup', function(e) {
	  		$(document).off('mousemove');
	  		$(document).off('mouseup');
	  		//count(range);
		});
		
		function moveAt(e) {
			pos = e.pageX - range.width() / 2 -80;

			console.log('fvffgfv',e.pageX);

			if ( (pos >= start) && (pos <= width) ){
				console.log(pos);
			

				range.css('left', pos+'px');//e.pageX - range.offsetWidth / 2 + 'px'; //позиция указателей

				pr = (pos-start) / width,
				price = ((max - min) * pr + min).toFixed();
				//console.log(price+'rub')


				
				if (cl == 'left'){
					step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя
					ind.css('left',e.pageX - range.width() / 2 -78+ 'px');//позиция индикатора
					range.closest('.rangeSlider').find('.rangeSlider_label__min').html(price);
				}
				if (cl == 'right'){
					step = parseInt(range.css('left')) - startPos;//длина перемещения правого указателя
					range.closest('.rangeSlider').find('.rangeSlider_label__max').html(price);
				}
				
				//console.log('?',startPos , parseInt(range.css('left')),step);
				ind.css('width', indWidth+step+'px');//ширина индикатора
			}
				
		}
	}
	function count(range){
		let pos = parseInt(range.css('left')),
			pr = pos / width,
			price = (max - min) * pr + min;

			console.log(price+'rub')
	
	}


});

