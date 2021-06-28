class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <a href="index.html" class="btn btn-secondary" id="introBtn">Home</a>
            <a href="personalProjects.html" class="btn btn-secondary" id="introBtn">Personal Projects</a>
            <a href="introduction.html" class="btn btn-secondary" id="introBtn">Resume</a>
            <a href="introduction.html" class="btn btn-secondary" id="introBtn">Blog</a>
            <a href="introduction.html" class="btn btn-secondary" id="introBtn">Contact</a>
            <hr />
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);