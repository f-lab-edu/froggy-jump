import { getKanbanStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainKanban extends HTMLElement {
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
    const self = this
    createTemplate(self, this.getTemplate())
  }
}

customElements.define('main-kanban', MainKanban)
