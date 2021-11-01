import '../../../webpack/favicons';
import '@Blocks/layout/layout.scss';

const getElementBySelector = (lineItem: Element, selector: string): HTMLElement => {
  const element = lineItem.querySelector(selector);

  if (!(element instanceof HTMLElement)) {
    throw new Error(
      `The element of selector "${selector}" is not a HTMLElement. Make sure a <div id="${selector}""> element is present in the document.`
    );
  }

  return element;
};

export { getElementBySelector };
