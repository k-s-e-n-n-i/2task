$(function () {
  const getElementBySelector = (lineItem: HTMLElement, selector: string): HTMLElement => {
    const element = lineItem.querySelector(selector);

    if (!(element instanceof HTMLElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  };

  $('.js-dropdown__dropdown').on('click', handleDropwownClick);

  $('.js-dropdown__inc-qty-minus').on('click', handleDropdownMinusClick);
  $('.js-dropdown__inc-qty-plus').on('click', handleDropdownPlusClick);

  $('.js-dropdown__btns .js-link_ok').on('click', handleDropdownOkClick);
  $('.js-dropdown__btns .js-link_clean').on('click', handleDropdownCleanClick);

  function handleDropwownClick(this: HTMLElement) {
    const block_list = $(this).closest('.dropdown').find('.dropdown__dropdown-items');

    if (block_list.hasClass('dropdown__dropdown-items_hide')) {
      block_list.removeClass('dropdown__dropdown-items_hide');
      $(this).addClass('dropdown__dropdown_items-show');
    } else {
      block_list.addClass('dropdown__dropdown-items_hide');
      $(this).removeClass('dropdown__dropdown_items-show');
    }
  }

  function handleDropdownMinusClick(this: HTMLElement) {
    let qtyElem: JQuery<HTMLElement>,
      qty: number = 0,
      newQty: number = 0,
      min: number = 0;

    qtyElem = $(this).closest('.dropdown__block-qty').find('span');
    qty = parseInt(qtyElem.html());

    if (qty > min) {
      newQty = qty - 1;
      qtyElem.text(newQty);
    }

    if (qty == min + 1 || qty == min) {
      $(this).addClass('dropdown__inc-qty_disable');
    }
    let plus = $(this).closest('.dropdown__dropdown-items').find('.dropdown__inc-qty-plus');
    for (let i = 0; i < plus.length; i++) {
      plus.removeClass('dropdown__inc-qty_disable');
    }

    outputInDropdown($(this).closest('.dropdown'));
  }

  function handleDropdownPlusClick(this: HTMLElement) {
    let qtyElem: JQuery<HTMLElement>,
      qty: number = 0,
      newQty: number = 0,
      max: number,
      spans,
      allQty: number = 0;

    if ($(this).closest('.dropdown').attr('name') == 'guests') {
      max = 10;
    } else {
      max = 15;
    }

    spans = $(this).closest('.dropdown__dropdown-items').find('span');
    for (let i = 0; i < spans.length; i++) {
      allQty = allQty + parseInt(spans[i].innerHTML);
    }
    allQty++;

    qtyElem = $(this).closest('.dropdown__block-qty').find('span');
    qty = parseInt(qtyElem.html());

    if (allQty <= max) {
      newQty = qty + 1;
      qtyElem.text(newQty);
    }

    if (allQty == max || allQty - 1 == max) {
      let plus = $(this).closest('.dropdown__dropdown-items').find('.dropdown__inc-qty-plus');
      for (let i = 0; i < plus.length; i++) {
        plus.addClass('dropdown__inc-qty_disable');
      }
    } else {
      let minus = $(this).closest('.dropdown__block-qty').find('.dropdown__inc-qty-minus');
      if (minus.hasClass('dropdown__inc-qty_disable')) {
        minus.removeClass('dropdown__inc-qty_disable');
      }
    }

    outputInDropdown($(this).closest('.dropdown'));

    $(this)
      .closest('.dropdown__dropdown-items')
      .find('.dropdown__btns .link_clean')
      .css('display', 'initial');
    $(this)
      .closest('.dropdown__dropdown-items')
      .find('.dropdown__btns')
      .removeClass('dropdown__btns_flex-end');
  }

  function handleDropdownOkClick(this: HTMLElement, event: JQuery.Event) {
    event.preventDefault();
    $(this).closest('.dropdown').find('.dropdown__dropdown').trigger('click');

    outputInDropdown($(this).closest('.dropdown'));
  }

  function handleDropdownCleanClick(this: HTMLElement, event: JQuery.Event) {
    event.preventDefault();
    let items = $(this).closest('.dropdown__dropdown-items');
    items.find('.dropdown__block-qty').find('span').html('0');
    items.find('.dropdown__inc-qty-minus').addClass('dropdown__inc-qty_disable');
    items.find('.dropdown__inc-qty-plus').removeClass('dropdown__inc-qty_disable');

    outputInDropdown($(this).closest('.dropdown'));

    $(this).css('display', 'none');
    $(this).closest('.dropdown__btns').addClass('dropdown__btns_flex-end');
  }

  function outputInDropdown(dropdown: JQuery<HTMLElement>) {
    let str: string = '';

    if (dropdown.attr('name') == 'guests') {
      str = countQtyGuests(dropdown);
    } else if (dropdown.attr('name') == 'room') {
      str = countQtyComfortRoom(dropdown);
    } else {
      str = 'Тип элемента неопределен';
    }

    if (str.length > 19) {
      str = str.substr(0, 20) + '...';
    }
    dropdown.find('.dropdown__dropdown').html(str);
  }

  function countQtyGuests(dropdown: JQuery<HTMLElement>): string {
    let lines = dropdown.find('.dropdown__items-line'),
      str: string = '',
      sumGuests: number = 0,
      sumBaby: number = 0,
      qty: HTMLElement,
      item: HTMLElement,
      textGuest: string,
      textBaby: string;

    for (let i = 0; i < lines.length; i++) {
      qty = getElementBySelector(lines[i], '.dropdown__block-qty span');
      item = getElementBySelector(lines[i], 'h3');

      if (parseInt(qty.innerHTML) > 0 && item.innerHTML != 'младенцы') {
        sumGuests = sumGuests + parseInt(qty.innerHTML);
      }
      if (parseInt(qty.innerHTML) > 0 && item.innerHTML == 'младенцы') {
        sumBaby = sumBaby + parseInt(qty.innerHTML);
      }
    }

    textGuest = declensionWords('гостя', sumGuests);
    textBaby = declensionWords('младенца', sumBaby);

    if (sumGuests == 0) {
      str = 'Сколько гостей';
    }
    if (sumGuests != 0 && sumBaby != 0) {
      str = `${sumGuests} ${textGuest}, ${sumBaby} ${textBaby}`;
    }
    if (sumGuests != 0 && sumBaby == 0) {
      str = `${sumGuests} ${textGuest}`;
    }

    return str;
  }

  function countQtyComfortRoom(dropdown: JQuery<HTMLElement>): string {
    let lines = dropdown.find('.dropdown__items-line'),
      str: string = '',
      qty: HTMLElement,
      item: HTMLElement,
      textItem: string;

    for (let i = 0; i < lines.length; i++) {
      qty = getElementBySelector(lines[i], '.dropdown__block-qty span');
      item = getElementBySelector(lines[i], 'h3');
      textItem = declensionWords(item.innerHTML, parseInt(qty.innerHTML));

      if (parseInt(qty.innerHTML) > 0) {
        str = str + qty.innerHTML + ' ' + textItem + ', ';
      }
    }

    str = str.substr(0, str.length - 2);
    if (str == '') {
      str = 'Выберите удобства';
    }

    return str;
  }

  function declensionWords(item: string, qty: number) {
    const words: string[][] = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];
    let word: string = '';
    const it5to10 =
      qty % 10 == 0 || qty % 10 == 5 || qty % 10 == 6 || qty % 10 == 7 || qty % 10 == 8 || qty % 10 == 9;
    const it2to4 = qty % 10 == 2 || qty % 10 == 3 || qty % 10 == 4;

    words.forEach((itemMas) => {
      if (item.toLowerCase() == itemMas[1].toLowerCase()) {
        if (qty <= 20 && qty >= 5) {
          word = itemMas[2];
        } else {
          if (it5to10) {
            word = itemMas[2];
          }
          if (qty % 10 == 1) {
            word = itemMas[0];
          }
          if (it2to4) {
            word = itemMas[1];
          }
        }
      }
    });

    return word;
  }
});
