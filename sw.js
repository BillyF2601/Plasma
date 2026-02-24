diff --git a/sw.js b/sw.js
index 51cc802c883d7319a9452596e6b2e1b6e1e1a0bc..4dd99228b8f7d726427301821c27071a3b582d1d 100644
--- a/sw.js
+++ b/sw.js
@@ -1,16 +1,23 @@
-self.addEventListener("install",e=>{
-e.waitUntil(
-caches.open("plasma").then(cache=>{
-return cache.addAll([
-"./",
-"./index.html"
-])
-})
-)
-})
+const CACHE_NAME = "plasma-os-desktop-v3";
+const CORE_ASSETS = [
+  "./",
+  "./index.html",
+  "./manifest.json",
+  "./sw.js"
+];
 
-self.addEventListener("fetch",e=>{
-e.respondWith(
-caches.match(e.request).then(r=>r||fetch(e.request))
-)
-})
\ No newline at end of file
+self.addEventListener("install", (event) => {
+  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
+  self.skipWaiting();
+});
+
+self.addEventListener("activate", (event) => {
+  event.waitUntil(
+    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
+  );
+  self.clients.claim();
+});
+
+self.addEventListener("fetch", (event) => {
+  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
+});
