import GenText from './GenText.js';

export default class GenSelect extends GenText {
  constructor({ name, type, styles, placeholder = '', required, validationRules, value = '', label = '', classCSS, disabled, options }) {
    super(validationRules);

    this.name = name;
    this.type = type;
    this.styles = styles;
    this.placeholder = placeholder;
    this.req = required;
    this.validationRules = validationRules;
    this.value = value;
    this.label = label;
    this.classCSS = classCSS;
    this.dis = disabled;
    this.options = options;
  }

  genOptions() {
    return this.options.map(item => {
      const selected = item.selected ? "selected" : '';
      return `<option value="${item.value}" ${selected}>${item.text}</option>`
    }).join('');
  }

  render() {
    return `
      <label for="${this.name}">${this.label}</label>
      <select
        id="${this.name}"
        type="${this.type}"
        style="${this.styles}"
        placeholder="${this.placeholder}"
        value="${this.value}"
        class="${this.classCSS}"
        ${this.required}
        ${this.disabled}
        ${this.phoneMask}
        ${this.checked}
      >
        ${this.genOptions()}
      </select>`;
  }
}