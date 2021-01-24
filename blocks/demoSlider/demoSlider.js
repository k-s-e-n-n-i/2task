


/*
import '/ui_kit/form_elements/rangeSlider/rangeSlider.js'
import {exp} from '/ui_kit/form_elements/rangeSlider/rangeSlider.js'

$(function() {

	let s = [ $('body').slider({
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
	$('body').slider({
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
	$('body').slider({
		idElement : 'idPrice3',
		min : 100,
		max : 40000,
		value : 'off',
		scale : 'on',
	}),

	$('body').slider({
		idElement : 'idPrice4',
		type : 'one',
		min : 0,
		max : 5000,
		maxStart : 2000,
	}),
	$('body').slider({
		idElement : 'idPrice5',
	}) ];
	
	

	let configItemMin = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin`,
		configItemMax = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax`,
		configItemMinStart = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart`,
		configItemMaxStart = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart`,
		configItemStep = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextstep`,
		configItemScaleStep = `.searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep`,
		configItemRadiobtn = `.searchRoom2 .sliderConf .sliderConf_block .sliderConf_block_item
					.sliderConf_block_item_option .radio `;
	//fillConfigStart();	


	$('.searchRoom2 .sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
		console.log('numSlider:', $(this).attr('id').substr(-1));

		if ($(this).prop('checked')){
			$(this).closest('.sliderConf').find('.sliderConf_block').css('display','block');
		}else{
			$(this).closest('.sliderConf').find('.sliderConf_block').css('display','none');
		}


		$('.searchRoom2 .sliderConf .sliderConf_block .inputText_input').on('blur', function(e) {
			
			let num = $(this).closest('.searchRoom_filters_diapason').find('.rangeSlider').attr('id').substr(-1),
				idStr = $(this).attr('id'),
				sliObj = s[num-1],
				min,
				max,
				minStart,
				maxStart,
				step,
				scaleStep;

			if (idStr.indexOf('min',0) != -1){
				min = Number.parseInt($(configItemMin+num).val());
				clear(num);
				sliObj.min = min;
			}
			if (idStr.indexOf('max',0) != -1){
				max = Number.parseInt($(configItemMax+num).val());
				clear(num);
				sliObj.max = max;
			}
			if (idStr.indexOf('minStart',0) != -1){
				minStart = Number.parseInt($(configItemMinStart+num).val());
				clear(num);
				sliObj.minStart = minStart;
			}
			if (idStr.indexOf('maxStart',0) != -1){
				maxStart = Number.parseInt($(configItemMaxStart+num).val());
				clear(num);
				sliObj.maxStart = maxStart;
			}
			if (idStr.indexOf('scaleStep',0) != -1){
				scaleStep = Number.parseInt($(configItemScaleStep+num).val());
				clear(num);
				sliObj.scaleStep = scaleStep;
				$('body').slider(s[num-1]);
			}
			if (idStr.indexOf('step',0) != -1){
				step = Number.parseInt($(configItemStep+num).val());
				clear(num);
				sliObj.step = step;
			}
			$('body').slider(s[num-1]);
			console.log(sliObj);
		});

		$('.searchRoom2 .sliderConf .sliderConf_block .radio_input').on('click', function(e) {
			let num = $(this).closest('.searchRoom_filters_diapason').find('.rangeSlider').attr('id').substr(-1);

			let configItemType = configItemRadiobtn+`.radio_input[name=rbGroopType${num}]:checked`,
				configItemOrientation = configItemRadiobtn+`.radio_input[name=rbGroopOrientation${num}]:checked`,
				configItemValue = configItemRadiobtn+`.radio_input[name=rbGroopValue${num}]:checked`,
				configItemScale = configItemRadiobtn+`.radio_input[name=rbGroopScale${num}]:checked`;

			let	idStr = $(this).attr('name'),
				sliObj = s[num-1],
				type,
				orientation,
				value,
				scale,
				typeId, orientationID, valueID, scaleID;

			if (idStr.indexOf('Type',0) != -1){
				typeId = $(configItemType).attr('id').substr(2,1);

				switch(typeId) {
	  				case '1': type = 'interval'; break;
	   				case '2': type = 'from0to'; break;
	   				case '3': type = 'one'; break;
	   				default : type = 'interval';
	   			}
				clear(num);
				sliObj.type = type;
			}
			if (idStr.indexOf('Orientation',0) != -1){
				orientationID = $(configItemOrientation).attr('id').substr(2,1);

				switch(orientationID) {
	  				case '1': orientation = 'horizontal'; break;
	   				case '2': orientation = 'vertical'; break;
	   				default : orientation = 'horizontal';
	   			}
				clear(num);
				sliObj.orientation = orientation;
			}
			if (idStr.indexOf('Value',0) != -1){
				valueID = $(configItemValue).attr('id').substr(2,1);

				switch(valueID) {
	  				case '1': value = 'on'; break;
	   				case '2': value = 'off'; break;
	   				default : value = 'on';
	   			}
				clear(num);
				sliObj.value = value;
			}
			if (idStr.indexOf('Scale',0) != -1){
				scaleID = $(configItemScale).attr('id').substr(2,1);

				switch(scaleID) {
	  				case '1': scale = 'on'; break;
	   				case '2': scale = 'off'; break;
	   				default : scale = 'on';
	   			}
				clear(num);
				sliObj.scale = scale;
			}
			$('body').slider(s[num-1]);
		});
		
	});	

	function clear(num){
		let x = $('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider .rangeSlider_slider_scale')
		x.remove();

		$('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider_left').css('display','inline-block');
		$('.searchRoom2 .rangeSlider#idPrice'+num+' .rangeSlider_slider_range').css('display','inline-block');

	}

	function fillConfigStart(){
		let sliObj, min, typeID, orientationID, valueID, scaleID;

		for (var i=1; i<=5; i++) {
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
		}
	}
	
});*/

//непонятный баг с первым делением