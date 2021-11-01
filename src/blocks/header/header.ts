import { ItemMenuWithSubmenu } from './header-class.ItemMenuWithSubmenu';
import { MenuMobile } from './header-class.MenuMobile';

document.querySelectorAll('.js-header__menu-li_expand').forEach((item) => {
  if (item.querySelector('.header__submenu')) {
    new ItemMenuWithSubmenu(item);
  }
});

document.querySelectorAll('.header').forEach((item) => {
  new MenuMobile(item);
});
