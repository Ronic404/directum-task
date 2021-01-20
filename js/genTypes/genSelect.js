import GenText from './GenText.js';

export default class GenSelect extends GenText {
  constructor({ name, styles, label, classCSS, disabled, options }) {
    super(name, styles, label, classCSS, disabled);
    this.name = name;
    this.styles = styles;
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
        style="${this.styles}"
        class="${this.classCSS}"
        ${this.disabled}
      >
        ${this.genOptions()}
      </select>`;
  }
}