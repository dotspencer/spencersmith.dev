# spencersmith.dev

Personal portfolio site built with Vite and React.

## Stack

- React 18
- Vite
- Sass modules
- styled-components

## Project structure

- `src/` - app source, homepage layout, project cards, and maze logo
- `public/` - static assets copied as-is
- `docs/` - production build output

## Development

Install dependencies:

```bash
yarn
```

Start the dev server:

```bash
yarn dev
```

Create a production build:

```bash
yarn build
```

Run linting:

```bash
yarn lint
```

## Notes

- The site build is written to `docs/`.
- `vite.config.js` is configured to output the production bundle there.
