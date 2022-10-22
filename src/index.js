import '@/style.css';
import 'components/components';

class App {
  constructor($target) {
    this.$target = $target;
    this.template = '<main-app></main-app>';
    this.render();
  }

  getTemplate() {
    return this.template;
  }

  render() {
    this.$target.innerHTML = this.getTemplate();
  }
}

// eslint-disable-next-line no-new
new App(document.querySelector('#app'));
