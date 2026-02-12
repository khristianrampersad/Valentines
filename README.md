# 💕 Valentine's Day Website for Beatriz

An interactive, mobile-first Valentine's Day website built with React and Tailwind CSS.

## Features

- **Interactive question flow** — Click through charming questions before the big ask
- **Dodging "No" button** — The No button moves away when you try to click it (works on mobile touch too!)
- **Valentine-themed success page** — Celebratory page when she says yes
- **Fully customizable** — Edit `src/config.js` to personalize messages and her name

## Customization

Edit **`src/config.js`** to make it your own:

```js
export const VALENTINE_CONFIG = {
  name: 'Beatriz',
  message: `Your personalized message here...`,
  subMessage: "Optional second line",
  customNote: "— Your name",
}
```

You can also edit the questions in `src/App.jsx` (the `QUESTIONS` array).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser (or use your phone on the same network).

## Deploy

```bash
npm run build
```

The `dist/` folder contains the production build. Deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Tech

- React 19
- Vite 7
- Tailwind CSS 4
