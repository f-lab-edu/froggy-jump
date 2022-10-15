export default class Core extends HTMLElement {
  $state
  constructor() {
    super()
  }

  setup() {}

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState }
    this.render()
  }
}
