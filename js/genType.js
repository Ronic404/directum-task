import genFiller from './genTypes/genFiller.js';
import GenText from './genTypes/GenText.js';
import GenTextarea from './genTypes/GenTextarea.js';
import genCheckbox from './genTypes/genCheckbox.js';
import genButton from './genTypes/genButton.js';
import genSelect from './genTypes/genSelect.js';
import genRadio from './genTypes/genRadio.js';

export default function genItem(data) {
  switch (data.type) {
    case 'filler': 
      return genFiller(data);
    case 'text':
      return new GenText(data).render();
    case 'textarea':
      return new GenTextarea(data).render();
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