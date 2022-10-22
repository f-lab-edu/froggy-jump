const createTemplate = (self) => {
  if (!self || !self.getTemplate) return;
  const template = document.createElement('template');
  template.innerHTML = self.getTemplate();
  self.shadowRoot.append(template.content.cloneNode(true));
};

export default createTemplate;
