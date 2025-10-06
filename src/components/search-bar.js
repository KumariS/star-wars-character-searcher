import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
    static styles = css`
    input {
      padding: 0.5rem;
      width: 70%;
    }
    button {
      padding: 0.5rem;
      margin-left: 0.5rem;
      cursor: pointer;
    }
  `;

    render() {
        return html`
      <input
        id="searchInput"
        type="text"
        placeholder="Search characters..."
        @keyup=${this.onKeyUp}
      />
      <button @click=${this.onSearch}>Search</button>
    `;
    }

    onKeyUp(e) {
        if (e.key === 'Enter') {
            this.onSearch();
        }
    }

    onSearch() {
        const input = this.shadowRoot.getElementById('searchInput');
        const query = input.value.trim();

        if (query) {
            // Dispatch search event
            this.dispatchEvent(new CustomEvent('search', { detail: query }));

            // Clear input box
            input.value = '';
        }
    }
}

customElements.define('search-bar', SearchBar);
