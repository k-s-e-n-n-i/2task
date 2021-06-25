import * as $ from 'jquery';
declare let jQuery: any;

$(function () {
  $('.header__menu-mobile').on('click', handleMenuMobileClick);

  function handleMenuMobileClick() {
    let menu = $(this).closest('.header__links').find('.header__block-menu');
    let menuIcon = $(this).closest('.header__links').find('.header__menu-mobile');
    console.log(menuIcon);

    if (menu.hasClass('header__block-menu_mobile')) {
      menu.removeClass('header__block-menu_mobile');
      menu.addClass('header__block-menu_hidden');
      menuIcon.removeClass('header__menu-mobile_cross');
      console.log(menuIcon);
    } else {
      menu.addClass('header__block-menu_mobile');
      menu.removeClass('header__block-menu_hidden');
      menuIcon.addClass('header__menu-mobile_cross');
    }
  }
});
