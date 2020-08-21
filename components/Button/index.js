const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      background-color: #5395ae;
      border: none;
      padding: 20px;
      width: fit-content;
      border-radius: 8px;
    }

    div:hover {
      cursor: pointer;
    }

    span {
      font-family: sans-serif;
      font-size: 18px;
      color: #fff;
    }
  </style>

  <div class="my-button">
    <img alt="icon" class="left-icon" src="" />
    <span></span>
    <img alt="icon" class="right-icon" src="" />
  </div>
`;

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // utils
    const querySelector = (query) => this.shadowRoot.querySelector(query);

    querySelector('span').innerText = this.getAttribute('label');

    if (this.getAttribute('left-icon')) {
      querySelector('.left-icon').src = this.getAttribute('left-icon');
    } else {
      querySelector('.left-icon').remove();
    }

    if (this.getAttribute('right-icon')) {
      querySelector('.right-icon').src = this.getAttribute('right-icon');
    } else {
      querySelector('.right-icon').remove();
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.my-button').addEventListener('click', () => {
      this.handleClick();
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.my-button').removeEventListener();
  }

  handleClick() {
    console.log('clicked');
  }
}

window.customElements.define('my-button', MyButton);
