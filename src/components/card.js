import Core from 'core/core';
import { getCardStyle } from 'utils/style';
import createTemplate from 'utils/template';

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

  handleDragStart(event) {
    this.setAttribute('dragging', true);
    event.dataTransfer.setData('text/html', this.innerHTML);
    this.style.opacity = 0.4;
  }

  handleDragEnd() {
    this.removeAttribute('dragging');
    this.style.opacity = 1;
  }

  connectedCallback() {
    this.addEventListener('dragstart', this.handleDragStart);
    this.addEventListener('dragend', this.handleDragEnd);
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('main-card', MainCard);
