'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1479cc662ebdcc054e600436a19b4e64",
"assets/AssetManifest.bin.json": "0143b3182d483a29828c27f115de8629",
"assets/AssetManifest.json": "cadc43692db31ceee31bc63ebe8b7bfb",
"assets/assets/dart_3d.png": "1ac3bf2abe3b7446032aa7a455320c0c",
"assets/assets/flutter_3d.png": "31d8b8eb0182e04878d8762f1921bc5f",
"assets/assets/projects/aleef/Home.png": "8c869e8a76407ab49ddc976f90b5a45d",
"assets/assets/projects/aleef/Onboarding%2520Slide%25205.png": "a96d2cae4bdb70427f1af91b0e789f84",
"assets/assets/projects/aleef/Store%2520Page.png": "6b205770adfd9399a185952b7482d391",
"assets/assets/projects/bawaba/Account%2520(1).png": "d8b8d47a749d13067af504b1198e808d",
"assets/assets/projects/bawaba/Account.png": "ddb1dd241837a697c4d373cf0a850bbf",
"assets/assets/projects/bawaba/Student%2520Services-1.png": "c1a1063f07924e5b64627cb6986de7ed",
"assets/assets/projects/bawaba/Student%2520Services.png": "2defece32b563d394c48410f0b37e20e",
"assets/assets/projects/bawaba_kiosk/Configuration.png": "2dd141b2455c5c3708a22b57faf56f41",
"assets/assets/projects/bawaba_kiosk/Enter%2520Document%2520ID.png": "71fdd57243c68b74f8fc28a35287a38e",
"assets/assets/projects/bawaba_kiosk/Home.png": "189f6ed39dc5e285dac541bccd3a7ff2",
"assets/assets/projects/bawaba_kiosk/Print%2520Completed%2520Successfully.png": "cdeba7e09c8da78d401ff99a5cf1bed6",
"assets/assets/projects/bawaba_kiosk/Ready%2520to%2520Print%2520_.png": "d803fabfb46cad9054f9c79c0dd3ace2",
"assets/assets/projects/bawaba_kiosk/Under%2520Maintenance.png": "1b296a34f47d08f62a858e1988270ffb",
"assets/assets/projects/beft/Activity%2520(Day).png": "ed7ef7c3c360de8616dfcef717f79948",
"assets/assets/projects/beft/Body%2520Dimensions%2520(Filled).png": "81f70db900807e60ee6f20a122890143",
"assets/assets/projects/beft/Community.png": "4cfd593f833347a1aa56ba0f0dfc9c25",
"assets/assets/projects/beft/Filter.png": "40a563b38099cf14b41b3878b19170d6",
"assets/assets/projects/beft/Health%2520App%2520(Apple%2520Health).png": "daa22142b1a1b0844f58bbff7be65a12",
"assets/assets/projects/beft/Home.png": "c5a1eefe92135e056a01c351541300ef",
"assets/assets/projects/beft/Meals.png": "cae44603c53909430a583356a7ad57a3",
"assets/assets/projects/beft/Past.png": "c1517dc2e1cc3247f15a31a841e63c1f",
"assets/assets/projects/beft/Profile.png": "54b0e03e2225a5e66dfaa45b756fa61e",
"assets/assets/projects/beft/Scan%2520Meal.png": "042e5ca5c94395ae56a04c85e7a562a4",
"assets/assets/projects/beft/Smart%2520Workouts.png": "6804c5eddfadd22081daf33142e5db0e",
"assets/assets/projects/beft/View%2520Meal.png": "b98d2749d4cfc593045bf1fcb78517a3",
"assets/assets/projects/beft/Wallet.png": "b44cc970b1ebb1b822d231dd73c402ef",
"assets/assets/projects/beft/Wellness%2520Tracker.png": "309b0bdf205263b979e45c1c6f96b47f",
"assets/assets/projects/beft/Workout%2520(Skipped%2520Set).png": "b58c9c18e37f58fa0dd35ae0d183f3c6",
"assets/assets/projects/beft/Workout%2520(Without%2520Side).png": "43a8144d682fa4757e8d40aa2b481f55",
"assets/assets/projects/beft/Workout%2520Details.png": "6f02a5d9caf51947fed728b84431f203",
"assets/assets/projects/crikclips/Home.png": "1a696c526391b8425482cc07dcdeae22",
"assets/assets/projects/crikclips/Login.png": "88f42ed8307723d6b9edcd7b6c438146",
"assets/assets/projects/crikclips/Profile.png": "420ab7232a6016cdf7da4f70295810bd",
"assets/assets/projects/crikclips/upload%2520video-1.png": "aaf509d2ac39d77cea0f0087e8211bec",
"assets/assets/projects/crikclips/upload%2520video.png": "ce6c76fbeb6acea8356625163ed1f628",
"assets/assets/projects/crikclips/User%2520Name.png": "32f7e314e7a3e45ef5f9450153f16400",
"assets/assets/projects/crikclips/User%2520Profile%2520Skills.png": "345822ca4cd7fb79ce9674e4d9def9e3",
"assets/assets/projects/crikclips/Welcome%25203.png": "6aa5a6a3fa3ef46800f24be147c82930",
"assets/assets/projects/duepay/Background.png": "5706ffb1c99a1527cdf047803b7e8d71",
"assets/assets/projects/duepay/Home.png": "9f13138ae90bf70f81982348dde2c5d5",
"assets/assets/projects/duepay/Messages.png": "29ce5abc65e06190e5432c52728347ce",
"assets/assets/projects/duepay/Payment%25201.png": "1fc0493555a70708ca96d39cee443efa",
"assets/assets/projects/duepay/QR.png": "a858289c4bde55d9b957e15aaaf626d8",
"assets/assets/projects/duepay/Refer%2520and%2520earn.png": "607a9942dc3193acf5ea09ac6e101b50",
"assets/assets/projects/duepay/Splash.png": "89380f1fdf2f01394c0a8347675b8770",
"assets/assets/projects/duepay/Transfer%2520to%2520Mobile%2520Number.png": "6b00c54121f979fe687f70e924e0e71e",
"assets/assets/projects/Escrow/iPhone%252016%2520-%2520242.png": "5cd9aa42e10930a85ef99e57ac18c8fb",
"assets/assets/projects/Escrow/iPhone%252016%2520-%2520310.png": "01c4ff2ab0d939835e238a21e62e30c0",
"assets/assets/projects/Escrow/iPhone%252016%2520-%2520316.png": "468b6b4cc0ff69f1d6201e376403634b",
"assets/assets/projects/Escrow/Main_screen.png": "8d8337774f1887fe22b324b0336e020b",
"assets/assets/projects/Fursatuk/Manage%2520Task.png": "b9a9099ee33e3e52f195c0d618c12d12",
"assets/assets/projects/Fursatuk/manageask.png": "5d8e2f1387fd33a60ed22e986788fbf5",
"assets/assets/projects/Fursatuk/My%2520Account.png": "7477d7ff2812f95ea6a89ce63dd73b0b",
"assets/assets/projects/Fursatuk/Profile.png": "93efd5957960167c4ba48780dd078211",
"assets/assets/projects/Fursatuk/Splash.png": "8aa5d7869e8f395f8b7c8bd7ce004b70",
"assets/assets/projects/get_right/Frame%25202085663594.png": "a034cc53c270c1e09c8ec837270e02c1",
"assets/assets/projects/get_right/iPhone%252016%2520-%252017.png": "a66599d037b7afbebc599276fdb5ef14",
"assets/assets/projects/get_right/iPhone%252016%2520-%2520336.png": "69436ac479268759ec05f35829498e72",
"assets/assets/projects/mm/Filter.jpg": "efd0ca7d5b15c7cfaa07f252970fbfd7",
"assets/assets/projects/mm/Home.jpg": "c06198a8ee8c754774559cd0dd63bae8",
"assets/assets/projects/mm/property%2520details.jpg": "14cba16dc95d641ca148cfc2c2e94cdc",
"assets/assets/projects/mm/Splash%2520Screen.jpg": "23ae0d9b3dda8da5eeb46fe4c8cc8c00",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1fe7065f3c80f63d505da982f19ca6e9",
"assets/NOTICES": "2a031cdd59b7dbb1a6f6d60b4e199935",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a29aa00500da41a54d5df6430c37434e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaf954a63a27647c970e09a03380539b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0178430ab6c21534779798e5e8269969",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/avatar.png": "3a6c3563b10da46990f9786669118fa2",
"avatar.png": "3a6c3563b10da46990f9786669118fa2",
"avatar_bento.png": "0ef97e382f18ee62bd040f2f5e934c9b",
"avatar_cyber.png": "3a6c3563b10da46990f9786669118fa2",
"avatar_editorial.png": "b2967be6dac28e295d5a8c44ebe54c9a",
"avatar_spatial.png": "5f3b2535d9e286dc59d05620e02ed55a",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "902bea7e17648dfacab26a8eecd82bf5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "06b59cea867a77bd049f03bd36cc663a",
"icons/apple-touch-icon.png": "d57c1564db37d99f3dcb2604e3ecec83",
"icons/favicon.ico": "87e1468b28b73fbc3a0fcaff1341f430",
"icons/icon-192-maskable.png": "0c642299673397a4ec5d931f2070495a",
"icons/icon-192.png": "9aac1c14791be8adca5f6ba023c682cc",
"icons/icon-512-maskable.png": "20d2303f64eb967763108ef625763486",
"icons/icon-512.png": "a2a6d1d3e7161eaf4b642f4c90547f90",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "596412ba01666b3b1b11ca710c944285",
"/": "596412ba01666b3b1b11ca710c944285",
"Janak_Swami_CV.docx": "2b03112dcf41d1a3c98242e3190efa38",
"Janak_Swami_CV.pdf": "3f82848366590093a6b91c6f5ee10285",
"main.dart.js": "c4919ae9cddde080c59ae4bb27a232e0",
"manifest.json": "d6e2fc6fc46234b367980d54a3ad6b4d",
"version.json": "440de0e43a810469762fded3ad477d79"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
