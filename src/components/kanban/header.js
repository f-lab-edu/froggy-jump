import Core from 'core/core.js'
import { getKanbanHeaderStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class KanbanHeader extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      ${getKanbanHeaderStyle()}
      <div id="kanban-header">
        <div class="step-wrapper">
          <slot name="counter"></slot>
          <slot name="step"></slot>
        </div>
        <div class="button-wrapper">
          <slot name="add-button"></slot>
          <slot name="kanban-delete-button"></slot>
        </div>
      </div>
    `
  }

  connectedCallback() {}

  render() {
    createTemplate(this)
  }
}

customElements.define('kanban-header', KanbanHeader)
