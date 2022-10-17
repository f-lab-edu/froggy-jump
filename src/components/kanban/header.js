import Core from 'core/core.js'
import { getKanbanHeaderStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class KanbanHeader extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.counter = 0

    this.render()
  }

  getTemplate() {
    return `
      ${getKanbanHeaderStyle()}
      <div id="kanban-header">
        <div class="step-wrapper">
          <div class="counter">${this.counter}</div>
          <slot name="step" class="step"></slot>
        </div>
        <div class="button-wrapper">
          <button class="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </button>
          <button class="cancel-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/></svg>
          </button>
        </div>
      </div>
    `
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('kanban-header', KanbanHeader)
