import Core from 'core/core.js'
import { getKanbanStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

// Todo : kanban-header의 + 버튼 클릭을 main-kanban 컴포넌트에서 인지하고 main-card 를 추가해주어야 함.
// 즉 상위 컴포넌트에서 상태관리가 되어야 함.
export default class MainKanban extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.$state = {
      cards: [],
      isAddOpen: false,
    }

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
        this.$('.step').textContent = '설정값 필요'
    }
  }

  static get observedAttributes() {
    return ['title']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') return this.handleStepTitle(newValue)
  }

  getTemplate() {
    const { cards, isAddOpen } = this.$state

    return `
      ${getKanbanStyle()}
      <section id="kanban">
        <kanban-header>
          <div slot="counter" class="counter">0</div>
          <span slot="step" class="step"></span>
          <button slot="add-button" class="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </button>
          <button slot="cancel-button" class="cancel-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/></svg>
          </button>
        </kanban-header>
      </section>
    `
  }

  toggleAddInput(isOpen) {
    if (isOpen) {
      this.$('add-textarea').remove()
    } else {
      let textarea = document.createElement('add-textarea')
      this.$('#kanban').append(textarea)
    }
  }

  handleAddButton(event) {
    const { isAddOpen } = this.$state
    this.setState({ isAddOpen: !isAddOpen })
    this.toggleAddInput(isAddOpen)
  }

  handleCancelButton(event) {
    console.log(event)
  }

  connectedCallback() {
    this.$('.add-button').addEventListener('click', (event) => {
      this.handleAddButton(event)
    })
    this.$('.cancel-button').addEventListener('click', (event) => {
      console.log('event', event.target)
    })
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-kanban', MainKanban)
