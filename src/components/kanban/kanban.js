import Core from 'core/core.js'
import { getKanbanStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainKanban extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.render()
  }

  handleStepTitle(step) {
    switch (step) {
      case 'backLog':
        this.$('.step').textContent = '해야할 일'
        break
      case 'inProgress':
        this.$('.step').textContent = '하는 중'
        break
      case 'done':
        this.$('.step').textContent = '다했어'
        break
      default:
        this.$step.textContent = '설정값 필요'
    }
  }

  static get observedAttributes() {
    return ['title']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') return this.handleStepTitle(newValue)
  }

  getTemplate() {
    return `
      ${getKanbanStyle()}
      <section id="kanban">
        <kanban-header>
          <span slot="step" class="step">${this.step}</span>
        </kanban-header>
        <main-card></main-card>
      </section>
    `
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-kanban', MainKanban)
