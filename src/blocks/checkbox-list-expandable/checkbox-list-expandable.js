$(function () {
  $('.checkbox-list-expandable__topic-block').on('click', handleCheckboxlistClick);

  function handleCheckboxlistClick() {
    const block_list = $(this).closest('.checkbox-list-expandable').find('.checkbox-list'),
      expend = $(this).closest('.checkbox-list-expandable').find('.checkbox-list-expandable__expand');

    if (block_list.hasClass('checkbox-list_hide')) {
      block_list.removeClass('checkbox-list_hide');
      expend.addClass('checkbox-list-expandable__expand_open');
    } else {
      block_list.addClass('checkbox-list_hide');
      expend.removeClass('checkbox-list-expandable__expand_open');
    }
  }
});
