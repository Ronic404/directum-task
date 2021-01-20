import genType from './genType.js';

export default function generate(data) {
  const form = document.querySelector('#form');
  const formTitle = document.querySelector('#form-title');
  const fields = document.querySelector('#fields');
  const premessage = document.querySelector('#premessage');

  formTitle.textContent = data.name;
  premessage.textContent = data.form.premessage;

  fields.innerHTML = data.form.items.map(item => (
    `<div>
      <h3>${item.name}</h3>
      ${genType(item)}
    </div>
    <hr>`
  )).join('')

  form.addEventListener('submit', function() {
    alert(data.postmessage);
    this.reset();
  })
}