import { getBoardStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainBoard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      ${getBoardStyle()}
      <main id="board">
        <main-kanban></main-kanban>
        <main-kanban></main-kanban>
        <main-kanban></main-kanban>
      </main>
    `
  }

  render() {
    const self = this
    createTemplate(self, this.getTemplate())
  }
}

customElements.define('main-board', MainBoard)
