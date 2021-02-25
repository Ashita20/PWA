var cacheName = 'petstore-v1';
var cacheFiles = [
    'pet-depot.html',
    'products.js',
    'petstore.webmanifest',
    'yarn.jpg',
    'cat-food.jpg',
    'icon-store-512.png',
    'litter.jpg'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});