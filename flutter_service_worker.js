'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a9c33fde0cc1306987f0d5ac1181f5dd",
"index.html": "ca25053c97314f18f9d66decd91e062a",
"/": "ca25053c97314f18f9d66decd91e062a",
"main.dart.js": "c6eb0d3d1eb9870c77f8275d6d5a6b83",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c153a74575fdb1e5d124fd846c840a1",
".git/config": "8aa311b28c5432c17cc086e30bcdc2d1",
".git/objects/68/6fc36ed4636f7f557e34cd0f92feb76c4bf8ec": "80f25e907091f7914ce55d5043df720e",
".git/objects/32/2f32bf9833ebf92413857d06d9dac8e9dbcf1a": "7328ffb6cfcf576335be23b1e788c8ff",
".git/objects/56/fac487bd949e6df401aa6d5164a0fbdbd9f5e7": "9daafbd86c8e116a267a498b72effd54",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/34/72a5d526447a0a4085037954a0384ca16b4394": "22497abe59eb3ef629dd30a4479a6baf",
".git/objects/34/2b43502d706eae84a698110ef2065c42548508": "e1cdfaec3fa4843536fbcea06beba1ab",
".git/objects/5f/cd660bc35aee6c117dea38dd816e905a67e06d": "dd2fe736fb287a67479bbec7b368a7cc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/08459b8afde5f7980720efd6bbb97f7ae24541": "90b4d1273936e6d6fb4d005524717144",
".git/objects/f4/ce488bd5a158608ce44cc56626c730b3fcb839": "d3beabfb57935aea9054af95a8b59edc",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/cf/e506a690fa6428aece3cac8f60f48ea7273f75": "6d2565f1daf514745036e08520922679",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/0c5da2aefc9f5aed37834326541e39e39402f9": "6f04d1d3fa6ef4ccfe3ad11cfe2b5aa1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/93e217edf05b08d955dc79aa170835b2c6b18d": "cef5da73606a0c231b1d42e378a6cf2d",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/e02876b24fbc139dec751c229ac422cb43621b": "9e179c5144cfb91b1cf6464844985927",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/18d815d6194a44d893e9289fdffd96ef0ca745": "c332954494b004339296f1c34e3caf38",
".git/objects/5c/0ee3a5078903c1b7e613fff41f19139e660395": "7d868d506b881677fb22a64760dd8978",
".git/objects/63/896bf2ff3e6865be52303959c919d4fe952e15": "2a6be1d8a31c2973fc82ab6bd4755534",
".git/objects/dd/85d8380a8f4d6ed779dbfd46acd44163e126e6": "a595c48e5b24ee28e18e182d01e4d84e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/6f6f03ae87b952c0d4717423385e8e68e2893e": "5beb481d5b33253aa091c39c5be7921b",
".git/objects/a6/8bb15fa2977fa69def3ebdb7be4f5471fa73ea": "43f1f9c37e366c9ba8e2a97ca7082e5a",
".git/objects/a1/d90c7b4f372ca3e10df07d6eb8265b0c980c1e": "ac4680e922dd0d4e54b108ec5957306e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/88bc6c9741956824757f4dda08967ea3a4a0cb": "6b0f51f3d9d1134cd19aa026fbd5c53c",
".git/objects/ff/a98a201b8408fcf61fb556039a819f63d59976": "752dd858d71b808c1b107dba5b3867db",
".git/objects/ff/43296e7256f025245c0e7f534c7432b2bb0f34": "5f72cb5b467d237dbf69995dfd6eb013",
".git/objects/c2/c909ff182abb3c01626ec1fd829fd607517821": "39dde39f25fd27d602e1b714c57f5020",
".git/objects/e9/a5b82c7206892386c1fce99b0171a6076f9f39": "5c865df61172fdb96c91cfd88599f56c",
".git/objects/e7/79890bbf305b1f64b74dadb6fe69b31afc95a0": "45abfab2caf4fa5cb5fe34d1132a371b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8d/1cd323dfc327269623eec7dc598fc4a45cb73c": "35c1756a05b0439427afb1c11f7c67e3",
".git/objects/15/428c213c797ea261d14207f80cd41a205a0fb2": "434ae18a50d15deec092800370d8ca7b",
".git/objects/1d/430bbc8e23159b619f2be03b77ac786f1de9c5": "0e9fb32bdddb4b1cfb1af3d435568684",
".git/objects/2b/7b2c7decf2efaa3b7e9b105da43833cfa91447": "5f2bb922edb78c82e261ebaa14dea17e",
".git/objects/13/815fc8e967bb60bbae3404f198c4dd7f8f4750": "1fdcc584d3041bc7d949cada46da8326",
".git/objects/14/957638a2e3062aeec92b0c3c9c8b7a0caddc60": "a5e007644cb0158d5e587c1ff0f146bd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "513ed43950e730bb705511c06eb23a8b",
".git/logs/refs/heads/main": "348e65bba9e8d9a5d9f8a2b536dee23c",
".git/logs/refs/remotes/origin/main": "f36d3acee40e5270169300722987af2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "aed649c0a3da350707256949507de7c3",
".git/refs/remotes/origin/main": "aed649c0a3da350707256949507de7c3",
".git/index": "e2a0a46ed7a96bd1a21e47eb36c76245",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
"assets/AssetManifest.json": "ea954e53daf93fa91d20f9038524fd99",
"assets/NOTICES": "59d2bc4e218d0d62375301dd0da8f282",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/imgs/50819258.png": "83528692add42ff09966cc2a8885b4da",
"assets/assets/imgs/carousel/4.png": "e9e3e2cd002f788ad9cd836d11767097",
"assets/assets/imgs/carousel/5.png": "e04d766a542c76bf3122924985c31f0e",
"assets/assets/imgs/carousel/2.png": "decff61fe17fee76246ee7e1b79f4149",
"assets/assets/imgs/carousel/3.png": "33f078640591058ea218539fd9bbc5d3",
"assets/assets/imgs/carousel/1.png": "c8dd228cd8d7e953c97414b86c8fd4f9",
"assets/assets/imgs/test.png": "b5b5aa4c7280af3b73fa132595028b13",
"assets/assets/imgs/couple.png": "3f914f68afb1e2eda2682d509684e1a4",
".idea/$CACHE_FILE$": "c9cfb86a6b1830e3b1870b3009ad9cc6",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "65ada035db23b3ed6c7b40f1ef280853",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "c7883d9a8f032450405d34f520e7936b",
".idea/misc.xml": "64e48ed5fe1c0771136b54971310826a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
