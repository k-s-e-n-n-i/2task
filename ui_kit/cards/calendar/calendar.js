$(document).ready(function() {
	$('.calendar').pignoseCalendar({
		select: function(date, context){
			console.log(date[0]);
   		}
	});

	$('.calendar').pignoseCalendar({
		week: 1,
		lang: 'ru',
		multiple: true,
		
	  //modal: true
	});

});

