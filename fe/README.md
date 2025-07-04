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


### Missed accomplishments
