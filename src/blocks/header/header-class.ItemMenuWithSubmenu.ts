import { getElementBySelector } from '../layout/layout';

class ItemMenuWithSubmenu {
  itemMenu: Element;
  submenu: HTMLElement | null = null;

  constructor(itemMenu: Element) {
    this.itemMenu = itemMenu;
    this.init();
  }

  init(): void {
    const { itemMenu } = this;
    this.submenu = getElementBySelector(itemMenu, '.header__submenu');

    itemMenu.addEventListener('click', (event) => {
      this.handleItemMenuWithSubmenuClick(event);
    });

    document.addEventListener('click', (event: Event) => {
      event.target ? this.hideSubmenu(event.target) : 0;
    });
  }

  handleItemMenuWithSubmenuClick(event: Event) {
    const { submenu } = this;

    if (submenu) {
      if (event.target instanceof Node && (event.target == this.submenu || submenu.contains(event.target))) {
        return;
      }
      submenu.classList.toggle('header__submenu_open');
    }
  }

  hideSubmenu(eventTarget: EventTarget): void {
    const { submenu, itemMenu } = this;

    if (submenu) {
      if (eventTarget instanceof Node && (eventTarget == itemMenu || itemMenu.contains(eventTarget))) {
        return;
      }
      submenu.classList.remove('header__submenu_open');
    }
  }
}
export { ItemMenuWithSubmenu };
