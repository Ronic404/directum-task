export default function genText({ styles, mask, validate, value }) {
  return `
    <div style="${styles}">
      ${value}
    </div>
  `;
}