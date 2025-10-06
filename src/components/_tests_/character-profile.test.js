import { fixture, html } from '@open-wc/testing-helpers';
import { expect } from '@esm-bundle/chai';
import '../character-profile.js';

describe('CharacterProfile', () => {
    const sampleCharacter = {
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        gender: 'male',
    };

    it('renders character details correctly', async () => {
        const el = await fixture(html`<character-profile .character=${sampleCharacter}></character-profile>`);

        const profileDiv = el.shadowRoot.querySelector('.profile');
        expect(profileDiv).to.exist;
        expect(profileDiv.textContent).to.contain('Luke Skywalker');
        expect(profileDiv.textContent).to.contain('19BBY');
        expect(profileDiv.textContent).to.contain('male');
    });
});
