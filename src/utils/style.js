export const getHeaderStyle = () => {
  return `
  <style>
    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
      background: var(--green);
      height: 60px;
      font-size: 20px;
    }
  </style>
  `
}

export const getBoardStyle = () => {
  return `
  <style>
    #board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
    }
  </style>
  `
}

export const getKanbanStyle = () => {
  return `
  <style>
    #kanban {
      padding: 20px;
      background: var(--board-gray);
      height: 600px;
      border-radius: var(--default-radius);
    }
    .counter {
      display: inline-block;
      background: var(--gray);
      padding: 2px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      font-size: var(--font-size-small);
      text-align: center;
    }
    .step {
      font-size: var(--font-size-small);
    }
    .add-button {
      width: 15px;
      height: 15px;
    }
    .add-button svg {
      -webkit-transition: all 0.1s; /* Safari */
      transition: all 0.1s;
      fill: var(--gray);
    }
    .add-button:hover svg {
      fill: black;
    }
    .cancel-button {
      width: 15px;
      height: 15px;
    }
    .cancel-button svg {
      -webkit-transition: all 0.1s; /* Safari */
      transition: all 0.1s;
      fill: var(--gray);
    }
    .cancel-button:hover svg {
      fill: black;
    }
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

export const getKanbanHeaderStyle = () => {
  return `
  <style>
    #kanban-header {
      display: flex;
      justify-content: space-between;
      padding: 10px 5px;
    }
    .step-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .button-wrapper {
      display: flex;
      gap: 5px;
    }
  </style>
  `
}

export const getAddTextareaStyle = () => {
  return `
  <style>
    #add-textarea {
      margin: 10px 0;
      width: 100%;
    }
    .textarea {
      padding: 10px;
      width: 100%;
      height: 100px;
      border: 1px solid var(--green);
      border-radius: 5px;
      box-sizing: border-box;
    }
    .button-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding: 5px 0;
    }
    .add-button {
      background: var(--deep-green);
    }
    .cancel-button {
      background: white;
    }
    button {
      width: 100%;
      background: none;
      color: inherit;
      border: none;
      border-radius: var(--default-radius);
      padding: 5px 0;
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
    #card {
      padding: 10px;
      background: white;
      border-radius: var(--default-radius);
    }
  </style>
  `
}
