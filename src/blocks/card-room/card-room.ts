import { getElementBySelector } from '../layout/layout';

$(function () {
  class CardRoom {
    cardRoom: HTMLElement;
    left: HTMLElement;
    right: HTMLElement;
    paginationItems: NodeListOf<HTMLElement>;
    images: NodeListOf<HTMLElement>;
    numberImages: number;

    constructor(cardRoom: HTMLElement) {
      this.cardRoom = cardRoom;
      this.left = getElementBySelector(this.cardRoom, '.js-card-room__arrow-left');
      this.right = getElementBySelector(this.cardRoom, '.js-card-room__arrow-right');

      this.paginationItems = this.cardRoom.querySelectorAll('.card-room__slider-pagination-item');
      this.images = this.cardRoom.querySelectorAll('.card-room__image');

      this.numberImages = this.images.length;
    }

    init() {
      this.left.addEventListener('click', () => {
        this.handlePaginationClick(this.left);
      });
      this.right.addEventListener('click', () => {
        this.handlePaginationClick(this.right);
      });
    }

    handlePaginationClick(elementClick: HTMLElement) {
      let num: number = 0;

      this.paginationItems.forEach((item, i) => {
        if (item.classList.contains('card-room__slider-pagination-item_active')) {
          num = i;
          item.classList.remove('card-room__slider-pagination-item_active');
        }
      });
      this.images[num].classList.remove('card-room__image_active');

      if (elementClick.classList.contains('card-room__arrow-left')) {
        num - 1 < 0 ? (num = this.numberImages) : (num = num);

        this.paginationItems[num - 1].classList.add('card-room__slider-pagination-item_active');
        this.images[num - 1].classList.add('card-room__image_active');
      }

      if (elementClick.classList.contains('card-room__arrow-right')) {
        num + 1 >= this.numberImages ? (num = -1) : (num = num);

        this.paginationItems[num + 1].classList.add('card-room__slider-pagination-item_active');
        this.images[num + 1].classList.add('card-room__image_active');
      }
    }
  }

  $('.js-card-room').each((i, item) => {
    new CardRoom(item).init();
  });
});
