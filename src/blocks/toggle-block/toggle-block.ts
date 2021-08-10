$(function () {
  $('.toggle-block').on('click', handleToggleClick);

  function handleToggleClick(this: HTMLElement) {
    let toggle = $(this).find('.toggle-block__toggle'),
      flag = 0;

    if (toggle.hasClass('toggle-block__toggle_off') && flag == 0) {
      toggle.removeClass('toggle-block__toggle_off');
      toggle.addClass('toggle-block__toggle_on');
      flag++;
    }
    if (toggle.hasClass('toggle-block__toggle_on') && flag == 0) {
      toggle.removeClass('toggle-block__toggle_on');
      toggle.addClass('toggle-block__toggle_off');
      flag++;
    }
  }
});
