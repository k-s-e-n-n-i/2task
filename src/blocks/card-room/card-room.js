$(function () {
  let kol = $('.card-room .card-room__image').length;
  for (let i = 1; i <= kol; i++) {
    $('.card-room')
      .find('#' + i + '.card-room__image')
      .addClass('images' + i);
  }

  $('.card-room__arrow-left').on('click', handlePaginationClick);
  $('.card-room__arrow-right').on('click', handlePaginationClick);

  function handlePaginationClick() {
    let paginationBlock = $(this).closest('.card-room__image-block').find('.card-room__slider-pagination'),
      paginationActive = paginationBlock.find('.card-room__slider-pagination-item_active'),
      num = parseInt(paginationActive.attr('id').substr(-1)),
      imageActive = $(this).closest('.card-room__image-block').find('.card-room__image_active'),
      numFirstImg = parseInt(
        $(this).closest('.card-room__image-block').find('.card-room__image:first').attr('id')
      ),
      numImg = parseInt(imageActive.attr('id'));

    if ($(this).hasClass('card-room__arrow-left')) {
      num = num - 1;
      if (num == 0) {
        num = 4;
      }

      numImg = numImg - 1;
      if (numImg <= numFirstImg) {
        numImg = numFirstImg + 3;
      }
    }

    if ($(this).hasClass('card-room__arrow-right')) {
      num = num + 1;
      if (num == 5) {
        num = 1;
      }

      numImg = numImg + 1;
      if (numImg == numFirstImg + 4) {
        numImg = numFirstImg;
      }
    }

    paginationActive.removeClass('card-room__slider-pagination-item_active');
    paginationBlock.find(`#pag${num}`).addClass('card-room__slider-pagination-item_active');

    imageActive.removeClass('card-room__image_active');
    imageActive
      .closest('.card-room__image-block')
      .find(`.card-room__image#${numImg}`)
      .addClass('card-room__image_active');
  }
});
