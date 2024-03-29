import Core from 'core/core';
import { getKanbanStyle } from 'utils/style';
import createTemplate from 'utils/template';

export default class MainKanban extends Core {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.template = `
      ${getKanbanStyle()}
      <section class="kanban">
        <kanban-header>
          <span slot="counter" class="counter">0</span>
          <span slot="step" class="step"></span>
          <svg-icon slot="add-button" class="add-button" w="15" h="15" icon="add" hover="true"></svg-icon>
          <svg-icon slot="kanban-delete-button" class="kanban-delete-button" w="15" h="15" icon="ellipsis" hover="true"></svg-icon>
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
    `;

    this.$state = {
      cards: [],
      isAddOpen: false,
      isUpdateOpen: false,
      note: '',
      selectedCard: null,
    };

    this.render();
  }

  getTemplate() {
    return this.template;
  }

  handleStepTitle(step) {
    switch (step) {
      case 'backLog':
        this.$('.step').textContent = '해야할 일';
        break;
      case 'inProgress':
        this.$('.step').textContent = '하는 중';
        break;
      case 'done':
        this.$('.step').textContent = '다했어';
        break;
      default:
        this.$('.step').textContent = '설정값 필요';
    }
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.handleStepTitle(newValue);
    }
  }

  handleNoteButton(isAble, type) {
    if (type !== 'add' && type !== 'update') return;
    this.$(`.note-button.${type}`).style.display = isAble ? 'none' : 'block';
    this.$(`.note-button-on.${type}`).style.display = isAble ? 'block' : 'none';
  }

  handleNote(event) {
    const { className } = event.target;
    const kindOfNote = className === 'note add' ? 'add' : 'update';

    this.setState({ note: event.target.value });
    this.$(`.note.${kindOfNote}`).value = this.$state.note;

    const isAble = this.$state.note.length > 0;
    this.handleNoteButton(isAble, kindOfNote);
  }

  toggleNote() {
    const { isAddOpen } = this.$state;
    this.setState({ isAddOpen: !isAddOpen });
    if (!isAddOpen) {
      this.$('.add-note').style.display = 'block';
      return;
    }
    this.$('.add-note').style.display = 'none';
  }

  toggleUpdateNote() {
    this.handleNoteButton(true, 'update');
    const { isUpdateOpen } = this.$state;
    this.setState({ isUpdateOpen: !isUpdateOpen });
    if (!isUpdateOpen) {
      this.$('.update-note').style.display = 'block';
      return;
    }
    this.$('.update-note').style.display = 'none';
    this.$('.card').classList.remove('selected');
  }

  resetNote() {
    this.setState({ note: '' });
    this.$('.note.add').value = this.$state.note;
    this.$('.note.update').value = this.$state.note;
  }

  updateCounter() {
    this.$('.counter').innerText = this.$('.card-wrapper').childElementCount;
  }

  addCard(event) {
    const card = document.createElement('main-card');
    card.setAttribute('draggable', 'true');
    card.innerHTML = `
      <li slot="card" class="card">
        <div class="drag-content-wrapper">
          <svg-icon slot="drag-button" class="drag-button" w="15" h="15" icon="drag" hover="true"></svg-icon>
          <div class="card-content">
            ${this.$state.note}
          </div>
        </div>
        <svg-icon slot="delete-button" class="delete-button" w="15" h="15" icon="delete" hover="true"></svg-icon>
      </li>
    `;
    this.$('.card-wrapper').prepend(card);
    this.resetNote();
    this.handleNote(event);
    this.toggleNote(event);
    this.updateCounter();
  }

  updateCard() {
    this.$('.card.selected').querySelector('.card-content').innerText = this.$state.note;
    this.$('.card.selected').classList.remove('selected');
    this.toggleUpdateNote();
    this.resetNote();
  }

  handleUpdateCard(event, name) {
    const isCard = name === 'card';
    const node = event.target;

    let content = null;

    if (isCard) {
      content = node.querySelector('.card-content').innerText;
      const { classList, className } = node;
      const isSelected = className.includes('selected');
      if (isSelected) classList.remove('selected');
      if (!isSelected) classList.add('selected');
    }
    if (!isCard) {
      content = node.innerText;
      const { className, classList } = node.parentElement.parentElement;
      const isSelected = className.includes('selected');
      if (isSelected) classList.remove('selected');
      if (!isSelected) classList.add('selected');
    }

    this.setState({ note: content, selectedCard: event.target });
    this.$('.note.update').value = this.$state.note;
    this.toggleUpdateNote();
  }

  deleteCard(event) {
    this.setState({ selectedCard: event.target.parentElement.parentElement });
    const { selectedCard } = this.$state;
    if (selectedCard.nodeName === 'MAIN-CARD') {
      selectedCard.remove();
      this.setState({ selectedCard: null });
      this.updateCounter();
    }
  }

  connectedCallback() {
    this.$('.add-button').addEventListener('click', (event) => {
      this.toggleNote(event);
    });
    this.$('.kanban-delete-button').addEventListener('click', (event) => {
      this.deleteKanban(event);
    });
    this.$('.add-note').addEventListener('input', (event) => {
      this.handleNote(event);
    });
    this.$('.update-note').addEventListener('input', (event) => {
      this.handleNote(event);
    });
    this.$('.note-button-on.add').addEventListener('click', (event) => {
      this.addCard(event);
    });
    this.$('.note-button-on.update').addEventListener('click', (event) => {
      this.updateCard(event);
    });
    this.$('.note-cancel-button.add').addEventListener('click', (event) => {
      this.toggleNote(event);
    });
    this.$('.note-cancel-button.update').addEventListener('click', (event) => this.toggleUpdateNote(event));
    this.$('.card-wrapper').addEventListener('click', (event) => {
      const { className } = event.target;
      if (className === 'delete-button') {
        this.deleteCard(event);
        return;
      }
      if (className === 'card' || className === 'card selected' || className === 'card-content') {
        this.handleUpdateCard(event, className);
      }
    });
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('main-kanban', MainKanban);
