diff --git a/README.md b/README.md
index 9821f6761b2b73f4982d034774b73136b762f065..c700f4aa53b9a3a4d809c74e145d34085af6a9b5 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,23 @@
-USE THIS ON IOS OR IPADOS PWA APP
+# Plasma OS Desktop
+
+Plasma OS is now a desktop-style browser OS experience designed to run on GitHub Pages.
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
