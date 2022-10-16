import Core from 'core/core.js'
import { getKanbanStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainKanban extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      ${getKanbanStyle()}
      <section id="kanban">
        <main-card></main-card>
      </section>
    `
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-kanban', MainKanban)
