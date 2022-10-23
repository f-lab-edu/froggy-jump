import Core from 'core/core';
import { getAddTextareaStyle } from 'utils/style';
import createTemplate from 'utils/template';

export default class KanbanNote extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      ${getAddTextareaStyle()}
      <section class="add-textarea">
        <slot name="note"></slot>
        <div class="button-wrapper">
          <slot name="note-button"></slot>
          <slot name="note-cancel-button"></slot>
        </div>
      </section>
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

customElements.define('kanban-note', KanbanNote);
