Plasma OS is now a desktop-style browser OS experience designed to run on GitHub Pages.
+
+## Features
+
+- Desktop with app icons and taskbar
+- Start menu and draggable app windows
+- Built-in apps: Launcher, Terminal, Notes, Files
+- Persistent notes/files using localStorage
+- PWA support with service worker caching
+
+## GitHub Pages deployment
+
+This project is configured to deploy directly from the repository root:
+
+1. Push repository to GitHub.
+2. Open **Settings → Pages**.
+3. Set source to **Deploy from a branch**.
+4. Choose your branch and root folder (`/`).
+5. Open the published URL.
+
+A `.nojekyll` file is included so static assets are served as-is.
