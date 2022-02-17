// You can change the number on the end of the site to refresh the cache
const CACHE_NAME = 'my-site-v4';

// add all your files in the CACHE_URLS
const CACHE_URLS = ['/', 
  'index.html',
  'about.html',
  'animals.html',
  'bookings.html',
  'kids.css',
  'kids.html',
  'prototype.html',
  'manifest.json',
  'styles.css',
  'images/animalOfTheWeek.png',
  'images/animalOfTheWeek.webp',
  'images/apple-touch-icon.png',
  'images/aquarium.jpg',
  'images/aquarium.webp',
  'images/aquarium_small.jpg',
  'images/aquarium_small.webp',
  'images/book.svg',
  'images/BribagSans-Regular.eot',
  'images/BribagSans-Regular.ttf',
  'images/BribagSans-Regular.woff',
  'images/BribagSans-Regular.woff2',
  'images/browserconfig.xml',
  'images/conservationImg.jpg',
  'images/conservationImg.webp',
  'images/conservationImg_small.jpg',
  'images/conservationImg_small.webp',
  'images/deer.jpg',
  'images/deer.webp',
  'images/deer_small.jpg',
  'images/deer_small.webp',
  'images/donate.svg',
  'images/drawing.jpg',
  'images/drawing.webp',
  'images/drawing_small.jpg',
  'images/drawing_small.webp',
  'images/eventOfTheWeek.png',
  'images/eventOfTheWeek.webp',
  'images/favicon.ico',
  'images/favicon-16x16.png',
  'images/favicon-32x32.png',
  'images/feed.jpg',
  'images/feed.webp',
  'images/feed_small.jpg',
  'images/feed_small.webp',
  'images/Gudea.eot',
  'images/Gudea.woff',
  'images/Gudea.woff2',
  'images/Gudea-Regular.ttf',
  'images/headerImg.jpg',
  'images/headerImg.webp',
  'images/headerImg_small.jpg',
  'images/headerImg_small.webp',
  'images/kidsOwl.svg',
  'images/learn.jpg',
  'images/learn.webp',
  'images/learn_small.jpg',
  'images/learn_small.webp',
  'images/lemurs.jpg',
  'images/lemurs.webp',
  'images/lemurs_small.jpg',
  'images/lemurs_small.webp',
  'images/mstile-70x70.png',
  'images/mstile-144x144.png',
  'images/mstile-150x150.png',
  'images/mstile-310x150.png',
  'images/mstile-310x310.png',
  'images/owl.jpg',
  'images/owl.webp',
  'images/owl_small.jpg',
  'images/owl_small.webp',
  'images/pet1.jpg',
  'images/pet1.webp',
  'images/pet1_small.jpg',
  'images/pet1_small.webp',
  'images/pet2.jpg',
  'images/pet2.webp',
  'images/pet2_small.jpg',
  'images/pet2_small.webp',
  'images/pet3.jpg',
  'images/pet3.webp',
  'images/pet3_small.jpg',
  'images/pet3_small.webp',
  'images/pet4.jpg',
  'images/pet4.webp',
  'images/pet4_small.jpg',
  'images/pet4_small.webp',
  'images/pet5.jpg',
  'images/pet5.webp',
  'images/pet5_small.jpg',
  'images/pet5_small.webp',
  'images/pet6.jpg',
  'images/pet6.webp',
  'images/pet6_small.jpg',
  'images/pet6_small.webp',
  'images/pet7.jpg',
  'images/pet7.webp',
  'images/pet7_small.jpg',
  'images/pet7_small.webp',
  'images/pet8.jpg',
  'images/pet8.webp',
  'images/pet8_small.jpg',
  'images/pet8_small.webp',
  'images/pet9.jpg',
  'images/pet9.webp',
  'images/pet9_small.jpg',
  'images/pet9_small.webp',
  'images/safari-pinned-tab.svg',
  'images/squirrelLogo.svg',
  'images/step1.png',
  'images/step1.webp',
  'images/step1_small.png',
  'images/step1_small.webp',
  'images/step2.png',
  'images/step2.webp',
  'images/step2_small.png',
  'images/step2_small.webp',
  'images/step3.png',
  'images/step3.webp',
  'images/step3_small.png',
  'images/step3_small.webp',
  'images/step4.png',
  'images/step4.webp',
  'images/step4_small.png',
  'images/step4_small.webp',
  'images/tigers.jpg',
  'images/tigers.webp',
  'images/tigers_small.jpg',
  'images/tigers_small.webp',
  'images/tree.jpg',
  'images/tree.webp',
  'images/tree_small.jpg',
  'images/tree_small.webp',
  'images/underConstruction.png',
  'images/underConstruction.webp',
  'images/underConstruction_small.png',
  'images/underConstruction_small.webp',
  'images/volunteers.jpg',
  'images/volunteers.webp',
  'images/volunteers_small.jpg',
  'images/volunteers_small.webp',
  'images/zebra.jpg',
  'images/zebra.webp',
  'images/zebra_small.jpg',
  'images/zebra_small.webp',
  'images/android-chrome-192x192.png',
  'images/android-chrome-512x512.png',
  // add all your files in here, in the correct folders. No need to add this file
];
//DO NOT change any of the code below

self.addEventListener("install", function (event) {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log("Cache opened");
        return cache.addAll(CACHE_URLS);
      })
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName.startsWith('my-site-') && CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log(`Return ${event.request.url} from cache`);
        return response;
      }
      console.log(`Fetch ${event.request.url} from network`);
      return fetch(event.request);
    })
  );
});
