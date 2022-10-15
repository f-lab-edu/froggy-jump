export default class Core {
  $target
  $state
  constructor($target) {
    this.$target = $target
    this.setup()
    this.setEvent()
    this.render()
  }

  setup() {}

  getTemplate() {
    return ''
  }

  render() {
    this.$target.innerHTML = this.getTemplate()
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState }
    this.render()
  }
}
