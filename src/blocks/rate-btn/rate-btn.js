$(function () {
  $('.rate-btn__star').on('click', handleRatebtnClick);

  function handleRatebtnClick() {
    $(this).closest('.rate-btn').find('.rate-btn__star').removeClass('rate-btn__star_active');

    const num = parseInt($(this).attr('id'));

    for (let i = 1; i <= num; i++) {
      $(this)
        .closest('.rate-btn')
        .find('#' + i)
        .addClass('rate-btn__star_active');
    }
  }
});
