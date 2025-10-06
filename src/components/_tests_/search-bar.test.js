import { fixture, html, oneEvent } from '@open-wc/testing-helpers';
import { expect } from '@esm-bundle/chai';
import '../search-bar.js';

describe('SearchBar', () => {
    it('renders input and button', async () => {
        const el = await fixture(html`<search-bar></search-bar>`);

        const input = el.shadowRoot.getElementById('searchInput');
        const button = el.shadowRoot.querySelector('button');

        expect(input).to.exist;
        expect(input.placeholder).to.equal('Search characters...');
        expect(button).to.exist;
        expect(button.textContent).to.contain('Search');
    });

    it('dispatches "search" event with correct detail on button click', async () => {
        const el = await fixture(html`<search-bar></search-bar>`);
        const input = el.shadowRoot.getElementById('searchInput');
        input.value = 'Luke';

        setTimeout(() => el.shadowRoot.querySelector('button').click());
        const event = await oneEvent(el, 'search');

        expect(event).to.exist;
        expect(event.detail).to.equal('Luke');

        // input should be cleared after search
        expect(input.value).to.equal('');
    });

    it('dispatches "search" event when Enter key is pressed', async () => {
        const el = await fixture(html`<search-bar></search-bar>`);
        const input = el.shadowRoot.getElementById('searchInput');
        input.value = 'Leia';

        // simulate Enter key press
        const eventInit = new KeyboardEvent('keyup', { key: 'Enter' });
        setTimeout(() => input.dispatchEvent(eventInit));

        const event = await oneEvent(el, 'search');

        expect(event.detail).to.equal('Leia');
        expect(input.value).to.equal('');
    });

    it('does not dispatch search event for empty input', async () => {
        const el = await fixture(html`<search-bar></search-bar>`);
        const input = el.shadowRoot.getElementById('searchInput');

        let dispatched = false;
        el.addEventListener('search', () => (dispatched = true));

        // simulate Enter key press with empty input
        const eventInit = new KeyboardEvent('keyup', { key: 'Enter' });
        input.dispatchEvent(eventInit);

        expect(dispatched).to.be.false;
    });
});
