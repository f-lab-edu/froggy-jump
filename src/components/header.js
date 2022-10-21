import Core from 'core/core';
import { getHeaderStyle } from 'utils/style';
import { createTemplate } from 'utils/template';

export default class MainHeader extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      ${getHeaderStyle()}
      <header class="header">
        <div class="header-logo">Froggy Jump</div>
        <div class="header-menu">Menu</div>
      </header>
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

customElements.define('main-header', MainHeader);
