import { render } from '../node_modules/lit-html/lit-html.js';
import template from './select-demo.html.js';
import { aOptions, bOptions } from './options.js';
import { modelA, modelB } from './models.js';

class SelectDemo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.options = [];
    this.selectedTab = 'A';
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.render();
  }


  disconnectedCallback() {

  }

  optionSelected() {

  }

  render() {
    if (this.selectedTab === 'A') {
      this.options = aOptions;
      this.model = modelA;
    } else {
      this.options = bOptions;
      this.model = modelB;
    }
    console.log('this.model', this.model);
    render(template(this), this.shadowRoot);
  }

  static get observedAttributes() {
    return [ '' ];
  }
}
customElements.get('select-demo') || customElements.define('select-demo', SelectDemo);

export { SelectDemo };
