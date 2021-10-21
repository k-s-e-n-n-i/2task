import { getElementBySelector } from '../layout/layout';

class ItemMenuWithSubmenu {
  itemMenu: Element;
  submenu: HTMLElement;

  constructor(itemMenu: Element) {
    this.itemMenu = itemMenu;
    this.submenu = getElementBySelector(itemMenu, '.header__submenu');
  }

  init(): void {
    this.itemMenu.addEventListener('click', (event) => {
      this.handleItemMenuWithSubmenuClick(event);
    });
  }

  handleItemMenuWithSubmenuClick(event: Event) {
    if (
      event.target instanceof Node &&
      (event.target == this.submenu || this.submenu.contains(event.target))
    ) {
      return;
    }
    this.submenu.classList.toggle('header__submenu_open');
  }

  hideSubmenu(event: Event): void {
    if (
      event.target instanceof Node &&
      (event.target == this.itemMenu || this.itemMenu.contains(event.target))
    ) {
      return;
    }
    this.submenu.classList.remove('header__submenu_open');
  }
}

const arrayMenus: ItemMenuWithSubmenu[] = [];
document.querySelectorAll('.js-header__menu-li_expand').forEach((item) => {
  if (item.querySelector('.header__submenu')) {
    const menu = new ItemMenuWithSubmenu(item);
    arrayMenus.push(menu);
    menu.init();
  }
});

document.addEventListener('click', (event: MouseEvent) => {
  arrayMenus.forEach((item: ItemMenuWithSubmenu) => {
    item.hideSubmenu(event);
  });
});

class MenuMobile {
  header: Element;
  menuMobile: HTMLElement;
  headerNav: HTMLElement;

  constructor(header: Element) {
    this.header = header;
    this.menuMobile = getElementBySelector(header, '.js-header__menu-mobile');
    this.headerNav = getElementBySelector(header, '.header__links');
  }

  init() {
    this.menuMobile.addEventListener('click', () => {
      this.handleMenuMobileClick();
    });
  }

  handleMenuMobileClick() {
    this.headerNav.classList.toggle('header__links_mobile');
    this.headerNav.classList.toggle('header__links_hidden');
    this.menuMobile.classList.toggle('header__menu-mobile_cross');
  }
}

document.querySelectorAll('.header').forEach((item) => {
  new MenuMobile(item).init();
});
