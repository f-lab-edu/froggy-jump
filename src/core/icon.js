import Core from 'core/core'
import { getDefaultButton, getHoverIcon } from 'utils/style'

export default class Icon extends Core {
  constructor() {
    super()
    this.w = 10
    this.h = 10
    this.isHover = false
  }

  static get observedAttributes() {
    return ['w', 'h', 'hover']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'w') {
      this.w = newValue
    }
    if (name === 'h') {
      this.h = newValue
    }
    if (name === 'hover') {
      if (newValue !== 'true' && newValue !== 'false') return
      this.isHover = Boolean(newValue)
    }
  }

  getTemplate() {
    return `
      ${getDefaultButton()}
      ${this.isHover ? getHoverIcon() : ''}
      <button style="width:${this.w / 16}rem; height:${this.h / 16}px;">
        ${this.getIcon()}
      </button>
    `
  }

  getIcon() {}
}
