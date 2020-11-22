



import '/ui_kit/form_elements/rangeSlider/rangeSlider.js'
import {exp} from '/ui_kit/form_elements/rangeSlider/rangeSlider.js'

$(function() {

	let s1 = $('body').slider({
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
	let s2 = $('body').slider({
		idElement : 'idPrice2',
		type : 'from0to',
		min : 0,
		max : 10,
		minStart : 5,
		maxStart : 10,
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
				min = config[2],
				max = config[3],
				type;
			console.log( num, typeId );
			
			
			switch(typeId) {
  				case '1': type = 'interval'; break;
   				case '2': type = 'from0to'; break;
   				case '3': type = 'one'; break;
   				default : type = 'interval';
   			}

   			console.log(type, 7777777777);

			$('body').slider({
				idElement : 'idPrice'+num,
				type : type,
				min : min,
				max : max
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
		let num = $('.searchRoom2 .sliderConf .sliderConf_block .formRegistration_blockRadio .radio .radio_input[name=rbGroopSlider]:checked').attr('id').replace('rbs',''),
			typeId = $('.searchRoom2 .sliderConf .sliderConf_block .formRegistration_blockRadio .radio .radio_input[name=rbGroopType]:checked').attr('id').replace('rbsrb',''),
			min = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin').val(),
			max = $('.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax').val();
		

		console.log(num, typeId, min, max);
		return [num, typeId, min, max];
	}

	
});