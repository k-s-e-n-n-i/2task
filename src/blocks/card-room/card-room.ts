import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';

class CardRoom {
  cardRoom: Element;
  left: HTMLElement | null = null;
  right: HTMLElement | null = null;
  paginationItems: NodeListOf<HTMLElement> | null = null;
  images: NodeListOf<HTMLElement> | null = null;
  numberImages: number | null = null;

  constructor(cardRoom: Element) {
    this.cardRoom = cardRoom;
    this.init();
  }

  init() {
    this.left = getElementBySelector(this.cardRoom, '.js-card-room__arrow-left');
    this.right = getElementBySelector(this.cardRoom, '.js-card-room__arrow-right');
    this.paginationItems = this.cardRoom.querySelectorAll('.card-room__slider-pagination-item');
    this.images = this.cardRoom.querySelectorAll('.card-room__image');
    this.numberImages = this.images.length;

    const { left, right } = this;

    this.left.addEventListener('click', () => {
      this.handlePaginationClick(left);
    });
    this.right.addEventListener('click', () => {
      this.handlePaginationClick(right);
    });
  }

  handlePaginationClick(elementClick: HTMLElement) {
    let num: number | null = 0;
    const { paginationItems, images } = this;

    paginationItems?.forEach((item, i) => {
      if (item.classList.contains('card-room__slider-pagination-item_active')) {
        num = i;
        item.classList.remove('card-room__slider-pagination-item_active');
      }
    });
    if (images) {
      images[num].classList.remove('card-room__image_active');
    }

    if (elementClick.classList.contains('card-room__arrow-left')) {
      num - 1 < 0 ? (num = this.numberImages) : (num = num);

      if (num) {
        if (paginationItems) {
          paginationItems[num - 1].classList.add('card-room__slider-pagination-item_active');
        }
        if (images) {
          images[num - 1].classList.add('card-room__image_active');
        }
      }
    }

    if (elementClick.classList.contains('card-room__arrow-right') && num != null) {
      this.numberImages ? (num + 1 >= this.numberImages ? (num = -1) : (num = num)) : 0;

      this.paginationItems
        ? this.paginationItems[num + 1].classList.add('card-room__slider-pagination-item_active')
        : 0;
      this.images ? this.images[num + 1].classList.add('card-room__image_active') : 0;
    }
  }
}

export { CardRoom };
