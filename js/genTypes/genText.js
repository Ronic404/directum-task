export default class GenText {
  validationTypeArray = ['text', 'tel', 'email', 'select', 'radio', 'checkbox'];

  constructor({ mask, name, type, styles, placeholder = '', required, validationRules, value, label, classCSS, disabled }) {
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
    this.mask = mask;
  }

  get required() {
    return (this.req) ? 'required' : '';
  }

  get disabled() {
    return (this.dis) ? 'disabled' : '';
  }

  get phoneMask() {
    return (this.validationRules.type === 'tel') ? this.mask : '';
  }

  get inputType() {
    if (this.validationTypeArray.includes(this.validationRules.type)) {
      return `type="${this.validationRules.type}"`;
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
      <input
        id="${this.name}"
        ${this.inputType}
        style="${this.styles}"
        placeholder="${this.placeholder}"
        value="${this.value}"
        class="${this.classCSS}"
        ${this.required}
        ${this.disabled}
        ${this.phoneMask}
      />`;
  }
}