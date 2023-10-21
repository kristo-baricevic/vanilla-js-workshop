export class NewPage extends HTMLElement {
    constructor() {
        super();

    }

    // When the component is attached to the DOM
    connectedCallback() {
        const template = document.getElementById("details-page-template");
        const content = template.content.cloneNode(true);
        this.appendChild(content);
    }
}
customElements.define("details-page", DetailsPage);