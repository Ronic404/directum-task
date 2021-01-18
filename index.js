import generate from './js/generateForm.js';

async function app() {
  const response = await fetch('./examples/1.json');
  const data = await response.json();
  
  generate(data);
}

app();