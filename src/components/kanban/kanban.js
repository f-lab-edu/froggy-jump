import Core from 'core/core.js'
import { getKanbanStyle } from 'utils/style'
import { createTemplate } from 'utils/template'

export default class MainKanban extends Core {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.$state = {
      cards: [],
      isAddOpen: false,
      isUpdateOpen: false,
      note: '',
      selectedCard: null,
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
    return `
      ${getKanbanStyle()}
      <section id="kanban">
        <kanban-header>
          <div slot="counter" class="counter">0</div>
          <span slot="step" class="step"></span>
          <add-icon slot="add-button" class="add-button" w="15" h="15" hover="true"></add-icon>
          <ellipsis-icon slot="kanban-delete-button" class="kanban-delete-button" w="15" h="15" hover="true"></ellipsis-icon>
        </kanban-header>
        <kanban-note class="add-note">
          <textarea slot="note" class="note add" placeholder="Enter a note"></textarea>
          <button slot="note-button" class="note-button add" disabled>Add</button>
          <button slot="note-button" class="note-button-on add">Add</button>
          <button slot="note-cancel-button" class="note-cancel-button add">Cancel</button>
        </kanban-note>
        <kanban-note class="update-note">
          <textarea slot="note" class="note update" placeholder="Enter a note"></textarea>
          <button slot="note-button" class="note-button update" disabled>Update</button>
          <button slot="note-button" class="note-button-on update">Update</button>
          <button slot="note-cancel-button" class="note-cancel-button update">Cancel</button>
        </kanban-note>
        <ul class="card-wrapper"></ul>
      </section>
    `
  }

  handleNoteButton(isAble, type) {
    if (type !== 'add' && type !== 'update') return
    this.$(`.note-button.${type}`).style.display = isAble ? 'none' : 'block'
    this.$(`.note-button-on.${type}`).style.display = isAble ? 'block' : 'none'
  }

  handleNote(event) {
    const { className } = event.target
    const kindOfNote = className === 'note add' ? 'add' : 'update'

    this.setState({ note: event.target.value })
    this.$(`.note.${kindOfNote}`).value = this.$state.note

    const isAble = this.$state.note.length > 0
    this.handleNoteButton(isAble, kindOfNote)
  }

  toggleNote(event) {
    const { isAddOpen } = this.$state
    this.setState({ isAddOpen: !isAddOpen })
    if (!isAddOpen) return (this.$(`.add-note`).style.display = 'block')
    return (this.$(`.add-note`).style.display = 'none')
  }

  toggleUpdateNote() {
    this.handleNoteButton(true, 'update')
    const { isUpdateOpen } = this.$state
    this.setState({ isUpdateOpen: !isUpdateOpen })
    if (!isUpdateOpen) return (this.$('.update-note').style.display = 'block')
    this.$('.update-note').style.display = 'none'
    return
  }

  deleteKanban(event) {
    // 구현 미정
  }

  resetNote() {
    this.setState({ note: '' })
    this.$('.note.add').value = this.$state.note
    this.$('.note.update').value = this.$state.note
  }

  addCard(event) {
    const card = document.createElement('main-card')
    card.innerHTML = `
      <li slot="card" id="card" class="card">
        <div class="drag-content-wrapper">
          <drag-icon class="drag-button" w="15" h="15"></drag-icon>
          <div class="card-content">
            ${this.$state.note}
          </div>
        </div>
        <delete-icon class="delete-button" w="10" h="10"></delete-icon>
      </li>
    `
    this.$('.card-wrapper').prepend(card)
    this.resetNote()
    this.handleNote(event)
    this.toggleNote(event)
  }

  updateCard(event) {
    this.$('.card.selected').querySelector('.card-content').innerText = this.$state.note
    this.$('.card.selected').className = 'card'
    this.toggleUpdateNote()
    this.resetNote()
  }

  handleUpdateCard(event, className) {
    const isCard = className === 'card'
    const node = event.target
    let content = null

    if (isCard) {
      content = node.querySelector('.card-content').innerText
      if (node.className.includes('selected')) {
        node.className = 'card'
      } else {
        node.className += ' selected'
      }
    } else {
      content = node.innerText
      if (node.parentElement.parentElement.className.includes('selected')) {
        node.parentElement.parentElement.className = 'card'
      } else {
        node.parentElement.parentElement.className += ' selected'
      }
    }

    this.setState({ note: content, selectedCard: event.target })
    this.$('.note.update').value = this.$state.note
    this.toggleUpdateNote()
  }

  deleteCard(event) {
    const card = event.target.parentElement
    if (card.className === 'card') card?.remove()
  }

  moveCard(event) {}

  connectedCallback() {
    this.$('.add-button').addEventListener('click', (event) => {
      this.toggleNote(event)
    })
    this.$('.kanban-delete-button').addEventListener('click', (event) => {
      this.deleteKanban(event)
    })
    this.$('.add-note').addEventListener('input', (event) => {
      this.handleNote(event)
    })
    this.$('.update-note').addEventListener('input', (event) => {
      this.handleNote(event)
    })
    this.$('.note-button-on.add').addEventListener('click', (event) => {
      this.addCard(event)
    })
    this.$('.note-button-on.update').addEventListener('click', (event) => {
      this.updateCard(event)
    })
    this.$('.note-cancel-button.add').addEventListener('click', (event) => {
      this.toggleNote(event)
    })
    this.$('.note-cancel-button.update').addEventListener('click', (event) => {
      return this.toggleUpdateNote(event)
    })
    this.$('.card-wrapper').addEventListener('click', (event) => {
      const { className } = event.target
      if (className === 'delete-button') return this.deleteCard(event)
      if (className === 'drag-button') return this.moveCard(event)
      if (className === 'card' || className === 'card selected' || className === 'card-content')
        return this.handleUpdateCard(event, className)
    })
  }

  render() {
    createTemplate(this)
  }
}

customElements.define('main-kanban', MainKanban)
