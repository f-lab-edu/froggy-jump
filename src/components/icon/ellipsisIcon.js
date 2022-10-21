import Icon from 'core/icon';
import { createTemplate } from 'utils/template';

export default class EllipsisIcon extends Icon {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/>
      </svg>
    `;
  }

  getIcon() {
    return this.template;
  }

  connectedCallback() {
    createTemplate(this);
  }
}

customElements.define('ellipsis-icon', EllipsisIcon);
