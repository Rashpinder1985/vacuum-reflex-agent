self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vacuum-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'bot_icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
