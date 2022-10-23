import Core from 'core/core';
import { getResetStyle, getHoverIcon } from 'utils/style';
import createTemplate, { getIcon } from 'utils/template';

export default class Icon extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.w = 10;
    this.h = 10;
    this.isHover = false;
    this.render();
  }

  static get observedAttributes() {
    return ['w', 'h', 'hover', 'icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'w') {
      this.w = newValue;
    }
    if (name === 'h') {
      this.h = newValue;
    }
    if (name === 'hover') {
      if (newValue !== 'true' && newValue !== 'false') return;
      this.isHover = Boolean(newValue);
    }
    if (name === 'icon') {
      this.icon = newValue;
    }
  }

  getTemplate() {
    return `
      ${getResetStyle()}
      ${this.isHover ? getHoverIcon() : ''}
      <button>
        ${getIcon(this.icon, this.w, this.h)}
      </button>
    `;
  }

  update() {
    this.$('svg').remove();
    this.$('button').innerHTML = getIcon(this.icon, this.w, this.h);
  }

  connectedCallback() {
    this.update();
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('svg-icon', Icon);
