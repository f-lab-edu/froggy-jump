import Core from 'core/core.js'
import { getHeaderStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainHeader extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
    ${getHeaderStyle()}
    <header id="header">
      <div class="header-logo">Froggy Jump</div>
      <div class="header-menu">Menu</div>
    </header>
    `
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-header', MainHeader)
