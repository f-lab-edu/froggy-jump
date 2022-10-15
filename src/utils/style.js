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
