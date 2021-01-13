



import '/ui_kit/form_elements/rangeSlider/rangeSlider.js'
import {exp} from '/ui_kit/form_elements/rangeSlider/rangeSlider.js'

$(function() {

	let s1 = $('body').slider({
		idElement : 'idPrice1',
		type : 'interval',
		min : 10,
		max : 200,
		minStart : 50,
		maxStart : 100,
		step : 'no',
		orientation : 'horizontal',
		value : 'on',
		scale : 'on',
		scaleStep : 20
	});
	let s2 = $('body').slider({
		idElement : 'idPrice2',
		type : 'from0to',
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 7,
		step : 5,
		orientation : 'horizontal',//'vertical',
		value : 'on',
		scale : 'on',
		scaleStep : 10
	});

	let s3 = $('body').slider({
		idElement : 'idPrice3',
		min : 100,
		max : 40000,
	});

	let s4 = $('body').slider({
		idElement : 'idPrice4',
		type : 'one',
		min : 0,
		max : 5000,
		maxStart : 2000,
	});


	$('.searchRoom2 .sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
		console.log('dmkmkfmkmfk',$(this).attr('id'));

		if ($(this).prop('checked')){
			console.log('vjfhgjkj');
			$(this).closest('.sliderConf').find('.sliderConf_block').css('display','block');
		}else{
			console.log('nonoonnono');
			$(this).closest('.sliderConf').find('.sliderConf_block').css('display','none');
		}


		$('.searchRoom2 .sliderConf .sliderConf_block .btn').on('click', function(e) {
			
			

			let config = checkedSliderConf(),
				num = config[0],
				typeId = config[1],
				min = Number.parseInt(config[2]),
				max = Number.parseInt(config[3]),
				minStart = Number.parseInt(config[4]),
				maxStart = Number.parseInt(config[5]),
				orientationID = config[6],
				valueID = config[7],
				scaleID = config[8],
				scaleStep = Number.parseInt(config[9]),
				type, scale, value, orientation, step;
			console.log('78: ', num, typeId, scaleID );
			
			clear(num);
			
			switch(typeId) {
  				case '1': type = 'interval'; break;
   				case '2': type = 'from0to'; break;
   				case '3': type = 'one'; break;
   				default : type = 'interval';
   			}

   			switch(orientationID) {
  				case '1': orientation = 'horizontal'; break;
   				case '2': orientation = 'vertical'; break;
   				default : orientation = 'horizontal';
   			}

   			switch(valueID) {
  				case '1': value = 'on'; break;
   				case '2': value = 'off'; break;
   				default : value = 'on';
   			}

   			switch(scaleID) {
  				case '1': scale = 'on'; break;
   				case '2': scale = 'off'; break;
   				default : scale = 'on';
   			}

   			console.log(type, scale, 7777777777);

			$('body').slider({
				idElement : 'idPrice'+num,
				type : type,
				min : min,
				max : max,
				minStart : minStart,
				maxStart : maxStart,
				orientation : orientation,
				value : value,
				scale : scale,
				scaleStep : scaleStep
			});

		});
		/*console.log(sliderConfig, dataSlider1[min]);
		sliderConfig = {
			idElement : 'idPrice1',
			type : 'interval',
			min : -10,
			max : 20000000,
			minStart : 50,
			maxStart : 1000000000,
			step : 'no',
			orientation : 'horizontal',
			value : 'off',
			scale : 'on',
			scaleStep : 20
		}*/
	});	


	function checkedSliderConf(){		
		let num = $(`.searchRoom2 .sliderConf .sliderConf_block 
					.sliderConf_block_item .sliderConf_block_item_option .radio 
					.radio_input[name=rbGroopSlider]:checked`).attr('id').replace('rbs',''),
			typeId = $(`.searchRoom2 .sliderConf .sliderConf_block 
					.sliderConf_block_item .sliderConf_block_item_option .radio 
					.radio_input[name=rbGroopType]:checked`).attr('id').replace('rbsrb',''),
			min = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin').val(),
			max = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax').val(),
			minStart = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart').val(),
			maxStart = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart').val(),
			scaleID = $(`.searchRoom2 .sliderConf .sliderConf_block 
					.sliderConf_block_item .sliderConf_block_item_option .radio 
					.radio_input[name=rbGroopScale]:checked`).attr('id').replace('rbscale',''),
			orientationID = $(`.searchRoom2 .sliderConf .sliderConf_block 
					.sliderConf_block_item .sliderConf_block_item_option .radio 
					.radio_input[name=rbGroopOrientation]:checked`).attr('id').replace('rborient',''),
			valueID = $(`.searchRoom2 .sliderConf .sliderConf_block 
					.sliderConf_block_item .sliderConf_block_item_option .radio 
					.radio_input[name=rbGroopValue]:checked`).attr('id').replace('rbvalue',''),
			scaleStep = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep').val();
		

		console.log(num, typeId, min, max, minStart,  maxStart, orientationID, valueID, scaleID, scaleStep);
		return [num, typeId, min, max, minStart,  maxStart, orientationID, valueID, scaleID, scaleStep];
	}

	function clear(num){
		let x = $('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider .rangeSlider_slider_scale')
		console.log(x, "удаляем");
		x.remove();


		$('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider_left').css('display','inline-block');
		$('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider_range').css('display','inline-block');

	}
	
});

//непонятный баг с первым делением