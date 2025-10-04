# Star Wars Character Searcher

A simple frontend project built with **Lit + Vanilla JavaScript + Vite** that allows users to search Star Wars characters using the [SWAPI](https://swapi.dev/) API.

---

## Features

- Search Star Wars characters by name.
- Display character list with **name** and **birth year**.
- Click on a character to see a **profile** (name, birth year, gender).
- Handles **loading state**, **no results**, and **API errors**.
- Clears the search input after performing a search.

---

## Tech Stack

- [Vite](https://vitejs.dev/) — Development build tool
- [Lit](https://lit.dev/) — Web components library
- Vanilla JavaScript
- CSS for styling

---

## Project Structure
star-wars-searcher/
├── src/
│   └── components/
│       ├── character-list.js
│       ├── search-bar.js
│       ├── character-profile.js
│       └── __tests__/
│           ├── character-list.spec.js
│           ├── search-bar.spec.js
│           └── character-profile.spec.js
├── jest.config.cjs
├── jest.setup.js
├── package.json
├── index.html
└── web-test-runner.config.mjs


## Setup Instructions

1. Clone the repository
git clone https://github.com/KumariS/star-wars-character-searcher.git
cd star-wars-searcher

2. Install dependencies
npm install

3. Run the development server
npm run dev
Open the browser at the URL printed in the terminal (usually http://localhost:5173/).

4. Build for production (optional)
npm run build

5. Run the tests
npx web-test-runner