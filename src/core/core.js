export default class Core extends HTMLElement {
  $state;

  $(query) {
    return this.shadowRoot.querySelector(query);
  }

  $$(query) {
    return this.shadowRoot.querySelectorAll(query);
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
  }
}
