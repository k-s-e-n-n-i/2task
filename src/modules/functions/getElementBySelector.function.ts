const getElementBySelector = (parent: Element, childClass: string): HTMLElement => {
  const element = parent.querySelector(childClass);

  if (!(element instanceof HTMLElement)) {
    throw new Error(
      `The element of selector "${childClass}" is not a HTMLElement. Make sure a <div id="${childClass}""> element is present in the document.`
    );
  }

  return element;
};

export { getElementBySelector };
