const CACHE_NAME = "groundex-stok-v1";
const PRECACHE_URLS = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Only cache the app shell itself. Firestore/Auth calls go straight to the
// network so stock data is always live — never served stale from cache.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (!req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
