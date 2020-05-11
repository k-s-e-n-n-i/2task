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
	let width = $('.rangeSlider_slider').width(),
		min = 0, max = 100000;
	console.log('width:',width,'\nmin:',min,'\nmax:',max);

	//позиция бегунка
	const rangePositionLeft = parseInt($('.rangeSlider_slider').position().left);

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
			pos = e.pageX - rangePositionLeft; // 

			console.log(pos);

			if ((pos >= 0) && (pos <= width)){
				

				range.css('left', pos+'px');//e.pageX - range.offsetWidth / 2 + 'px'; //позиция указателей

				//return true; // в этот
				pr = pos / width,
				price = ((max - min) * pr + min).toFixed();
				//console.log(price+'rub')



				if (cl == 'left'){
					step = startPos - parseInt(range.css('left'));//длина перемещения левого указателя
					ind.css('transform','translate('+pos+'px, -1px)');
					//ind.css('left',e.pageX - rangePositionLeft+ 'px');//позиция индикатора
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

