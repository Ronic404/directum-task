import GenText from './GenText.js';

export default class GenButton extends GenText {
  constructor({ name, styles, classCSS, text }) {
    super(name, styles, classCSS);
    this.name = name;
    this.styles = styles;
    this.classCSS = classCSS;
    this.text = text;
  }

  render() {
    return `
      <button
        type="button"
        id="${this.name}"
        style="${this.styles}"
        class="${this.classCSS}"
      >
        ${this.text}
      </button>`;
  }
}