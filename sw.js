// Minimal service worker to allow install prompt
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// No fetch handling needed for this minimal example