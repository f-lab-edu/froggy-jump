import { getHeaderStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainHeader extends HTMLElement {
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
    const self = this
    createTemplate(self, this.getTemplate())
  }
}

customElements.define('main-header', MainHeader)
