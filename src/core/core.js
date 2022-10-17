export default class Core extends HTMLElement {
  $state
  constructor() {
    super()
  }

  setup() {}

  setEvent() {}

  $(query) {
    return this.shadowRoot.querySelector(query)
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState }
    this.render()
  }
}
