# ReactJS Projects Collection

This repository contains several React projects built with Vite, demonstrating UI skills and small application features.

## Projects

### 1. Gallery app
- A responsive photo gallery using the Pexels API.
- Features:
  - Curated photo feed with pagination.
  - Loading and error handling.
  - Responsive grid layout with photo cards.
  - External links to view photos on Pexels.
- Notes:
  - Requires a Pexels API key set as `VITE_PEXELS_API_KEY` in a `.env` file.

### 2. Mini-projects
- A static job listing UI built with React.
- Features:
  - Displays company job cards with logos, job title, salary, location, and details.
  - Includes buttons like `save` and `Apply Now` for a polished UI.

### 3. Note-app in react js
- A note-taking app with persistence and theme toggle.
- Features:
  - Add, edit, and delete notes.
  - Saves notes to `localStorage`.
  - Supports light/dark theme toggle using a custom `ThemeToggle` component.

### 4. React-Stop_watch
- A simple stopwatch application.
- Features:
  - Start, stop, and reset controls.
  - Timer display in `HH:MM:SS` format.

### 5. ReactToDo App
- A simple React to-do list.
- Features:
  - Add and delete tasks.
  - Includes a theme toggle component.

## Setup Instructions

Each project is self-contained in its own folder. Use the commands below inside the project folder you want to run.

### Common commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

### Run a specific project
1. Open a terminal.
2. Navigate to the project folder, for example:
   ```bash
   cd "Gallery app"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Notes
-These projects cover all bigneer to Intermediate level React Js concept such as {componects-reusebilty , props , Rendering , Api calling ,React Hooks - useState , useEffect , useRef etc , Form haldling , Events}
- These projects use Vite and React. A Node.js environment is required.
- If you open a folder in VS Code, make sure the correct project folder is active for the terminal.
- For the `Gallery app`, create a `.env` file with:
  ```env
  VITE_PEXELS_API_KEY=your_pexels_api_key_here
  ```

## Folder summary
- `Gallery app/` — Photo gallery with Pexels API integration.
- `miniprojects/` — Job card UI demo.
- `Noteapp in react js/` — Notes app with theme persistence.
- `React-Stop_watch/` — Stopwatch timer app.
- `ReactToDo App/` — Todo list app with theme toggle.
