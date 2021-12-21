import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';

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
      this.hideSubmenu(event);
    });
  }

  handleItemMenuWithSubmenuClick(event: Event): void {
    const { submenu } = this;

    if (submenu) {
      if (this.hasContains(submenu, event)) {
        return;
      }
      submenu.classList.toggle('header__submenu_open');
    }
  }

  hideSubmenu(event: Event): void {
    const { submenu, itemMenu } = this;

    if (this.hasContains(itemMenu, event)) {
      return;
    }
    submenu?.classList.remove('header__submenu_open');
  }

  hasContains(element: Element, event: Event): boolean {
    if (event.target instanceof Node && element.contains(event.target)) {
      return true;
    } else {
      return false;
    }
  }
}
export { ItemMenuWithSubmenu };
