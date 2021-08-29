$(function () {
  let kol: number = $('.js-card-room .js-card-room__image').length;
  for (let i: number = 1; i <= kol; i++) {
    $('.js-card-room')
      .find('#' + i + '.card-room__image')
      .addClass('images' + i);
  }

  $('.js-card-room__arrow-left').on('click', handlePaginationClick);
  $('.js-card-room__arrow-right').on('click', handlePaginationClick);

  function handlePaginationClick(this: HTMLElement) {
    let paginationBlock: any = $(this)
      .closest('.card-room__image-block')
      .find('.card-room__slider-pagination');
    let paginationActive: any = paginationBlock.find('.card-room__slider-pagination-item_active');
    let num: number = parseInt(paginationActive.attr('id').substr(-1));
    let imageActive: any = $(this).closest('.card-room__image-block').find('.card-room__image_active');
    let numFirstImgStr: any = $(this)
      .closest('.card-room__image-block')
      .find('.card-room__image:first')
      .attr('id');
    let numFirstImg: number = parseInt(numFirstImgStr);
    let numImg: number = parseInt(imageActive.attr('id'));

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
