const cacheName = "v2";

// const cacheAssets = [
//   "index.html",
//   "about.html",
//   "./css/style.css",
//   "./js/main.js",
// ];

self.addEventListener("install", (e) => {
  console.log("Service worker: Installed");

  //   e.waitUntil(
  //     caches
  //       .open(cacheName)
  //       .then((cache) => {
  //         console.log("Service Worker: Caching Files");
  //         cache.addAll(cacheAssets);
  //       })
  //       .then(() => self.skipWaiting())
  //   );
});

self.addEventListener("activate", (e) => {
  console.log("Service worker: Activated");
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  //   e.respondWith(
  //     fetch(e.request).catch(() => {
  //       caches.match(e.request);
  //     })
  //   );
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();

        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
