# Arthur Neumann Salerno · Portfolio

A static portfolio of web applications and game projects. Project descriptions,
media, and external links live in `src/app/projects.js`.

## Run locally

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To check or preview a production build:

```sh
npm run lint
npm run build
npm start
```

## GitHub Pages

`npm run build:pages` exports the site to `out/` with the `/portfolio` base path.
The GitHub Actions workflow publishes that export when changes reach `main`.
