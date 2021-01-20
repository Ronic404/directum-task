import GenText from './GenText.js';

export default class GenRadio extends GenText {
  constructor({ name, type, styles, placeholder = '', required, validationRules, value = '', label = '', classCSS, disabled, items }) {
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
    this.items = items;
  }

  genItems() {
    return this.items.map(item => {
      const selected = item.selected ? "selected" : '';
      return `
        <input type="radio" name="${this.label}" value="${item.value}" id="${item.label}" ${selected}>
          <label for="${item.label}">${item.label}</label>
        </input>
      `
    }).join('');
  }

  render() {
    return `
      <label for="${this.name}">${this.label}</label>
      ${this.genItems()}
    `
  }
}