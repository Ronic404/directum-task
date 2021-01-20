import genFiller from './genTypes/genFiller.js';
import GenText from './genTypes/GenText.js';
import GenTextarea from './genTypes/GenTextarea.js';
import GenCheckbox from './genTypes/GenCheckbox.js';
import GenButton from './genTypes/GenButton.js';
import GenSelect from './genTypes/GenSelect.js';
import GenRadio from './genTypes/GenRadio.js';

export default function genItem(data) {
  switch (data.type) {
    case 'filler': 
      return genFiller(data);
    case 'text':
      return new GenText(data).render();
    case 'textarea':
      return new GenTextarea(data).render();
    case 'checkbox':
      return new GenCheckbox(data).render();
    case 'button':
      return new GenButton(data).render();
    case 'select':
      return new GenSelect(data).render();
    case 'radio':
      return new GenRadio(data).render();
    default:
      return 'Something went wrong :('
  }
}