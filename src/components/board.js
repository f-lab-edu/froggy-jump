import Core from 'core/core';
import { getBoardStyle } from 'utils/style';
import createTemplate from 'utils/template';

export default class MainBoard extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      ${getBoardStyle()}
      <main class="board">
        <main-kanban title="backLog"></main-kanban>
        <main-kanban title="inProgress"></main-kanban>
        <main-kanban title="done"></main-kanban>
      </main>
    `;
    this.render();
  }

  getTemplate() {
    return this.template;
  }

  handleDragOver(event) {
    event.preventDefault();
    this.setAttribute('active', '');
    let found;

    if (!this.draggingElement) {
      found = event.composedPath().find((node) => node.className === 'card' && node.nodeName !== 'SLOT');

      if (found) {
        const theLowestShadowRoot = found.getRootNode();
        this.draggingElement = theLowestShadowRoot.querySelector('[dragging]');
      }
    }
  }

  handleDrop(event) {
    event.preventDefault();
    const found = event.composedPath().find((node) => node.className === 'kanban');
    found.querySelector('.card-wrapper').appendChild(this.draggingElement);
    this.draggingElement = null;
  }

  connectedCallback() {
    this.addEventListener('drop', this.handleDrop.bind(this));
    this.addEventListener('dragover', this.handleDragOver.bind(this));
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('main-board', MainBoard);
