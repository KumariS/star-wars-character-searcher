import { fixture, html, oneEvent } from '@open-wc/testing-helpers';
import { expect } from '@esm-bundle/chai';
import '../character-list.js';

describe('CharacterList', () => {
  const sampleCharacters = [
    { name: 'Luke Skywalker', birth_year: '19BBY' },
    { name: 'Darth Vader', birth_year: '41.9BBY' },
  ];

  it('renders the correct number of list items', async () => {
    const el = await fixture(html`<character-list .characters=${sampleCharacters}></character-list>`);
    const lis = el.shadowRoot.querySelectorAll('li');
    expect(lis.length).to.equal(sampleCharacters.length);
    expect(lis[0].textContent).to.contain('Luke Skywalker (19BBY)');
    expect(lis[1].textContent).to.contain('Darth Vader (41.9BBY)');
  });

  it('dispatches select event when a character is clicked', async () => {
    const el = await fixture(html`<character-list .characters=${sampleCharacters}></character-list>`);
    setTimeout(() => el.shadowRoot.querySelectorAll('li')[1].click());
    const event = await oneEvent(el, 'select');
    expect(event).to.exist;
    expect(event.detail).to.deep.equal(sampleCharacters[1]);
  });

  it('renders empty list when characters array is empty', async () => {
    const el = await fixture(html`<character-list .characters=${[]}></character-list>`);
    const lis = el.shadowRoot.querySelectorAll('li');
    expect(lis.length).to.equal(0);
  });
});
