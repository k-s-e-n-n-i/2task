import 'jquery.maskedinput';

$(function() {
  console.log($("input[name=date]"))
  $("input[name='date']").mask("99.99.9999");
});

