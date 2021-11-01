import { getElementBySelector } from '../layout/layout';

interface Options {
  dropdown: HTMLElement | null;
  hasButtons?: boolean;
  valueDefault: string;
  maxSum?: number;
  wordsFormSum?: string[];
  countSum?: boolean;
  items: Items[];
}

interface Items {
  text: string;
  number: number;
  countAdditionally: boolean;
  wordsForm: string[];
}

const defaultOptions: Options = {
  dropdown: null,
  hasButtons: true,
  valueDefault: 'Выбрать',
  maxSum: 10,
  wordsFormSum: [],
  countSum: true,
  items: [],
};

class Dropdown {
  opt: Options = defaultOptions;
  it: HTMLElement | null = null;
  field: HTMLElement | null = null;
  items: HTMLElement | null = null;
  incrementElements: NodeListOf<Element> | null = null;
  decrementElements: NodeListOf<Element> | null = null;
  numbers: number[] = [];
  records: NodeListOf<Element> | null = null;
  numbersElements: NodeListOf<Element> | null = null;
  buttonClean: HTMLElement | null = null;
  buttonOk: HTMLElement | null = null;

  constructor(options: Options) {
    this.opt = { ...defaultOptions, ...options };
    this.init();
  }

  init() {
    this.setValuesToField();
    this.initStartStateNumbers();

    if (this.it != null) {
      this.field?.addEventListener('click', () => {
        this.handleDropwownClick();
      });

      this.decrementElements?.forEach((item, i) => {
        this.decrementElements
          ? this.decrementElements[i].addEventListener('click', () => {
              this.handleDropdownDecreaseValueClick(i);
            })
          : 0;
      });

      this.incrementElements?.forEach((item, i) => {
        this.incrementElements
          ? this.incrementElements[i].addEventListener('click', () => {
              this.handleDropdownIncreaseValueClick(i);
            })
          : 0;
      });

      document.addEventListener('click', (event: Event) => {
        event.target ? this.hideDropdown(event.target) : 0;
      });

      if (this.opt.hasButtons == null) {
        return;
      }

      this.buttonOk?.addEventListener('click', (event) => {
        this.handleDropdownOkClick(event);
      });

      this.buttonClean?.addEventListener('click', (event) => {
        this.handleDropdownCleanClick(event);
      });
    }
  }

  setValuesToField() {
    if (this.opt.dropdown != null) {
      this.it = this.opt.dropdown;
      this.field = getElementBySelector(this.it, '.dropdown__field');
      this.items = getElementBySelector(this.it, '.dropdown__items');

      let items: Items[] = [];
      for (let key in this.opt.items) {
        items[key] = this.opt.items[key];
      }

      const numbers: number[] = [];
      items.reverse().forEach((item) => {
        this.prependItems(item);
        numbers.unshift(item.number);
      });
      this.numbers = numbers;

      this.incrementElements = this.items.querySelectorAll('.dropdown__number-change_incremented');
      this.decrementElements = this.items.querySelectorAll('.dropdown__number-change_decremented');
      this.records = this.items.querySelectorAll('.dropdown__record-name');
      this.numbersElements = this.items.querySelectorAll('.dropdown__number');

      if (this.opt.hasButtons) {
        this.buttonClean = getElementBySelector(this.it, '.js-dropdown__btns .dropdown__btn-link_clean');
        this.buttonOk = getElementBySelector(this.it, '.js-dropdown__btns .dropdown__btn-link_ok');
      }
    }
  }

  prependItems(item: Items) {
    const line = document.createElement('div');
    line.className = 'dropdown__items-line';

    const name = document.createElement('h3');
    name.className = 'dropdown__record-name';
    name.innerHTML = `${item.text}`;

    const changeBlock = document.createElement('div');
    changeBlock.className = 'dropdown__number-change-block';

    const minus = document.createElement('div');
    minus.className =
      'dropdown__number-change dropdown__number-change_decremented js-dropdown__number-change_decremented';
    minus.innerHTML = '-';

    const number = document.createElement('span');
    number.className = 'dropdown__number';
    number.innerHTML = `${item.number}`;

    const plus = document.createElement('div');
    plus.className =
      'dropdown__number-change dropdown__number-change_incremented js-dropdown__number-change_incremented';
    plus.innerHTML = '+';

    changeBlock.append(minus);
    changeBlock.append(number);
    changeBlock.append(plus);

    line.append(name);
    line.append(changeBlock);

    this.items?.prepend(line);
  }

  initStartStateNumbers() {
    if (this.opt.maxSum) {
      let sum = 0;
      const maxSum: number = this.opt.maxSum;
      let sumMoreThenMax = false;
      this.numbers.forEach((num, i) => {
        if (num == 0) {
          this.decrementElements
            ? this.decrementElements[i].classList.add('dropdown__number-change_disable')
            : 0;
        }

        if (sumMoreThenMax) {
          this.numbers[i] = 0;
        }
        if (sum + num > maxSum && !sumMoreThenMax) {
          this.numbers[i] = num - (sum + num - maxSum);
          sumMoreThenMax = true;
        }

        !sumMoreThenMax ? (sum = sum + num) : (sum = maxSum);
      });
      this.updateNumbers();

      if (sum == maxSum) {
        this.incrementElements?.forEach((item) => {
          item.classList.add('dropdown__number-change_disable');
        });
      }
    }

    this.outputInDropdown();

    if (this.countSumAll() == 0) {
      this.buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
    }
  }

  updateNumbers() {
    this.numbers.forEach((num, i) => {
      this.numbersElements ? (this.numbersElements[i].innerHTML = num.toString()) : 0;
    });
  }

  handleDropwownClick() {
    this.items?.classList.toggle('dropdown__items_hidden');
    this.field?.classList.toggle('dropdown__field_actived');
  }

  handleDropdownDecreaseValueClick(iNumber: number) {
    let number: number = this.numbers[iNumber];

    const min: number = 0;

    if (number > min) {
      number--;
    }

    if (number == min) {
      this.decrementElements
        ? this.decrementElements[iNumber].classList.add('dropdown__number-change_disable')
        : 0;
    }

    this.incrementElements?.forEach((item) => {
      item.classList.remove('dropdown__number-change_disable');
    });

    this.numbers[iNumber] = number;
    this.updateNumbers();

    if (this.opt.hasButtons) {
      let allNumber: number = 0;

      this.numbers.forEach((item, i) => {
        allNumber = allNumber + this.numbers[i];
      });

      if (allNumber == 0) {
        this.buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
      }
    }

    this.outputInDropdown();
  }

  handleDropdownIncreaseValueClick(iNumber: number) {
    if (this.opt.maxSum) {
      let max: number = this.opt.maxSum;

      let allNumber: number = 0;
      this.numbers.forEach((item, i) => {
        allNumber = allNumber + this.numbers[i];
      });
      allNumber++;

      if (allNumber == max + 1) {
        return;
      }

      let newNumber: number = 0;
      const number: number = this.numbers[iNumber];

      if (allNumber <= max) {
        newNumber = number + 1;
        this.numbersElements ? (this.numbersElements[iNumber].innerHTML = newNumber.toString()) : 0;

        this.decrementElements
          ? this.decrementElements[iNumber].classList.remove('dropdown__number-change_disable')
          : 0;
      }

      if (allNumber == max) {
        this.incrementElements?.forEach((item, i) => {
          this.incrementElements
            ? this.incrementElements[i].classList.add('dropdown__number-change_disable')
            : 0;
        });
      }

      this.numbers[iNumber] = newNumber;
      this.updateNumbers();
    }

    if (this.opt.hasButtons) {
      this.buttonClean?.classList.remove('dropdown__btn-link_clean_hidden');
    }

    this.outputInDropdown();
  }

  outputInDropdown() {
    let sumAll: number = this.countSumAll();
    let wordAll: string = '';
    let outputPhrase = '';
    const fieldValues: string[] = [];

    if (this.opt.countSum && this.opt.wordsFormSum) {
      wordAll = this.declOfNum(sumAll, this.opt.wordsFormSum);
      fieldValues[0] = `${sumAll} ${wordAll}`;

      this.opt.items.forEach((item, i) => {
        if (item.countAdditionally) {
          fieldValues[i + 1] = this.setPhraseForField(i);
        }
      });
    } else {
      this.opt.items.forEach((item, i) => {
        fieldValues[i] = this.setPhraseForField(i);
      });
    }

    fieldValues.forEach((item, i) => {
      if (item != '') {
        outputPhrase == '' ? (outputPhrase = `${item}`) : (outputPhrase = `${outputPhrase}, ${item}`);
      }
    });

    if (this.field != null) {
      sumAll != 0
        ? (this.field.innerHTML = `${outputPhrase}`)
        : (this.field.innerHTML = this.opt.valueDefault);
    }
  }

  countSumAll(): number {
    let sum: number = 0;
    this.numbers.forEach((num) => {
      sum = sum + num;
    });

    return sum;
  }

  setPhraseForField(iNumber: number) {
    let phrase = '';
    const number: number = this.numbers[iNumber];
    const word: string = this.declOfNum(number, this.opt.items[iNumber].wordsForm);

    number != 0 ? (phrase = `${number} ${word}`) : (phrase = '');

    return phrase;
  }

  declOfNum(n: number, textForms: string[]): string {
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
    this.field?.click();
  }

  handleDropdownCleanClick(event: Event) {
    event.preventDefault();
    this.numbers.forEach((item, i) => {
      this.numbers[i] = 0;
      this.decrementElements ? this.decrementElements[i].classList.add('dropdown__number-change_disable') : 0;
      this.incrementElements
        ? this.incrementElements[i].classList.remove('dropdown__number-change_disable')
        : 0;
    });

    this.updateNumbers();
    this.field ? (this.field.innerHTML = this.opt.valueDefault) : 0;
    this.buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
  }

  hideDropdown(eventTarget: EventTarget): void {
    if (eventTarget instanceof Node && (eventTarget == this.field || this.items?.contains(eventTarget))) {
      return;
    }

    this.field?.classList.remove('dropdown__field_actived');
    this.items?.classList.add('dropdown__items_hidden');
  }
}

export { Dropdown };
