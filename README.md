# Nestor (Pavlo) Churin Bio Website

Static bilingual bio website (Ukrainian + English) for Nestor (Pavlo) Churin.

## What is included

- One-page layout with sections: Hero, About, Projects, Skills, FAQ, Contacts.
- Automatic age calculation from `10.03.2005`.
- Automatic light/dark adaptation from device settings (`prefers-color-scheme`).
- Language switcher with local storage persistence.
- Dynamic Kyiv time widget (`Europe/Kyiv`).
- Responsive design for desktop and mobile.
- Rust runtime with Axum static-file server.

## Project structure

```
.
├─ Cargo.toml
├─ src/
│  └─ main.rs
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

Run with Rust:

```bash
cargo run
```

The server starts at `http://localhost:3000` by default.

Optional environment variables:

```bash
HOST=0.0.0.0
PORT=3000
```

## Content updates

- Main content and layout: `index.html`.
- Language texts: `translations` object in `js/main.js`.
- Design tokens (colors, fonts): `css/variables.css`.
- Components and responsive styles: `css/style.css`.
<<<<<<< HEAD
- Rust server entrypoint: `src/main.rs`.
