import Core from 'core/core.js'
import { getBoardStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainBoard extends Core {
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
    createTemplate(this)
  }
}

customElements.define('main-board', MainBoard)
