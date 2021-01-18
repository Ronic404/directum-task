import genFiller from './genTypes/genFiller.js';
import genText from './genTypes/genText.js';
import genTextarea from './genTypes/genTextarea.js';
import genCheckbox from './genTypes/genCheckbox.js';
import genButton from './genTypes/genButton.js';
import genSelect from './genTypes/genSelect.js';
import genRadio from './genTypes/genRadio.js';

export default function genItem(data) {
  switch (data.type) {
    case 'filler': 
      return genFiller(data);
    case 'text':
      return genText(data);
    case 'textarea':
      return genTextarea(data);
    case 'checkbox':
      return genCheckbox(data);
    case 'button':
      return genButton(data);
    case 'select':
      return genSelect(data);
    case 'radio':
      return genRadio(data);
    default:
      return 'Something went wrong :('
  }
}