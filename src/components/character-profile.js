import { LitElement, html, css } from 'lit';

class CharacterProfile extends LitElement {
    static styles = css`
    .profile {
      margin-top: 1rem;
      padding: 1rem;
      border: 1px solid #ddd;
      background: #fafafa;
    }
  `;

    static properties = {
        character: { type: Object },
    };

    constructor() {
        super();
        this.character = null;
    }

    render() {
        if (!this.character) return '';
        return html`
      <div class="profile">
         <p><strong>Name:</strong> ${this.character.name}</p>
        <p><strong>Birth Year:</strong> ${this.character.birth_year}</p>
        <p><strong>Gender:</strong> ${this.character.gender}</p>
      </div>
    `;
    }
}

customElements.define('character-profile', CharacterProfile);
