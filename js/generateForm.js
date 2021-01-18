import genType from './genType.js';

export default function generate(data) {
  console.log(data);
  
  const formTitle = document.querySelector('#form-title');
  const fields = document.querySelector('#fields');
  const premessage = document.querySelector('#premessage');
  const postmessage = document.querySelector('#postmessage');

  formTitle.textContent = data.name;
  premessage.textContent = data.form.premessage;
  postmessage. textContent = data.postmessage;

  fields.innerHTML = data.form.items.map(item => (
    `<div>
      <h3>${item.name}</h3>
      ${genType(item)}
    </div>
    <hr>`
  )).join('')
}