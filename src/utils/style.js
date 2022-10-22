export const getResetStyle = () => `
  <style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    button,
    input[type='submit'],
    input[type='reset'] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  </style>
  `;

export const getHeaderStyle = () => `
  ${getResetStyle()}
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
  `;

export const getBoardStyle = () => `
  ${getResetStyle()}
  <style>
    .board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      padding: 1.25rem;
    }
  </style>
  `;

export const getKanbanStyle = () => `
  ${getResetStyle()}
  <style>
    .kanban {
      padding: 1.25rem;
      background: var(--board-gray);
      height: 600px;
      border-radius: var(--default-radius);
    }
    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--gray);
      padding: 0.125rem;
      border-radius: 50%;
      width: 0.9375rem;
      height: 0.9375rem;
      font-size: var(--font-size-small);
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
    .drag-button {
      cursor: move;
    }
  </style>
  `;

export const getKanbanHeaderStyle = () => `
  ${getResetStyle()}
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
  `;

export const getAddTextareaStyle = () => `
  ${getResetStyle()}
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
  </style>
  `;

export const getCardStyle = () => `
  ${getResetStyle()}
  <style>
  </style>
  `;

export const getHoverIcon = () => `
  ${getResetStyle()}
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
  `;
