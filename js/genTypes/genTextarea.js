import GenText from './GenText.js';

export default class GenTextarea extends GenText {
  constructor({ name, styles, placeholder = '', required, validationRules, value = '', label = '', classCSS, disabled }) {
    super(validationRules);

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

  get tag() {
    return 'textarea';
  }

  render() {
    return super.render() + this.value + '</textarea>';
  }
}