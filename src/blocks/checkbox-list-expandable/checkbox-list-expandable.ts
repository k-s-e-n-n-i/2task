import { getElementBySelector } from '../../modules/functions/getElementBySelector.function';

class CheckboxList {
  topic: HTMLElement;
  checkboxList: HTMLElement;
  expend: HTMLElement;

  constructor(checkbox: Element) {
    this.topic = getElementBySelector(checkbox, '.js-checkbox-list-expandable__topic-block');
    this.checkboxList = getElementBySelector(checkbox, '.checkbox-list');
    this.expend = getElementBySelector(checkbox, '.checkbox-list-expandable__expand');
  }

  init() {
    this.topic.addEventListener('click', () => {
      this.handleCheckboxlistClick();
    });
  }

  handleCheckboxlistClick() {
    this.checkboxList.classList.toggle('checkbox-list_hide');
    this.expend.classList.toggle('checkbox-list-expandable__expand_open');
  }
}

document.querySelectorAll('.checkbox-list-expandable').forEach((item: Element) => {
  new CheckboxList(item).init();
});
