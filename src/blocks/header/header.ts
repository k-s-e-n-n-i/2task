$(function () {
  $('.header__menu-mobile').on('click', handleMenuMobileClick);

  function handleMenuMobileClick() {
    let menu = $(this).closest('.header__content-container').find('.header__links');
    let menuIcon = $(this);

    if (menu.hasClass('header__links_mobile')) {
      menu.removeClass('header__links_mobile');
      menu.addClass('header__links_hidden');
      menuIcon.removeClass('header__menu-mobile_cross');
    } else {
      menu.addClass('header__links_mobile');
      menu.removeClass('header__links_hidden');
      menuIcon.addClass('header__menu-mobile_cross');
    }
  }
});
