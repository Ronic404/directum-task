import GenText from './GenText.js';

export default class GenCheckbox extends GenText {
  constructor({ name, type, styles, required, label, classCSS, disabled, checked }) {
    super(name, type, styles, required, label, classCSS, disabled);
    this.name = name;
    this.type = type;
    this.styles = styles;
    this.req = required;
    this.label = label;
    this.classCSS = classCSS;
    this.dis = disabled;
    this.check = checked;
  }

  get checked() {
    return (this.check) ? 'checked' : null;
  }

  render() {
    return `
      <label for="${this.name}">${this.label}</label>
      <input
        type="checkbox"
        id="${this.name}"
        style="${this.styles}"
        class="${this.classCSS}"
        ${this.required}
        ${this.disabled}
        ${this.checked}
      />`;
  }
}