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
  }

  resetNote() {
    this.setState({ note: '' });
    this.$('.note.add').value = this.$state.note;
    this.$('.note.update').value = this.$state.note;
  }

  addCard(event) {
    const card = document.createElement('main-card');
    card.setAttribute('draggable', 'true');
    // card.innerHTML = `
    //   <li slot="card" class="card">
    //     <div class="drag-content-wrapper">
    //       <drag-icon class="drag-button" w="15" h="15"></drag-icon>
    //       <div class="card-content">
    //         ${this.$state.note}
    //       </div>
    //     </div>
    //     <delete-icon class="delete-button" w="10" h="10"></delete-icon>
    //   </li>
    // `;
    card.innerHTML = `
      <li slot="card" class="card">
        <div class="drag-content-wrapper">
          <button style="width:15px; height:15px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/>
            </svg>
          </button>
          <div class="card-content">
            ${this.$state.note}
          </div>
        </div>
        <button style="width:10px; height:10px;" class="delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
          </svg>
        </button>
      </li>
    `;
    this.$('.card-wrapper').prepend(card);
    this.resetNote();
    this.handleNote(event);
    this.toggleNote(event);
  }

  updateCard() {
    this.$('.card.selected').querySelector('.card-content').innerText = this.$state.note;
    this.$('.card.selected').className = 'card';
    this.toggleUpdateNote();
    this.resetNote();
  }

  handleUpdateCard(event, className) {
    const isCard = className === 'card';
    const node = event.target;
    let content = null;

    if (isCard) {
      content = node.querySelector('.card-content').innerText;
      if (node.className.includes('selected')) {
        node.className = 'card';
      } else {
        node.className += ' selected';
      }
    } else {
      content = node.innerText;
      if (node.parentElement.parentElement.className.includes('selected')) {
        node.parentElement.parentElement.className = 'card';
      } else {
        node.parentElement.parentElement.className += ' selected';
      }
    }

    this.setState({ note: content, selectedCard: event.target });
    this.$('.note.update').value = this.$state.note;
    this.toggleUpdateNote();
  }

  deleteCard(event) {
    this.setState({ selectedCard: event.target.parentElement });
    const { selectedCard } = this.$state;
    if (selectedCard.className === 'card') {
      selectedCard?.remove();
      this.setState({ selectedCard: null });
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
      // if (className === 'drag-button') {
      //   this.moveCard(event);
      //   return;
      // }
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
