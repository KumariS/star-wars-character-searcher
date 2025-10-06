import { LitElement, html, css } from 'lit';
import './components/search-bar.js';
import './components/character-list.js';
import './components/character-profile.js';

class AppRoot extends LitElement {
    static styles = css`
    .container {
      max-width: 600px;
      margin: 2rem auto;
      font-family: Arial, sans-serif;
    }
    .loading {
      text-align: center;
      margin-top: 1rem;
    }
    .error {
      color: red;
      text-align: center;
      margin-top: 1rem;
    }
    .no-results {
      text-align: center;
      margin-top: 1rem;
      font-style: italic;
    }
  `;

    static properties = {
        characters: { type: Array },
        selected: { type: Object },
        loading: { type: Boolean },
        error: { type: String },
        searched: { type: Boolean },
    };

    constructor() {
        super();
        this.characters = [];
        this.selected = null;
        this.loading = false;
        this.error = '';
        this.searched = false;
    }

    async handleSearch(query) {
        if (!query) return;
        this.loading = true;
        this.error = '';
        this.searched = true;
        this.characters = [];
        this.selected = null;

        try {
            const res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
            if (!res.ok) throw new Error(`API error: ${res.status}`);
            const data = await res.json();

            this.characters = data.results || [];
        } catch (err) {
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    }

    handleSelect(character) {
        this.selected = character;
    }

    render() {
        return html`
      <div class="container">
        <h1>Star Wars Character Searcher</h1>

        <!-- Search -->
        <search-bar @search=${(e) => this.handleSearch(e.detail)}></search-bar>

        <!-- Loading -->
        ${this.loading ? html`<div class="loading">Loading...</div>` : ''}

        <!-- Error -->
        ${this.error ? html`<div class="error">⚠ ${this.error}</div>` : ''}

        <!-- No results -->
        ${!this.loading && this.searched && !this.error && this.characters.length === 0
                ? html`<div class="no-results">No results found.</div>`
                : ''}

        <!-- Character List -->
        <character-list
          .characters=${this.characters}
          @select=${(e) => this.handleSelect(e.detail)}
        ></character-list>

        <!-- Profile -->
        ${this.selected
                ? html`<character-profile .character=${this.selected}></character-profile>`
                : ''}
      </div>
    `;
    }
}

customElements.define('app-root', AppRoot);
