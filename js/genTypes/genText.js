export default class GenText {
  validationTypeArray = ['text', 'tel', 'email', 'select', 'radio', 'checkbox'];

  constructor({ name, styles, placeholder = '', required, validationRules, value = '', label = '', classCSS, disabled }) {
    this.name = name;
    this.styles = styles;
    this.placeholder = placeholder;
    this.req = required;
    this.validationRules = validationRules;
    this.value = value;
    this.label = label;
    this.classCSS = classCSS;
    this.dis = disabled;
  }

  get required() {
    return (this.req) ? 'required' : '';
  }

  get disabled() {
    return (this.dis) ? 'disabled' : '';
  }

  get tag() {
    return 'input';
  }

  get type() {
    if (this.validationTypeArray.includes(this.validationRules.type)) {
      return this.validationRules.type;
    } else {
      throw new Error(`
        ${this.validationRules.type} is wrong type in TEXT field!!!
        You can choose only: text, tel, email, select, radio, checkbox.
      `);
    }
  }

  render() {
    return `
      <label for="${this.name}">${this.label}</label>
      <${this.tag}
        id="${this.name}"
        type="${this.type}"
        style="${this.styles}"
        placeholder="${this.placeholder}"
        value="${this.value}"
        class="${this.classCSS}"
        ${this.required}
        ${this.disabled}
      />

    `;
  }
}