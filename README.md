# Nestor (Pavlo) Churin Bio Website

Static bilingual bio website (Ukrainian + English) for Nestor (Pavlo) Churin.

## What is included

- One-page layout with sections: Hero, About, Projects, Skills, FAQ, Contacts.
- Automatic age calculation from `10.03.2005`.
- Automatic light/dark adaptation from device settings (`prefers-color-scheme`).
- Language switcher with local storage persistence.
- Dynamic Kyiv time widget (`Europe/Kyiv`).
- Responsive design for desktop and mobile.

## Project structure

```
.
├─ index.html
├─ css/
│  ├─ variables.css
│  └─ style.css
├─ js/
│  └─ main.js
└─ assets/
   ├─ icons/
   └─ images/
```

## Local run

Open `index.html` directly in a browser,
or run a local static server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Content updates

- Main content and layout: `index.html`.
- Language texts: `translations` object in `js/main.js`.
- Design tokens (colors, fonts): `css/variables.css`.
- Components and responsive styles: `css/style.css`.
