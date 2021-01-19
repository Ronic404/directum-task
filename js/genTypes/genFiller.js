export default function genFiller({ styles, message }) {
  return `
    <div style="${styles}">
      ${message}
    </div>
  `;
}