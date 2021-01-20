import GenText from './GenText.js';

export default class GenRadio extends GenText {
  constructor({ name, styles, label, classCSS, disabled, items }) {
    super(name, styles, label, classCSS, disabled);
    this.name = name;
    this.styles = styles;
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