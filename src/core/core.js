export default class Core extends HTMLElement {
  $state;

  $(query) {
    return this.shadowRoot.querySelector(query);
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
  }
}
