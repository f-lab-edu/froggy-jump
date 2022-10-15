export const createTemplate = (self, element) => {
  const template = document.createElement('template')
  template.innerHTML = element
  self.shadowRoot.append(template.content.cloneNode(true))
}
