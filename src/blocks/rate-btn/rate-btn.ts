$(function () {
  $('.js-rate-btn__star').on('click', handleRatebtnClick);

  function handleRatebtnClick(this: HTMLElement) {
    $(this).closest('.rate-btn').find('.rate-btn__star').removeClass('rate-btn__star_active');
    const numStr = $(this).attr('id');

    if (numStr != undefined) {
      const num: number = parseInt(numStr);

      for (let i = 1; i <= num; i++) {
        $(this)
          .closest('.rate-btn')
          .find('#' + i)
          .addClass('rate-btn__star_active');
      }
    }
  }
});
