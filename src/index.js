import '@/style.css'

import 'components/components.js'
class App {
  constructor($target) {
    this.$target = $target
    this.render()
  }

  getTemplate() {
    return `<main-app></main-app>`
  }

  render() {
    this.$target.innerHTML = this.getTemplate()
  }
}

new App(document.querySelector('#app'))
