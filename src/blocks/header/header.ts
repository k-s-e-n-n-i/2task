$(function () {
  $('.js-header__menu-mobile').on('click', handleMenuMobileClick);

  function handleMenuMobileClick(this: HTMLElement) {
    let menu = $(this).closest('.header__content-container').find('.header__links');
    let menuIcon = $(this);

    menu.toggleClass('header__links_mobile header__links_hidden');
    menuIcon.toggleClass('header__menu-mobile_cross');
  }

  $('.js-header__menu-li_expand').on('click', handleSubmenuClick);

  function handleSubmenuClick(this: HTMLElement) {
    $(this).find('.header__submenu').toggleClass('header__submenu-open');
  }
});
