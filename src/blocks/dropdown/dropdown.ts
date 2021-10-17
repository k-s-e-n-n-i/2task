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
    buttonClean: HTMLElement | null = null;
    buttonOk: HTMLElement | null = null;

    constructor(dropdown: HTMLElement, hasButtons: boolean) {
      this.it = dropdown;
      this.field = getElementBySelector(dropdown, '.dropdown__field');
      this.items = getElementBySelector(dropdown, '.dropdown__items');
      this.incrementElements = this.items.querySelectorAll('.dropdown__number-change_incremented');
      this.decrementElements = this.items.querySelectorAll('.dropdown__number-change_decremented');
      this.lines = this.items.querySelectorAll('.dropdown__items-line');
      this.records = this.items.querySelectorAll('.dropdown__record-name');
      this.numbers = this.items.querySelectorAll('.dropdown__number');

      if (hasButtons) {
        this.buttonClean = getElementBySelector(this.it, '.js-dropdown__btns .dropdown__btn-link_clean');
        this.buttonOk = getElementBySelector(this.it, '.js-dropdown__btns .dropdown__btn-link_ok');
      }
    }

    init() {
      this.field.addEventListener('click', () => {
        this.handleDropwownClick();
      });

      this.decrementElements.forEach((item, i) => {
        this.decrementElements[i].addEventListener('click', () => {
          this.handleDropdownDecreaseValueClick(i, item);
        });
      });

      this.incrementElements.forEach((item, i) => {
        this.incrementElements[i].addEventListener('click', () => {
          this.handleDropdownIncreaseValueClick(i);
        });
      });

      this.buttonOk?.addEventListener('click', (event) => {
        this.handleDropdownOkClick(event);
      });

      this.buttonClean?.addEventListener('click', (event) => {
        this.handleDropdownCleanClick(event);
      });
    }

    handleDropwownClick() {
      this.items.classList.toggle('dropdown__items_hidden');
      this.field.classList.toggle('dropdown__field_actived');
    }

    handleDropdownDecreaseValueClick(i: number, numberChange: Element) {
      let number: number = 0;
      let newNumber: number = 0;
      const min: number = 0;

      number = parseInt(this.numbers[i].innerHTML);

      if (number > min) {
        newNumber = number - 1;
        this.numbers[i].textContent = newNumber.toString();
      }

      if (number == min + 1 || number == min) {
        numberChange.classList.add('dropdown__number-change_disable');
      }

      const plusList = this.incrementElements;
      for (let i = 0; i < plusList.length; i++) {
        plusList[i].classList.remove('dropdown__number-change_disable');
      }

      this.outputInDropdown();

      if (this.buttonClean) {
        let allNumber: number = 0;

        for (let i = 0; i < this.numbers.length; i++) {
          allNumber = allNumber + parseInt(this.numbers[i].innerHTML);
        }

        if (allNumber == 0) {
          this.buttonClean.classList.add('dropdown__btn-link_clean_hidden');
        }
      }
    }

    handleDropdownIncreaseValueClick(iRecord: number) {
      let max: number;
      this.it.getAttribute('name') == 'guests' ? (max = 10) : (max = 15);

      let allNumber: number = 0;
      for (let i = 0; i < this.numbers.length; i++) {
        allNumber = allNumber + parseInt(this.numbers[i].innerHTML);
      }
      allNumber++;

      let newNumber: number = 0;
      const number: number = parseInt(this.numbers[iRecord].innerHTML) || 0;
      const numberElement: Element = this.numbers[iRecord];

      if (allNumber <= max) {
        newNumber = number + 1;
        numberElement.innerHTML = newNumber.toString();
      }

      if (allNumber == max || allNumber - 1 == max) {
        const plusList = this.incrementElements;
        for (let i = 0; i < plusList.length; i++) {
          plusList[i].classList.add('dropdown__number-change_disable');
        }
      } else {
        const minus = this.decrementElements[iRecord];
        minus.classList.remove('dropdown__number-change_disable');
      }

      this.outputInDropdown();

      if (this.buttonClean) {
        this.buttonClean.classList.remove('dropdown__btn-link_clean_hidden');
      }
    }

    outputInDropdown() {
      let str: string = '';

      switch (this.it.getAttribute('name')) {
        case 'guests':
          str = this.countQtyGuests();
          break;
        case 'room':
          str = this.countQtyComfortRoom();
          break;
        default:
          str = 'Тип элемента не определен';
      }

      this.field.innerHTML = str;
    }

    countQtyGuests(): string {
      let sumGuests: number = 0;
      let sumBaby: number = 0;

      for (let i = 0; i < this.records.length; i++) {
        const number: number = parseInt(this.numbers[i].innerHTML);
        const record: string = this.records[i].innerHTML;

        number > 0 && record != 'младенцы' ? (sumGuests = sumGuests + number) : (sumGuests = sumGuests);
        number > 0 && record == 'младенцы' ? (sumBaby = sumBaby + number) : (sumBaby = sumBaby);
      }

      const textGuest: string = this.declensionWords('гостя', sumGuests);
      const textBaby: string = this.declensionWords('младенца', sumBaby);
      let str: string = '';

      sumGuests == 0 ? (str = 'Сколько гостей') : (str = str);
      sumGuests != 0 && sumBaby != 0
        ? (str = `${sumGuests} ${textGuest}, ${sumBaby} ${textBaby}`)
        : (str = str);
      sumGuests != 0 && sumBaby == 0 ? (str = `${sumGuests} ${textGuest}`) : (str = str);

      return str;
    }

    countQtyComfortRoom(): string {
      let str: string = '';
      let textItem: string;

      for (let i = 0; i < this.records.length; i++) {
        const number: number = parseInt(this.numbers[i].innerHTML);
        const record: string = this.records[i].innerHTML;

        textItem = this.declensionWords(record, number);

        number > 0 ? (str = `${str}${number} ${textItem}, `) : (str = str);
      }

      str = str.substr(0, str.length - 2);
      str == '' ? (str = 'Выберите удобства') : (str = str);

      return str;
    }

    declensionWords(item: string, number: number) {
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

      return this.declOfNum(number, itemMas);
    }

    declOfNum(n: number, textForms: string[]) {
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

    handleDropdownOkClick(event: Event) {
      event.preventDefault();
      this.field.click();
      this.outputInDropdown();
    }

    handleDropdownCleanClick(event: Event) {
      event.preventDefault();

      for (let i = 0; i < this.numbers.length; i++) {
        this.numbers[i].innerHTML = '0';
        this.decrementElements[i].classList.add('dropdown__number-change_disable');
        this.incrementElements[i].classList.remove('dropdown__number-change_disable');
      }

      this.outputInDropdown();

      this.buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
    }
  }

  const getElementBySelector = (lineItem: HTMLElement, selector: string): HTMLElement => {
    const element = lineItem.querySelector(selector);

    if (!(element instanceof HTMLElement)) {
      throw new Error(
        `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
      );
    }

    return element;
  };

  $('.js-dropdown').each((i, item) => {
    switch (item.getAttribute('name')) {
      case 'date':
        break;
      default: {
        if (item.querySelector('.dropdown__btns')) {
          new Dropdown(item, true).init();
        } else {
          new Dropdown(item, false).init();
        }
      }
    }
  });
});
