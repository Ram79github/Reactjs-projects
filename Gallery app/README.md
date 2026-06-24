# Gallery App

A React + Vite photo gallery that displays curated images from the Pexels API.

The app loads photo thumbnails, shows photographer names, and supports page-based navigation.

## Features

- Responsive gallery layout using Tailwind CSS
- Live photo loading from the Pexels curated endpoint
- Pagination controls for browsing pages of photos
- Loading and error states for API connectivity and missing keys
- Photo cards link back to the original Pexels photo page

## Project Structure

- `src/App.jsx` — main gallery view and pagination logic
- `src/components/Card.jsx` — photo card UI component
- `src/main.jsx` — React entry point
- `src/index.css` — app styling
- `vite.config.js` — Vite configuration
- `package.json` — dependencies and npm scripts

## Prerequisites

- Node.js 18 or newer
- npm
- Pexels API key

## Environment Variables

Create a `.env` file in the project root with the following value:

```env
VITE_PEXELS_API_KEY=your-pexels-api-key
```

> Do not commit `.env`, `.env.local`, `node_modules`, or any sensitive files to source control.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the provided local URL in your browser to view the gallery.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Notes

- If the app shows a missing API key message, confirm your `VITE_PEXELS_API_KEY` is defined in `.env`.
- If photos fail to load, verify network access and that the Pexels key is valid.

## License

This project is open for personal use and learning.
