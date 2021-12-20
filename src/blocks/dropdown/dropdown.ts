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
  field: HTMLElement | null = null;
  itemsElement: HTMLElement | null = null;
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

  init(): void {
    this.setValuesToField();
    this.initStartStateNumbers();

    const {
      opt: { dropdown, hasButtons },
      field,
      decrementElements,
      incrementElements,
      buttonOk,
      buttonClean,
    } = this;

    if (dropdown != null) {
      field?.addEventListener('click', () => {
        this.handleDropwownClick();
      });

      if (decrementElements) {
        decrementElements.forEach((item, i) => {
          decrementElements[i].addEventListener('click', () => {
            this.handleDropdownDecreaseValueClick(i);
          });
        });
      }

      if (incrementElements) {
        incrementElements.forEach((item, i) => {
          incrementElements[i].addEventListener('click', () => {
            this.handleDropdownIncreaseValueClick(i);
          });
        });
      }

      document.addEventListener('click', (event: Event) => {
        event.target ? this.hideDropdown(event.target) : 0;
      });

      if (hasButtons == null) {
        return;
      }

      buttonOk?.addEventListener('click', (event) => {
        this.handleDropdownOkClick(event);
      });

      buttonClean?.addEventListener('click', (event) => {
        this.handleDropdownCleanClick(event);
      });
    }
  }

  setValuesToField(): void {
    const { dropdown, items, hasButtons } = this.opt;

    if (dropdown != null) {
      this.field = getElementBySelector(dropdown, '.dropdown__field');
      this.itemsElement = getElementBySelector(dropdown, '.dropdown__items');

      let itemsClone: Items[] = [];
      for (let key in items) {
        itemsClone[key] = items[key];
      }

      const numbers: number[] = [];
      itemsClone.reverse().forEach((item) => {
        this.prependItems(item);
        numbers.unshift(item.number);
      });
      this.numbers = numbers;

      this.incrementElements = dropdown.querySelectorAll('.dropdown__number-change_incremented');
      this.decrementElements = dropdown.querySelectorAll('.dropdown__number-change_decremented');
      this.records = dropdown.querySelectorAll('.dropdown__record-name');
      this.numbersElements = dropdown.querySelectorAll('.dropdown__number');

      if (hasButtons) {
        this.buttonClean = getElementBySelector(dropdown, '.js-dropdown__btns .dropdown__btn-link_clean');
        this.buttonOk = getElementBySelector(dropdown, '.js-dropdown__btns .dropdown__btn-link_ok');
      }
    }
  }

  prependItems(item: Items): void {
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

    this.itemsElement?.prepend(line);
  }

  initStartStateNumbers(): void {
    const {
      opt: { maxSum },
      numbers,
      decrementElements,
      incrementElements,
      buttonClean,
    } = this;

    if (maxSum) {
      let sum = 0;
      let sumMoreThenMax = false;
      numbers.forEach((num, i) => {
        if (num == 0 && decrementElements) {
          decrementElements[i].classList.add('dropdown__number-change_disable');
        }

        if (sumMoreThenMax) {
          numbers[i] = 0;
        }
        if (sum + num > maxSum && !sumMoreThenMax) {
          numbers[i] = num - (sum + num - maxSum);
          sumMoreThenMax = true;
        }

        !sumMoreThenMax ? (sum = sum + num) : (sum = maxSum);
      });
      this.updateNumbers();

      if (sum == maxSum) {
        incrementElements?.forEach((item) => {
          item.classList.add('dropdown__number-change_disable');
        });
      }
    }

    this.outputInDropdown();

    if (this.countSumAll() == 0) {
      buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
    }
  }

  updateNumbers(): void {
    const { numbersElements, numbers } = this;
    if (numbersElements) {
      numbers.forEach((num, i) => {
        numbersElements[i].innerHTML = num.toString();
      });
    }
  }

  handleDropwownClick(): void {
    const { itemsElement, field } = this;
    itemsElement?.classList.toggle('dropdown__items_hidden');
    field?.classList.toggle('dropdown__field_actived');
  }

  handleDropdownDecreaseValueClick(iNumber: number): void {
    const {
      opt: { hasButtons },
      numbers,
      decrementElements,
      incrementElements,
      buttonClean,
    } = this;

    let number: number = numbers[iNumber];
    const min: number = 0;

    if (number > min) {
      number--;
    }

    if (number == min && decrementElements) {
      decrementElements[iNumber].classList.add('dropdown__number-change_disable');
    }

    incrementElements?.forEach((item) => {
      item.classList.remove('dropdown__number-change_disable');
    });

    numbers[iNumber] = number;
    this.updateNumbers();

    if (hasButtons) {
      let allNumber: number = 0;

      numbers.forEach((item, i) => {
        allNumber = allNumber + numbers[i];
      });

      if (allNumber == 0 && buttonClean) {
        buttonClean.classList.add('dropdown__btn-link_clean_hidden');
      }
    }

    this.outputInDropdown();
  }

  handleDropdownIncreaseValueClick(iNumber: number): void {
    const {
      opt: { maxSum, hasButtons },
      numbers,
      numbersElements,
      decrementElements,
      incrementElements,
      buttonClean,
    } = this;

    if (maxSum) {
      let max: number = maxSum;
      let allNumber: number = 0;
      numbers.forEach((item, i) => {
        allNumber = allNumber + numbers[i];
      });
      allNumber++;

      if (allNumber == max + 1) {
        return;
      }

      let newNumber: number = 0;
      const number: number = numbers[iNumber];

      if (allNumber <= max && numbersElements && decrementElements) {
        newNumber = number + 1;
        numbersElements[iNumber].innerHTML = newNumber.toString();
        decrementElements[iNumber].classList.remove('dropdown__number-change_disable');
      }

      if (allNumber == max && incrementElements) {
        incrementElements.forEach((item, i) => {
          incrementElements[i].classList.add('dropdown__number-change_disable');
        });
      }

      numbers[iNumber] = newNumber;
      this.updateNumbers();
    }

    if (hasButtons && buttonClean) {
      buttonClean.classList.remove('dropdown__btn-link_clean_hidden');
    }

    this.outputInDropdown();
  }

  outputInDropdown(): void {
    const {
      opt: { valueDefault, countSum, wordsFormSum, items },
      field,
    } = this;

    let sumAll: number = this.countSumAll();
    let wordAll: string = '';
    let outputPhrase = '';
    const fieldValues: string[] = [];

    if (countSum && wordsFormSum) {
      wordAll = this.declOfNum(sumAll, wordsFormSum);
      fieldValues[0] = `${sumAll} ${wordAll}`;

      items.forEach((item, i) => {
        if (item.countAdditionally) {
          fieldValues[i + 1] = this.setPhraseForField(i);
        }
      });
    } else {
      items.forEach((item, i) => {
        fieldValues[i] = this.setPhraseForField(i);
      });
    }

    fieldValues.forEach((item, i) => {
      if (item != '') {
        outputPhrase == '' ? (outputPhrase = `${item}`) : (outputPhrase = `${outputPhrase}, ${item}`);
      }
    });

    if (field != null) {
      sumAll != 0 ? (field.innerHTML = `${outputPhrase}`) : (field.innerHTML = valueDefault);
    }
  }

  countSumAll(): number {
    let sum: number = 0;
    this.numbers.forEach((num) => {
      sum = sum + num;
    });

    return sum;
  }

  setPhraseForField(iNumber: number): string {
    const {
      opt: { items },
      numbers,
    } = this;

    let phrase = '';
    const number: number = numbers[iNumber];
    const word: string = this.declOfNum(number, items[iNumber].wordsForm);

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

  handleDropdownOkClick(event: Event): void {
    event.preventDefault();
    this.field?.click();
  }

  handleDropdownCleanClick(event: Event): void {
    const {
      opt: { valueDefault },
      field,
      numbers,
      decrementElements,
      incrementElements,
      buttonClean,
    } = this;

    event.preventDefault();
    numbers.forEach((item, i) => {
      numbers[i] = 0;
      decrementElements ? decrementElements[i].classList.add('dropdown__number-change_disable') : 0;
      incrementElements ? incrementElements[i].classList.remove('dropdown__number-change_disable') : 0;
    });

    this.updateNumbers();
    field ? (field.innerHTML = valueDefault) : 0;
    buttonClean?.classList.add('dropdown__btn-link_clean_hidden');
  }

  hideDropdown(eventTarget: EventTarget): void {
    const { field, itemsElement } = this;

    if (eventTarget instanceof Node && (eventTarget == field || itemsElement?.contains(eventTarget))) {
      return;
    }

    field?.classList.remove('dropdown__field_actived');
    itemsElement?.classList.add('dropdown__items_hidden');
  }
}

export { Dropdown };
