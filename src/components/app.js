import Core from 'core/core';
import createTemplate from 'utils/template';

export default class MainApp extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      <main-header></main-header>
      <main-board></main-board>
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

customElements.define('main-app', MainApp);
