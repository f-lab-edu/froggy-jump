import Core from 'core/core.js'
import { getAddTextareaStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class AddTextarea extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate() {
    return `
      ${getAddTextareaStyle()}
      <section id="add-textarea">
        <textarea class="textarea" placeholder="Enter a note"></textarea>
        <div class="button-wrapper">
          <button class="add-button">Add</button>
          <button class="cancel-button">Cancel</button>
        </div>
      </section>
    `
  }

  connectedCallback() {}

  render() {
    createTemplate(this)
  }
}

customElements.define('add-textarea', AddTextarea)
