// // For every new version change appCacheName
// const appCacheName = "pwa_template_1.0";
// const cachedFiles = [
//    "./", // manifest.json > start_url
//     "index.html",
//     "index.css",
//     "script.js",
//     "app.js",
//     "icon512.png",
//     "icon192.png",
//     "favicon.ico"
// ]

// // On install, cache the cachedFiles for offline presentation
// self.addEventListener("install", installEvent => {
//     installEvent.waitUntil(
//         caches.open(appCacheName).then(cache => {
//         cache.addAll(cachedFiles)
//         })
//     )
// })

// // On activate, delete old cachedFiles
// self.addEventListener("activate", activateEvent => {
//     activateEvent.waitUntil(
//         caches.keys().then(keys => {
//             return Promise.all(keys
//             .filter(key => key !== cacheName)
//             .map(key => caches.delete(key))
//         );
//         })
//     );
// });

// // Intercept fetch requests and check the cache first, serving cachedFiles locally
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//         })
//     )
// })