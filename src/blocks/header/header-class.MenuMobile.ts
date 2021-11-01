import { getElementBySelector } from '../layout/layout';

class MenuMobile {
  header: Element;
  menuMobile: HTMLElement | null = null;
  headerNav: HTMLElement | null = null;

  constructor(header: Element) {
    this.header = header;
    this.init();
  }

  init() {
    const { header } = this;

    this.menuMobile = getElementBySelector(header, '.js-header__menu-mobile');
    this.headerNav = getElementBySelector(header, '.header__links');

    this.menuMobile.addEventListener('click', () => {
      this.handleMenuMobileClick();
    });
  }

  handleMenuMobileClick() {
    const { headerNav, menuMobile } = this;
    headerNav?.classList.toggle('header__links_mobile');
    headerNav?.classList.toggle('header__links_hidden');
    menuMobile?.classList.toggle('header__menu-mobile_cross');
  }
}
export { MenuMobile };
