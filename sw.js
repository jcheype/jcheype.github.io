(global => {
  'use strict';

var urls = [
  '/companion.js',
  '/polyfills.bundle.js',
  '/vendor.bundle.js',
  '/main.bundle.js',
  '/sw-toolbox.js',
  '/sw.js',
];

  // Load the sw-toolbox library.
  importScripts('/sw-toolbox.js');
  
  // Ensure that our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));

  // The route for any requests from the googleapis origin
  toolbox.router.get('/(.*)', global.toolbox.networkFirst);
  toolbox.precache(urls);

})(self);