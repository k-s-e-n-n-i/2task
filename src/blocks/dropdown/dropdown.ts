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
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));
    drop.items.classList.toggle('dropdown__items_hidden');
    this.classList.toggle('dropdown__field_actived');
  }

  function handleDropdownDecreaseValueClick(this: HTMLElement) {
    const dropNumChange = new DropdownNumberChange(this);
    const drop = new Dropdown(getElementClosest(this, '.dropdown'));

    let number: number = 0,
      newNumber: number = 0;
    const min: number = 0;

    number = dropNumChange.number;

    if (number > min) {
      newNumber = number - 1;
      dropNumChange.numberElement.textContent = newNumber.toString();
    }

    if (number == min + 1 || number == min) {
      dropNumChange.numberChange.classList.add('dropdown__number-change_disable');
    }
    let plus = drop.incrementElements;

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
