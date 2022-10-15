import Core from 'core/core.js'
import { getCardStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainCard extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      ${getCardStyle()}
      <article id="card">Card</article>
    `
  }

  render() {
    const self = this
    createTemplate(self, this.getTemplate())
  }
}

customElements.define('main-card', MainCard)
