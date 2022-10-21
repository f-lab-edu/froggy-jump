import { createTemplate } from 'utils/template'

export default class MainApp extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      <main-header></main-header>
      <main-board></main-board>
    `
  }

  render() {
    const self = this
    createTemplate(self, this.getTemplate())
  }
}

customElements.define('main-app', MainApp)
