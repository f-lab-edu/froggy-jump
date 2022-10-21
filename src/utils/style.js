export const getHeaderStyle = () => {
  return `
  <style>
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 3.125rem;
      background: var(--green);
      height: 60px;
      font-size: 1.25rem;
    }
  </style>
  `
}

export const getBoardStyle = () => {
  return `
  <style>
    .board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      padding: 1.25rem;
    }
  </style>
  `
}

export const getKanbanStyle = () => {
  return `
  <style>
    .kanban {
      padding: 1.25rem;
      background: var(--board-gray);
      height: 600px;
      border-radius: var(--default-radius);
    }
    .counter {
      display: inline-block;
      background: var(--gray);
      padding: 0.125rem;
      border-radius: 50%;
      width: 0.9375rem;
      height: 0.9375rem;
      font-size: var(--font-size-small);
      text-align: center;
    }
    .step {
      font-size: var(--font-size-small);
    }
    .add-note,
    .update-note {
      display: none;
    }
    .note {
      padding: 0.625rem;
      width: 100%;
      height: 100px;
      border: 1px solid var(--green);
      border-radius: 5px;
      box-sizing: border-box;
    }
    .note-button,
    .note-button-on,
    .note-cancel-button {
      width: 100%;
      border-radius: var(--default-radius);
      padding: 0.3125rem 0;
      font-size: var(--font-size-small);
    }
    .note-button {
      background: var(--green-off);
      color: var(--black-off);
    }
    .note-button-on{
      display: none;
      background: var(--green);
    }
    .note-cancel-button {
      background: white;
    }
    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin: 0.625rem 0;
    }
    .card {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem;
      background: white;
      border-radius: var(--default-radius);
      font-size: var(--font-size-small);
    }
    .card.selected {
      background-color: var(--green);
    }
    .drag-content-wrapper {
      display: flex;
      gap: 0.625rem;
    }
    .card-drag-button {
      width: 0.9375rem;
      height: 0.9375rem;
    }
    .card-delete-button {
      width: 0.625rem;
      height: 0.625rem;
    }
    .card-content {}
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
    ul {
      padding: 0;
    }
  </style>
  `
}

export const getKanbanHeaderStyle = () => {
  return `
  <style>
    .kanban-header {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0.3125rem;
    }
    .step-wrapper {
      display: flex;
      gap: 0.625rem;
      align-items: center;
    }
    .button-wrapper {
      display: flex;
      gap: 0.3125rem;
    }
  </style>
  `
}

export const getAddTextareaStyle = () => {
  return `
  <style>
    .add-textarea {
      margin: 0.625rem 0;
      width: 100%;
    }
    .button-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 0.625rem;
      padding: 0.3125rem 0;
    }
    button {
      width: 100%;
      background: none;
      color: inherit;
      border: none;
      border-radius: var(--default-radius);
      padding: 0.3125rem 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      font-size: var(--font-size-small);
    }
  </style>
  `
}

export const getCardStyle = () => {
  return `
  <style>
  </style>
  `
}

export const getDefaultButton = () => {
  return `
  <style>
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  </style>
  `
}

export const getHoverIcon = () => {
  return `
  <style>
  svg {
    -webkit-transition: all 0.1s; /* Safari */
    transition: all 0.1s;
    fill: var(--gray);
  }
  svg:hover {
    fill: black;
  }
  </style>
  `
}
