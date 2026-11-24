# SOXIT Website

This is a static multi-section website. Keep the section folders together because their pages use relative links to the shared homepage and assets.

## Project layout

- `index.html` is the main SOXIT homepage.
- `academia/` contains the education pages and role roadmaps.
- `consulting/` contains the consulting pages.
- `open-media/` contains the Open Media page and its assets.
- `styles.css`, `script.js`, `home.js`, and `site-shell.js` are shared site files.

## Preview

Open the root `index.html` in a browser, or serve this folder with a static web server such as the VS Code Live Server extension. No package installation or build step is required.

## Push to GitHub

Run these commands from this folder after installing Git and creating an empty GitHub repository:

```powershell
git init
git add .
git commit -m "Initial project"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## Shared header and footer

Every page loads `soxit-theme.css` and `site-shell.js`. Edit the links in `site-shell.js` once and the header and footer update on all pages. Page-level navbars and footers are removed automatically.
