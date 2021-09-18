$(function () {
  $('.js-header__menu-mobile').on('click', handleMenuMobileClick);

  function handleMenuMobileClick(this: HTMLElement) {
    let menu = $(this).closest('.header__content-container').find('.header__links');
    let menuIcon = $(this);

    menu.toggleClass('header__links_mobile header__links_hidden');
    menuIcon.toggleClass('header__menu-mobile_cross');
  }

  $('.js-header__menu-li_expand').on('click', handleSubmenuClick);

  function handleSubmenuClick(e: JQuery.ClickEvent) {
    const itSubmenu = $(e.target).hasClass('header__submenu') || $(e.target).hasClass('header__submenu-li');

    if (itSubmenu) {
      e.stopPropagation();
    } else {
      $(e.target)
        .closest('.header__menu-li_expand')
        .find('.header__submenu')
        .toggleClass('header__submenu_open');
    }
  }

  $(document).on('click', closeHeaderSubmenu);

  function closeHeaderSubmenu(e: JQuery.ClickEvent) {
    const elementsSubmenu = $(e.target).closest('.header__menu-li_expand').length != 0;
    const openSubmenu = $('.header__submenu').hasClass('header__submenu_open');

    if (!elementsSubmenu && openSubmenu) {
      $('.header__submenu').removeClass('header__submenu_open');
    }
  }
});
