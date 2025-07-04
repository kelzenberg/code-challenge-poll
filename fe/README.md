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
