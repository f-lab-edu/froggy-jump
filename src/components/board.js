import Core from 'core/core';
import { getBoardStyle } from 'utils/style';
import { createTemplate } from 'utils/template';

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

  render() {
    createTemplate(this);
  }
}

customElements.define('main-board', MainBoard);
