self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Einfacher Pass-Through-Fetch-Handler – keine Offline-Caches,
// aber gültiger Service Worker für PWA-Installation.
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
