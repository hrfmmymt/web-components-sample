export default class MyButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-block;
          background: #ffc11c;
          border: none;
          color: #000;
          padding: 2%;
          font-size: 1em;
          font-weight: bold;
          border-radius: 2px;
          cursor: pointer;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = MyButton.template;
  }
};