import Core from 'core/core';
import { getCardStyle } from 'utils/style';
import { createTemplate } from 'utils/template';

export default class MainCard extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      ${getCardStyle()}
      <slot name="card" class="card"></slot>
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

customElements.define('main-card', MainCard);
