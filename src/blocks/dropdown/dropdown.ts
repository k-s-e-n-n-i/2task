$(function () {
  class Dropdown {
    it: HTMLElement;
    field: HTMLElement;
    items: HTMLElement;
    incrementElements: NodeListOf<Element>;
    decrementElements: NodeListOf<Element>;
    lines: NodeListOf<Element>;
    records: NodeListOf<Element>;
    numbers: NodeListOf<Element>;

    constructor(dropdown: HTMLElement) {
      this.it = dropdown;
      this.field = getElementBySelector(dropdown, '.dropdown__field');
      this.items = getElementBySelector(dropdown, '.dropdown__items');
      this.incrementElements = this.items.querySelectorAll('.dropdown__number-change_incremented');
      this.decrementElements = this.items.querySelectorAll('.dropdown__number-change_decremented');
      this.lines = this.items.querySelectorAll('.dropdown__items-line');
      this.records = this.items.querySelectorAll('.dropdown__record-name');
      this.numbers = this.items.querySelectorAll('.dropdown__number');
    }
  }

  class DropdownWithButtons extends Dropdown {
    clean: HTMLElement;

    constructor(dropdown: HTMLElement) {
      super(dropdown);
      this.clean = getElementBySelector(dropdown, '.dropdown__btn-link_clean');
    }
  }

  class DropdownNumberChange {
    numberElement: HTMLElement;
    number: number;
    numberChange: HTMLElement;
    incrementElement: HTMLElement;
    decrementElement: HTMLElement;

    constructor(numberChange: HTMLElement) {
      this.numberElement = getElementBySelector(
        getElementClosest(numberChange, '.dropdown__number-change-block'),
        '.dropdown__number'
      );
      this.number = parseInt(this.numberElement.innerHTML);
      this.numberChange = numberChange;
      this.incrementElement = getElementBySelector(
        getElementClosest(numberChange, '.dropdown__number-change-block'),
        '.dropdown__number-change_incremented'
      );
      this.decrementElement = getElementBySelector(
        getElementClosest(numberChange, '.dropdown__number-change-block'),
        '.dropdown__number-change_decremented'
      );
    }
  }

  const getElementClosest = (item: HTMLElement, selector: string): HTMLElement => {
    const element = item.closest(selector);

    if (!(element instanceof HTMLElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  };

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

  $('.js-dropdown__number-change_decremented').on('click', handleDropdownDecreaseValueClick);
  $('.js-dropdown__number-change_incremented').on('click', handleDropdownIncreaseValueClick);

  $('.js-dropdown__btns .js-link_ok').on('click', handleDropdownOkClick);
  $('.js-dropdown__btns .js-link_clean').on('click', handleDropdownCleanClick);

  function handleDropwownClick(this: HTMLElement) {
    const dropEl = getElementClosest(this, '.dropdown');
    if (dropEl.getAttribute('name') != 'date') {
      const drop = new Dropdown(dropEl);
      drop.items.classList.toggle('dropdown__items_hidden');
      this.classList.toggle('dropdown__field_actived');
    }
  }

  function handleDropdownDecreaseValueClick(this: HTMLElement) {
    const dropNumChange = new DropdownNumberChange(this);
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));

    let number: number = 0;
    let newNumber: number = 0;
    const min: number = 0;

    number = dropNumChange.number;

    if (number > min) {
      newNumber = number - 1;
      dropNumChange.numberElement.textContent = newNumber.toString();
    }

    if (number == min + 1 || number == min) {
      dropNumChange.numberChange.classList.add('dropdown__number-change_disable');
    }

    const plus = drop.incrementElements;
    for (let i = 0; i < plus.length; i++) {
      plus[i].classList.remove('dropdown__number-change_disable');
    }

    outputInDropdown(drop);

    let allNumber: number = 0;
    for (let i = 0; i < drop.numbers.length; i++) {
      allNumber = allNumber + parseInt(drop.numbers[i].innerHTML);
    }

    if (allNumber == 0) {
      if (drop.it.getAttribute('name') == 'guests') {
        const dropWithButtons = new DropdownWithButtons(drop.it);
        dropWithButtons.clean.classList.add('dropdown__btn-link_clean_hidden');
      }
    }
  }

  function handleDropdownIncreaseValueClick(this: HTMLElement) {
    const dropNumChange = new DropdownNumberChange(this);
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));

    let max: number;
    drop.it.getAttribute('name') == 'guests' ? (max = 10) : (max = 15);

    let allNumber: number = 0;
    for (let i = 0; i < drop.numbers.length; i++) {
      allNumber = allNumber + parseInt(drop.numbers[i].innerHTML);
    }
    allNumber++;

    let newNumber: number = 0;
    const number: number = dropNumChange.number || 0;
    const numberElement: HTMLElement = dropNumChange.numberElement;

    if (allNumber <= max) {
      newNumber = number + 1;
      numberElement.innerHTML = newNumber.toString();
    }

    if (allNumber == max || allNumber - 1 == max) {
      const plusList = drop.incrementElements;
      for (let i = 0; i < plusList.length; i++) {
        plusList[i].classList.add('dropdown__number-change_disable');
      }
    } else {
      const minus = dropNumChange.decrementElement;
      if (minus.classList.contains('dropdown__number-change_disable')) {
        minus.classList.remove('dropdown__number-change_disable');
      }
    }

    outputInDropdown(drop);

    if (drop.it.getAttribute('name') == 'guests') {
      const dropWithButtons = new DropdownWithButtons(drop.it);
      dropWithButtons.clean.classList.remove('dropdown__btn-link_clean_hidden');
    }
  }

  function handleDropdownOkClick(this: HTMLElement, event: JQuery.Event) {
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));

    event.preventDefault();
    drop.field.click();
    outputInDropdown(drop);
  }

  function handleDropdownCleanClick(this: HTMLElement, event: JQuery.Event) {
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));
    event.preventDefault();

    for (let i = 0; i < drop.numbers.length; i++) {
      drop.numbers[i].innerHTML = '0';
      drop.decrementElements[i].classList.add('dropdown__number-change_disable');
      drop.incrementElements[i].classList.remove('dropdown__number-change_disable');
    }

    outputInDropdown(drop);

    if (drop.it.getAttribute('name') == 'guests') {
      const dropWithButtons = new DropdownWithButtons(drop.it);
      dropWithButtons.clean.classList.add('dropdown__btn-link_clean_hidden');
    }
  }

  function outputInDropdown(drop: Dropdown) {
    let str: string = '';

    if (drop.it.getAttribute('name') == 'guests') {
      str = countQtyGuests(drop.it);
    } else if (drop.it.getAttribute('name') == 'room') {
      str = countQtyComfortRoom(drop.it);
    } else {
      str = 'Тип элемента неопределен';
    }

    drop.field.innerHTML = str;
  }

  function countQtyGuests(dropdown: HTMLElement): string {
    const drop = new Dropdown(dropdown);
    let sumGuests: number = 0;
    let sumBaby: number = 0;

    for (let i = 0; i < drop.records.length; i++) {
      const number: number = parseInt(drop.numbers[i].innerHTML);
      const record: string = drop.records[i].innerHTML;

      if (number > 0 && record != 'младенцы') {
        sumGuests = sumGuests + number;
      }
      if (number > 0 && record == 'младенцы') {
        sumBaby = sumBaby + number;
      }
    }

    const textGuest: string = declensionWords('гостя', sumGuests);
    const textBaby: string = declensionWords('младенца', sumBaby);
    let str: string = '';

    sumGuests == 0 ? (str = 'Сколько гостей') : (str = str);
    sumGuests != 0 && sumBaby != 0
      ? (str = `${sumGuests} ${textGuest}, ${sumBaby} ${textBaby}`)
      : (str = str);
    sumGuests != 0 && sumBaby == 0 ? (str = `${sumGuests} ${textGuest}`) : (str = str);

    return str;
  }

  function countQtyComfortRoom(dropdown: HTMLElement): string {
    const drop = new Dropdown(dropdown);
    let str: string = '';
    let textItem: string;

    for (let i = 0; i < drop.records.length; i++) {
      const number: number = parseInt(drop.numbers[i].innerHTML);
      const record: string = drop.records[i].innerHTML;

      textItem = declensionWords(record, number);

      if (number > 0) {
        str = str + number + ' ' + textItem + ', ';
      }
    }

    str = str.substr(0, str.length - 2);
    str == '' ? (str = 'Выберите удобства') : (str = str);

    return str;
  }

  function declensionWords(item: string, number: number) {
    let itemMas: string[] = [];

    switch (item.toLowerCase()) {
      case 'спальни':
        itemMas = ['спальня', 'спальни', 'спален'];
        break;
      case 'кровати':
        itemMas = ['кровать', 'кровати', 'кроватей'];
        break;
      case 'ванные комнаты':
        itemMas = ['ванная комната', 'ванные комнаты', 'ванных комнат'];
        break;
      case 'гостя':
        itemMas = ['гость', 'гостя', 'гостей'];
        break;
      case 'младенца':
        itemMas = ['младенец', 'младенца', 'младенцев'];
        break;
      default:
        itemMas = [
          'Ошибка: не определена категория',
          'Ошибка: не определена категория',
          'Ошибка: не определена категория',
        ];
    }

    return declOfNum(number, itemMas);
  }

  function declOfNum(n: number, textForms: string[]) {
    // взято https://realadmin.ru/coding/sklonenie-na-javascript.html
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForms[1];
    }
    if (n1 == 1) {
      return textForms[0];
    }
    return textForms[2];
  }
});
