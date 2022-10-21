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
      <slot name="card" id="card"></slot>
    `
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-card', MainCard)
