import { html } from '../node_modules/lit-html/lit-html.js';
import css from './select-demo.styl';

const nav = c => html`
<nav>
  <button class="${c.selectedTab === 'A' ? 'active' : ''}" @click="${() => { c.selectedTab = 'A'; c.render(); }}">A</button>
  <button class="${c.selectedTab === 'B' ? 'active' : ''}" @click="${() => { c.selectedTab = 'B'; c.render(); }}">B</button>
</nav>
`;

const select = c => html`
<select @change="${ev => { c.model.selectedOption = ev.currentTarget.value; c.render(); }}">
  <option value="">Select</option>
  ${c.options.map(o => html`<option value="${o.value}" ?selected="${o.value === c.model.selectedOption}">${o.name}</option>`)}
</select>
`;

export default function template(c) {
  return html`
  <style>${css}</style>
  ${nav(c)}
  ${select(c)}
  `;
}
