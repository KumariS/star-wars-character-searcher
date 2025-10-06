import { LitElement, html, css } from 'lit';

class CharacterList extends LitElement {
    static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 0.5rem;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
    }
    li:hover {
      background: #f0f0f0;
    }
  `;

    static properties = {
        characters: { type: Array },
    };

    constructor() {
        super();
        this.characters = [];
    }

    render() {
        return html`
      <ul>
        ${this.characters.map(
            (c) => html`
            <li @click=${() => this.selectCharacter(c)}>
              ${c.name} (${c.birth_year})
            </li>
          `
        )}
      </ul>
    `;
    }

    selectCharacter(character) {
        this.dispatchEvent(new CustomEvent('select', { detail: character }));
    }
}

customElements.define('character-list', CharacterList);
