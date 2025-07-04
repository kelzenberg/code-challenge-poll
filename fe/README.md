# Frontend

## Developing

Once you've created a project and installed dependencies with `npm ci` run

```bash
npm run dev
```

or start the server and open the app in a new browser tab

```bash
npm run dev -- --open
```

## Code Challenge

### Found Issues

- package.json and package-lock.json are not in sync
  - `npm ci` will fail
  - Run `npm install` to update package-lock.json
- Footer style provided but no footer component exists
  - Create a footer component, move and use the provided style
- Welcome image and headline styles provided but not used
  - Create a welcome image and headline, use the provided styles
- Questions page returns errors
  - CORS error when trying to fetch data from the backend
  - 307 (Temporary Redirect) error
- Answers page can only be accessed with a valid question ID
  - Add a selector to choose a question on answers page
- SSR features not used
  - Use SvelteKit's `load` function to fetch data on the server side
- Test don't run out-of-the-box

### Missed accomplishments/potential improvements

- Not using Svelte v5 consistently
  - Some components use outdated Svelte syntax (e.g. in form elements with `on:*`)
- Use more SSR features
  - e.g. Use SvelteKit's `load` function to fetch data on the server side
- Increase TypeScript typing usage
- Little triangular shape in header for question visitors menu item is missing
- Remove unused/empty files
