export default function genFiller({ styles, attributes }) {
  return `
    <div style="${styles}">
      ${attributes.message}
    </div>
  `;
}