function buildComponent(copy: string): HTMLDivElement {
  const element = document.createElement('div');
  element.innerHTML = copy;
  
  return element;
}

export default buildComponent;
