self.addEventListener('install', (e) => {
    e.waitUntil(caches.open('portfolio-cache').then((cache) => {
        return cache.addAll(['/', '/index.html', '/css/scroll_bar.css']);
    }));
});
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});