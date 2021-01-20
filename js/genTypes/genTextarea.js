import GenText from './GenText.js';

export default class GenTextarea extends GenText {
  constructor({ name, styles, placeholder = '', required, value, label, classCSS, disabled }) {
    super(name, styles, placeholder, required, value, label, classCSS, disabled);
    this.name = name;
    this.styles = styles;
    this.placeholder = placeholder;
    this.req = required;
    this.value = value;
    this.label = label;
    this.classCSS = classCSS;
    this.dis = disabled;
  }

  render() {
    return `
      <label for="${this.name}">${this.label}</label>
      <textarea
        id="${this.name}"
        style="${this.styles}"
        placeholder="${this.placeholder}"
        class="${this.classCSS}"
        ${this.required}
        ${this.disabled}
      />${this.value}</textarea>`;
  }
}