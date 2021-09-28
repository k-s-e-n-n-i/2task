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

  $('.js-dropdown__field').on('click', handleDropwownClick);

  $('.js-dropdown__number-change_decremented ').on('click', handleDropdownDecreaseValueClick);
  $('.js-dropdown__number-change_incremented ').on('click', handleDropdownIncreaseValueClick);

  $('.js-dropdown__btns .js-link_ok').on('click', handleDropdownOkClick);
  $('.js-dropdown__btns .js-link_clean').on('click', handleDropdownCleanClick);

  function handleDropwownClick(this: HTMLElement) {
    const dropdownItems = $(this).closest('.dropdown').find('.dropdown__items');

    dropdownItems.toggleClass('dropdown__items_hidden');
    $(this).toggleClass('dropdown__field_actived');
  }

  function handleDropdownDecreaseValueClick(this: HTMLElement) {
    let numberElement: JQuery<HTMLElement>,
      number: number = 0,
      newNumber: number = 0,
      min: number = 0,
      allNumber: number = 0;

    numberElement = $(this).closest('.dropdown__number-change-block').find('.dropdown__number');
    number = parseInt(numberElement.html());

    if (number > min) {
      newNumber = number - 1;
      numberElement.text(newNumber);
    }

    if (number == min + 1 || number == min) {
      $(this).addClass('dropdown__number-change_disable');
    }
    let plus = $(this).closest('.dropdown__items').find('.dropdown__number-change_incremented ');
    for (let i = 0; i < plus.length; i++) {
      plus.removeClass('dropdown__number-change_disable');
    }

    outputInDropdown($(this).closest('.dropdown'));

    const spans = $(this).closest('.dropdown__items').find('.dropdown__number');
    for (let i = 0; i < spans.length; i++) {
      allNumber = allNumber + parseInt(spans[i].innerHTML);
    }

    if (allNumber == 0) {
      $(this)
        .closest('.dropdown__items')
        .find('.dropdown__btn-link_clean')
        .addClass('dropdown__btn-link_clean_hidden');
    }
  }

  function handleDropdownIncreaseValueClick(this: HTMLElement) {
    let numberElement: JQuery<HTMLElement>,
      number: number = 0,
      newNumber: number = 0,
      max: number,
      spans,
      allNumber: number = 0;

    if ($(this).closest('.dropdown').attr('name') == 'guests') {
      max = 10;
    } else {
      max = 15;
    }

    spans = $(this).closest('.dropdown__items').find('.dropdown__number');
    for (let i = 0; i < spans.length; i++) {
      allNumber = allNumber + parseInt(spans[i].innerHTML);
    }
    allNumber++;

    numberElement = $(this).closest('.dropdown__number-change-block').find('.dropdown__number');
    number = parseInt(numberElement.html());

    if (allNumber <= max) {
      newNumber = number + 1;
      numberElement.text(newNumber);
    }

    if (allNumber == max || allNumber - 1 == max) {
      let plus = $(this).closest('.dropdown__items').find('.dropdown__number-change_incremented ');
      for (let i = 0; i < plus.length; i++) {
        plus.addClass('dropdown__number-change_disable');
      }
    } else {
      let minus = $(this)
        .closest('.dropdown__number-change-block')
        .find('.dropdown__number-change_decremented ');
      if (minus.hasClass('dropdown__number-change_disable')) {
        minus.removeClass('dropdown__number-change_disable');
      }
    }

    outputInDropdown($(this).closest('.dropdown'));

    $(this)
      .closest('.dropdown__items')
      .find('.dropdown__btn-link_clean')
      .removeClass('dropdown__btn-link_clean_hidden');
  }

  function handleDropdownOkClick(this: HTMLElement, event: JQuery.Event) {
    event.preventDefault();
    $(this).closest('.dropdown').find('.dropdown__field').trigger('click');

    outputInDropdown($(this).closest('.dropdown'));
  }

  function handleDropdownCleanClick(this: HTMLElement, event: JQuery.Event) {
    event.preventDefault();
    let items = $(this).closest('.dropdown__items');
    items.find('.dropdown__number-change-block .dropdown__number').html('0');
    items.find('.dropdown__number-change_decremented').addClass('dropdown__number-change_disable');
    items.find('.dropdown__number-change_incremented').removeClass('dropdown__number-change_disable');

    outputInDropdown($(this).closest('.dropdown'));

    $(this).closest('.dropdown__btn-link_clean').addClass('dropdown__btn-link_clean_hidden');
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

    dropdown.find('.dropdown__field').html(str);
  }

  function countQtyGuests(dropdown: JQuery<HTMLElement>): string {
    let lines = dropdown.find('.dropdown__items-line'),
      str: string = '',
      sumGuests: number = 0,
      sumBaby: number = 0,
      number: HTMLElement,
      item: HTMLElement,
      textGuest: string,
      textBaby: string;

    for (let i = 0; i < lines.length; i++) {
      number = getElementBySelector(lines[i], '.dropdown__number-change-block .dropdown__number');
      item = getElementBySelector(lines[i], 'h3');

      if (parseInt(number.innerHTML) > 0 && item.innerHTML != 'младенцы') {
        sumGuests = sumGuests + parseInt(number.innerHTML);
      }
      if (parseInt(number.innerHTML) > 0 && item.innerHTML == 'младенцы') {
        sumBaby = sumBaby + parseInt(number.innerHTML);
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
      number: HTMLElement,
      item: HTMLElement,
      textItem: string;

    for (let i = 0; i < lines.length; i++) {
      number = getElementBySelector(lines[i], '.dropdown__number-change-block .dropdown__number');
      item = getElementBySelector(lines[i], 'h3');
      textItem = declensionWords(item.innerHTML, parseInt(number.innerHTML));

      if (parseInt(number.innerHTML) > 0) {
        str = str + number.innerHTML + ' ' + textItem + ', ';
      }
    }

    str = str.substr(0, str.length - 2);
    if (str == '') {
      str = 'Выберите удобства';
    }

    return str;
  }

  function declensionWords(item: string, number: number) {
    const words: string[][] = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];
    let word: string = '';
    const it5to10 =
      number % 10 == 0 ||
      number % 10 == 5 ||
      number % 10 == 6 ||
      number % 10 == 7 ||
      number % 10 == 8 ||
      number % 10 == 9;
    const it2to4 = number % 10 == 2 || number % 10 == 3 || number % 10 == 4;

    words.forEach((itemMas) => {
      if (item.toLowerCase() == itemMas[1].toLowerCase()) {
        if (number <= 20 && number >= 5) {
          word = itemMas[2];
        } else {
          if (it5to10) {
            word = itemMas[2];
          }
          if (number % 10 == 1) {
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
