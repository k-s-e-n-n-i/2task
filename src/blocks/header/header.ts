import { ItemMenuWithSubmenu } from './item-menu-with-submenu.class';
import { MenuMobile } from './menu-mobile.class';

document.querySelectorAll('.js-header__menu-li_expand').forEach((item) => {
  if (item.querySelector('.header__submenu')) {
    new ItemMenuWithSubmenu(item);
  }
});

document.querySelectorAll('.header').forEach((item) => {
  new MenuMobile(item);
});
