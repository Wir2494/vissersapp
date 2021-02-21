// Service worker install
self.addEventListener('install', evt => {
    // console.log('service worker installed.');
});

// Activation Listen Service Worker
self.addEventListener('activate', evt => {
    // console.log('service worker activated.');
});

// Add fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
})